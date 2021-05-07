import React from 'react'
import { RecoilRoot } from 'recoil';
import Userprovider from './provider/UserProvider';
import Router from './router/Router';

function App() {
  return (
    <RecoilRoot>
      <Userprovider>
        <Router />
      </Userprovider>
    </RecoilRoot>
  );
}

export default App;
