import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { PhantomContext } from '../../context/phantom'

const DeleteTaiXeModal = () => {
    const {
        taiXeState: { taiXe },
        showDelete,
        setShowDelete,
        xoaTaiXe,
    } = useContext(PhantomContext)

    const [isError, setIsError] = useState(false)

    const handleClose = () => setShowDelete(false)

    const onSubmit = async (event) => {
        event.preventDefault()
        if (isError) {
            console.log('xoaTaiXe_error')
            // await xoaTaiXe_error()
        } else {
            await xoaTaiXe({ MaTXe: taiXe.MaTXe })
        }
        handleClose()
    }

    return (
        <>
            <Modal show={showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thực hiện xóa tài xế </Modal.Title>
                </Modal.Header>
                <Form onSubmit={onSubmit}>
                    <Modal.Body>
                        Mã: {taiXe.MaTXe} | Tên: {taiXe.HoTenTXe}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                        <Button
                            type="submit"
                            onClick={() => setIsError(false)}
                            variant="primary">
                            Xóa
                        </Button>
                        <Button
                            type="submit"
                            onClick={() => setIsError(true)}
                            variant="danger">
                            Xóa (error)
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default DeleteTaiXeModal
