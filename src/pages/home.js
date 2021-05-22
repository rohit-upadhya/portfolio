import React from 'react';
import {Container} from 'react-bootstrap'
import Media from 'react-media';


const PartOne = () => {
    return (
        <Container className="p-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                <Container className="p-3" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{
                    marginLeft: "25px"
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
                <Container className="p-3" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{
                    marginLeft: "25px"
                }}>
                    <h2>
                        Hello
                    </h2>
                </Container>
            </div>
        </Container>
    );
}

const PartTwo = () => {
    return (
        <h1>asdfads</h1>
    );
}

const ScreenSize = () => {
    return (
        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
            {matches => (
              <>
                {matches.small && <p>I am small!</p>}
                {matches.medium && <PartOne />}
                {matches.large && <PartOne />}
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