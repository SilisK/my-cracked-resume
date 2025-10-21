'use client';

import { useState } from 'react';
import { Upload, FileText } from 'lucide-react';

export default function UploadResume({file, setFile}) {
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
        <div className="max-w-xl mx-auto p-4 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                {/* <Upload className="w-6 h-6 text-sky-500" /> */}
                Upload Your Resume
            </h2>
            <p>
                Our AI resume parser will convert your resume into a CLM (Career Lifecycle Management).
            </p>

            <input
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
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
        </div>
    );
}
