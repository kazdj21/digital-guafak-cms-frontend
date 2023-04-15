import { Col, Row } from "react-bootstrap";
import SocialMediaButton from "./SocialMediaButton";

function SocialMediaSet() {

    return (
        <>
        <Row>
            <Col>
                <SocialMediaButton icon="twitter" link="https://www.twitter.com" />
                <SocialMediaButton icon="facebook" link="https://www.facebook.com" />
            </Col>
        </Row>
        </>
    );

}

export default SocialMediaSet;