import { useState } from "react"
import { products } from "../data"

function Productcard() {
  const [prod, setProd] = useState(products[0])
  const [isCurrent, setIsCurrent] = useState(false);
  const switchProd = (i: number) => {
    console.log(i)
    setProd(products[i])
    setIsCurrent(true)
    console.log(isCurrent)
  }
  return (
    <div className="lg:flex flex-col gap-8 hidden">
      <div className="lg:w-[550px] lg:h-[500px] h-[350px] lg:rounded-xl rounded-none w-full">
        <img className="w-full h-full lg:object-fill object-cover lg:rounded-xl rounded-none" src={prod.img} alt="" />
      </div>
      <div className="lg:flex gap-9">
        {products.map((product, i) => (
          <div onClick={()=> switchProd(i)} key={i} className={`w-[110px] rounded-xl cursor-pointer`}>
            <img className="w-full rounded-xl" src={product.thumbnail} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productcard
