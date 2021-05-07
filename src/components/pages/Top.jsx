import React from "react"
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from 'styled-components';
// import { UserContext } from "../../provider/UserProvider";
import { userState } from "../../store/userState";
import Secondarybutton from "../atoms/button/SecondaryButton";

const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users")
  }

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users")
  }

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <Secondarybutton onClick={onClickAdmin}>管理者ユーザー</Secondarybutton>
      <br />
      <br />
      <Secondarybutton onClick={onClickGeneral}>一般ユーザー</Secondarybutton>
    </SContainer>
  )
}

const SContainer = styled.div`
text-align: center;
`

export default Top
