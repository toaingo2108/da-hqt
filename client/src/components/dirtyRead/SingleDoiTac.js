import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { DirtyReadContext } from '../../context/dirtyRead'

const SingleDoiTac = ({
    doitac: { MaDTac, TenDTac, CmndNguoiDD, TenNguoiDD, LoaiHangVC },
}) => {
    const { getAllHangHoaDoiTac, getAllHangHoaDoiTac_error, setShowDSHangHoa } =
        useContext(DirtyReadContext)

    const handleXemhangHoa = (MaDTac) => {
        getAllHangHoaDoiTac(MaDTac)
        setShowDSHangHoa(true)
    }

    const handleXemhangHoa_error = (MaDTac) => {
        getAllHangHoaDoiTac_error(MaDTac)
        setShowDSHangHoa(true)
    }

    return (
        <>
            <td>{MaDTac}</td>
            <td>{TenDTac}</td>
            <td>{CmndNguoiDD}</td>
            <td>{TenNguoiDD}</td>
            <td>{LoaiHangVC}</td>
            <td className="d-flex justify-content-center">
                <Button onClick={handleXemhangHoa.bind(this, MaDTac)}>
                    Danh sách hàng hóa
                </Button>
                <Button
                    className="ms-2"
                    onClick={handleXemhangHoa_error.bind(this, MaDTac)}
                    variant="danger">
                    Danh sách hàng hóa (error)
                </Button>
            </td>
        </>
    )
}

export default SingleDoiTac
