"use client";

import { useEffect, useState } from "react";
import UploadResume from "../components/upload-resume/upload-resume";
import { Profile } from "../models/generic/profile";

export default function Client() {
    const [file, setFile] = useState(null);
    const [resumeProfile, setResumeProfile] = useState({});

    const parsePdf = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch('/api/parse-pdf', {
            method: 'POST',
            body: formData,
        });

        const resumeText = await res.json();

        console.log(resumeText);

        const profileModel = new Profile();
        const profileModelAsText = JSON.stringify(profileModel);
        console.log(profileModel, profileModelAsText);

        const rewriter = await Rewriter.create({
            sharedContext: "A resume sent in by a user.",
            // tone: "as-is",       // required
            length: "shorter",     // required
            format: "plain-text" // required
        });

        const m_context = `
                You are a parser that extracts structured data from a resume. Your task is to convert the resume text into a JSON object that strictly follows this model:

                ${profileModelAsText}

                Only include the fields that are present and identifiable in the resume. If any information is missing, omit those fields — do not add placeholders or make up data. Use correct data types (e.g., strings, arrays, nested objects). The JSON should be syntactically valid and ready for parsing.

                Output only the JSON. Do not include any extra explanation, commentary, or formatting.
                `;

        console.log(m_context);

        const stream = rewriter.rewriteStreaming(resumeText.text, {
            context: m_context
        });

        let result = "";
        for await (const chunk of stream) {
            result += chunk;
        }
        try {
            const stringifiedJSON = result.substring(7, result.length - 3);
            const parsedResult = JSON.parse(stringifiedJSON);
            console.log(stringifiedJSON, parsedResult);
        }
        catch (error) {
            console.log(error);
        }

        console.log("Rewritten Resume JSON:", result);
    }

    useEffect(() => {
        parsePdf();
    }, [file]);

    return (
        <div className="min-h-screen">
            <UploadResume
                file={file}
                setFile={setFile}
            />
        </div>
    );
}