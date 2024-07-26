import { createContext, useReducer, useState } from "react";

export const CartContext = createContext({});
const ADDED_MEALS = "ADDED_MEALS";
const INCREASE_MAEL = "INCREASE_MAEL";
const DECRESE_MAEL = "DECRESE_MAEL";

const reducer = (state, action) => {
  switch (action.type) {
    case ADDED_MEALS: {
      const prevMeals = state.addedMeal;
      const mealAction = action.payload;

      if (prevMeals.length === 0) {
        return {
          ...state,
          addedMeal: [mealAction],
        };
      }

      const isExistMeal = prevMeals.find((meal) => meal.id === mealAction.id);
      if (isExistMeal === undefined) {
        return {
          ...state,
          addedMeal: [...prevMeals, mealAction],
        };
      }

      const newAddedMeal = prevMeals.map((meal) => {
        if (meal.id === mealAction.id) {
          return {
            ...meal,
            amount: meal.amount + mealAction.amount,
          };
        }
        return meal;
      });
      return {
        ...state,
        addedMeal: newAddedMeal,
      };
    }

    case INCREASE_MAEL: {
      const prevMeals = state.addedMeal;
      const mealID = action.payload;

      const newAddedMeal = prevMeals.map((meal) => {
        if (meal.id === mealID) {
          return {
            ...meal,
            amount: meal.amount + 1,
          };
        }
        return meal;
      });
      return {
        ...state,
        addedMeal: newAddedMeal,
      };
    }
    case DECRESE_MAEL: {
      const prevMeals = state.addedMeal;
      const mealID = action.payload;

      const currentMeal=prevMeals.find((item)=>item.id ===mealID)

      if (currentMeal.amount === 1){
        return {
          ...state,
          addedMeal: prevMeals.filter((item)=>item.id !== currentMeal.id),
        }
      }



      const newAddedMeal = prevMeals.map((meal) => {
        if (meal.id === mealID) {
          return {
            ...meal,
            amount: meal.amount - 1,
          };
        }
        return meal;
      });
      return {
        ...state,
        addedMeal: newAddedMeal,
      };
    }


   
    default: {
      return state;
    }
  }
};

const initialState = {
  addedMeal: [],
};

export const CartProvider = ({ children }) => {
  const [mealState, dispatch] = useReducer(reducer, initialState);

  const addedMealsHandler = (newMeal) => {
    dispatch({ type: ADDED_MEALS, payload: newMeal });
  };

  const incrementAmountMealHandler = (id) => {
    dispatch({ type: INCREASE_MAEL, payload: id });
  };
  const decrementAmountMealHandler = (id) => {
    dispatch({ type: DECRESE_MAEL, payload: id });
  };

const totalAmount=mealState.addedMeal.reduce((acc,item)=>{
  return acc+item.price *item.amount
},0)

  const contextValue = {
    addedMeal: mealState.addedMeal,
    addedMealsHandler,
    onIncraese: incrementAmountMealHandler,
    onDecrease:decrementAmountMealHandler,
    totalAmount
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
