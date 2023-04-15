import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from "../components/Footer";
import Hamburger from '../components/Hamburger';
import HamburgerItem from '../components/HamburgerItem';

import { useMenuHandler } from "../utils/useMenuHandler"
import { useRouteError } from 'react-router-dom';

import ErrorIcon from '../components/ErrorIcon';

function Error() {

  const [ isOpen, openMenuHandler] = useMenuHandler(false);
  const error = useRouteError();

  return (
    <>
      <Hamburger open={isOpen}>
        <HamburgerItem navigateTo="/">Home</HamburgerItem>
        <HamburgerItem navigateTo="/items">Items</HamburgerItem>
        <HamburgerItem navigateTo="/collections">Collections</HamburgerItem>
        <HamburgerItem navigateTo="/exhibits">Exhibits</HamburgerItem>
        <HamburgerItem navigateTo="/about">About Us</HamburgerItem>
      </Hamburger>
      <Header navigateTo={"/"} hasMenu={true} hasTitle={true} title={"Digital Guafak"} containerStyle={{marginBottom: "2%"}} menuAction={openMenuHandler}/>
      <SubHeader 
        withSearchBarRight={false}
        leftContent={<ErrorIcon width={64} height={64}/>} 
        rightContent={<><h2>An error has occurred.</h2><p>Please notify the website administrator.</p></>}
        leftStyle={{textAlign: "center"}}
        rightStyle={{paddingLeft: "1%"}}
        containerStyle={{marginBottom: "50vh"}}
      />
      <div style={{minHeight: "100vh"}}>
        <p></p>
      </div>
      <Footer title="Digital Guafak" navigateTo={"/"} />
    </>
  );
}

export default Error;