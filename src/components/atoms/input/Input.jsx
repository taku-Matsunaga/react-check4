import React from 'react'
import styled from 'styled-components';


const Input = (props) => {
  const { placeholder = "" } = props;

  return (
    <>
      <SInput type="text" placeholder={placeholder} />
    </>
  )
}

const SInput = styled.input`
padding: 8px 16px;
border: 1px solid #ddd;
border-radius: 9999px;
outline: none;
`

export default Input
