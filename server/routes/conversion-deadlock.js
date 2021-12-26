const express = require('express')
const router = express.Router()
const sql = require('mssql')
const config = require('../config')

router.delete('/xoa-taixe-khuvuc-error', async (req, res) => {
    const { MaTXe, MaKVuc } = req.body
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaTXe', sql.Int, MaTXe)
            .input('MaKVuc', sql.Int, MaKVuc)
            .execute('sp_Xoa_TaiXe_KhuVuc_Error')
        if (response.returnValue === 1) {
            res.status(400).json({
                success: false,
                message: 'Mã tài xế không tồn tại',
            })
        } else if (response.returnValue === 2) {
            res.status(400).json({
                success: false,
                message: 'Mã khu vực không tồn tại',
            })
        } else if (response.returnValue === 3) {
            res.status(400).json({
                success: false,
                message: 'Tài xế không tham gia khu vực',
            })
        } else if (response.returnValue === 4) {
            res.status(400).json({
                success: false,
                message: 'Lỗi hệ thống',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

router.delete('/xoa-tatca-taixe-cua-khuvuc-error/:MaKVuc', async (req, res) => {
    const MaKVuc = req.params.MaKVuc
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaKVuc', sql.Int, MaKVuc)
            .execute('sp_XoaTatCa_TaiXe_Cua_KhuVuc_Error')
        if (response.returnValue === 1) {
            res.status(400).json({
                success: false,
                message: 'Mã khu vực không tồn tại',
            })
        } else if (response.returnValue === 2) {
            res.status(400).json({
                success: false,
                message: 'Mã khu vực không có tài xế',
            })
        } else if (response.returnValue === 3) {
            res.status(400).json({
                success: false,
                message: 'Lỗi hệ thống',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

router.delete('/xoa-taixe-khuvuc', async (req, res) => {
    const { MaTXe, MaKVuc } = req.body
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaTXe', sql.Int, MaTXe)
            .input('MaKVuc', sql.Int, MaKVuc)
            .execute('sp_Xoa_TaiXe_KhuVuc')
        if (response.returnValue === 1) {
            res.status(400).json({
                success: false,
                message: `Mã tài xế ${MaTXe} không tồn tại`,
            })
        } else if (response.returnValue === 2) {
            res.status(400).json({
                success: false,
                message: 'Mã khu vực không tồn tại',
            })
        } else if (response.returnValue === 3) {
            res.status(400).json({
                success: false,
                message: 'Tài xế không tham gia khu vực',
            })
        } else if (response.returnValue === 4) {
            res.status(400).json({
                success: false,
                message: 'Lỗi hệ thống',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

router.delete('/xoa-tatca-taixe-cua-khuvuc/:MaKVuc', async (req, res) => {
    const MaKVuc = req.params.MaKVuc
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaKVuc', sql.Int, MaKVuc)
            .execute('sp_XoaTatCa_TaiXe_Cua_KhuVuc')
        if (response.returnValue === 1) {
            res.status(400).json({
                success: false,
                message: 'Mã khu vực không tồn tại',
            })
        } else if (response.returnValue === 2) {
            res.status(400).json({
                success: false,
                message: 'Mã khu vực không có tài xế',
            })
        } else if (response.returnValue === 3) {
            res.status(400).json({
                success: false,
                message: 'Lỗi hệ thống',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

module.exports = router
