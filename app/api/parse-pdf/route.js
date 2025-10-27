import { NextResponse } from 'next/server';
import { PdfReader } from 'pdfreader';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

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

        console.log(file.type);

        const resultsFromFile = [];
        if (file.type === "application/pdf") {
            // Parse the PDF file using PdfReader
            let tempStr = "";
            await new Promise((resolve, reject) => {
                new PdfReader().parseFileItems(filePath, (err, item) => {
                    if (err) {
                        reject(err);
                    } else if (!item) {
                        resolve(); // end of file
                    } else if (item.text?.trim()) {
                        tempStr += item.text;
                    }
                    else {
                        resultsFromFile.push(tempStr);
                        tempStr = "";
                    }
                });
            });
        }
        else if (file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            const docxBuffer = await fs.readFile(filePath);
            const zip = new PizZip(docxBuffer);
            const doc = new Docxtemplater(zip);

            const text = doc.getFullText();
            // console.clear();
            // console.log(text);
            resultsFromFile.push(text.trim());
        }

        // Clean up: delete the temp file
        await fs.unlink(filePath);

        const fullText = resultsFromFile.join(' ').trim();

        return NextResponse.json({ text: fullText });
    } catch (error) {
        console.error('PDF parsing failed:', error);
        return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 });
    }
}
