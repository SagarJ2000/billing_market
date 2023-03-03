import React from 'react'
import { Outlet } from 'react-router-dom';
import AccountNavBar from '../Layout/AccountNavBar';



function AccountantDashBoard() {
  return (
    <>
        <AccountNavBar/>

        <Outlet/>
    </>
  )
}

export default AccountantDashBoard;