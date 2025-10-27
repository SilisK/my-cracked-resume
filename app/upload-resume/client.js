"use client";

import { useEffect, useState } from "react";
import ResumeParser from "./components/resume-parser";
import { getPrompt } from "../lib/prompts";
import { getResumeText } from "../lib/upload-resume-helpers";
import { Profile } from "../models/generic/profile";
import ProfileCard from "../components/profile/profile-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Client() {
    const router = useRouter();

    const [saveFound, setSaveFound] = useState(null);
    const [file, setFile] = useState(null);
    const [resumeProfile, setResumeProfile] = useState({});
    const [loadingText, setLoadingText] = useState("");
    const [errorText, setErrorText] = useState("");
    const [processingTime, setProcessingTime] = useState({
        parsing: 0,
        waking: 0,
        rewriting: 0
    });

    const getSecondsText = (durationInMiliseconds) => (durationInMiliseconds / 1000).toFixed(2) + "s";

    const rewriteResume = async () => {
        if (!file) return;

        try {
            const formData = new FormData();
            formData.append("file", file);

            setLoadingText("Parsing resume...");

            const m_processingTime = {}

            const parsingStart = performance.now();
            const resumeText = await getResumeText(formData);
            const parsingEnd = performance.now();

            const parsingDuration = parsingEnd - parsingStart;
            m_processingTime.parsing = getSecondsText(parsingDuration);
            setProcessingTime({ ...processingTime, ...m_processingTime });
            await new Promise(resolve => setTimeout(resolve, 150)); // slight delay for visual elements

            setLoadingText("Waking up AI...");

            const wakingUpStart = performance.now();
            // Docs: https://developer.chrome.com/docs/ai/rewriter-api
            const rewriter = await Rewriter.create({
                sharedContext: "A resume sent in by a user.",
                length: "shorter",
                format: "plain-text"
            });
            const wakingUpEnd = performance.now();

            const wakingUpDuration = wakingUpEnd - wakingUpStart;
            m_processingTime.waking = getSecondsText(wakingUpDuration);
            setProcessingTime({ ...processingTime, ...m_processingTime });

            const m_context = getPrompt("Rewriter_Initial_Resume");

            const stream = rewriter.rewriteStreaming(resumeText, {
                context: m_context
            });

            setLoadingText("Reading your resume...");

            let result = "";
            const rewritingStart = performance.now();
            for await (const chunk of stream) {
                result += chunk;
            }
            const rewritingEnd = performance.now();

            const rewritingDuration = rewritingEnd - rewritingStart;
            m_processingTime.rewriting = getSecondsText(rewritingDuration);
            setProcessingTime({ ...processingTime, ...m_processingTime });

            let cleanedResult = null;
            // the ai sometimes returns readme style json so we have to extract a valid substring for parsing
            if (result.startsWith('```json') && result.endsWith('```')) {
                cleanedResult = result.substring(7, result.length - 3);
            }

            const parsedResult = JSON.parse(cleanedResult || result);

            // finally, we pass the data into a Profile object to ensure all fields are present
            const m_profile = new Profile(parsedResult);

            // save the profile data
            localStorage.setItem("profile", JSON.stringify({ ...m_profile, ...processingTime }));

            // wait a couple of seconds for visuals
            await new Promise(resolve => setTimeout(resolve, 2000));

            setResumeProfile(m_profile);
            setLoadingText("");
        }
        catch (error) {
            // tell the user in ui that the request failed

            console.log("Something went wrong:", error);

            setLoadingText("");
        }
    }

    useEffect(() => {
        rewriteResume();
    }, [file]);

    useEffect(() => {
        const profileFromStorage = localStorage.getItem("profile");
        const saveWasFound = Boolean(profileFromStorage);

        setSaveFound(saveWasFound);

        if (saveWasFound) {
            setTimeout(() => {
                router.push("/dashboard");
            }, 500);
        }
    }, []);

    if (saveFound) {
        return (
            <div className="min-h-screen grid place-items-center p-4 pt-24 pb-16">
                <Loader2 className="text-zinc-300 animate-spin" />
            </div>
        );
    }

    return (
        <div className="fade-in min-h-screen p-4 pt-24 pb-16">
            {Object.keys(resumeProfile)?.length > 0 ? (
                <div>
                    <ProfileCard
                        profile={resumeProfile}
                    />
                    <div className="fade-in max-w-xl mx-auto p-4 border-t border-zinc-100 mt-8">
                        <p className="text-sm text-center text-zinc-700">
                            You'll be able to make changes to your profile later on. <FontAwesomeIcon icon={faThumbsUp} className="text-sky-400" />
                        </p>
                        <Link
                            href={"/dashboard"}
                            className="mx-auto max-w-[250px] h-max cursor-pointer mt-4 flex items-center justify-center gap-2 bg-sky-500 active:scale-100 hover:scale-105 hover:bg-sky-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition duration-300">
                            <span>Continue</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <ResumeParser
                        file={file}
                        setFile={setFile}
                        loadingText={loadingText}
                    />
                    <div className="max-w-xl mx-auto p-4 space-y-4">
                        {Boolean(processingTime.parsing) && (
                            <div className="slide-in-from-left">
                                <b>Parsing: </b>
                                <span className="text-zinc-500">{processingTime.parsing}</span>
                                <FontAwesomeIcon icon={faCheckCircle} className="ml-1 text-green-500" />
                            </div>
                        )}
                        {Boolean(processingTime.waking) && (
                            <div className="slide-in-from-left">
                                <b>Waking up AI: </b>
                                <span className="text-zinc-500">{processingTime.waking}</span>
                                <FontAwesomeIcon icon={faCheckCircle} className="ml-1 text-green-500" />
                            </div>
                        )}
                        {Boolean(processingTime.rewriting) && (
                            <div className="slide-in-from-left">
                                <b>Reading Resume: </b>
                                <span className="text-zinc-500">{processingTime.rewriting}</span>
                                <FontAwesomeIcon icon={faCheckCircle} className="ml-1 text-green-500" />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}