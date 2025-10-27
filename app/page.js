"use client";

import Image from "next/image";
import googleLogo from "./assets/images/google-hackathon-logo.png";
import Footer from "./components/footer";
import { Upload } from "lucide-react";
import Link from "next/link";
import Navbar from "./components/nav";

const Hook = () => {
  return (
    <div className="min-h-screen p-4 pt-24 pb-16 grid gap-[2.5em]">
      <section className="z-10 text-center max-w-xl mx-auto flex h-full items-start justify-center">
        <div className="flex flex-col items-center gap-8">
          <h1
            style={{ fontFamily: "EB Garamond, EB Garamond Fallback" }}
            className="text-center text-[56px] leading-[102%] font-medium tracking-[-1px] lg:text-[80px]">
            Your AI career guide
          </h1>
          <p className="text-center leading-[140%] font-medium tracking-wide lg:text-[19px]">
            Reads your resume, analyzes your career goals, and gives you clear,
            step-by-step guidance to close the gap.
          </p>
          <Link
            href={"/upload-resume"}
            className="mx-auto max-w-[250px] h-max cursor-pointer mt-4 flex items-center justify-center gap-2 bg-sky-500 active:scale-100 hover:scale-105 hover:bg-sky-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition duration-300">
            <Upload className="w-5 h-5" />
            <b>Upload My Resume</b>
          </Link>
          <video
            className="w-full aspect-video rounded-lg shadow-lg border border-zinc-100"
            poster="https://www.example.com/thumbnail.jpg"
          >
            <source src="https://www.example.com/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section>
        <div className="max-w-xl mx-auto grid place-items-center text-center">
          <h2 className="text-xl font-bold mb-4">Submission for</h2>
          <Link target="_blank" passHref href={"https://googlechromeai2025.devpost.com/"}>
            <Image
              alt="logo"
              src={googleLogo}
              width={256}
              height={256}
              unoptimized
              placeholder="blur"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hook />
      </main>
      <Footer />
    </div>
  );
}
