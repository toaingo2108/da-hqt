import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { UnrepeatableReadContext } from '../../context/unrepeatableRead'

const ChangeKhuVucTaiXe = () => {
    const { showChange, setShowChange, changeKhuVucTaiXe } = useContext(
        UnrepeatableReadContext
    )

    const [updatedKhuVuc, setUpdatedKhuVuc] = useState({
        MaTXe: '',
        MaKVucCu: '',
        MaKVucMoi: '',
    })
    const { MaTXe, MaKVucCu, MaKVucMoi } = updatedKhuVuc

    const handleClose = () => {
        setShowChange(false)
    }

    const onChangeUpdated = (event) => {
        setUpdatedKhuVuc({
            ...updatedKhuVuc,
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const { message } = await changeKhuVucTaiXe(updatedKhuVuc)
        alert(message)
        handleClose()
    }

    return (
        <Modal show={showChange} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>THAY ĐỔI KHU VỰC TÀI XẾ</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="MaTXe"
                            name="MaTXe"
                            required
                            value={MaTXe}
                            onChange={onChangeUpdated}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="MaKVucCu"
                            name="MaKVucCu"
                            required
                            value={MaKVucCu}
                            onChange={onChangeUpdated}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="MaKVucMoi"
                            name="MaKVucMoi"
                            required
                            value={MaKVucMoi}
                            onChange={onChangeUpdated}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button type="submit" variant="primary">
                        Thay đổi
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ChangeKhuVucTaiXe
