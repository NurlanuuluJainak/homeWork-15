
import { createContext, useEffect, useReducer } from "react";
import { fetchRequest } from "../lib/fetchAPI";
export const CartContext = createContext({
  items: [],
  totalAmount: 0,
});
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    return (state = action.payload);
  }

  if (action.type === "GET_BASKET") {
    return (state = action.payload);
  }

  if (action.type === "INCREMENT") {
    return (state = action.payload);
  }

  if (action.type === "DECREMENT") {
    return (state = action.payload);
  }

  if (action.type === "DELETE") {
    return (state = action.payload);
  }

  return state;
};
const CardProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, []);

  const addItemToCartHandler = async (id, amount) => {
    try {
      const response = await fetchRequest(`/foods/${id}/addToBasket`, {
        method: "POST",
        body: { amount: amount },
      });

      dispatch({ type: "ADD", payload: response.items });
    } catch (error) {
      new Error(error);
    }
  };

  const getBasket = async () => {
    try {
      const response = await fetchRequest("/basket");

      dispatch({ type: "GET_BASKET", payload: response.items });
    } catch (error) {
      new Error(error);
    }
  };

  const increment = async (id, amount) => {
    try {
      const response = await fetchRequest(`/basketItem/${id}/update`, {
        method: "PUT",
        body: { amount: amount + 1 },
      });

      dispatch({ type: "INCREMENT", payload: response.items });

      getBasket();
    } catch (error) {
      new Error(error);
    }
  };

  const decrement = async (id, amount) => {
    try {
       if(amount !==1){
        const response = await fetchRequest(`/basketItem/${id}/update`, {
          method: "PUT",
          body: { amount: amount - 1 },
        });
        dispatch({ type: "DECREMENT", payload: response.items });
        getBasket();
       }
       else{
        const response = await fetchRequest(`/basketItem/${id}/delete`, {
          method: "DELETE",
        });
        dispatch({ type: "DECREMENT", payload: response.items });
        getBasket();
       }
     
    } catch (error) {
      new Error(error);
    }
  };



  const orderAmount = cartState?.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const getTotalAmount = cartState?.reduce(
    (sum, { price, amount }) => sum + amount * price,
    0
  );

  useEffect(() => {
    getBasket();
  }, []);

  const cartValue = {
    basket: cartState,
    totalAmount: orderAmount,
    addItemToCartHandler,
    increment,
    decrement,
    getTotalAmount,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CardProvider;