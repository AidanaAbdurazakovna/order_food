import HeaderCardButton from "./HeaderCardButton";
import styled from "styled-components";

const Header = ({isLogin, onLogout}) => {
  return (
    <StyledHeader>
      <h1>ReactMeals</h1>
      
      <HeaderCardButton />
      {isLogin && <div>
      <StyledButton onClick={onLogout}>
        Logout
      </StyledButton>
      </div>}
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  & > h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

const StyledButton=styled.button `
  background-color: #20d410;
  font-weight: 700;
  padding: 15px 58px;
  border-radius: 30px;
  font-size: 20px;


 border: none;
background-color: #20d410;

`