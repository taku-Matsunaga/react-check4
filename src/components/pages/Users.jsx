// import { useContext } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
// import { UserContext } from '../../provider/UserProvider';
import { userState } from '../../store/userState';
import Secondarybutton from '../atoms/button/SecondaryButton';
import Searchinput from '../molecules/SearchInput';
import Usercard from '../organisms/user/UserCard';

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `testdesu-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "test@example.com",
    phone: "000-0000-0000",
    company: {
      name: "aaa,inc"
    },
    website: "https://www.yahoo.co.jp/"
  }
}))

const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);

  const [ userInfo, setUserInfo ] = useRecoilState(userState);

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin })
  }

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <Searchinput />
      <br/>
      <Secondarybutton onClick={onClickSwitch}>切り替え</Secondarybutton>
      <SUserArea>
        {users.map((user) => (
          <Usercard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
text-align: center;
flex-direction: column;
display: flex;
align-items: center;
padding: 24px;
`

const SUserArea = styled.div`
padding-top: 40px;
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 20px;
`

export default Users
