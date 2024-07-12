import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Task() {
    return (
        <div className="bg-dark text-white">
            <Container className="h-100 mt-1 d-flex flex-column justify-content-center">
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto" className="text-center">
                        <h4>
                            Epic Games: An American Video Game And Software Developer<br />
                            And Publisher Based in Cary, North Carolina
                        </h4>
                        <Image src="/Images/Fortnite.jpg" fluid />
                        <p>
                            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or <br />live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more. Each Fortnite island has <br />an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite... Drop In.
                        </p>
                        <Button type='button' className='btn btn-light'>
                            Visit Website
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3} className="mb-4">
                        <Image src="/Images/Fortnite.jpg" className="w-100" />
                        <p className="text-center">Explore Large, Destructible Environments Where No Two Games Are Ever The Same</p>
                    </Col>
                    <Col md={3} className="mb-4">
                        <Image src="/Images/Fortnite.jpg" className="w-100" />
                        <p className="text-center">Team Up With Friends By Sprinting, Climbing And Smashing Your Way To Earn Your Victory Royale</p>
                    </Col>
                    <Col md={3} className="mb-4">
                        <Image src="/Images/Fortnite.jpg" className="w-100" />
                        <p className="text-center">Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto" className="text-center">
                        <h3>
                            Our Contribution
                        </h3>

                        <p className="text-center">
                            Our core offering extends beyond mere profit generation, we emphasize the growth and active involvement of our user 
                            community. Collaborating with us represent an investment, rather than a mere expenditure. Our dedecation to providing
                             distinctive digital interaction guarentees unparalleled benefitss for our clientiele
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3} className="mb-4 text-center">
                         <h2>5M</h2>
                         <p >Daily User Engagements</p>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <h2>$500K</h2>
                         <p>Revenue Surge for an platform</p>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <h2>10X</h2>
                        <p>ROAS on all our marketing campaigns</p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default Task;
