"use client"
import hart from '../assets/sale/love.png'
import noneHart from '../assets/nav-bar/heart.png'
import Image from 'next/image'
import {useReducer, useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import { loveData } from '../data/data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card({pro}) {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [test, setTest] = useState(pro);
    const ref1 = useRef()

    console.log(test)

    const onChange = () => {
        const val = ref1.current.value;
        console.log(val)
        if (val != "") {
            let arr = []
            for(let i =0; i < test.length; i++) {
                if(test[i].name.toLocaleLowerCase().includes(val)){
                    arr = [...arr, test[i]]
                }
                setTest(arr)
            }
            
            console.log(test)
        }else {
            setTest(pro)
        }
    }

    let loveArray;
    const addLove = (index) => {
        test[index].lover = !test[index].lover;
        if(test[index].lover) {
            toast.success(`success add ${test[index].name} to Wishlist ❤️`)
        }else {
            toast.success(`success remove ${test[index].name} to Wishlist 💔`)
        }
        if(test[index].lover === true) {
            loveArray = {id: index, nameLove: test[index].name, priceLove: test[index].price, love: true};
            loveData.push(loveArray);
        }else {
            for (let i = 0; i < loveData.length; i++) {
                if(loveData[i].id === index) {
                    loveData[i].love = false
                }
            }
        }
        
        forceUpdate();
        console.log(test)
    }

    
  return (
    <div>
        <input onChange={onChange} ref={ref1} type="text" placeholder="What are you looking for" className="mx-auto block my-12 w-4/5 appearance-none bg-slate-600 text-white font-bold p-3 rounded-md focus:outline-none"/>
        <div className="flex flex-wrap mx-auto my-12 w-4/5 gap-7 justify-center">
        {test.map((item, index)=> {
            return(
                <div className="appView w-60 h-72 rounded-md overflow-hidden" key={item.id}>
                    <Link href={`/${item.id}`}>
                        <div className="relative cursor-pointer">
                            <Image
                                src={item.outImage}
                                width={100}
                                height={100}
                                alt="Picture of the author"
                                className="w-full h-60"
                            />
                            <p className="view1 w-4/5 hidden text-center rounded-lg absolute bottom-7 left-1/2 -translate-x-1/2 bg-slate-300/[0.6] p-4 font-bold">View More</p>
                        </div>
                    </Link>
                    <div className="flex justify-between p-3 bg-slate-400 items-center text-white font-bold">
                        <p>{item.name}</p>
                        <Image
                            src={item.lover == true? hart:noneHart}
                            width={25}
                            height={25}
                            onClick={()=>addLove(index)}
                            index= {item.id}
                            alt="Picture of the author"
                            className="cursor-pointer"
                        />
                        <p>{item.price}</p>
                    </div>
                </div>
            )
        })}
        </div>
        <ToastContainer />
    </div>
  )
}
