const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
    IdKendaraan: {
        type: String
    },
    NamaKonsumen: {
        type: String
    },
    TanggalMasuk: {
        type: String
    },
    TargetTanggalSelesai: {
        type: String
    },
    NomorPolisi: {
        type: String
    },
    JenisPerawatan: {
        type: String
    },
    AlatMaterial: {
        type: String
    },
    TotalBiayaMaterial: {
        type: String
    },
    TotalBiayaJasa: {
        type: String
    },
    TotalBiayaServiceSeluruh: {
        type: String
    }
    
}) 

module.exports = mongoose.model('service', serviceSchema)