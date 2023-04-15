
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import CardItem from "../components/CardItem";
import CardSet from "../components/CardSet";
import Footer from "../components/Footer";
import Hamburger from '../components/Hamburger';
import PlaceholderImg from "../assets/image.png";
import SearchBar from "../components/SearchBar";
import HamburgerItem from '../components/HamburgerItem';

import { useMenuHandler } from "../utils/useMenuHandler"

function Items() {

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
        <SubHeader 
          leftContent={<><h2>Items</h2><p>A comprehensive list of our digitized items.</p></>}
          leftStyle={{paddingLeft: "1%"}}
          rightStyle={{paddingLeft: "3%", paddingTop: "2%"}}
        />
        <SearchBar searchBarStyle={{marginTop: "1%", textAlign: "center"}}/>
        <div style={{minHeight: "100vh"}}>
            <CardSet paddingY={3} marginY={3} useRows={true}>
                <CardItem navigateTo={"/display/1"} imageContainerSize={3} textContainerSize={9} cardDirection="horizontal" textDirection="left" imageSrc={PlaceholderImg} description="yes" cardStyle={{width: "100vw"}} textStyle={{textDecoration: "none !important"}}></CardItem>
                <CardItem navigateTo={"/display/1"} imageContainerSize={3} textContainerSize={9} cardDirection="horizontal" textDirection="left" imageSrc={PlaceholderImg} description="yes" cardStyle={{width: "100vw"}} textStyle={{textDecoration: "none !important"}}></CardItem>
                <CardItem navigateTo={"/display/1"} imageContainerSize={3} textContainerSize={9} cardDirection="horizontal" textDirection="left" imageSrc={PlaceholderImg} description="yes" cardStyle={{width: "100vw"}} textStyle={{textDecoration: "none !important"}}></CardItem>
            </CardSet>
        </div>
        <Footer title="Digital Guafak" navigateTo={"/"} />
      </>
    );

}

export default Items;