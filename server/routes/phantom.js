const e = require('express')
const express = require('express')
const router = express.Router()
const sql = require('mssql')
const config = require('../config')

router.get('/tai-xe', async (req, res) => {
    try {
        let pool = await sql.connect(config)
        const DSTaiXe = await pool.request().query('select * from TAIXE')
        res.json({
            success: true,
            DSTaiXe: DSTaiXe.recordset,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        })
    }
})

router.delete('/xoa-tai-xe/:MaTXe', async (req, res) => {
    const MaTXe = req.params.MaTXe
    try {
        let pool = await sql.connect(config)
        const taiXe = await pool
            .request()
            .query(`select * from TAIXE where MaTXe = ${MaTXe}`)

        const response = await pool
            .request()
            .query(`delete TAIXE where MaTXe = ${MaTXe}`)
        // .input('MaTXe', sql.Int, MaTXe)
        // .execute('sp_XoaTaiXe')
        if (response.returnValue) {
            res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
                taiXe: taiXe.recordset,
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

router.post('/taixe-them-khuvuc', async (req, res) => {
    const { MaTXe, MaKVuc } = req.body
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaTXe', sql.Int, MaTXe)
            .input('MaKVuc', sql.Int, MaKVuc)
            .execute('usp_TaiXeThemKVucHoatDong')
        if (response.returnValue) {
            res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
                results: {
                    MaTXe,
                    MaKVuc,
                },
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
