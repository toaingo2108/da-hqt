import React, { useContext } from 'react'
import { Button, Modal, Row, Table } from 'react-bootstrap'
import { UnrepeatableReadContext } from '../../context/unrepeatableRead'

const ListTaiXeKhuVuc = () => {
    const { DSTaiXe, showList, setShowList, khuVucChoose } = useContext(
        UnrepeatableReadContext
    )

    const handleClose = () => {
        setShowList(false)
    }

    return (
        <Modal show={showList} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Danh sách tài xế trong khu vực</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row className="mb-2">
                    {DSTaiXe.length !== 0 ? (
                        <>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Mã Khu vực</th>
                                        <th>Tỉnh</th>
                                        <th>Huyện</th>
                                        <th>Số lượng tài xế</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{khuVucChoose.MaKVuc}</td>
                                        <td>{khuVucChoose.Tinh}</td>
                                        <td>{khuVucChoose.Huyen}</td>
                                        <td>{khuVucChoose.SoTXe}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <h5>
                                Danh sách tài xế hoạt động trong khu vực này
                            </h5>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Mã tài xế</th>
                                        <th>Họ tên</th>
                                        <th>Biển số</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DSTaiXe.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.MaTXe}</td>
                                            <td>{item.HoTenTXe}</td>
                                            <td>{item.BienSoXeTXe}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    ) : (
                        <span>Chưa đăng ký khu vực</span>
                    )}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ListTaiXeKhuVuc
