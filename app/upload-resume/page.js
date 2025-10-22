import Footer from "../components/footer";
import Client from "./client";

export const metadata = {
    title: "Upload Your Resume",
    description: "Parse your resume with AI."
}

export default function Page() {
    return (
        <>
            <Client />
            <Footer />
        </>
    );
}