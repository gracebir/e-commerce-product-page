import Navbar from "./components/Navbar"
import Productcard from "./components/ProductCard"

function App() {
  return (
    <div className="bg-light-grayish-blue h-screen">
      <div className="w-full lg:max-w-7xl lg:mx-auto">
        <Navbar/>
        <div>
          <Productcard/>
        </div>
      </div>
    </div>
  )
}

export default App
