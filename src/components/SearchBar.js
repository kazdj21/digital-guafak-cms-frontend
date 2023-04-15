import { Form, Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import SearchIcon from "./SearchIcon"

function SearchBar({ searchBarStyle }) {

    return (
        <Form style={{...searchBarStyle}} className="container-fluid">
            <Form.Group>
                <Row>
                    <Col xs={8} sm={8} md={8} lg={9} style={{padding: 0, paddingLeft: "1%"}}>
                        <Form.Control type="text" placeholder="Search.."></Form.Control>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={3} style={{padding: 0}}>
                        <Button variant="primary" type="Submit" onClick={(e) => e.preventDefault()}> <SearchIcon></SearchIcon> Submit</Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    );

}

export default SearchBar;