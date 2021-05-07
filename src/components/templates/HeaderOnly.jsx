import React from 'react'
import Header from '../atoms/layout/Header';

const Headeronly = (props) => {
  const { children } = props;

  return (
    <>
      <Header style={{ height: "50px", backgroundColor: "red" }}></Header>
      {children}
    </>
  )
}

export default Headeronly
