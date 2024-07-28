"use client"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image"
import { data } from "../data/data"
import { useState, useReducer } from "react"
import productOne from '../assets/card/product-1.jpg'
import productTwo from '../assets/card/product-2.jpg'
import productThree from '../assets/card/product-3.jpg'
import productFour from '../assets/card/product-4.jpg'
import bag1 from '../assets/card/bag/bag1.webp'
import bag2 from '../assets/card/bag/bag2.jpg'
import bag3 from '../assets/card/bag/bag3.webp'
import bag4 from '../assets/card/bag/bag4.png'
import sun1 from '../assets/card/glasses/glasses1.jpg'
import sun2 from '../assets/card/glasses/glasses2.webp'
import sun3 from '../assets/card/glasses/glasses3.webp'
import sun4 from '../assets/card/glasses/glasses4.webp'
import boot1 from '../assets/card/boots/boots1.webp'
import boot2 from '../assets/card/boots/boots2.jpg'
import boot3 from '../assets/card/boots/boots3.webp'
import boot4 from '../assets/card/boots/boots4.jpg'
import pants1 from '../assets/card/pants/pants1.jpg'
import pants2 from '../assets/card/pants/pants2.jpg'
import pants3 from '../assets/card/pants/pants3.jpg'
import pants4 from '../assets/card/pants/pants4.webp'
import shose1 from '../assets/card/shose/shose1.jpg'
import shose2 from '../assets/card/shose/shose2.webp'
import shose3 from '../assets/card/shose/shose3.jpg'
import shose4 from '../assets/card/shose/shose4.jpg'
import sport1 from '../assets/card/sport/sport1.jpg'
import sport2 from '../assets/card/sport/sport2.webp'
import sport3 from '../assets/card/sport/sport3.jpg'
import sport4 from '../assets/card/sport/sport4.webp'
import hat1 from '../assets/card/hat/hat1.jpg'
import hat2 from '../assets/card/hat/hat2.jpg'
import hat3 from '../assets/card/hat/hat3.jpg'
import hat4 from '../assets/card/hat/hat4.jpg'
import Link from "next/link"

export default function page({params}) {

    const product = [
        {id: 0,
        name: 'T-Shirt ',
        price: '$170',
        rating: 4,
        lover: false,
        cart: false,
        outImage: productOne,
        insideImage: [
          productOne,
          productTwo,
          productThree,
          productFour
        ],
        colors: [
          { class: 'bg-white', selectColor: false},
          { class: 'bg-gray-600', selectColor: false},
          { class: 'bg-gray-900', selectColor: false},
          { class: 'bg-blue-500', selectColor: false}
        ],
        sizes: [
          { name: 'XXS', inStock: false, selectSize: false},
          { name: 'XS', inStock: false, selectSize: false},
          { name: 'S', inStock: true, selectSize: false},
          { name: 'M', inStock: true, selectSize: false},
          { name: 'L', inStock: true, selectSize: false},
          { name: 'XL', inStock: true, selectSize: false},
          { name: 'XXL', inStock: true, selectSize: false},
          { name: 'XXXL', inStock: false, selectSize: false},
        ],},
        {id: 1,
        name: 'Bag ',
        price: '$250',
        rating: 4.8,
        lover: false,
        cart: false,
        outImage: bag1,
        insideImage: [
          bag1,
          bag2,
          bag3,
          bag4
        ],
        colors: [
          { class: 'bg-blue-500', selectColor: false},
          { class: 'bg-black', selectColor: false},
          { class: 'bg-yellow-300', selectColor: false},
          { class: 'bg-red-500', selectColor: false}
        ],
        sizes: [
          { name: 'XXS', inStock: false, selectSize: false},
          { name: 'XS', inStock: false, selectSize: false},
          { name: 'S', inStock: false, selectSize: false},
          { name: 'M', inStock: true, selectSize: false},
          { name: 'L', inStock: true, selectSize: false},
          { name: 'XL', inStock: true, selectSize: false},
          { name: 'XXL', inStock: false, selectSize: false},
          { name: 'XXXL', inStock: false, selectSize: false},
        ],},
        {id: 2,
        name: 'Sun glasses',
        price: '$80',
        rating: 2.9,
        lover: false,
        cart: false,
        outImage: sun1,
        insideImage: [
          sun1,
          sun2,
          sun3,
          sun4
        ],
        colors: [
          { class: 'bg-white', selectColor: false},
          { class: 'bg-black', selectColor: false},
          { class: 'bg-red-500', selectColor: false},
          { class: 'bg-gray-700', selectColor: false},
        ],
        sizes: [
          { name: 'XXS', inStock: false, selectSize: false},
          { name: 'XS', inStock: false, selectSize: false},
          { name: 'S', inStock: true, selectSize: false},
          { name: 'M', inStock: true, selectSize: false},
          { name: 'L', inStock: true, selectSize: false},
          { name: 'XL', inStock: true, selectSize: false},
          { name: 'XXL', inStock: false, selectSize: false},
          { name: 'XXXL', inStock: false, selectSize: false},
        ],},
        {id: 3,
        name: 'Boots',
        price: '$220',
        rating: 4.9,
        lover: false,
        cart: false,
        outImage: boot3,
        insideImage: [
          boot1,
          boot2,
          boot3,
          boot4
        ],
        colors: [
          { class: 'bg-black', selectColor: false},
          { class: 'bg-amber-700', selectColor: false},
          { class: 'bg-blue-500', selectColor: false},
          { class: 'bg-amber-900', selectColor: false},
        ],
        sizes: [
          { name: 'XXS', inStock: false, selectSize: false},
          { name: 'XS', inStock: false, selectSize: false},
          { name: 'S', inStock: false, selectSize: false},
          { name: 'M', inStock: true, selectSize: false},
          { name: 'L', inStock: true, selectSize: false},
          { name: 'XL', inStock: true, selectSize: false},
          { name: 'XXL', inStock: true, selectSize: false},
          { name: 'XXXL', inStock: false, selectSize: false},
        ],},
        {id: 4,
        name: 'Pants',
        price: '$200',
        rating: 3.9,
        lover: false,
        cart: false,
        outImage: pants3,
        insideImage: [
          pants1,
          pants2,
          pants3,
          pants4 
        ],
        colors: [
          { class: 'bg-orang-600', selectColor: false},
          { class: 'bg-gray-600', selectColor: false},
          { class: 'bg-gray-900', selectColor: false},
          { class: 'bg-zinc-700', selectColor: false},
        ],
        sizes: [
          { name: 'XXS', inStock: false, selectSize: false},
          { name: 'XS', inStock: false, selectSize: false},
          { name: 'S', inStock: true, selectSize: false},
          { name: 'M', inStock: true, selectSize: false},
          { name: 'L', inStock: true, selectSize: false},
          { name: 'XL', inStock: true, selectSize: false},
          { name: 'XXL', inStock: true, selectSize: false},
          { name: 'XXXL', inStock: false, selectSize: false},
        ],},
        {id: 5,
        name: 'Shoes',
        price: '$300',
        rating: 4.2,
        lover: false,
        cart: false,
        outImage: shose1,
        insideImage: [
          shose1,
          shose2,
          shose3,
          shose4
        ],
        colors: [
          { class: 'bg-white', selectColor: false},
          { class: 'bg-gray-600', selectColor: false},
          { class: 'bg-gray-900', selectColor: false},
          { class: 'bg-zinc-800', selectColor: false},
        ],
        sizes: [
          { name: 'XXS', inStock: false, selectSize: false},
          { name: 'XS', inStock: true, selectSize: false},
          { name: 'S', inStock: true, selectSize: false},
          { name: 'M', inStock: true, selectSize: false},
          { name: 'L', inStock: true, selectSize: false},
          { name: 'XL', inStock: true, selectSize: false},
          { name: 'XXL', inStock: true, selectSize: false},
          { name: 'XXXL', inStock: false, selectSize: false},
        ],},
        {id: 6,
        name: 'Sports shoes ',
        price: '$500',
        rating: 5,
        lover: false,
        cart: false,
        outImage: sport4,
        insideImage: [
          sport1,
          sport2,
          sport3,
          sport4
        ],
        colors: [
          { class: 'bg-white', selectColor: false},
          { class: 'bg-gray-600', selectColor: false},
          { class: 'bg-gray-900', selectColor: false},
          { class: 'bg-pink-500', selectColor: false},
        ],
        sizes: [
          { name: 'XXS', inStock: false, selectSize: false},
          { name: 'XS', inStock: false, selectSize: false},
          { name: 'S', inStock: false, selectSize: false},
          { name: 'M', inStock: true, selectSize: false},
          { name: 'L', inStock: true, selectSize: false},
          { name: 'XL', inStock: true, selectSize: false},
          { name: 'XXL', inStock: true, selectSize: false},
          { name: 'XXXL', inStock: true, selectSize: false},
        ],},
        {id: 7,
        name: 'Hat',
        price: '$120',
        rating: 3.6,
        lover: false,
        cart: false,
        outImage: hat1,
        insideImage: [
          hat1,
          hat2,
          hat3,
          hat4
        ],
        colors: [
          { class: 'bg-gray-600', selectColor: false},
          { class: 'bg-gray-900', selectColor: false},
          { class: 'bg-amber-900', selectColor: false},
          { class: 'bg-amber-800', selectColor: false},
        ],
        sizes: [
          { name: 'XXS', inStock: true, selectSize: false},
          { name: 'XS', inStock: true, selectSize: false},
          { name: 'S', inStock: true, selectSize: false},
          { name: 'M', inStock: true, selectSize: false},
          { name: 'L', inStock: true, selectSize: false},
          { name: 'XL', inStock: true, selectSize: false},
          { name: 'XXL', inStock: true, selectSize: false},
          { name: 'XXXL', inStock: true, selectSize: false},
        ],},
      ];
    
      const [pro, setPro] = useState(product);
      const ind = params.card;
      const [src, setSrc] = useState({id:1, src:pro[ind].insideImage[0]})
      const img = [{id:1 , src:pro[ind].insideImage[0]}, {id:2 , src:pro[ind].insideImage[1]},{id:3 , src:pro[ind].insideImage[2]},{id:4 , src:pro[ind].insideImage[3]},]
      const [, forceUpdate] = useReducer(x => x + 1, 0);

      const clickImg = (item)=> {
        const val = item.target.getAttribute("index");
        for(let i =0; i < img.length ; i++) {
            if(img[i].id == +val + 1) {
                setSrc(img[i]);
                console.log(src)
            }else {
                console.log("nooooo")
            }
        }
      }

      const clickColor = (item) => {
        const val2 = +(item.target.getAttribute("index"));
        for(let i = 0; i < pro[ind].colors.length; i++) {
            pro[ind].colors[i].selectColor = false;
            if(i == val2) {
                pro[ind].colors[i].selectColor = true;
            }
            forceUpdate()
        }
        
      }

      const clickSize = (item) => {
        const val3 = +(item.target.getAttribute("index"));
        for(let i = 0; i < pro[ind].sizes.length; i++) {
            pro[ind].sizes[i].selectSize = false;
            if(i == val3 && pro[ind].sizes[i].inStock == true) {
                pro[ind].sizes[i].selectSize = true;
            }
            forceUpdate()
        }
      }
      let col = 0;
      let siz = 0;
      let array;
      let color1;
      let size1;

      const clickCart = (item) => {
        for(let i = 0; i < pro[ind].colors.length; i++) {
            if(pro[ind].colors[i].selectColor == true) {
                color1 = pro[ind].colors[i].class
                col = 1;
            }
        }
        for(let i = 0; i < pro[ind].sizes.length; i++) {
            if(pro[ind].sizes[i].selectSize == true) {
                siz = 1;
                size1 = pro[ind].sizes[i].name
            }
        }

        if(col == 1 && siz == 1) {
            item.target.classList.remove("no")
            array = {cart: true ,id: Math.random(), namePro: pro[ind].name, colorPro: color1, sizePro: size1, pricePro: pro[ind].price}
            data.push(array);
            toast.success(`Successfully Add  ${pro[ind].name} To Cart`);
        }else {
            item.target.classList.add("no");
            if(col == 0 && siz == 1) {
                toast.error("Please Select Color");
            }else if (siz == 0 && col == 1){
                toast.error("Please Select Size");
            }else {
                toast.error("Please Select Color");
                toast.error("Please Select Size");
            }
        }
        console.log(data)
      }

  return (
    <div className="w-full h-full bg-slate-400">
        <div className="py-16 px-3 flex flex-wrap sm:px-28 justify-between">
            <div className="w-96">
                <Image
                    src={src.src}
                    alt="Picture of the author"
                    className="w-full h-96"
                />
                <div className="flex mt-4 justify-between">
                    <Image
                        src={pro[ind].insideImage[0]}
                        alt="Picture of the author"
                        className="w-20 h-20 cursor-pointer"
                        index= "0"
                        onClick ={clickImg}
                    />
                    <Image
                        src={pro[ind].insideImage[1]}
                        alt="Picture of the author"
                        className="w-20 h-20 cursor-pointer"
                        index= "1"
                        onClick ={clickImg}
                    />
                    <Image
                        src={pro[ind].insideImage[2]}
                        alt="Picture of the author"
                        className="w-20 h-20 cursor-pointer"
                        index= "2"
                        onClick ={clickImg}
                    />
                    <Image
                        src={pro[ind].insideImage[3]}
                        alt="Picture of the author"
                        className="w-20 h-20 cursor-pointer"
                        index= "3"
                        onClick ={clickImg}
                    />
                </div>
            </div>
            <div className="w-96">
                <h1 className="font-bold text-3xl">{pro[ind].name}</h1>
                <h2 className="font-bold text-3xl">{pro[ind].price}</h2>
                <h2 className="font-bold text-3xl">{pro[ind].rating} ⭐️</h2>
                <p className="font-bold text-3xl text-center w-full my-4">Color</p>
                <div className="flex w-full justify-center gap-5">
                    <div className={`w-7 h-7 rounded-full ${pro[ind].colors[0].class} cursor-pointer ${pro[ind].colors[0].selectColor == true? "scale-150": "scale-100"}`} index="0" onClick={clickColor}></div>
                    <div className={`w-7 h-7 rounded-full ${pro[ind].colors[1].class} cursor-pointer ${pro[ind].colors[1].selectColor == true? "scale-150": "scale-100"}`} index="1" onClick={clickColor}></div>
                    <div className={`w-7 h-7 rounded-full ${pro[ind].colors[2].class} cursor-pointer ${pro[ind].colors[2].selectColor == true? "scale-150": "scale-100"}`} index="2" onClick={clickColor}></div>
                    <div className={`w-7 h-7 rounded-full ${pro[ind].colors[3].class} cursor-pointer ${pro[ind].colors[3].selectColor == true? "scale-150": "scale-100"}`} index="3" onClick={clickColor}></div>
                </div>
                <p className="font-bold text-3xl text-center w-full my-4">Size</p>
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <div className={`w-12 h-12 rounded-md border-solid border-2 p-4 flex justify-center items-center hover:bg-slate-50 transition-all ${pro[ind].sizes[0].inStock == true? "cursor-pointer": "cursor-not-allowed text-slate-600"} ${pro[ind].sizes[0].selectSize == true? "border-cyan-700": "border-black"}`} index="0" onClick={clickSize}>{pro[ind].sizes[0].name}</div>
                    <div className={`w-12 h-12 rounded-md border-solid border-2 p-4 flex justify-center items-center hover:bg-slate-50 transition-all ${pro[ind].sizes[1].inStock == true? "cursor-pointer": "cursor-not-allowed text-slate-600"} ${pro[ind].sizes[1].selectSize == true? "border-cyan-700": "border-black"}`} index="1" onClick={clickSize}>{pro[ind].sizes[1].name}</div>
                    <div className={`w-12 h-12 rounded-md border-solid border-2 p-4 flex justify-center items-center hover:bg-slate-50 transition-all ${pro[ind].sizes[2].inStock == true? "cursor-pointer": "cursor-not-allowed text-slate-600"} ${pro[ind].sizes[2].selectSize == true? "border-cyan-700": "border-black"}`} index="2" onClick={clickSize}>{pro[ind].sizes[2].name}</div>
                    <div className={`w-12 h-12 rounded-md border-solid border-2 p-4 flex justify-center items-center hover:bg-slate-50 transition-all ${pro[ind].sizes[3].inStock == true? "cursor-pointer": "cursor-not-allowed text-slate-600"} ${pro[ind].sizes[3].selectSize == true? "border-cyan-700": "border-black"}`} index="3" onClick={clickSize}>{pro[ind].sizes[3].name}</div>
                    <div className={`w-12 h-12 rounded-md border-solid border-2 p-4 flex justify-center items-center hover:bg-slate-50 transition-all ${pro[ind].sizes[4].inStock == true? "cursor-pointer": "cursor-not-allowed text-slate-600"} ${pro[ind].sizes[4].selectSize == true? "border-cyan-700": "border-black"}`} index="4" onClick={clickSize}>{pro[ind].sizes[4].name}</div>
                    <div className={`w-12 h-12 rounded-md border-solid border-2 p-4 flex justify-center items-center hover:bg-slate-50 transition-all ${pro[ind].sizes[5].inStock == true? "cursor-pointer": "cursor-not-allowed text-slate-600"} ${pro[ind].sizes[5].selectSize == true? "border-cyan-700": "border-black"}`} index="5" onClick={clickSize}>{pro[ind].sizes[5].name}</div>
                    <div className={`w-12 h-12 rounded-md border-solid border-2 p-4 flex justify-center items-center hover:bg-slate-50 transition-all ${pro[ind].sizes[6].inStock == true? "cursor-pointer": "cursor-not-allowed text-slate-600"} ${pro[ind].sizes[6].selectSize == true? "border-cyan-700": "border-black"}`} index="6" onClick={clickSize}>{pro[ind].sizes[6].name}</div>
                    <div className={`w-12 h-12 rounded-md border-solid border-2 p-4 flex justify-center items-center hover:bg-slate-50 transition-all ${pro[ind].sizes[7].inStock == true? "cursor-pointer": "cursor-not-allowed text-slate-600"} ${pro[ind].sizes[7].selectSize == true? "border-cyan-700": "border-black"}`} index="7" onClick={clickSize}>{pro[ind].sizes[7].name}</div>
                </div>
                <div className="flex flex-wrap gap-3 justify-between">
                <div className="w-48 rounded-md bg-slate-900 text-white text-2xl text-center font-bold p-4 my-7 cursor-pointer hover:bg-slate-700" onClick={clickCart}>Add To Cart</div>
                <Link href={"/"}><div className="w-36 rounded-md bg-slate-900 text-white text-2xl text-center font-bold p-4 my-7 cursor-pointer hover:bg-slate-700">Home</div></Link>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
