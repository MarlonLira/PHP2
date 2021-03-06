const express = require('express')

module.exports = function(server) {
   
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //product Routes
    const productService = require('../api/product/productService')
    const clienteService = require ('../api/client/clientService')
    const cycleService = require ('../api/cycles/cycleService')
    
    productService.register(router, '/product')
    clienteService.register(router, '/client')
    cycleService.register(router, '/cycles')
}