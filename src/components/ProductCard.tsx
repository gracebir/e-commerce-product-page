import { useState } from "react"
import { products } from "../data"

function Productcard() {
  const [prod, setProd] = useState(products[0])
  const [activeIndex, setActiveIndex] = useState(0)
  const switchProd = (i: number) => {
    console.log(i)
    setProd(products[i])
    setActiveIndex(i)
  }
  return (
    <div className="lg:flex flex-col gap-8 hidden">
      <div className="lg:w-[550px] lg:h-[500px] h-[350px] lg:rounded-xl rounded-none w-full">
        <img className="w-full h-full lg:object-fill object-cover lg:rounded-xl rounded-none" src={prod.img} alt="" />
      </div>
      <div className="lg:flex gap-9">
        {products.map((product, i) => (
          <div
            onClick={() => switchProd(i)} key={i}
            className={`w-[110px] rounded-xl cursor-pointer ${activeIndex === i ? "border-2 border-orange-color" : ""}`}>
            <img className={`w-full rounded-xl h-full ${activeIndex === i ? 'opacity-50' : ''}`} src={product.thumbnail} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productcard
