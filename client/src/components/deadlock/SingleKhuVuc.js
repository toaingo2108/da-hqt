import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { DeadlockContext } from '../../context/deadlock'
import { UnrepeatableReadContext } from '../../context/unrepeatableRead'

const SingleKhuVuc = ({ khuvuc: { MaKVuc, Tinh, Huyen } }) => {
    const { setShowList, getAllTaiXeKhuVuc } = useContext(
        UnrepeatableReadContext
    )

    const { xoaTatCaTaiXeKhuVuc, xoaTatCaTaiXeKhuVuc_error } =
        useContext(DeadlockContext)

    const handleXemTaiXeKhuVuc = async (MaKVuc) => {
        await getAllTaiXeKhuVuc(MaKVuc)
        setShowList(true)
    }

    const handleXoaTatCaTaiXeKhuVuc = async (MaKVuc) => {
        const { message } = await xoaTatCaTaiXeKhuVuc(MaKVuc)
        alert(message)
    }

    const handleXoaTatCaTaiXeKhuVuc_error = async (MaKVuc) => {
        const { message } = await xoaTatCaTaiXeKhuVuc_error(MaKVuc)
        alert(message)
    }

    return (
        <>
            <td>{MaKVuc}</td>
            <td>{Tinh}</td>
            <td>{Huyen}</td>
            <td className="d-flex">
                <Button onClick={handleXemTaiXeKhuVuc.bind(this, MaKVuc)}>
                    Danh sách tài xế
                </Button>
            </td>
            <td>
                <Button
                    className="ms-2"
                    onClick={handleXoaTatCaTaiXeKhuVuc.bind(this, MaKVuc)}>
                    Xóa tất cả tài xế
                </Button>
            </td>
            <td>
                <Button
                    variant="danger"
                    className="ms-2"
                    onClick={handleXoaTatCaTaiXeKhuVuc_error.bind(
                        this,
                        MaKVuc
                    )}>
                    Xóa tất cả tài xế (error)
                </Button>
            </td>
        </>
    )
}

export default SingleKhuVuc
