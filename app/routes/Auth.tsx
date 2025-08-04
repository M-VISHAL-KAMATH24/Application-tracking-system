import React from 'react'
import { usePuterStore } from '~/lib/puter'
export const meta=()=>([
    {title:'kamatify|auth'},
    {name:'description',content:'log in to your account'}
])
const Auth = () => {
    const {isLoading,auth}=usePuterStore();
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen items-center justify-center">
        <div className='gradient-border shadow-lg'>
            <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                <div className='flex flex-col items-center gap-2 text-center'>
                    <h1>
                        welcome
                    </h1>
                    <h2>
                        log in to continue
                    </h2>
                </div>
                <div>
                    {isLoading ?(
                        <button className='auth-button animate`-pulse'>signing you in...</button>
                    ):(
                        <>
                        {auth.isAuthenticated?(
                         <button className='auth-button' onClick={auth.signOut}>
                            <p>Log out</p>
                         </button>   
                        ):(
                         <button className='auth-button' onClick={auth.signIn}>
                            <p>Log in</p>
                         </button>       
                        )} 
                        </>
                    )}
                </div>
            </section>
        </div>
    </main>
  )
}

export default Auth