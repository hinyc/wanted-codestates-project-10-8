import React from 'react';
import styled from 'styled-components';

const ForestCard = React.forwardRef(
  ({ dataObj, setModalOpen, setSelectList }, ref) => {
    const { fcNm: name, fcAddr: address, ref1: phoneNumber, memo } = dataObj;
    const clickHandler = () => {
      setModalOpen(true);
      setSelectList({ name, address, phoneNumber });
    };
    return (
      <Card ref={ref} onClick={clickHandler}>
        <h3>{name}</h3>
        <div>📍 {address}</div>
        <div>📞 {phoneNumber}</div>
        <div>{memo && memo}</div>
      </Card>
    );
  },
);

const Card = styled.article`
  width: 362px;
  height: 135px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px 17px;
  background: rgba(203, 206, 205, 0.5);

  margin-top: 10px;
  h3 {
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 8px;
  }
  div {
    font-size: 16px;
    line-height: 18px;
  }
`;
export default ForestCard;
