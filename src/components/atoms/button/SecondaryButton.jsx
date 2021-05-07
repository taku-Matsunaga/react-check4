import React from 'react'
import styled from 'styled-components';
import BaseButton  from "./BaseButton"

const Secondarybutton = (props) => {
  const { children } = props;

  return (
    <>
      <SButton>{children}</SButton>
    </>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`

export default Secondarybutton