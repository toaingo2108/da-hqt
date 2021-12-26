import React, { useContext, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { UnrepeatableReadContext } from '../../context/unrepeatableRead'
import SingleKhuVuc from '../deadlock/SingleKhuVuc'
import ListTaiXeKhuVuc from './ListTaiXeKhuVuc'

const Deadlock = () => {
    const {
        khuVucState: { DSKhuVuc },
        getAllKhuVuc,
    } = useContext(UnrepeatableReadContext)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => await getAllKhuVuc(), [])

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h3>DANH SÁCH KHU VỰC</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Mã</th>
                                <th>Tỉnh</th>
                                <th>Huyện</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {DSKhuVuc.map((khuvuc) => (
                                <tr key={khuvuc.MaKVuc}>
                                    <SingleKhuVuc khuvuc={khuvuc} />
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <ListTaiXeKhuVuc />
        </Container>
    )
}

export default Deadlock
