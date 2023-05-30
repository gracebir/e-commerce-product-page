import { useState } from "react"
import { products } from "../data"
import { previous, next } from "../assets";

const Carousel = () => {
    const [ count, setCount] = useState(0);
    const nextImg = () => {
      setCount((prevIndex)=> (prevIndex + 1) % products.length )
    }

    const prevImage = () => {
      setCount((prevIndex)=> (prevIndex - 1 + products.length) % products.length)
    }

  return (
    <div className={`bg-no-repeat duration-300 flex lg:hidden px-5 justify-between items-center bg-cover bg-center h-[300px] w-full`} style={{backgroundImage: `url("${products[count].img}")`}}>
      <div onClick={nextImg} className="w-10 cursor-pointer bg-light-grayish-blue flex items-center justify-center rounded-full h-10 border">
        <img className="h-3" src={previous} alt="prev" />
      </div>
      <div onClick={prevImage} className="w-10 cursor-pointer bg-light-grayish-blue rounded-full h-10 border flex items-center justify-center">
        <img className="h-3" src={next} alt="next" />
      </div>
    </div>
  )
}

export default Carousel
