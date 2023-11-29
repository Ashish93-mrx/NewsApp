import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
const App = () => {
  const [country,setCountry]=useState("us")
  const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry}/>
      <NewsBoard category={category} country={country}/>
    </div>
  )
}

export default App
