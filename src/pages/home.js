import React from 'react';
import {Container} from 'react-bootstrap'


const Home = () => {
    return (
        <Container className="p-3" ollapseOnSelect expand="lg" bg="dark" variant="dark">
            <div style={{
                height: "100%",
                width: "50%",
                position: "fixed",
                zIndex: "1",
                top: "1",
                paddingTop: "20px",
                paddingLeft: "20px",
                left: "0",
            }}>
                <Container className="p-3" ollapseOnSelect expand="lg" bg="dark" variant="dark" style={{
                    marginLeft: "125px"
                }}>
                    <h2>
                        Hellosdcfbscfhbsfb
                    </h2>
                </Container>
            </div>
            <div style={{
                height: "100%",
                width: "50%",
                position: "fixed",
                zIndex: "1",
                top: "1",
                paddingTop: "20px",
                paddingLeft: "20px",
                right: "0",
                backgroundColor: "#000"
            }}>
                <Container>
                    <h2>
                        Hello
                    </h2>
                </Container>
            </div>
        </Container>
        
    );
}

export default Home;