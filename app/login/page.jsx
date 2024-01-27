"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

function page() {
    const session = useSession();
    console.log(session)
  return (
    <div>
        <button onClick={()=> signIn("github")}> Login using github</button>
    </div>
  )
}

export default page
