import { Col, Row, Container } from "react-bootstrap";
import SocialMediaSet from "./SocialMediaSet";

function Footer({ title, containerStyle, textStyle, navigateTo }) {

    return (
        <Container fluid style={{backgroundColor: "#001F3F", position: "relative", bottom: "0", marginBottom: 0, ...containerStyle}} className="py-5 mt-5">
            <Row>
                <a href={navigateTo} style={{textDecoration: "none"}}><h4 style={{color: "white", ...textStyle}}>{title}</h4></a>
            </Row>
            <Row>
                <SocialMediaSet />
            </Row>
        </Container>
    );

};

export default Footer;