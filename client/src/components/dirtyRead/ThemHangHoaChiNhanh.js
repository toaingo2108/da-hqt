import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { DirtyReadContext } from '../../context/dirtyRead'

const ThemHangHoaChiNhanh = () => {
    const { showAdd, setShowAdd, themHangHoaChiNhanh } =
        useContext(DirtyReadContext)

    const handleClose = () => {
        setShowAdd(false)
        setHangHoaAdd({
            MaHHoa: '',
            SoLuongTon: '',
            MaCNhanh: '',
        })
    }

    const [hangHoaAdd, setHangHoaAdd] = useState({
        MaHHoa: '',
        SoLuongTon: '',
        MaCNhanh: '',
    })
    const { MaHHoa, SoLuongTon, MaCNhanh } = hangHoaAdd

    const onChangeModal = (event) => {
        setHangHoaAdd({
            ...hangHoaAdd,
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const { message } = await themHangHoaChiNhanh(hangHoaAdd)
        alert(message)
        setHangHoaAdd({
            MaHHoa: '',
            SoLuongTon: '',
            MaCNhanh: '',
        })
        handleClose()
    }

    return (
        <>
            <Modal show={showAdd} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>THÊM HÀNG HÓA VÀO CHI NHÁNH</Modal.Title>
                </Modal.Header>
                <Form onSubmit={onSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="MaHHoa"
                                name="MaHHoa"
                                required
                                value={MaHHoa}
                                onChange={onChangeModal}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="SoLuongTon"
                                name="SoLuongTon"
                                required
                                value={SoLuongTon}
                                onChange={onChangeModal}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="MaCNhanh"
                                name="MaCNhanh"
                                required
                                value={MaCNhanh}
                                onChange={onChangeModal}
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

export default ThemHangHoaChiNhanh
