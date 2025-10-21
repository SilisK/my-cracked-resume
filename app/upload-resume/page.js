import Footer from "../components/footer";
import Navbar from "../components/nav";
import Client from "./client";

export const metadata = {
    title: "Upload Your Resume - My Cracked Resume",
    description: "Parse your resume for our AI."
}

export default function Page() {
    return (
        <>
            <Navbar />
            <Client />
            <Footer />
        </>
    );
}