import { Container, Row } from "react-bootstrap";

import HamburgerCloseButton from "./HamburgerCloseButton";

function HamburgerMenu({ children, isHidden=true, toggleSignal }) {

    return (
    <Container style={{position: "absolute", height: "100%", 
                        width: isHidden? "0%" : "50%", backgroundColor: "#FF7F50", 
                        zIndex: "2", transition: "width 0.5s", padding: 0, margin: 0}}>
        {
            !isHidden?
            <>
                    <Row style={{paddingTop: 12, position: "relative"}}>
                        <HamburgerCloseButton onClick={toggleSignal}/>
                    </Row>

                    <Row style={{paddingTop: 12, position: "relative"}}>
                        <ul style={{listStyle: "none", margin: 0, padding: 0, paddingLeft: 12}}>
                            {[children].map((item) => (<li key={item ? item.hasOwnProperty("id") ? item.id : null : null} style={{fontSize: "2rem"}}>{item}</li>))}
                        </ul>
                    </Row>
            </> : null
        }

    </Container>
    );

}

export default HamburgerMenu;