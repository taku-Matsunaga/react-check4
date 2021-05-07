import React from 'react'
import styled from 'styled-components';
import Primarybutton from '../atoms/button/PrimaryButton'
import Input from '../atoms/input/Input'

const Searchinput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWraper>
        <Primarybutton>検索</Primarybutton>
      </SButtonWraper>
    </SContainer>
  )
}

const SContainer = styled.div`
display:flex;
align-items: center;
`

const SButtonWraper = styled.div`
padding-left: 8px;
`

export default Searchinput
