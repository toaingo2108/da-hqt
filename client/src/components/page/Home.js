import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <Button size="lg" onClick={() => navigate('/hop-dong')}>
                        Lost update
                    </Button>
                </Col>
                <Col>
                    <Button size="lg" onClick={() => navigate('/phantom')}>
                        Phantom
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home