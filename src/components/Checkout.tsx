import { track } from "../assets"
import { products } from "../data"

function Checkout({ count }: { count: number }) {
    return (
        <div className="absolute z-[9999] w-full h-64  lg:h-80 top-24 lg:top-28 right-0 lg:right-48 px-4  lg:w-[500px]">
            <div className="bg-white w-full h-full rounded-xl shadow-lg lg:shadow-checkout">
                <div className="border-b px-5 py-4">
                    <p className="font-semibold text-xl">Cart</p>
                </div>
                {count === 0 ? (
                    <div className="flex items-center h-30 lg:h-44">
                        <p className="text-center mx-auto font-bold text-sm lg:text-base text-dark-grayish-blue">Your cart is empty.</p>
                    </div>
                ) :
                    (
                        <div className="px-5 py-4 lg:py-8 flex flex-col gap-4 lg:gap-8">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-16 lg:w-24 lg:h-24 rounded-md h-12 border"
                                    src={products[0].thumbnail} alt="" />
                                <div>
                                    <p className="text-dark-grayish-blue text-sm lg:text-xl">Fall limited Edition Sneakers $125.00 x 3 <span className="text-very-dark-blue font-semibold">$375.00</span></p>
                                </div>
                                <img src={track} className="lg:w-8 cursor-pointer" alt="trach" />
                            </div>
                            <button className="bg-orange-color py-3 lg:py-4 font-semibold text-white rounded-xl cursor-pointer">
                                Checkout
                            </button>
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default Checkout
