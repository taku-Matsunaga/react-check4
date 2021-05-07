import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
// import { UserContext } from '../../../provider/UserProvider';
import { userState } from '../../../store/userState';


const Usericonwithname = (props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);

  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <div>編集</div> }
    </SContainer>
  )
}

const SContainer = styled.div`
text-align: center;
`

const SImg = styled.img`
border-radius: 50%;
`

const SName = styled.p`
font-size: 18px;
font-weight: bold;
margin: 0;
color: #40514e
`

export default Usericonwithname
