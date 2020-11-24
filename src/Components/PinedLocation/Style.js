import styled from "styled-components";

const Positioner = styled.div`
  width: 360px;
  height: 640px;
  @media screen and (min-width: 0px) and (max-width: 360px) and (max-height: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 61px;
  margin-left: 5%;
  font-size: 18px;
  svg {
    margin-right: 100px;
  }
`;
const Station = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 20%;
  margin-left: 10px;
  input {
    margin-top: 2%;
    width: 310px;
    height: 45px;
    border-radius: 30px;
    outline: none;
    border: 1px solid #c0c2d1;
  }
`;
const Bus = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
  font-size: 16px;
  margin-left: 10px;
  input {
    margin-top: 2%;
    width: 310px;
    height: 45px;
    border-radius: 30px;
    outline: none;
    border: 1px solid #c0c2d1;
  }
`;
const Mic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18%;
`;
const Save = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin-top: 18%;
    width: 150px;
    height: 40px;
    background-color: #2478ff;
    border: none;
    border-radius: 20px;
    color: #ffff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export { Positioner, Header, Station, Bus, Mic, Save };
