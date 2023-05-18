import Navbar from "./components/Navbar"
import Product from "./components/Product"

function App() {
  return (
    <div className="bg-light-grayish-blue h-screen">
      <div className="w-full lg:max-w-7xl lg:mx-auto">
        <Navbar/>
        <div>
          <Product/>
        </div>
      </div>
    </div>
  )
}

export default App
