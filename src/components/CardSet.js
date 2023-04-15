import { Row, Col, Container, CardGroup } from "react-bootstrap"

function CardSet({ children, paddingY, paddingX, marginX, marginY, useRows, cardSetStyle }) {

    return <CardGroup className={`px-${paddingX || 0} py-${paddingY || 0} mx-${marginX || 0} my-${marginY || 0}`} style={{minHeight: "10vh", ...cardSetStyle}}>
        { useRows? [children].map((item) => <Row>{item}</Row>) : [children].map((item) => item)}
    </CardGroup>

}

export default CardSet;