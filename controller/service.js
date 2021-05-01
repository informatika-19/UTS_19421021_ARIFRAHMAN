const serviceModel = require('../model/service')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    serviceModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'BERHASIL INPUT DATA SERVICE MOBIL'
    })).catch(() => reject({
        status: false,
        pesan: 'GALAT !!! SILAHKAN INPUT ULANG DATA SERVICE'
    }))
})

exports.showALLData = () =>
new Promise ((resolve, reject) => {
    serviceModel.find()
    .then(result => {
        resolve({
            status: true,
            pesan : 'BERHASIL MENAMPILKAN INFO DATA SERVICE',
            data : result
        })
    }).catch((err) => {
        console.log(err)
        reject ({
            status : false,
            pesan: 'GALAT !!! INFO DATA YANG DICARI TIDAK TERSEDIA',
            data : []
        })
    })

})

exports.showALLDataById = (id) =>
new Promise((resolve, reject) => {
    try  {
        serviceModel.findOne({
            _id: objectId(id)
        })
            .then(result => {
                resolve({
                    status: true,
                    pesan : 'BERHASIL MENAMPILKAN INFO DATA SERVICE',
                    data : result
                })
        }).catch((err) => {
            console.log(err)
            reject ({
                status : false,
                pesan: 'GALAT !!! INFO DATA YANG DICARI TIDAK TERSEDIA',
                data : null
            })
        })
    } catch (e) {
        console.log(e)
    }
})

exports.update = (id, data) =>
new Promise ((resolve, reject) => {
    serviceModel.updateOne({
        _id : objectId(id)
    },data).then(() => resolve({
        status : true,
        pesan : 'BERHASIL MENGUBAH DATA SERVICE'
    })).catch(() => reject ({
        status : false,
        pesan : 'GALAT !!! SILAHKAN INPUT ULANG DATA SERVICE'
    }))
})

exports.delete = (id) =>
new Promise ((resolve, reject) => {
    serviceModel.deleteOne({
        _id: objectId (id)
    }).then(() => resolve({
        status : true,
        pesan : 'DATA SERVICE TELAH BERHASIL DIHAPUS'
    })).catch(() => ({
        status : false,
        pesan: 'DATA SERVICE TIDAK BERHASIL DIHAPUS'
    }))
})