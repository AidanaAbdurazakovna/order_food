import { useContext, useEffect, useState } from "react";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import MealsSummary from "./components/mealsSummary/MealsSummary";
import { ModalContext } from "./context/Context-modal";
import Meal from "./components/meal/Meal";
import { Login } from "./login/Login";

function App() {
  const { isOpenModal } = useContext(ModalContext);
  const [isLogin, setIslogin] = useState(false);

  const loginHandler = () => {
    setIslogin(true);
    localStorage.setItem("auth", !isLogin);
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    setIslogin(isAuth);
  }, []);
  const logoutHandler= () =>{
    setIslogin(false);
    localStorage.clear('auth')
  }

  return (
    <>
     <Header isLogin={isLogin}  onLogout={ logoutHandler} />
      {isLogin ? (
        <>
         
          <MealsSummary />
          <Meal />
          {isOpenModal && <Card />}
        </>
      ) : (
        <Login onLogin={loginHandler} />
      )}
    </>
  );
}

export default App;
