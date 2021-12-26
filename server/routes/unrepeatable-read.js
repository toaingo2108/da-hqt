const express = require('express')
const router = express.Router()
const sql = require('mssql')
const config = require('../config')

router.get('/khu-vuc', async (req, res) => {
    try {
        let pool = await sql.connect(config)
        const response = await pool.request().query('select * from KHUVUC')
        res.json({
            success: true,
            DSKhuVuc: response.recordset,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

router.get('/xem-thongtin-chitiet-khuvuc-error/:MaKVuc', async (req, res) => {
    const MaKVuc = req.params.MaKVuc
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaKVuc', sql.Int, MaKVuc)
            .execute('sp_Xem_ThongTin_ChiTiet_KhuVuc')
        if (response.returnValue) {
            res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
                khuVuc: response.recordset[0],
                DSTaiXe: response.recordsets[1],
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

router.get('/xem-thongtin-chitiet-khuvuc/:MaKVuc', async (req, res) => {
    const MaKVuc = req.params.MaKVuc
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaKVuc', sql.Int, MaKVuc)
            .execute('sp_Xem_ThongTin_ChiTiet_KhuVuc_Fixed')
        if (response.returnValue) {
            res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
                khuVuc: response.recordset[0],
                DSTaiXe: response.recordsets[1],
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

router.put('/thaydoi-khuvuc-taixe', async (req, res) => {
    const { MaTXe, MaKVucCu, MaKVucMoi } = req.body
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaTXe', sql.Int, MaTXe)
            .input('MaKVucCu', sql.Int, MaKVucCu)
            .input('MaKVucMoi', sql.Int, MaKVucMoi)
            .execute('sp_ThayDoi_KhuVuc_Cua_TaiXe')
        if (response.returnValue) {
            res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
                MaTXe: MaTXe,
                MaKVucCu: MaKVucCu,
                MaKVucMoi: MaKVucMoi,
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

module.exports = router
