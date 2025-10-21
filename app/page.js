"use client";

import Image from "next/image";
import logo from "./assets/images/my-cracked-resume-logo.png";
import googleLogo from "./assets/images/google-hackathon-logo.png";
import Footer from "./components/footer";
import Navbar from "./components/nav";
import { Upload } from "lucide-react";
import Link from "next/link";

const Logos = () => {
  return (
    <div className="py-16 p-4 flex sm:flex-row flex-col items-center justify-center gap-8">
      <Link target="_blank" passHref href={"https://github.com/SilisK/my-cracked-resume"}>
        <Image
          alt="logo"
          src={logo}
          width={312}
          height={312}
          unoptimized
          placeholder="blur"
        />
      </Link>
      <Link target="_blank" passHref href={"https://googlechromeai2025.devpost.com/"}>
        <Image
          alt="logo"
          src={googleLogo}
          width={312}
          height={312}
          unoptimized
          placeholder="blur"
        />
      </Link>
    </div>
  );
}

const Hook = () => {
  return (
    <div className="relative py-16 flex flex-row gap-[2.5em]">
      <section className="z-10 text-center max-w-xl mx-auto flex h-full items-start justify-center pt-20 lg:pt-28">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-[56px] leading-[102%] font-medium tracking-[-1px] lg:text-[80px]">
            Your <span className="text-sky-500">AI</span> career guide
          </h1>
          <hr
            className="hidden h-px w-96 border-none lg:block"
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(178, 178, 178, 0.3) 50%, rgba(255, 255, 255, 0) 100%)',
              opacity: 1,
              transform: 'none'
            }} />
          <p className="text-center leading-[140%] font-medium tracking-[-0.02em] lg:text-[19px]">
            Reads your resume, analyzes your dream job, and gives you clear,
            step-by-step guidance to close the gap.
          </p>
          <Link
            href={"/upload-resume"}
            style={{
              boxShadow: `
              0 62px 17px #0c5fed10,
              0 40px 16px #0c8bed20,
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
      {/* <section className="flex-1">
        <Image
          alt="graphic"
          src={"https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
          width={512}
          height={512}
          className="aspect-video w-full rounded-lg"
        />
      </section> */}
    </div>
  );
}

const Conversion1 = () => {
  return (
    <div className="relative py-[8em] md:py-[10em] lg:py-[12em] flex flex-row gap-[2.5em]">
      <section className="z-10 mx-auto max-w-6xl flex-1 grid place-items-center gap-[2.5em]">
        <h1 className="text-center text-[56px] leading-[102%] font-medium tracking-[-1px] lg:text-[80px]">
          Upgrade your resume with AI.
        </h1>
        <p className="mt-2 max-w-[484px] text-center text-base leading-snug tracking-tight text-gray-500 md:mt-2.5 md:mb-6 lg:mt-3 lg:mb-0 lg:text-xl">
          Our AI scans your resume and shows you exactly what to improve.
        </p>
        <br />
        <Image
          alt="graphic"
          src={"https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
          width={1080}
          height={720}
          className="aspect-video rounded-3xl"
        />
      </section>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mt-[184px] h-[calc(100%+910px)] w-full -translate-y-1/2 bg-[linear-gradient(0deg,#FFF_0%,#DDE2EE_47.12%,#FFF_95.67%)]">
      </div>
    </div>
  );
}

const Conversion2 = () => {
  return (
    <div className="relative py-[8em] md:py-[10em] lg:py-[12em] flex flex-row gap-[2.5em]">
      <section className="z-10 mx-auto flex w-full max-w-7xl flex-col gap-y-11 px-5 md:flex-row md:gap-x-[28px] md:px-8 lg:gap-x-16">
        <div className="mx-auto flex max-w-[500px] basis-1/2 flex-col xl:max-w-full">
          <h2 className="text-[20px] leading-snug font-medium tracking-tight text-foreground lg:text-[28px]">
            Align your resume with jobs
          </h2>

          <p className="mt-2 max-w-[484px] text-base leading-snug tracking-tight text-gray-500 md:mt-2.5 md:mb-6 lg:mt-3 lg:mb-0 lg:text-xl">
            After uploading your resume, tell AI which jobs you want to apply for.
          </p>

          <div className="relative mt-5 md:mt-auto lg:mt-10 xl:mt-12">
            <Image
              alt="graphic"
              src={"https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
              width={512}
              height={512}
              className="aspect-video w-full rounded-lg"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-[500px] basis-1/2 flex-col xl:max-w-full">
          <h2 className="text-[20px] leading-snug font-medium tracking-tight text-foreground lg:text-[28px]">
            Track your progress
          </h2>

          <p className="mt-2 max-w-[484px] text-base leading-snug tracking-tight text-gray-500 md:mt-2.5 md:mb-6 lg:mt-3 lg:mb-0 lg:text-xl">
            If you're missing any qualifications, upskill with our interactive roadmap.
          </p>

          <div className="relative mt-5 md:mt-auto lg:mt-10 xl:mt-12">
            <Image
              alt="graphic"
              src={"https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
              width={512}
              height={512}
              className="aspect-video w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="relative min-h-screen">
        <Hook />
        <Conversion1 />
        <Conversion2 />
        <Logos />
      </main>
      <Footer />
    </div>
  );
}
