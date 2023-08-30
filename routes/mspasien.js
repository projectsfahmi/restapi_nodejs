const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) =>{
    res.status(200).json({
        message : 'Get Method Mspasien'
    })
})

router.get('/:nim',(req, res, next) => {
    const nim = req.params.nim;
    if(nim == '12345'){
        res.status(200).json(
            {
                status: true,
                message : "Nim 12345"
            }
        )
    }else{
        res.status(200).json(
            {
                status: false,
                message : "Nim LAIN"
            }
        )
    }
})

router.post('/',(req, res, next) =>{
    
    const mspasien = {
        nim : req.body.nim,
        nama : req.body.nama
    };

    res.status(200).json({
        message : 'Post Method Mspasien'
    })
})

router.put('/',(req, res, next) =>{
    res.status(200).json({
        message : 'Put Method Mspasien'
    })
})

router.delete('/',(req, res, next) =>{
    res.status(200).json({
        message : 'Delete Method Mspasien'
    })
})

module.exports = router;