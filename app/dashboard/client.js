"use client";

import { Loader2, MessageCircleDashed, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Profile } from "../models/generic/profile";

export default function Client() {
    const router = useRouter();

    const [prompt, setPrompt] = useState();
    const [promptSetting, setPromptSetting] = useState("Career");
    const [firstName, setFirstName] = useState("");
    const [resumeProfile, setResumeProfile] = useState(null);

    useEffect(() => {
        const profile = localStorage.getItem("profile");
        if (profile) {
            const constructedProfile = new Profile(JSON.parse(profile));

            const nameParts = constructedProfile.name.split(" ");
            setFirstName(nameParts[0].trim() || "there");

            setTimeout(() => {
                setResumeProfile(constructedProfile);
            }, 150);
        }
        else {
            router.push("/upload-resume");
        }
    }, []);

    useEffect(() => {
        sendMessage();
    }, []);

    const sendMessage = async () => {
        if ('LanguageModel' in self) {
            const session = await LanguageModel.create({
                monitor(m) {
                    m.addEventListener('downloadprogress', (e) => {
                        console.log(`Downloaded ${e.loaded * 100}%`);
                    });
                },
            });
        }
    }

    if (!resumeProfile) {
        return (
            <div className="min-h-screen grid place-items-center p-4 pt-24 pb-16">
                <Loader2 className="text-zinc-300 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="">
                <div className="p-4 mx-auto max-w-xl space-y-4">
                    <div className="text-center">
                        <h1
                            style={{ fontFamily: "monospace" }}
                            className="text-2xl font-semibold inline-flex min-h-10.5 items-baseline whitespace-pre-wrap">
                            Hi {firstName}, let's chat.
                        </h1>
                    </div>
                    <div className="flex flex-col gap-4 border border-zinc-100 shadow-lg bg-white rounded-3xl mb-8">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Ask AI ✧"
                            className="text-zinc-700 w-full h-32 px-6 py-4 focus:outline-none focus:ring-none resize-none"
                        />
                        <div className="p-4 flex items-center justify-between">
                            <div className="font-light tracking-wide text-sm inline-flex items-center gap-1 border border-zinc-200 p-2 rounded-full w-max">
                                <MessageCircleDashed size={16} className="text-zinc-500" />
                                <select onChange={(e) => {
                                    setPromptSetting(e.target.value);
                                }}>
                                    <option value={"Career"} label="Career Advice" />
                                    <option value={"Resume"} label="Resume Help" />
                                    <option value={"Job"} label="Apply for a job" />
                                </select>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                    }}
                                    disabled={!Boolean(prompt)}
                                    className={`${Boolean(prompt) ? "cursor-pointer" : "opacity-0"}  p-3 border border-zinc-200 bg-zinc-50 rounded-full transition hover:scale-110 active:scale-100`}>
                                    <Send size={15} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr
                        style={{
                            background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(208, 208, 208, 0.3) 50%, rgba(255, 255, 255, 0) 100%)",
                            opacity: 1,
                            transform: "none",
                            border: "none",
                            height: "1px",
                        }}
                    />
                    <p className="text-xs text-zinc-500 text-center">
                        <span className="text-zinc-700">My Cracked Resume</span> can make mistakes. Be sure to read for accuracy.
                    </p>


                    {/* <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">System Settings</h3>
                        <p className="text-zinc-500 mb-4">
                            This is the information your <span className="text-zinc-600">AI Career Guide</span> gathered from your resume. You can make some changes in{" "}
                            <Link
                                className="text-sky-500 hover:underline"
                                href={"/settings/account"}>
                                Account Settings
                            </Link>.</p>
                        <div className="">
                            <div className="grid gap-4 text-sm">
                                <div className="flex flex-col gap-1">
                                    <b className="text-zinc-700">Industry</b>
                                    <input
                                        type="text"
                                        readOnly
                                        className="cursor-not-allowed opacity-50 border border-zinc-200 rounded-md bg-transparent px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-0"
                                        value={resumeProfile.industry}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <b className="text-zinc-700">Summary</b>
                                    <textarea
                                        type="text"
                                        readOnly
                                        className="resize-none h-32 cursor-not-allowed opacity-50 border border-zinc-200 rounded-md bg-transparent px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-0"
                                        value={resumeProfile.summary}
                                    >
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}