import React from 'react';
import profile from '../static/hi.png'
import {Container, Card, Button, Jumbotron, Col, Row} from 'react-bootstrap'
import Media from 'react-media';
import ReactPlayer from "react-player";
import '../App.css';

const title = "Hi There!";
const aboutMe = `I am a Software Engineer based in Bangalore, India. I hail from the Scotland of the East - Shillong. \n
 I like to code in Java, Python and Javascript.\n`;


const RightSmall = () => {
    return (
        <Container style={{paddingTop:'10px', paddingBottom:'5px' }}>
            <Jumbotron style={{ backgroundColor: "#404040" }}>
                <Container 
                style={{ width: '22rem',
                margin: 'auto',
                paddingTop: '20px' }}>
                    <Card> {/*style={{ width: '18rem' }}> */}
                        <Card.Img variant="top" src={profile} />
                        {/* <Card.Body>
                            <Card.Title>Hi There!</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body> */}
                    </Card>
                    <br></br>
                    <Card>
                        {/* <Card.Img variant="top" src={profile} /> */}
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {aboutMe}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Jumbotron>
        </Container>

    );
};

const YoutubeVideo = () => {
    return (
        <Container >
            <ReactPlayer url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"/>            
        </Container>


        // <Jumbotron style={{height: '15%', backgroundColor: "#323232"}}>
        //     <Container>
        //         <div style={{position:'relative', width:'70%'}}>
        //             <ReactPlayer url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"/>
        //         </div>
        //     </Container>
        // </Jumbotron>
    );
}

const RightBig = () => {
    return (
        <Jumbotron style={{ height: '15%', backgroundColor: "#404040" }}>
            <Container >
                <Row>
                    <Col>
                        <Card style={{ width: '100%' }}> 
                            <Card.Img variant="top" src={profile} />
                            {/* <Card.Body>
                                <Card.Title>Hi There!</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body> */}
                        </Card>
                    </Col>
                    <Col style={{ width: '' }}>
                        <Card> 
                            {/* <Card.Img variant="top" src={profile} /> */}
                             <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {aboutMe}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </Jumbotron>
    );
};

const PartOne = () => {
    return (
        <Container>
            <div style={{
                height: "100%",
                width: "50%",
                position: "fixed",
                zIndex: "1",
                top: "1",
                padding: "20px",
                left: "0"
            }} className='background'>
                <Container style={{
                    
                }}>
                    <RightBig />
                </Container>
            </div>
            <div style={{
                height: "100%",
                width: "50%",
                position: "fixed",
                zIndex: "1",
                top: "1",
                padding: "20px",
                right: "0",
                backgroundColor: "#404040"
            }} className='background'>
                <Container style={{
                    
                }}>
                    <h3 className='fonty'>
                        Video of the Week!
                    </h3>
                    <YoutubeVideo />
                </Container>
            </div>
        </Container>
    );
}

const PartTwo = () => {
    return (
        <> </>
    );
}

const ScreenSize = () => {
    return (
        <Media queries={{
            small: "(max-width: 699px)",
            medium: "(min-width: 700px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
            {matches => (
              <>
                {matches.small && 
                            <RightSmall />
                }
                {matches.medium && 
                        <PartOne />}
                {matches.large && 
                        <PartOne />}
              </>
            )}
          </Media>
    );
}

const Home = () => {
    return (
        <Container>
            <ScreenSize />
        </Container>
        
    );
}

export default Home;