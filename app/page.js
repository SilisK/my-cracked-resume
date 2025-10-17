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
    <div className="container py-16 p-4 mx-auto flex gap-[2.5em] lg:flex-row flex-col-reverse">
      <section className="flex-1 grid gap-[1em]">
        <h1 className="text-5xl font-bold leading-tight">
          Build your career in real-time with <span className="text-sky-500">AI</span>.
        </h1>
        <p className="text-xl text-gray-700 flex items-start gap-3">
          Identify your next career move, skill gaps, and growth opportunities instantly.
        </p>
        <button className="cursor-pointer mt-4 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition">
          <Upload className="w-5 h-5" />
          <b>Upload My Resume</b>
        </button>
      </section>
      <section className="flex-1">
        <Image
          alt="graphic"
          src={"https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
          width={512}
          height={512}
          className="aspect-video w-full rounded-lg"
        />
      </section>
    </div>
  );
}

const Conversion1 = () => {
  return (
    <div className="max-w-[1024px] py-16 p-4 mx-auto flex flex-row gap-[2.5em]">
      <section className="flex-1 grid gap-[1em]">
        <h1 className="text-center text-5xl font-bold leading-tight">
          Upgrade your resume with AI.
        </h1>
        <p className="text-center text-xl text-gray-700 gap-3">
          Our AI scans your resume and shows you exactly what to improve.
        </p>
        <Image
          alt="graphic"
          src={"https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
          width={1080}
          height={720}
          className="aspect-video rounded-3xl"
        />
      </section>
    </div>
  );
}

const Conversion2 = () => {
  return (
    <div className="container py-16 p-4 mx-auto flex gap-[2.5em] lg:flex-row flex-col-reverse">
      <section className="flex-1">
        <Image
          alt="graphic"
          src={"https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
          width={512}
          height={512}
          className="aspect-video w-full rounded-lg"
        />
      </section>
      <section className="flex-1 grid gap-[1em]">
        <h1 className="text-5xl font-bold leading-tight">
          Close skill gaps. Qualify faster.
        </h1>

        <p className="text-xl text-gray-700 flex items-start gap-3">
          Our AI compares your resume to job listings, highlights missing qualifications, and helps you upskill with targeted recommendations.
        </p>

        <button className="cursor-pointer mt-4 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition">
          <b>Get Started</b>
        </button>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="min-h-screen">
        <Hook />
        <Conversion1 />
        <Conversion2 />
        <Logos />
      </main>
      <Footer />
    </div>
  );
}
