import React from 'react'
import { useState } from 'react';
import Navbar from '~/components/Navbar'
import FileUploader from './FileUploader';

const upload = () => {
    const [isProcessing,setIsProcessing]=useState(false);
    const [statusText,setStatusText]=useState('');
    const [file,setFile]=useState<File|null>(null)
    const handleFileSelect=(file:File|null)=>{
        setFile(file);
    }
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form=e.currentTarget.closest('form');
        if(!form) return;
        const formData=new FormData(form);
        const companyName=formData.get('company-name');
        const jobTitle=formData.get('jobtitle-name');
        const jobDescription=formData.get('job-description');
        console.log({
            companyName,jobTitle,jobDescription,file
        })

    }
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover">
    <Navbar/>
    <section className='main-section'>
        <div className='page-heading py-16'>
            <h1>
                smart feedback for your dream job
            </h1>
            {isProcessing?(
                <>
                <h2>{statusText}</h2>
                <img src="/images/resume-scan.gif"className='w-full' alt="hiiii" />
                </>
            ):(
                <h2>drop your resume for an ATS score system</h2>
            )}
            {!isProcessing &&(
                <form id="upload-form" onSubmit={handleSubmit} className='flex flex-gap gap-4 mt-8'>
                    <div className='form-div'>
                        <label htmlFor="company-name">Company name</label>
                        <input type="text" name='company-name' placeholder='Company name' id='company-name' />
                    </div>
                    <div className='form-div'>
                        <label htmlFor="job-title">Job title </label>
                        <input type="text" name='job-title' placeholder='job title' id='job-title' />
                    </div>
                    <div className='form-div'>
                        <label htmlFor="job-description">Job description </label>
                       <textarea rows={5} name="job-description" id="" placeholder='job description'></textarea>
                    </div>
                    <div className='form-div'>
                        <label htmlFor="uploader">Upload Resume</label>
                        <FileUploader onFileSelect={handleFileSelect}/>
                       
                            <button className='primary-button' type="submit">
                                analyze resume
                            </button>
                        
                    </div>

                </form>
            )}
        </div>
    </section>
    </main>
  )
}

export default upload