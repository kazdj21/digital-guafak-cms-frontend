import { Container, Row, Col } from "react-bootstrap";
import { lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const SearchBarPreview = lazy(() => import('./SearchBar'))
const BackButtonPreview = lazy(() => import('./BackButton'))

function SubHeader({ withSearchBarRight, withSearchBarLeft, 
                    backButtonRight, backButtonLeft, color, 
                    leftContent, rightContent,
                    containerStyle, leftStyle, rightStyle }) {

    return (
        <Container fluid style={{paddingTop: '2%', paddingBottom: '2%', margin: 0, backgroundColor: color ? color : "#FF7F50", ...containerStyle}}>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} style={{padding: 0, margin: 0, overflowX: "hidden", ...leftStyle}}>
                    {withSearchBarLeft && !withSearchBarRight && (!backButtonLeft)? <Suspense fallback={<p>Loading</p>}><SearchBarPreview></SearchBarPreview></Suspense>: null}
                    {!(withSearchBarLeft || backButtonLeft) && leftContent? leftContent : null}
                    {!withSearchBarLeft && backButtonLeft? <Suspense fallback={<h1>Loading</h1>}><BackButtonPreview /></Suspense> : null}
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} style={{padding: 0, margin: 0, overflowX: "hidden", ...rightStyle}}>
                    {withSearchBarRight && !withSearchBarLeft && (!backButtonRight)? <Suspense fallback={<p>Loading</p>}><SearchBarPreview></SearchBarPreview></Suspense> : null}
                    {!(withSearchBarRight || backButtonRight ) && rightContent? rightContent : null}
                    {!withSearchBarRight && backButtonRight? <Suspense fallback={<h1>Loading</h1>}><BackButtonPreview /></Suspense> : null}
                </Col>
            </Row>
        </Container>
    );

}

export default SubHeader;