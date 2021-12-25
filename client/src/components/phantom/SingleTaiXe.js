import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { PhantomContext } from '../../context/phantom'

const SingleTaiXe = ({
    taiXe: { MaTXe, HoTenTXe, TKNganHangTXe, CmndTXe, DiaChiTXe, BienSoXeTXe },
}) => {
    const { findTaiXe, setShowDelete, setShowAdd, getDSTaiXeKhuVuc } =
        useContext(PhantomContext)

    const handleXoaTaiXe = (MaTXe) => {
        findTaiXe(MaTXe)
        setShowDelete(true)
    }

    const handleThemKhuVucTaiXe = (MaTXe) => {
        getDSTaiXeKhuVuc(MaTXe)
        findTaiXe(MaTXe)
        setShowAdd(true)
    }

    return (
        <>
            <td>{MaTXe}</td>
            <td>{HoTenTXe}</td>
            <td>{TKNganHangTXe}</td>
            <td>{CmndTXe}</td>
            <td>{DiaChiTXe}</td>
            <td>{BienSoXeTXe}</td>
            <td className="d-flex">
                <Button
                    variant="danger"
                    onClick={handleXoaTaiXe.bind(this, MaTXe)}>
                    Xóa
                </Button>
                <Button
                    className="ms-2"
                    variant="success"
                    onClick={handleThemKhuVucTaiXe.bind(this, MaTXe)}>
                    Thêm khu vực
                </Button>
            </td>
        </>
    )
}

export default SingleTaiXe
