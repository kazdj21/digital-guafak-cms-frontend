import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Menu from "./Menu";

function Header({ hasMenu, hasTitle, title, textStyle, menuStyle, containerStyle, menuAction, navigateTo }) {

    return (
    <Container fluid style={{backgroundColor: "#001F3F", paddingTop: "2%", paddingBottom: "2%", ...containerStyle}}>
        <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
                <Col lg={1}>
                    {hasMenu ? <Menu width={48} height={48} menuStyle={menuStyle} onClick={menuAction}/> : null}
                </Col>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                {hasTitle ? <a href={navigateTo}><h1 style={{color: "white", fontSize: "1.75rem", marginBottom: 0, display:"inline-block", whiteSpace: "nowrap", ...textStyle}}>{title}</h1></a> : null}
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} aria-hidden={true} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            </Col>
        </Row>
    </Container>
    );

}

export default Header;