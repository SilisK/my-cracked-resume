import Navbar from "../components/nav";
import Client from "./client";

export const metadata = {
    title: "Dashboard",
    description: "",
}

export default function Page() {
    return (
        <div>
            <Navbar />
            <main>
                <Client />
            </main>
        </div>
    );
}