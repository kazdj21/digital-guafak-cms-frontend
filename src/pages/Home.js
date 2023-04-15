import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import CardItem from "../components/CardItem";
import CardSet from "../components/CardSet";
import Footer from "../components/Footer";
import Hamburger from '../components/Hamburger';
import PlaceholderImg from "../assets/image.png";
import HamburgerItem from '../components/HamburgerItem';

import { useMenuHandler } from "../utils/useMenuHandler"

function Home() {

  const [ isOpen, openMenuHandler ] = useMenuHandler(false);

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
      <div style={{minHeight: "100vh"}}>
        <SubHeader 
          withSearchBarRight={true} 
          leftContent={<><h2>Lorem ipsum dolor sit amet</h2><p>consectetur adipiscing elit</p></>}
          leftStyle={{paddingLeft: "1%"}}
          rightStyle={{paddingLeft: "3%", paddingTop: "2%"}}
        />
        <CardSet paddingY={5} marginY={5}>
            <CardItem textDirection="center" imageSrc={PlaceholderImg} navigateTo={"/items"} title="Items"></CardItem>
            <CardItem textDirection="center" imageSrc={PlaceholderImg} navigateTo={"/collections"} title="Collections"></CardItem>
            <CardItem textDirection="center" imageSrc={PlaceholderImg} navigateTo={"/exhibits"} title="Exhibits"></CardItem>
        </CardSet>
      </div>
      <Footer title="Digital Guafak" navigateTo={"/"} />
    </>
  );
}

export default Home;
