import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPage/Footer/Footer';
import Headers from '../Pages/SharedPage/Header/Headers';
import LeftSideNav from '../Pages/SharedPage/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>


        </div>
    );
};

export default Main;