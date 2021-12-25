import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../../context'

const SingleHopDong = ({
    hopdong: {
        MaHDong,
        TenNguoiDDHDong,
        CmndNguoiDDHDong,
        NgayHetHanHDong,
        NgayLapHDong,
        PhanTramHoaHong,
        MaDTac,
        MaNVien,
        MaSoThue,
    },
}) => {
    // Contexts
    const { setShowUpdateModal, FindHopDong } = useContext(Context)

    const giaHanHopDong = (MaHDong) => {
        FindHopDong(MaHDong)
        setShowUpdateModal(true)
    }
    return (
        <>
            <td>{MaHDong}</td>
            <td>{TenNguoiDDHDong}</td>
            <td>{CmndNguoiDDHDong}</td>
            <td>
                {NgayHetHanHDong}
                <Button onClick={giaHanHopDong.bind(this, MaHDong)}>
                    Gia hạn hợp đồng
                </Button>
            </td>
            <td>{NgayLapHDong}</td>
            <td>{PhanTramHoaHong}</td>
            <td>{MaDTac}</td>
            <td>{MaNVien}</td>
            <td>{MaSoThue}</td>
        </>
    )
}

export default SingleHopDong
