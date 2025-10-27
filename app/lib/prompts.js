import { Profile } from "../models/generic/profile";

export const promptNames = ["Rewriter_Initial_Resume"];

/**
 * 
 * @param {string} name The name of the prompt (`Rewriter_Initial_Resume`).
 * @returns The context/prompt for the AI.
 */
export const getPrompt = (name) => {
    const profileModel = new Profile();
    const profileModelAsText = JSON.stringify(profileModel);
    switch (name) {
        case "Rewriter_Initial_Resume":
            return `
                    You are a parser that extracts structured data from a resume. Your task is to convert the resume text into a JSON object that strictly follows this model:

                    ${profileModelAsText}

                    Guidelines:

                    - "languages" refers only to human languages (e.g., English, Spanish, Mandarin). If no languages are mentioned, omit the field.

                    - "skills" must be an array of strings. It should include:
                        - For technical roles: programming languages, frameworks, tools, and software proficiencies
                        - For non-technical roles: relevant software (e.g., Microsoft Office, Salesforce, Adobe Creative Suite), methodologies (e.g., Agile, Six Sigma), domain expertise, and professional competencies
                        - For all roles: both hard skills and relevant soft skills when explicitly listed (e.g., "Project Management", "Data Analysis", "Public Speaking")
                        
                        When parsing technical skills:
                        - Preserve exact formatting and capitalization (e.g., "C#" not "C #", "C++" not "C ++")
                        - Common examples: JavaScript, TypeScript, Python, Java, C#, C++, Go, Rust, Swift, Kotlin, PHP, Ruby
                        - Remove any unnecessary spaces within language names
                        - Keep framework names accurate (e.g., "React.js" or "React", "Node.js" or "Node")
                        
                        When parsing non-technical skills:
                        - Include software proficiencies (e.g., "Excel", "PowerPoint", "Tableau", "SAP")
                        - Include certifications and methodologies (e.g., "PMP", "Scrum Master", "Lean Manufacturing")
                        - Include domain-specific tools (e.g., "AutoCAD" for engineering, "Final Cut Pro" for media)

                    - "availability" must be one of the following values (if explicitly stated or can be reasonably inferred):
                        - "just networking"
                        - "seeking job opportunities"
                        - "looking for clubs & programs"

                    - "socials" must be an empty array.

                    - If the resume does not include an explicit summary, write a brief 1–2 sentence summary based on the main theme of the resume.

                    - Only include fields that are clearly present and identifiable in the resume.

                    - Do not guess, infer, or add information that isn't present.

                    - Do not use placeholders. Leave out missing or unclear fields entirely.

                    - Output a syntactically valid JSON object using correct data types (e.g., strings, arrays, nested objects). No extra formatting, comments, or explanation — only the raw JSON.
                `;
        default:
            null;
    }
}