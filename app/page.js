"use client";

import Image from "next/image";
import googleLogo from "./assets/images/google-hackathon-logo.png";
import Footer from "./components/footer";
import { Upload } from "lucide-react";
import Link from "next/link";

const Hook = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 p-4 pt-24 pb-16 grid gap-[2.5em]">
      <section className="z-10 text-center max-w-xl mx-auto flex h-full items-start justify-center">
        <div className="flex flex-col items-center gap-8">
          <h1 
          style={{fontFamily:"EB Garamond, EB Garamond Fallback"}}
          className="text-center text-[56px] leading-[102%] font-medium tracking-[-1px] lg:text-[80px]">
            Your <span className="text-white">AI</span> career guide
          </h1>
          <hr
            className="hidden h-px w-96 border-none lg:block"
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)',
              opacity: 1,
              transform: 'none'
            }} />
          <p className="text-center leading-[140%] font-medium tracking-wide lg:text-[19px]">
            Reads your resume, analyzes your dream job, and gives you clear,
            step-by-step guidance to close the gap.
          </p>
          <Link
            href={"/upload-resume"}
            style={{
              boxShadow: `
              0 11px 7.5px #0c93ed35,
              0 10px 10px #0c8bed45,
              0 2px 5px  #0caded55,
              10px 10px 14px #5dbaf380,
              inset -3px -3px 4px #9fd4fb80,
              inset 4px 4px 4px #0c6eed1a 
              `
            }}
            className="mx-auto max-w-[250px] h-max cursor-pointer mt-4 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition duration-300">
            <Upload className="w-5 h-5" />
            <b>Upload My Resume</b>
          </Link>
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
      <main>
        <Hook />
      </main>
      <Footer />
    </div>
  );
}
