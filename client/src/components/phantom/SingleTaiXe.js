import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { PhantomContext } from '../../context/phantom'

const SingleTaiXe = ({
    taiXe: { MaTXe, HoTenTXe, TKNganHangTXe, CmndTXe, DiaChiTXe, BienSoXeTXe },
}) => {
    const { findTaiXe, setShowDelete } = useContext(PhantomContext)

    const handleXoaTaiXe = (MaTXe) => {
        findTaiXe(MaTXe)
        setShowDelete(true)
    }

    return (
        <>
            <td>{MaTXe}</td>
            <td>{HoTenTXe}</td>
            <td>{TKNganHangTXe}</td>
            <td>{CmndTXe}</td>
            <td>{DiaChiTXe}</td>
            <td>{BienSoXeTXe}</td>
            <td>
                <Button
                    variant="danger"
                    onClick={handleXoaTaiXe.bind(this, MaTXe)}>
                    Xóa
                </Button>
            </td>
        </>
    )
}

export default SingleTaiXe
