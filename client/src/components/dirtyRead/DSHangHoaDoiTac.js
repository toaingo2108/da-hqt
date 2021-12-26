import React, { useContext } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { DirtyReadContext } from '../../context/dirtyRead'

const DSHangHoaDoiTac = () => {
    const { DSHangHoa, showDSHangHoa, setShowDSHangHoa } =
        useContext(DirtyReadContext)

    const handleClose = () => setShowDSHangHoa(false)

    return (
        <>
            <Modal show={showDSHangHoa} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>DANH SÁCH HÀNG HÓA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá bán</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DSHangHoa.length !== 0 ? (
                                DSHangHoa.map((hanghoa) => (
                                    <tr key={hanghoa.MaHHoa}>
                                        <td>{hanghoa.MaHHoa}</td>
                                        <td>{hanghoa.TenHHoa}</td>
                                        <td>{hanghoa.GiaBan}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4}>Chưa có hàng hóa</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DSHangHoaDoiTac
