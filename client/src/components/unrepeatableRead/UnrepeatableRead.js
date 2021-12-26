import React, { useContext, useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { UnrepeatableReadContext } from '../../context/unrepeatableRead'
import ChangeKhuVucTaiXe from './ChangeKhuVucTaiXe'
import ListTaiXeKhuVuc from './ListTaiXeKhuVuc'
import SingleKhuVuc from './SingleKhuVuc'

const UnrepeatableRead = () => {
    const {
        khuVucState: { DSKhuVuc },
        getAllKhuVuc,
        setShowChange,
    } = useContext(UnrepeatableReadContext)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => await getAllKhuVuc(), [])

    const handleThayDoiKhuVucTaiXe = () => {
        setShowChange(true)
    }

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <Button variant="info" onClick={handleThayDoiKhuVucTaiXe}>
                        Thay đổi khu vực tài xế
                    </Button>
                </Col>
            </Row>
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
            <ChangeKhuVucTaiXe />
        </Container>
    )
}

export default UnrepeatableRead
