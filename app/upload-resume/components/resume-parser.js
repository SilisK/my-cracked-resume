'use client';

import { useState } from 'react';
import { FileText, Loader, Loader2 } from 'lucide-react';

export default function ResumeParser({
    file,
    setFile,
    loadingText
}) {
    const [fileUrl, setFileUrl] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files?.[0];

        if (!uploadedFile) return;

        const allowedTypes = [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/plain'];
        if (!allowedTypes.includes(uploadedFile.type)) {
            setError('Only PDF, DOCX, or TXT files are allowed.');
            setFile(null);
            setFileUrl(null);
            return;
        }

        setFile(uploadedFile);
        setFileUrl(URL.createObjectURL(uploadedFile));
        setError(null);
    };

    return (
        <div className="bg-white sm:border border-zinc-100 sm:shadow-lg sm:p-8 sm:pb-16 rounded-lg max-w-xl mx-auto grid gap-2">
            <h2 className="text-[20px] leading-snug font-medium tracking-tight text-foreground lg:text-[28px]">
                Upload Your Resume
            </h2>
            <p className='mb-8 text-base leading-snug tracking-tight text-gray-500 lg:text-xl'>
                Our AI resume parser is going to examine your qualifications.
            </p>
            <input
                type="file"
                accept=".pdf,.docx,.txt"
                disabled={loadingText ? true : false}
                onChange={(e) => {
                    if (loadingText) return;
                    handleFileChange(e);
                }}
                className={`${loadingText ? "animate-pulse cursor-not-allowed" : "cursor-pointer"} block w-full text-sm text-gray-700 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100`}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {file && fileUrl && (
                <div className="p-4 border border-gray-100 rounded-md bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <span className="text-sm">{file.name}</span>
                    </div>
                    <a
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sky-600 underline"
                    >
                        View
                    </a>
                </div>
            )}

            {loadingText && (
                <div className="flex items-center gap-1">
                    <Loader className="animate-spin" />
                    <p className='text-sm leading-snug tracking-tight text-gray-500 lg:text-base'>
                        {loadingText}
                    </p>
                </div>
            )}
        </div>
    );
}
