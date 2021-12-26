const express = require('express')
const router = express.Router()
const sql = require('mssql')
const config = require('../config')

router.get('/xem-ds-hanghoa-doitac-error/:MaDTac', async (req, res) => {
    const MaDTac = req.params.MaDTac
    try {
        let pool = await sql.connect(config)
        let response = await pool
            .request()
            .input('MaDTac', sql.Int, MaDTac)
            .execute('USP_Dirty_Cau14')
        if (response.returnValue) {
            res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
                DsHHoa: response.recordset,
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

router.post('/them-hanghoa-vao-chinhanh-error', async (req, res) => {
    const { MaHHoa, SoLuongTon, MaCNhanh } = req.body
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaHHoa', sql.Int, MaHHoa)
            .input('SoLuongTon', sql.Int, SoLuongTon)
            .input('MaCNhanh', sql.Int, MaCNhanh)
            .execute('usp_Dirty_Cau25_2')
        if (response.returnValue === 1) {
            res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
                reusults: {
                    MaHHoa,
                    SoLuongTon,
                    MaCNhanh,
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

router.get('/xem-ds-hanghoa-doitac/:MaDTac', async (req, res) => {
    const MaDTac = req.params.MaDTac
    try {
        let pool = await sql.connect(config)
        let response = await pool
            .request()
            .input('MaDTac', sql.Int, MaDTac)
            .execute('USP_Dirty_Fix_Cau14')
        if (response.returnValue) {
            res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
                DsHHoa: response.recordset,
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

router.post('/them-hanghoa-vao-chinhanh', async (req, res) => {
    const { MaHHoa, SoLuongTon, MaCNhanh } = req.body
    try {
        let pool = await sql.connect(config)
        const response = await pool
            .request()
            .input('MaHHoa', sql.Int, MaHHoa)
            .input('SoLuongTon', sql.Int, SoLuongTon)
            .input('MaCNhanh', sql.Int, MaCNhanh)
            .execute('usp_Dirty_Fix_Cau25_2')
        if (response.returnValue === 1) {
            res.status(400).json({
                success: false,
                message: 'Thất bại',
            })
        } else {
            res.json({
                success: true,
                message: 'Thành công',
                reusults: {
                    MaHHoa,
                    SoLuongTon,
                    MaCNhanh,
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
