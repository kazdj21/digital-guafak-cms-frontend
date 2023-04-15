import { Container, Row } from "react-bootstrap"

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import CardItem from "../components/CardItem";
import CardSet from "../components/CardSet";
import Footer from "../components/Footer";
import Hamburger from '../components/Hamburger';
import PlaceholderImg from "../assets/image.png";
import HamburgerItem from "../components/HamburgerItem";

import { useMenuHandler } from "../utils/useMenuHandler"
import { useLoaderData } from "react-router-dom";

export default function Display() {

    const [ isOpen, openMenuHandler ] = useMenuHandler(false);
    const data = useLoaderData();

    console.log(data);

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
          rightContent={<><h2>Guam Times Weekly</h2><p>From the collection: GTW</p></>}
          backButtonLeft={true}
          leftStyle={{paddingLeft: "5%", paddingTop: "1%"}}
          rightStyle={{paddingLeft: "5%"}}
        />
        <Container fluid style={{minHeight: "100vh"}}>
          <Row style={{paddingBottom: "10%"}}>
            <CardSet paddingY={3} marginY={3} cardSetStyle={{display: "flex", justifyContent: "center"}}>
                  <CardItem imageContainerSize={1} textContainerSize={9} textDirection="center" imageSrc={PlaceholderImg} description="yes" cardStyle={{maxWidth: "50vw", maxHeight: "25vh"}}></CardItem>
            </CardSet>
          </Row>
          <Row>
            <Container fluid style={{paddingTop: "15%"}}>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Title: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Creator: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Publisher: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Source: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Format: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Language: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Type: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Identifier: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Coverage: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Original Format: </p>
              <p style={{marginLeft: "15vw", marginRight: "15vw"}}>Call Number: </p>
            </Container>
          </Row>
        </Container>
        <Footer title="Digital Guafak" navigateTo={"/"} />
      </>
    );

}

