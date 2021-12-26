import React, { useContext, useState } from 'react'
import { Button, Form, Modal, Row, Table } from 'react-bootstrap'
import { PhantomContext } from '../../context/phantom'

const ThemKhuVucTaiXeModal = () => {
    const {
        taiXeState: { taiXe },
        showAdd,
        setShowAdd,
        themKhuVucTaiXe,
        DSKhuVuc,
        // themKhuVucTaiXe_error,
    } = useContext(PhantomContext)

    const [MaKVuc, setMaKVuc] = useState('')

    const handleClose = () => {
        setShowAdd(false)
        setMaKVuc('')
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const { message } = await themKhuVucTaiXe({
            MaTXe: taiXe.MaTXe,
            MaKVuc,
        })
        alert(message)

        handleClose()
    }
    return (
        <>
            <Modal show={showAdd} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm khu vực tài xế </Modal.Title>
                </Modal.Header>
                <Form onSubmit={onSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="MaTXe"
                                name="MaTXe"
                                required
                                readOnly
                                value={taiXe.MaTXe}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="MaKVuc"
                                name="MaKVuc"
                                required
                                value={MaKVuc}
                                onChange={(event) =>
                                    setMaKVuc(event.target.value)
                                }
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                        <Button type="submit" variant="primary">
                            Thêm
                        </Button>
                        <Row className="mb-2">
                            {DSKhuVuc.length !== 0 ? (
                                <>
                                    <span>Danh sách khu vực đã đăng ký</span>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>MaKVuc</th>
                                                <th>Tỉnh</th>
                                                <th>Huyện</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {DSKhuVuc.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.MaKVuc}</td>
                                                    <td>{item.Huyen}</td>
                                                    <td>{item.Tinh}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </>
                            ) : (
                                <span>Chưa đăng ký khu vực</span>
                            )}
                        </Row>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default ThemKhuVucTaiXeModal
