"use client"
import { loveData } from "../data/data"
import { useReducer } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
    console.log(loveData);

    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const filterData = loveData.filter((item) => item.love);

    const remove = (index) => {
        toast.success(`Successfully Remove from Wishlist ❤️`, {autoClose: 1000});
        filterData[index].love = false;
        forceUpdate()
    }

  return (
    <div className="mx-auto my-12 w-96 flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold my-3 py-5 border-b-8 w-full border-black text-center">Wishlist ❤️</h1>
        <div className="w-full">
            {filterData.map((item, index)=> {
                return(
                    <div key={item.id} className="border-b-2 border-gray-400 w-full flex justify-between text-xl font-bold p-3">
                        <span>{item.nameLove}</span>
                        <span>{item.priceLove}</span>
                        <span className="cursor-pointer" onClick={()=>remove(index)}>🗑️</span>
                    </div>
                )
            })}
        </div>
        <ToastContainer />
    </div>
  )
}
