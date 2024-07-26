import Modal from "../UI/Modal";
import styled from "styled-components";
import Button from "../UI/Buttton";
import { CardItem } from "./CardItem";
import { useContext } from "react";
import { ModalContext } from "../../context/Context-modal";
import { CartContext } from "../../context/cart-context";
const Card = () => {
  const { closeModalHandler } = useContext(ModalContext);
  const { addedMeal, totalAmount } = useContext(CartContext);
  return (
    <>
      <Modal onClose={closeModalHandler}>
        <CardContent>
          <Liststyle>
            {addedMeal.map((item) => (
              <CardItem
                key={item.id}
                title={item.title}
                price={item.price}
                amount={item.amount}
                id={item.id}
              />
            ))}
          </Liststyle>

          <Totalamountstyle>
            <h1>Total Amount</h1>

            <div>
              <b>$ {Number( totalAmount.toFixed(2))}</b>

              <section>
                <Button variant="outlined" onClick={closeModalHandler}>
                  {" "}
                  Close
                </Button>
                <Button>order</Button>
              </section>
            </div>
          </Totalamountstyle>
        </CardContent>
      </Modal>
    </>
  );
};

export default Card;
const CardContent = styled.div`
  border-radius: 20px;
  padding: 20px 32px;
`;

const Liststyle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 671px;
  max-height: 237px;
  overflow-y: auto;
`;

const Totalamountstyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: end;
  }
  b {
    font-size: 24px;
    font-weight: bold;
    color: red;
  }
  section {
    display: flex;
    gap: 19px;
  }
`;
