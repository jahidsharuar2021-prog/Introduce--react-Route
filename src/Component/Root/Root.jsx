import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import "./root.css"

const Root = () => {
  const navigation=useNavigation();
  const isNavigating=Boolean(navigation.loaction)
    return (
      <div>
        <Header></Header>

        <div className='root-style'>
          <Sidebar></Sidebar>
          {isNavigating&&<span>Loading....</span>}
          <Outlet></Outlet>
        </div>
        
        <Footer></Footer>
      </div>
    );
};

export default Root;