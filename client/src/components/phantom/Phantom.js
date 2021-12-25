import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row, Table } from 'react-bootstrap'
import { PhantomContext } from '../../context/phantom'
import DeleteTaiXeModal from './DeleteTaiXeModal'
import SingleTaiXe from './SingleTaiXe'

const Phantom = () => {
    const {
        taiXeState: { taiXe, DSTaiXe },
        getAllTaiXe,
    } = useContext(PhantomContext)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getAllTaiXe(), [])

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h3>Danh sách tài xế</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Mã tài xế</th>
                                <th>Họ tên</th>
                                <th>Tài khoản ngân hàng</th>
                                <th>CMND</th>
                                <th>Địa chỉ</th>
                                <th>Biển số xe</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {DSTaiXe.map((taiXe) => (
                                <tr key={taiXe.MaTXe}>
                                    <SingleTaiXe taiXe={taiXe} />
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            {taiXe !== {} && <DeleteTaiXeModal />}
        </Container>
    )
}

export default Phantom
