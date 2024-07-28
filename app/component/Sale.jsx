"use client"

import i1 from '../assets/sale/1.png'
import i2 from '../assets/sale/2.jpg'
import i3 from '../assets/sale/3.webp'
import i4 from '../assets/sale/4.jpg'
import i5 from '../assets/sale/5.webp'
import i6 from '../assets/sale/6.png'
import left from '../assets/sale/left.png'
import r from '../assets/sale/right.png'
import none from '../assets/sale/none-selecte.png'
import select from '../assets/sale/selecte.png'
import { useState, useRef } from 'react'
import Image from 'next/image'


export default function Sale() {
    const [go, setGo] = useState({id:1, src:i1})
    const src= [{id:1, src:i1}, {id:2, src:i2}, {id:3, src:i3}, {id:4, src:i4}, {id:5, src:i5}, {id:6, src:i6}]
    const ref1 = useRef();
    
    const clickNext = () => {
        for (let q = 0 ; q <= src.length; q++) {
            if(go.id < 6) {
                if(src[q].id === go.id && go.id < 6) {
                    setGo(src[q + 1]);
                    const img = ref1.current.children;
                    for (let i = 0; i < img.length; i++) {
                        img[i].classList.remove("active");
                        if(img[i].getAttribute("index") - 1 == go.id) {
                            img[i].classList.add("active");
                            i = 100
                        }
                    }
                    

                    q= 6;
                }
            }else if(go.id == 6) {
                setGo(src[0])
                const img = ref1.current.children;
                    for (let i = 0; i < img.length; i++) {
                        img[i].classList.remove("active");
                        if(img[i].getAttribute("index") - 1 == go.id) {
                            img[i].classList.add("active");
                            i = 100
                        }
                    }
                    img[0].classList.add("active");
            }
        }
    }


    const clickBefor = () => {
        for (let q = 0 ; q <= src.length; q++) {
            if(go.id > 1) {
                if(src[q].id === go.id && go.id > 1) {
                    setGo(src[q - 1]);
                    const img = ref1.current.children;
                    for (let i = 0; i < img.length; i++) {
                        img[i].classList.remove("active");
                        if(img[i].getAttribute("index") == go.id - 1) {
                            console.log("eeeeee")
                            img[i].classList.add("active");
                            i = 100
                        }
                    }
                    q=6
                }
            }else if (go.id == 1) {
                setGo(src[5])
                const img = ref1.current.children;
                    for (let i = 0; i < img.length; i++) {
                        img[i].classList.remove("active");
                        if(img[i].getAttribute("index") + 1 == go.id) {
                            img[i].classList.add("active");
                            i = 100
                        }
                    }
                    img[5].classList.add("active");
            }
        }
    }
    // console.log(ref1.current.children)
    const clickRing = (item)=> {
        const val = item.target.getAttribute("index")
        const img = ref1.current.children;
        for (let i = 0; i < img.length; i++) {
            img[i].classList.remove("active")
            
        }
        item.target.classList.add("active")
        setGo(src[val - 1])
    }


  return (
    <div className= "mx-auto my-10 w-4/5 h-96 relative">
        <Image
            src={go.src}
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-full h-full"
        />
        
      <Image
        src={left}
        width={100}
        height={100}
        alt="Picture of the author"
        onClick= {clickBefor}
        className="absolute top-40 left-8 bg-gray-300 w-20 h-20 rounded-full anime hover:animate-none cursor-pointer"
      />
      <Image
        src={r}
        width={100}
        height={100}
        alt="Picture of the author"
        onClick={clickNext}
        className="absolute top-40 right-6 bg-gray-300 w-20 h-20 rounded-full anime hover:animate-none cursor-pointer"
      />
      <div ref={ref1} className="flex gap-5 absolute bottom-6 left-1/2 -translate-x-1/2">
        <div index= "1" className="w-10 h-10 rounded-full border-2 border-black active cursor-pointer hover:scale-110 transition-all" onClick={clickRing}></div>
        <div index= "2" className="w-10 h-10 rounded-full border-2 border-black cursor-pointer hover:scale-110 transition-all" onClick={clickRing}></div>
        <div index= "3" className="w-10 h-10 rounded-full border-2 border-black cursor-pointer hover:scale-110 transition-all" onClick={clickRing}></div>
        <div index= "4" className="w-10 h-10 rounded-full border-2 border-black cursor-pointer hover:scale-110 transition-all" onClick={clickRing}></div>
        <div index= "5" className="w-10 h-10 rounded-full border-2 border-black cursor-pointer hover:scale-110 transition-all" onClick={clickRing}></div>
        <div index= "6" className="w-10 h-10 rounded-full border-2 border-black cursor-pointer hover:scale-110 transition-all" onClick={clickRing}></div>
      </div>
    </div>
  )
}
