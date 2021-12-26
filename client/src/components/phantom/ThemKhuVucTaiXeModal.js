import React, { useContext, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
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

    console.log(DSKhuVuc)

    const handleClose = () => {
        setShowAdd(false)
        setMaKVuc('')
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        console.log('themKhuVucTaiXe')
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
                    <Modal.Title>Thực hiện xóa tài xế </Modal.Title>
                </Modal.Header>
                <Form onSubmit={onSubmit}>
                    <Modal.Body>
                        <Row className="mb-2">
                            {DSKhuVuc.length !== 0 ? (
                                <>
                                    <span>Danh sách khu vực đã đăng ký</span>
                                    {DSKhuVuc.map((item, index) => (
                                        <Col xs={6} key={index}>
                                            {item.MaKVuc}
                                        </Col>
                                    ))}
                                </>
                            ) : (
                                <span>Chưa đăng ký khu vực</span>
                            )}
                        </Row>
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
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default ThemKhuVucTaiXeModal
