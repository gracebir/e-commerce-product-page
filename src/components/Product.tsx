import { useState } from "react"
import Carousel from "./Carousel"
import Productcard from "./ProductCard"
import { minus, plus } from "../assets";
import { BsCart3 } from 'react-icons/bs'

function Product() {
    const [qty, setQty] = useState(0);
    const decrement = () => {
        if (qty >= 1) {
            setQty(qty - 1)
        }
    }

    const increment = () => {
        setQty(qty + 1)
    }
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 lg:items-center px-0 lg:px-8 lg:py-16">
            <Productcard />
            <Carousel />
            <div className="px-7 flex flex-col gap-4 lg:gap-8">
                <p className="text-orange-color uppercase text-[.9rem] font-medium lg:font-semibold">sneaker company</p>
                <h1 className="text-[1.7rem] lg:text-5xl leading-8 lg:leading-[50px] font-bold">Fall Limited Edition Sneakers</h1>
                <p className="text-dark-grayish-blue text-[1rem] lg:text-[1.2rem] leading-[25px] lg:leading-[30px]">These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div className="flex flex-col gap-4 lg:gap-8">
                    <div className="flex justify-between lg:flex-col lg:gap-2">
                        <div className="flex gap-4 items-center">
                            <h1 className="font-medium text-xl lg:text-2xl lg:font-semibold">$125.00</h1>
                            <span className="bg-orange-100 px-1 py-1 font-medium rounded-md text-orange-color text-sm">50%</span>
                        </div>
                        <span className="text-dark-grayish-blue text-sm line-through">$250.00</span>
                    </div>
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
                        <div className="flex lg:bg-grayish-blue lg:w-[150px] lg:rounded-xl items-center lg:py-2 px-4 justify-between">
                            <img onClick={decrement} className="cursor-pointer" src={minus} alt="" />
                            <span className="font-medium">{qty}</span>
                            <img onClick={increment} className="cursor-pointer" src={plus} alt="" />
                        </div>
                        <button className="bg-orange-color flex-1 py-3 rounded-xl font-bold cursor-pointer flex justify-center gap-2 text-white">
                            <BsCart3 size={20} />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
