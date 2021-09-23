import React, { useState } from 'react';
import styled from 'styled-components';

const ProductQuantityContainer = styled.div`
    height: 10vh;
  width: 12vw;
  border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: flex;

        input {
            width: 4vw;
            text-align: center; 
        }
`;

const StyledButton = styled.button`
    width: 4vw;
    height: 10vh;
    font-size: 2em;
    color: white;
    background-color: green;
    text-align: center;
`;

const ProductQuantity = () => {
    
    const [ value, setValue ] = useState(0);

    const decrement = () => {
        setValue(prevValue =>prevValue === 0 ? 0 : prevValue - 1)
    };

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    return (
        <ProductQuantityContainer>
            <StyledButton onClick={decrement}>-</StyledButton>
            <input type="text" value={value} readOnly />
            <StyledButton onClick={increment}>+</StyledButton>
        </ProductQuantityContainer>
    )
}

export default ProductQuantity;