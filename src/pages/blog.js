import '../App.css';
import {Container, Card, CardDeck, Button, Jumbotron, Col, Row} from 'react-bootstrap';
import React from 'react';

const Cards = () => {
    return (

        <>
            <Container style={{
                        width: '100%',
                        paddingTop : '50px'
            }}>
                <CardDeck >
                    <Card className="cards">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="cards">
                        <a href="#" style={{color: "black"}}><Card.Title>Card title</Card.Title></a>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="cards">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="cards">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>           
            </Container>

            <Container style={{
                        width: '100%',
                        paddingBottom: '50px',
                        paddingTop: '40px'
            }}>
                <CardDeck >
                    <Card className="cards">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="cards">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="cards">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="cards">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>

            </Container>
        </>
    );
}

const Blog = () => {
    return(
        <Cards />
    );
}

export default Blog;
