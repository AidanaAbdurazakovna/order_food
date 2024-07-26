import ReactDOM from "react-dom/client";
import "./index.css";
import { ModalProvaider } from "./context/Context-modal.jsx";
import { CartProvider } from "./context/cart-context.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ModalProvaider>
      <App />
    </ModalProvaider>
  </CartProvider>
);
