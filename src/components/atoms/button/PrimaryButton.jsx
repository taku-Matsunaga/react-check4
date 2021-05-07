import React from 'react'
import styled from 'styled-components';
import BaseButton  from "./BaseButton"

const Primarybutton = (props) => {
  const { children } = props;

  return (
    <>
      <SButton>{children}</SButton>
    </>
  )
}

const SButton = styled(BaseButton)`
  background-color: #405143;
`

export default Primarybutton
