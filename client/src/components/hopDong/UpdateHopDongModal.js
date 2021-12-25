import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Context } from '../../context'

const UpdateHopDongModal = () => {
    const {
        hopDongState: { hopDong },
        showUpdateModal,
        setShowUpdateModal,
        GiaHanHopDong,
        GiaHanHopDong_error,
    } = useContext(Context)

    const handleClose = () => {
        setSoThangGiaHan(0)
        setShowUpdateModal(false)
    }

    const [SoThangGiaHan, setSoThangGiaHan] = useState(0)
    const [isError, setIsError] = useState(false)

    const onChangeUpdated = (event) => {
        setSoThangGiaHan(event.target.value)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(isError)
        if (isError) {
            await GiaHanHopDong_error({
                MaHDong: hopDong.MaHDong,
                CmndNguoiDDHDong: hopDong.CmndNguoiDDHDong,
                SoThangGiaHan,
            })
        } else {
            await GiaHanHopDong({
                MaHDong: hopDong.MaHDong,
                CmndNguoiDDHDong: hopDong.CmndNguoiDDHDong,
                SoThangGiaHan,
            })
        }
        handleClose()
    }

    return (
        <Modal show={showUpdateModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>GIA HẠN HỢP ĐỒNG</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="MaHDong"
                            name="MaHDong"
                            required
                            value={hopDong.MaHDong}
                            onChange={onChangeUpdated}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="CmndNguoiDDHDong"
                            name="CmndNguoiDDHDong"
                            required
                            value={hopDong.CmndNguoiDDHDong}
                            onChange={onChangeUpdated}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="SoThangGiaHan"
                            name="SoThangGiaHan"
                            required
                            value={SoThangGiaHan}
                            onChange={onChangeUpdated}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button
                        type="submit"
                        onClick={() => setIsError(false)}
                        variant="primary">
                        Gia Hạn Ngay
                    </Button>
                    <Button
                        type="submit"
                        onClick={() => setIsError(true)}
                        variant="danger">
                        Gia Hạn Ngay (error)
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default UpdateHopDongModal
