const express = require('express')
const router = express.Router()
const sql = require('mssql')
const config = require('../config')

// @route GET api/hop-dong
// @desc Xem tất cả hợp đồng
// @access Public
router.get('/hop-dong', async (req, res) => {
    try {
        let pool = await sql.connect(config)
        const response = await pool.request().query('select * from HOPDONG')
        res.json({
            success: true,
            DSHopDong: response.recordset,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

// @route PUT api/hop-dong/:MaHD
// @desc Gia hạn hợp đồng
// @access Public
router.put('/hop-dong', async (req, res) => {
    const { MaHDong, CmndNguoiDDHDong, SoThangGiaHan } = req.body
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaHDong', sql.Int, MaHDong)
            .input('CmndNguoiDDHDong', sql.VarChar(15), CmndNguoiDDHDong)
            .input('SoThangGiaHan', sql.Int, SoThangGiaHan)
            .execute('USP_GiaHanHopDong')
        if (response.returnValue) {
            return res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        }
        let updatedHopDong = await pool
            .request()
            .query(`select * from HOPDONG where MaHDong = ${MaHDong}`)

        res.json({
            success: true,
            message: 'Thành công',
            hopDong: updatedHopDong.recordset,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

// @route PUT api/hop-dong/:MaHD
// @desc Gia hạn hợp đồng
// @access Public
router.put('/hop-dong-error', async (req, res) => {
    const { MaHDong, CmndNguoiDDHDong, SoThangGiaHan } = req.body
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaHDong', sql.Int, MaHDong)
            .input('CmndNguoiDDHDong', sql.VarChar(15), CmndNguoiDDHDong)
            .input('SoThangGiaHan', sql.Int, SoThangGiaHan)
            .execute('USP_GiaHanHopDong_error')
        if (response.returnValue) {
            return res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        }
        let updatedHopDong = await pool
            .request()
            .query(`select * from HOPDONG where MaHDong = ${MaHDong}`)

        res.json({
            success: true,
            message: 'Thành công',
            hopDong: updatedHopDong.recordset,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

module.exports = router
