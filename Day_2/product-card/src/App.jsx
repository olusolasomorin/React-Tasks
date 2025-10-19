import ProductCard from "./ProductCard";
import './App.css'

function App() {
  return (
    <div className="parent-cont">
      <ProductCard 
        name= "Jordan Air"
        price= "$99.99"
        image="https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_764400_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto"
        inStock= {true}
      />
      <ProductCard 
        name= "Jordan 4 Retro"
        price= "$59.99"
        image="https://www.nicekicks.com/files/2025/08/Air-Jordan-4-Cave-Stone-FV5029-200-01.jpg"
        inStock= {true}
      />
      <ProductCard 
        name= "Nike Air Max"
        price= "$69.99"
        image="https://ciska.com.ng/wp-content/uploads/2022/08/p5.jpeg"
        inStock= {false}
      />
    </div>
  )
}

export default App;