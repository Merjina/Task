import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { AiOutlineClose } from "react-icons/ai";
import { TbCircleLetterC } from "react-icons/tb";
import './Task.css';

function Task() {
    return (
        <div className="bg-dark text-white vh-200 d-flex align-items-center ">
            <Container>
                <div className="d-flex justify-content-end mt-3">
                    <AiOutlineClose size={24} />
                </div>
                <Row className="justify-content-center mb-3">
                    <Col md="auto" className="text-center mt-5">
                        <p className='para1' style={{ fontSize: '25px' }}>
                            Epic Games: An American Video Game And Software Developer<br />
                            And Publisher Based in Cary, North Carolina.
                        </p>
                        <Image src="/Images/Fortnite.jpg" className="img" fluid />
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col md="auto" className="text-center mt-3">
                        <div className="paragraph">
                            <p style={{ fontSize: '12px', marginRight:'150px' }}>
                                Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or <br />live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more. Each Fortnite island has <br />an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite... Drop In.
                            </p>
                        </div>

                        <Button type='button' className='btn btn-light mt-3'>
                            Visit Website
                        </Button>

                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3} sm={6} xs={12} className="mb-4 text-center mt-5">
                        <Image src="/Images/Fortnite1.jpg" className="img1 mt-5 mb-2" />
                        <p className='para'>Explore Large, Destructible environment Where No Two Games Are Ever The Same</p>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4 text-center mt-5">
                        <Image src="/Images/secondimg.webp" className="img1 mt-5 mb-2" />
                        <p className='para'>Team Up With Friends By Sprinting, Climbing And Smashing Your Way To Earn Your Victory Royale</p>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4 text-center mt-5">
                        <Image src="/Images/thirdimg.webp" className="img1 mt-5 mb-2" />
                        <p className='para'>Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres</p>
                    </Col>
                </Row>

                <Row className="justify-content-md-center mt-5 mb-4">
                    <Col md="auto" className="text-center">
                        <h3>Our Contribution</h3>
                        <p className="paragraph1 mt-4" style={{ fontSize: '12px' }}>
                            Our core offering extends beyond mere profit generation, we emphasize the growth and active involvement of our user<br />
                            community. Collaborating with us represent an investment, rather than a mere expenditure. Our dedication to providing<br />
                            distinctive digital interaction guarantees unparalleled benefits for our clientele.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col md={3} sm={6} xs={12} className="mb-4 text-center" style={{ fontSize: '15px' }}>
                        <h2>5M</h2>
                        <p>Daily User <br /> Engagements</p>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4 text-center">
                        <h2>$500K</h2>
                        <p>Revenue Surge for an <br />platform</p>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4 text-center">
                        <h2>10X</h2>
                        <p>ROAS on all our <br />marketing campaigns</p>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center mt-5">
                    <Col md="auto">
                        <h4>Interested In Delving Deeper Into The Project?</h4>
                        <p className='mt-3' style={{ fontSize: '15px' }}>
                            If you'd like to explore further details about our initiatives or any of our <br />affiliated brands, don't hesitate to connect. You can reach out to us via <br />email at<strong> hello@abc.com </strong>or give us a call at <strong>+91 480 20802730</strong>.
                        </p>
                        <div className="d-flex justify-content-center mt-5 ">
                            <Button type='button' className=' btn-outline-light bg-dark me-2 button'>
                                Ring us on Skype
                            </Button>
                            <Button type='button' className=' btn-light button '>
                                Contact Us
                            </Button>
                        </div>
                    </Col>
                </Row><br />
                <br />
                <div className="justify-content-center text-center mt-5 small">
                    <small>
                        <TbCircleLetterC size='15' />2018-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</small>
                </div>


            </Container>
        </div>
    );
}

export default Task;
