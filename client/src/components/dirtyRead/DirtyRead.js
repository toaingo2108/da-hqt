import React, { useContext, useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { DirtyReadContext } from '../../context/dirtyRead'
import DSHangHoaDoiTac from './DSHangHoaDoiTac'
import SingleDoiTac from './SingleDoiTac'
import ThemHangHoaChiNhanh from './ThemHangHoaChiNhanh'

const DirtyRead = () => {
    const {
        doiTacState: { DSDoiTac },
        getAllDoiTac,
        setShowAdd,
    } = useContext(DirtyReadContext)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getAllDoiTac(), [])

    const handleThemHangHoaChiNhanh = () => {
        setShowAdd(true)
    }

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <Button variant="info" onClick={handleThemHangHoaChiNhanh}>
                        Thêm hàng hóa vào chi nhánh
                    </Button>
                </Col>
            </Row>
            <Row className="my-5">
                <Col>
                    <h3>DANH SÁCH ĐỐI TÁC</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>MaDTac</th>
                                <th>Tên đối tác</th>
                                <th>CMND Đại diện</th>
                                <th>Tên đại diện</th>
                                <th>Loại hàng vận chuyển</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {DSDoiTac.map((doitac) => (
                                <tr key={doitac.MaDTac}>
                                    <SingleDoiTac doitac={doitac} />
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <DSHangHoaDoiTac />
            <ThemHangHoaChiNhanh />
        </Container>
    )
}

export default DirtyRead
