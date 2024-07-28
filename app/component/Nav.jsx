"use client"
import home from '../assets/nav-bar/store.png'
import log from '../assets/nav-bar/account.png'
import wish from '../assets/nav-bar/heart.png'
import cart from '../assets/nav-bar/shopping-cart.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Nav() {

  
  return (
    <div className= "flex  items-center gap-10 p-4 bg-slate-900 flex-wrap sm:justify-center justify-between">
      <Link href={"/"}>
      <Image
        src={home}
        width={60}
        height={60}
        alt="Picture of the author"
        />
        </Link>
      <div className="flex text-white gap-6">
        <Link href={"/logIn"}>
          <div className="flex gap-5 items-center cursor-pointer p-4 rounded-md hover:bg-slate-800">
              <h1>Log in</h1>
              <Image
                  src={log}
                  width={25}
                  height={25}
                  alt="Picture of the author"
                  className="max-w-7 max-h-7"
              />
          </div>
        </Link>
        <Link href={"/love"}>
        <div className="flex gap-5 items-center cursor-pointer p-4 rounded-md hover:bg-slate-800">
            <h1>Wishlist</h1>
            <Image
                src={wish}
                width={25}
                height={25}
                alt="Picture of the author"
                className="max-w-7 max-h-7"
            />
        </div>
        </Link>
        <Link href={"/cart"}>
        <div className="flex gap-5 items-center cursor-pointer p-4 rounded-md hover:bg-slate-800">
            <h1>Cart</h1>
            <Image
                src={cart}
                width={25}
                height={25}
                alt="Picture of the author"
                className="max-w-7 max-h-7"
            />
        </div>
        </Link>
      </div>
    </div>
  )
}
