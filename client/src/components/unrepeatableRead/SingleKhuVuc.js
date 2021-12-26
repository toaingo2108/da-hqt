import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { UnrepeatableReadContext } from '../../context/unrepeatableRead'

const SingleKhuVuc = ({ khuvuc: { MaKVuc, Tinh, Huyen } }) => {
    const { setShowList, getAllTaiXeKhuVuc, getAllTaiXeKhuVuc_error } =
        useContext(UnrepeatableReadContext)

    const handleXemTaiXeKhuVuc = async (MaKVuc) => {
        await getAllTaiXeKhuVuc(MaKVuc)
        setShowList(true)
    }

    const handleXemTaiXeKhuVuc_error = async (MaKVuc) => {
        await getAllTaiXeKhuVuc_error(MaKVuc)
        setShowList(true)
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
                    variant="danger"
                    className="ms-2"
                    onClick={handleXemTaiXeKhuVuc_error.bind(this, MaKVuc)}>
                    Danh sách tài xế (error)
                </Button>
            </td>
        </>
    )
}

export default SingleKhuVuc
