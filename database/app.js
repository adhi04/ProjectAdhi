const express = require('express');
const bodyParser = require('body-parser');
const database = require('mysql');
var koneksi = require('cors');
var app = express();

const db = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mypet',
    port: '3306'
});
db.connect();

var port = 8000;

app.use(koneksi());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    var panggilData = 'SELECT * FROM  productlist';
    db.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError){
            throw kaloError;
        } else {
            res.send(hasilQuery);
        }
    }); 
});

/** Untuk mengambil data perbaris */
app.get('/editdata/:id',(req, res) => {
    /** menyiapkan query untuk ke MySQL */
    var grabData = `Select * FROM productlist WHERE id = ${req.params.id}`;
    /** Mengeksekusi query dengan syntax nodeJS */
    db.query(grabData, (nilaiError, hasilquery)=>{
        if(nilaiError){
            /** mengeluarkan pesan error apabila terjadi kesalahan */
            throw nilaiError;
        } else {
            /** menyiapkan hasil query untuk siap dikirim */
            res.send(hasilquery);
        }
    });
});

app.post('/ubahData', (req, res) => {
   var namaProduk = req.body.inputSatu;
   var hargaProduk = req.body.inputDua;
   var sql = `INSERT INTO productlist VALUES("${''}", "${namaProduk}", "${hargaProduk}")`;
    db.query(sql, (kaloError, hasilnya) => {
        if(kaloError){
            throw kaloError;
        } else {
            res.end('Data berhasil disimpan')
        }
    });
});

/** untuk mengupdate data */
app.post('/ubahData', (req, res) => {
    var id = req.body.id
    var namaProduk= req.body.namaproduk
    var hargaProduk= req.body.harga

    var queryUpdate= `UPDATE productlist SET nama_produk = "${namaProduk}", harga= "${hargaProduk}" WHERE id="${id}" `
    db.query(queryUpdate, (err, result) =>{
        if (err){
            throw err;
        } else {
            res.send('Update Berhasil !');
        }
    });
});



app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});