import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { products } from '../data'

type modalProp = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({ setOpen }: modalProp) {
  const [prod, setProd] = useState(products[0])
  const [activeIndex, setActiveIndex] = useState(0)

  const switchProd = (i: number) => {
    setProd(products[i])
    setActiveIndex(i)
  }
  return (
    <div className="w-full hidden lg:flex items-center top-0 left-0 z-[9999] h-screen absolute bg-black bg-opacity-75">
      <div className="w-[700px] h-[80vh] mx-auto flex flex-col gap-3 z-[9999]">
        <div className="flex justify-end px-10">
          <IoClose className="fill-orange-color font-bold cursor-pointer" size={35} onClick={() => setOpen(false)} />
        </div>
        <div>
          <div className="lg:flex flex-col items-center gap-8 hidden">
            <div className="lg:w-[630px] lg:h-[580px] lg:rounded-xl rounded-none w-full">
              <img className="w-full h-full lg:object-fill object-cover lg:rounded-xl rounded-none" src={prod.img} alt="" />
            </div>
            <div className="lg:flex gap-9">
              {products.map((product, i) => (
                <div
                  onClick={() => switchProd(i)} key={i}
                  className={`w-[110px] rounded-xl cursor-pointer ${activeIndex === i ? "border-[3px] border-orange-color" : ""}`}>
                  <img className={`w-full rounded-xl h-full ${activeIndex === i ? 'bg-opacity-50' : ''}`} src={product.thumbnail} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
