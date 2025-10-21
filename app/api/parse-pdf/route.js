import { NextResponse } from 'next/server';
import { PdfReader } from 'pdfreader';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

export async function POST(req) {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    try {
        // Convert to buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Save buffer to a temporary file
        const tempDir = os.tmpdir(); // cross-platform temp directory
        const filePath = path.join(tempDir, `${Date.now()}-${file.name}`);
        await fs.writeFile(filePath, buffer);

        // Parse the PDF file using PdfReader
        const results = [];
        await new Promise((resolve, reject) => {
            new PdfReader().parseFileItems(filePath, (err, item) => {
                if (err) {
                    reject(err);
                } else if (!item) {
                    resolve(); // end of file
                } else if (item.text) {
                    results.push(item.text);
                }
            });
        });

        // Clean up: delete the temp file
        await fs.unlink(filePath);


        const fullText = results.join(' ').replace(/\s+/g, ' ').trim();
        console.clear();
        // console.log(fullText);
        return NextResponse.json({ text: fullText });
    } catch (error) {
        console.error('PDF parsing failed:', error);
        return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 });
    }
}
