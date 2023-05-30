import { useState } from "react"
import Navbar from "./components/Navbar"
import Product from "./components/Product"

function App() {
  const [prodCount, setProdCount] = useState(0);
  return (
    <div className="bg-light-grayish-blue h-screen">
      <div className="w-full lg:max-w-7xl lg:mx-auto">
        <Navbar prodCount={prodCount} />
        <div>
          <Product setProdCount={setProdCount} />
        </div>
      </div>
    </div>
  )
}

export default App
