import React, { useContext, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Context } from '../../context'
import SingleHopDong from './SingleHopDong'
import UpdateHopDongModal from './UpdateHopDongModal'

const HopDong = () => {
    // Contexts
    const {
        hopDongState: { hopDong, DSHopDong },
        getAllHopDong,
    } = useContext(Context)

    useEffect(() => {
        getAllHopDong()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h3>Danh sách hợp đồng</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Mã</th>
                                <th>Tên người đại diện</th>
                                <th>CMND</th>
                                <th>Ngày hết hạn</th>
                                <th>Ngày lập</th>
                                <th>Phần trăm hoa hồng</th>
                                <th>Mã đối tác</th>
                                <th>Mã nhân viên</th>
                                <th>Mã số thuế</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DSHopDong.map((hopdong) => (
                                <tr key={hopdong.MaHDong}>
                                    <SingleHopDong hopdong={hopdong} />
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            {hopDong !== {} && <UpdateHopDongModal />}
        </Container>
    )
}

export default HopDong
