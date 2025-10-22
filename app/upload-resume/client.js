"use client";

import { useEffect, useState } from "react";
import ResumeParser from "./components/resume-parser";
import { getPrompt } from "../lib/prompts";
import { getResumeText } from "../lib/upload-resume-helpers";
import { Profile } from "../models/generic/profile";
import ProfileCard from "../components/profile/profile-card";

export default function Client() {
    const [file, setFile] = useState(null);
    const [resumeProfile, setResumeProfile] = useState({});
    const [loadingText, setLoadingText] = useState("");
    const [errorText, setErrorText] = useState("");

    const rewriteResume = async () => {
        if (!file) return;

        try {
            const formData = new FormData();
            formData.append("file", file);

            setLoadingText("Parsing resume...");

            const resumeText = await getResumeText(formData);

            setLoadingText("Waking up AI...");

            // Docs: https://developer.chrome.com/docs/ai/rewriter-api
            const rewriter = await Rewriter.create({
                sharedContext: "A resume sent in by a user.",
                length: "shorter",
                format: "plain-text"
            });

            const m_context = getPrompt("Rewriter_Initial_Resume");

            const stream = rewriter.rewriteStreaming(resumeText, {
                context: m_context
            });

            setLoadingText("Reading your resume...");

            let result = "";
            for await (const chunk of stream) {
                result += chunk;
            }

            console.clear();
            console.log(result);

            let cleanedResult = null;
            // the ai sometimes returns readme style json so we have to extract a valid substring for parsing
            if (result.startsWith('```json') && result.endsWith('```')) {
                cleanedResult = result.substring(7, result.length - 3);
            }

            const parsedResult = JSON.parse(cleanedResult || result);

            // finally, we pass the data into a Profile object to ensure all fields are present
            const m_profile = new Profile(parsedResult);
            setResumeProfile(m_profile);

            console.log(m_profile);

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

    return (
        <div className="grid place-items-center min-h-96 py-16">
            {Object.keys(resumeProfile)?.length > 0 ? (
                <ProfileCard
                    profile={resumeProfile}
                />
            ) : (
                <ResumeParser
                    file={file}
                    setFile={setFile}
                    loadingText={loadingText}
                />
            )}
        </div>
    );
}