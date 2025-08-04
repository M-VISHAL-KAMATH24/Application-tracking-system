import React, { useEffect } from 'react'
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { resumes } from "constants/index"; // ✅ accurate
import ResumeCard from "~/components/ResumeCard";
import { useNavigate,useLocation } from 'react-router';
import { usePuterStore } from '~/lib/puter'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
     const {auth}=usePuterStore();
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>track youor application and resume ratings</h1>
        <h2>
          review your submission and check AI-powered feedback
        </h2>
      </div>
    {resumes.length>0 &&(
      <div className="resumes-section">
  {resumes.map((resume)=>(
    <ResumeCard key={resume.id} resume={resume}/>
   ))}

      </div>
    )}
 

     </section>

    </main>
}
