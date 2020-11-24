import styled from "styled-components";

const Background = styled.div`
  width: 360px;
  height: 640px;
  @media screen and (min-width: 0px) and (max-width: 360px) and (max-height: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    span {
      margin-top: 30px;
      font-size: 20px;
    }
    div {
      font-size: 12px;
      color: #c0c2d1;
    }
    #value_wrap {
      margin-top: 36px;
      width: 160px;
      height: 30px;
      border-radius: 25px;
      outline: none;
      border: none;
      background-color: #2478ff;
      filter: drop-shadow(0px 2px 4px rgba(76, 136, 251, 0.78));
      padding: 5px 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffff;
      font-size: 14px;
    }
  }
`;
export { Background };
