import React from 'react';
import profile from '../static/hi.png'
import {Container, Card, Button, Jumbotron, Col, Row} from 'react-bootstrap'
import Media from 'react-media';
import ReactPlayer from "react-player";
import '../App.css';
import TimeLine from '../components/timeline'

const title = "Hi There!";
const aboutMe = `I am a Software Engineer based in Bangalore, India. I hail from the lovely city of Shillong, also known as the Scotland of the East. I am an avid programmer and I mostly code in Java, Python & JavaScript. I like to keep myself updated on all the new things happening in the world of Technology. I have a keen interest in Cryptography and Machine Learning as well. Theory of Computation, Automata Theory, and Turing Machines are topics that I like to visit often and ponder over. Currently, however, I am also trying to understand and apply Blockchain technology in my projects.`;
const interests = `Besides being a little bit geeky, I also enjoy reading. I am especially fond of Japanese writers. I like to cook often, mostly Indian. I enjoy speaking publically, i like to make my ideas heard and understood. 
I also enjoy playing games, I absolutely enjoy Age of Empires and other stratergy games. Lastly, although I am a novice at this, I also like to write.`;

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
                                {aboutMe} <br></br>
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
        <Jumbotron style={{ height: '15%', backgroundColor: "#404040", width: '100%' }}>
            <Container >
                <Row>
                    <Col>
                        <Card style={{ width: '100%', height: '463px' }}> 
                            <Card.Img variant="bottom" src={profile} />
                            {/* <Card.Body>
                                <Card.Title>Hi There!</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body> */}
                        </Card>
                    </Col>
                    <Col style={{ width: '' }}>
                        <Card style={{ width: '100%', height: '463px'}} > 
                            {/* <Card.Img variant="top" src={profile} /> */}
                             <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text className='fonty'>
                                    {aboutMe} <br></br>
                                    {/* {interests} */}
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
                <Container style={{
                    width: '100%',
                    paddingBottom: '50px',
                    paddingTop : '50px'
                }}>
                    <RightBig />
                </Container>
        </Container>
    );
}

const PartTwo = () => {
    return (
        <Container > 
            <TimeLine />
        </Container>
    );
}

const PartOneHalf = () => {
    return (
        <Container style={{padding: "90px"}}>
        </Container>
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
                        <RightSmall />}
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
            {/* <PartOneHalf /> */}
            <PartTwo />
        </Container>
        
    );
}

export default Home;