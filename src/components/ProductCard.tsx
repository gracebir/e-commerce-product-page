import { useState } from "react"
import { products } from "../data"
import Modal from "./Modal"

function Productcard() {
  const [prod, setProd] = useState(products[0])
  const [activeIndex, setActiveIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const switchProd = (i: number) => {
    setProd(products[i])
    setActiveIndex(i)
  }
  return (
    <div className="lg:flex flex-col gap-8 hidden">
      <div className="lg:w-[550px] lg:h-[500px] h-[350px] lg:rounded-xl rounded-none w-full">
        <img onClick={() => setOpen(true)} className="w-full h-full cursor-pointer lg:object-fill object-cover lg:rounded-xl rounded-none" src={prod.img} alt="" />
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
      {open && (<Modal setOpen={setOpen} />)}
    </div>
  )
}

export default Productcard
