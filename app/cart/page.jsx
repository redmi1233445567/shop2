"use client"
import { useReducer } from "react"
import { data } from "../data/data"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function page() {

    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const filterData = data.filter((item) => item.cart);
    

    const remove = (index) => {
        filterData[index].cart = false;
        forceUpdate()
        toast.success(`Successfully Remove from Cart 🛒`, {autoClose: 1000});
    }

    const deleteAll = ()=> {
        for(let i = 0; i < data.length; i++) {
            filterData[i].cart = false;
            forceUpdate()
        }
        toast.success("Successfully Remove All");
    }


  return (
    <div className="mx-auto my-12 w-96 flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold my-3 py-5 border-b-8 w-full border-black text-center">Cart 🛒</h1>
        <div className="w-full">
                <div className="border-b-2 border-gray-400 w-full flex justify-between text-xl font-bold p-3">
                    <span>Name</span>
                    <span>Price</span>
                    <span>Color</span>
                    <span>Size</span>
                    <span className="cursor-pointer" onClick={deleteAll}>🗑️</span>
                </div>
            {filterData.map((item, index)=> {
                return(
                    <div key={item.id} className="border-b-2 border-gray-400 w-full flex justify-between text-xl font-bold p-3">
                        <span>{item.namePro}</span>
                        <span>{item.pricePro}</span>
                        <div className={`w-7 h-7 rounded-full ${item.colorPro}`}></div>
                        <span>{item.sizePro}</span>
                        <span className="cursor-pointer" onClick={()=>remove(index)}>🗑️</span>
                        
                    </div>
                )
            })}
        </div>
        <ToastContainer />
    </div>
  )
}
