/**
 * 
 * @param {FormData} formData The form data containing the resume file.
 * @returns {string} The extracted text from the resume file.
 */
export const getResumeText = async (formData) => {
    const res = await fetch('/api/parse-pdf', {
        method: 'POST',
        body: formData,
    });

    const resumeText = await res.json();

    return resumeText.text;
}