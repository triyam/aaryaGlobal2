import React from 'react'
import Header from './Header'
import HeaderSection from './HeaderSection';
import Footer from './Footer/Footer';
import Reco from './Recommend/Reco';
import Main from './Main/Main';
import TabPanel from './Dashboard/Tabpanel';
import Login from './Login';

const Homepage = () => (
<>
<div>

{/* <SignInSide/> */}
    {/* <TabPanel/> */}
    <Header/>
    <HeaderSection/>
    <Main/>
    <Reco/>
    <Footer/>

</div>
</>

    )

export default Homepage