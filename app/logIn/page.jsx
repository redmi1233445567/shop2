"use client"
import user from "../assets/nav-bar/account.png"
import search from '../assets/log-in/search.png'
import log from '../assets/log-in/log-in.png'
import Image from "next/image"
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {

  const logClick = () => {
    toast.success("Succefully Log in", {autoClose: 1000})
  }

  return (
    <div className="h-full w-full flex justify-center mt-6">
      <div className="flex justify-center flex-col items-center gap-4 w-96 relative">
        <div className="p-5 border-solid border-2 border-black rounded-full">
            <Image
                src={user}
                width={50}
                height={50}
                alt="Picture of the author"
            />
        </div>
        <input type="text" placeholder="Email" className="appearance-none p-3 focus:outline-none border-l-4 border-l-slate-800 bg-slate-600 w-full"/>
        <input type="text" placeholder="Password" className="appearance-none p-3 focus:outline-none border-l-4 border-l-slate-800 bg-slate-600 w-full"/>
        <div className="flex justify-between w-full">
            <div className="w-36 py-2 text-center text-white font-bold text-2xl rounded-lg bg-slate-900 cursor-pointer hover:bg-slate-700 transition-all">Log</div>
            <Link href={"/"}><div onClick={()=>logClick} className="w-36 py-2 text-center text-white font-bold text-2xl rounded-lg bg-slate-900 cursor-pointer hover:bg-slate-700 transition-all">Home</div></Link>
        </div>
        <Image
                src={search}
                width={40}
                height={40}
                alt="Picture of the author"
            />
            <Image
                src={log}
                width={400}
                height={400}
                alt="Picture of the author"
                className="-rotate-45 absolute hidden -bottom-12 -right-96 lg:block"
            />
            
      </div>
      <ToastContainer />
    </div>
  )
}
