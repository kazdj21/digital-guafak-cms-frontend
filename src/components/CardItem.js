import { Card, Col, Row, Container } from "react-bootstrap";

function CardItem({ cardDirection, textDirection, 
    hasBorder, title, description, 
    textStyle, titleStyle, descriptionStyle, imageSrc,
    imageContainerSize=1, textContainerSize=11, imageVariant="top",
    cardStyle, navigateTo }) {

    const styling = {
        leftTextDirection: {
            textAlign: "left",

        },
        centerTextDirection: {
            textAlign: "center",
        },
        rightTextDirection: {
            textAlign: "right",
        }
    };

    let defaultTextStyle = styling.leftTextDirection;

    switch (textDirection) {

        case "left":
            defaultTextStyle = styling.leftTextDirection;
            break;
        case "center":
            defaultTextStyle = styling.centerTextDirection;
            break;
        case "right":
            defaultTextStyle = styling.rightTextDirection;

    }

    if (cardDirection == "horizontal") {

        return (
            <Card className={!hasBorder? "border-0 my-1 py-1" : "my-1 py-1"} style={{...cardStyle}}>
                <Container className={!hasBorder? "border-0 mx-1 px-1" : "mx-1 px-1"}>
                    <Row>
                        <Col lg={imageContainerSize} md={imageContainerSize} sm={imageContainerSize} xs={imageContainerSize} >
                            { navigateTo? <a href={navigateTo} style={{color: "inherit", textDecoration: "none"}}><Card.Img src={imageSrc} variant={imageVariant}></Card.Img></a> : <Card.Img src={imageSrc} variant={imageVariant}></Card.Img>}
                        </Col>
                        <Col lg={textContainerSize} md={textContainerSize} sm={textContainerSize} xs={textContainerSize}>
                            {
                                navigateTo? <><a href={navigateTo} style={{color: "inherit", textDecoration: "none"}}><Card.Title style={{...defaultTextStyle, ...textStyle, ...titleStyle}}>{title || "Item"}</Card.Title></a><a href={navigateTo} style={{color: "inherit", textDecoration: "none"}}><Card.Text style={{...defaultTextStyle, ...textStyle, ...descriptionStyle}}>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</Card.Text>  </a></> : <><Card.Title style={{...defaultTextStyle, ...textStyle, ...titleStyle}}>{title || "Item"}</Card.Title><Card.Text style={{...defaultTextStyle, ...textStyle, ...descriptionStyle}}>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</Card.Text></>     
                            }                      
                        </Col>
                    </Row>
                </Container>
            </Card>
        );

    }

    return (
        <Card className={!hasBorder? "border-0 mx-4 my-4" : "mx-4 my-4"} style={{...cardStyle}}>
            { navigateTo? <a href={navigateTo} style={{color: "inherit", textDecoration: "none"}}><Card.Img src={imageSrc} variant="top"></Card.Img></a> : <Card.Img src={imageSrc} variant="top"></Card.Img>}
            { navigateTo? <a href={navigateTo} style={{color: "inherit", textDecoration: "none"}}><Card.Title style={{...defaultTextStyle, ...textStyle, ...titleStyle}}>{title || "Item"}</Card.Title></a> : <Card.Title style={{...defaultTextStyle, ...textStyle, ...titleStyle}}>{title || "Item"}</Card.Title>}
            { navigateTo? <a href={navigateTo} style={{color: "inherit", textDecoration: "none"}}><Card.Text style={{...defaultTextStyle, ...textStyle, ...descriptionStyle}}>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</Card.Text></a> : <Card.Text style={{...defaultTextStyle, ...textStyle, ...descriptionStyle}}>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</Card.Text>}
        </Card>
    );
    
}

export default CardItem;