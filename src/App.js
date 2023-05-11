import { useCallback, useMemo, useState } from "react";
import "./App.css";
import { Basket } from "./components/basket/Basket";
import  Header  from "./components/header/Header";
import  MealSummary from "./components/meal-summary/MealSummary";
import Meals  from "./components/meals/Meals";
import CardProvider from "./store/cart-context";
import { fetchRequest } from "./lib/fetchAPI";
import { useEffect } from "react";
import { styled } from "styled-components";
function App() {
  const [toggle, setToggle] = useState(false);
  const [meals,setMeals] = useState([])
  const [sort,setSort] = useState("addGo")
  async function getFoods(){
  try{
      const response =await
       fetchRequest('/foods',)
      setMeals(response)
    }catch(error){
      console.log(error)
    }
    }
    useEffect(() => {
    getFoods()
    },[])

    const sortMeals = useMemo(() => {
      const notSort = [...meals]

      return notSort.sort((a, b) => {
        if(sort === "addGo"){
          return a.price - b.price
        }

        setMeals(notSort)
        // return b.price - a.price
      })
    },[sort])


const toggleHandler = useCallback(() => {
  setToggle((prev) => !prev);
},[])
console.log('afldkjfs')
  return (
    <CardProvider>
      <Header onToggle={toggleHandler} />
      <MealSummary />
      <Select onChange={(e) => setSort(e.target.value) } value={sort}>
        <option value="addDo">Expencive</option>
        <option value="addGo">Cheaper</option>
      </Select>
      <Meals meals={sortMeals} />
      {toggle && <Basket onToggle={toggleHandler} />}
    </CardProvider>
  );
}

export default App;

const Select = styled.select`
margin-left: 180px;
position: relative;
top: 170px;
padding: 5px 15px;
font-size:1.2rem;
`