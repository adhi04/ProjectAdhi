const express = require('express');
const bodyParser = require('body-parser');
const database = require('mysql');
const upload = require('express-fileupload');
const crypto = require('crypto');
var koneksi = require('cors');
var app = express();

const dbs = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mypet',
    port: '3306'
});
dbs.connect();


var port = 8002;

app.use(koneksi());
app.use(upload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => {
    var panggilData = 'SELECT productID, nama_produk, foodcategory, harga, detailproduk, foto_produk FROM productlist INNER JOIN categorytbl ON productlist.categoryID = categorytbl.categoryID';
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            res.send(hasilQuery);
        }
    });
});
// app.get('/kategori', (req, res) => {
//     var panggilData = 'SELECT * FROM  productlist';
//     dbs.query(panggilData, (kaloError, hasilQuery) => {
//         if(kaloError)
//         {
//             throw kaloError;
//         } 
//         else 
//         {
//             res.send(hasilQuery);
//         }
//     });
// });
// app.post('/login', (req, res) => {
//     var sql= `SELECT * FROM newusers`;
//     dbs.query(sql, (error, result) => {
//         if(error){
//             throw error;
//         } else {
//             var username = req.body.username;
//             var password = req.body.password;

//             for(var i=0; i <result.length; i++){
//                 if(username === result[i].Username && password === result[i].Password){
//                     var status = 'oke';
//                     res.send(status);
//                 } else if ( i === result.length -1) {
//                     res.send('gagal');
//                 }
                
//             }
//         }
//     })
// })


// INI BUAT NAMPILIN LIST KATEGORI DAN UKURAN DI ADD PRODUCT
app.get('/AddCategory', (req, res) => {
    var panggilData = 'SELECT * FROM  categorytbl;'
    // panggilData += 'SELECT * FROM size'
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            res.send(hasilQuery);
            // console.log(hasilQuery)
        }
    });
});

app.post('/AddCategory', (req, res) => {
    var catfoot = req.body.inputCategory;
    // console.log(catfoot)
    var sql = `INSERT INTO categorytbl VALUES("${''}", "${catfoot}")`;
    dbs.query(sql, (kaloError, hasilnya) => {
        if(kaloError){
            throw kaloError;
        }
         else {
            res.end('Data berhasil disimpan')
        }
    });
})

app.post('/tambahData', (req, res) => {
// ambil paramater dari fe, eg: namaproduk, harga, file
var namaProduk = req.body.namaproduk;
var Kategori = req.body.kategori;
var hargaProduk = req.body.harga;
var detailProduk = req.body.detailproduk;


console.log(namaProduk);
console.log(Kategori);
console.log(hargaProduk);
console.log(detailProduk);
if (req.files){
       var fungsiFile= req.files.file;
       var fileName = req.files.file.name;

       fungsiFile.mv("./tampunganFile/" + fileName,(kaloError) => {
           if(kaloError){
            //    console.log(kaloError);
               res.send('upload failed');
           }else {
            //    res.send('upload sukses');
               var sql = `INSERT INTO productlist VALUES("${''}", "${namaProduk}", "${Kategori}", "${hargaProduk}", "${detailProduk}", "${fileName}")`;
                dbs.query(sql, (kaloError, hasilnya) => {
                    if(kaloError){
                        throw kaloError;
                    }
                    else {
                        res.send('1')
                    }
                });
           }
       })
   }
   else
   {
       // beda menggunakan SET dan VALUES, kalau values semua harus diisi. sedang SET hanya yang ditentukan saja yang diisi
    var sql = `INSERT INTO productlist VALUES("${''}", "${namaProduk}", "${Kategori}", "${hargaProduk}", "${detailProduk}", "${null}")`;
    dbs.query(sql, (kaloError, hasilnya) => {
        if(kaloError){
            throw kaloError;
        }
         else {
            res.end('Data berhasil disimpan')
        }
    });
   }
   
});


app.post('/deleteData', (req, res) => {
// ambil paramater dari fe, eg: namaproduk, harga, file
   var idProduk = req.body.inputSatu;
    // console.log(idProduk)
   var sql = `DELETE from productlist where productID = ("${idProduk}")`;
    dbs.query(sql, (kaloError, hasilnya) => {
        if(kaloError){
            throw kaloError;
        }
         else {
            res.send('1')
        }
    });
});

app.post('/DeleteCat', (req, res) => {
// ambil paramater dari fe, eg: namaproduk, harga, file
   var idCat = req.body.inputCat;
    // console.log(idCat)
   var sql = `DELETE from categorytbl where categoryID = ("${idCat}")`;
    dbs.query(sql, (kaloError, hasilnya) => {
        if(kaloError){
            throw kaloError;
        }
         else {
            res.send('1')
        }
    });
});

/** Untuk mengambil data per baris */
app.get('/getdata/:id', (req, res) => {
    /** Menyiapkan query untuk ke MySQL */
    var grabData = `SELECT * FROM productlist WHERE productID = ${req.params.id}`;
    /** Mengeksekusi query dengan syntax nodeJS */
    dbs.query(grabData, (err, hasilquery) => {
        if(err){
            /** Mengeluarkan pesan error apabila terjadi kesalahan */
            throw err;
        } else {
            /** Menyiapkan hasil query untuk siap dikirim */
            res.send(hasilquery);
        }
    })
});
app.get('/getcat/:id', (req, res) => {
    /** Menyiapkan query untuk ke MySQL */
    var grabData = `SELECT * FROM categorytbl WHERE categoryID = ${req.params.id}`;
    /** Mengeksekusi query dengan syntax nodeJS */
    dbs.query(grabData, (err, hasilquery) => {
        if(err){
            /** Mengeluarkan pesan error apabila terjadi kesalahan */
            throw err;
        } else {
            /** Menyiapkan hasil query untuk siap dikirim */
            res.send(hasilquery);
        }
    })
});


app.post('/EditCategory', (req,res) => {
    let catID = req.body.inputid
    let foodkat = req.body.inputnama
    // console.log(foodkat)

    var queryUpdate = `UPDATE categorytbl SET foodcategory = "${foodkat}" WHERE categoryID="${catID}"`;
                        dbs.query(queryUpdate, (err, result) => {
                            if(err){
                                throw err;
                            } else {
                                res.send('1');
                            }
                        });
})

/** Untuk mengupdate data */
app.post('/ubahData', (req, res) => {
    var id = req.body.id;
    var namaProduk = req.body.namaproduk;
    var categoryid = req.body.kategori;
    var hargaProduk = req.body.harga;
    var detailProduk = req.body.detailproduk;
    // console.log(id);
    // console.log(namaProduk);
    // console.log(categoryid);
    // console.log(hargaProduk);
    // console.log(detailProduk);
    // console.log(req.files.file.name)
    

    // 11b. cek console log apakah sudah dapat value perubahannya beserta gambar
//  console.log(id)
//  console.log(namaProduk)
//  console.log(hargaProduk)
//  console.log(fileName)

// console.log(req.files.file)

// 11.a di console log dulu buat cek. ketika dapat kiriman berbentuk files maka akan dijalankan fungsi ini. setelah di atas buat folder baru tampungan file. 
    if(req.files){
        var fileName = req.files.file.name;
        var fungsiFile = req.files.file;
        fungsiFile.mv("./tampunganFile/"+fileName, (kaloError) => {
            if(kaloError){
                // console.log(kaloError);
                res.send('Upload failed');
            } else {
                // res.send('Upload berhasil');
                var queryUpdate = `UPDATE productlist SET nama_produk = "${namaProduk}", categoryID = "${categoryid}",  
                        harga = "${hargaProduk}", detailproduk = "${detailProduk}", foto_produk = "${fileName}" WHERE productID="${id}"`;
                        dbs.query(queryUpdate, (err, result) => {
                            if(err){
                                throw err;
                            } else {
                                res.send('1');
                            }
                        });
            }
        })
    }
    else
    {
        var queryUpdate = `UPDATE productlist SET nama_produk = "${namaProduk}", categoryID =  "${categoryid}", 
                        harga = "${hargaProduk}", detailproduk = "${detailProduk}" WHERE productID="${id}"`;
            dbs.query(queryUpdate, (err, result) => {
                if(err){
                    throw err;
                } else {
                    res.send('1');
                }
            });
    }

    // 12. update di database



    
});

app.post('/login', (req, res) => {
    var sql = `SELECT * FROM adminlogin`;
    dbs.query(sql, (error, result) => {
        if(error) {
            throw error;
        } else {
            var username = req.body.username;
            var password = req.body.password;

            for(var i=0; i < result.length; i++ ){
                if(username === result[i].Username && password === result[i].Password){
                    var status = 'oke';
                    res.send(status);
                    break;
                } else if(i === result.length - 1) {
                    res.send('gagal');
                }
            }
        }
    });
});

// LOGIN ADMIN
app.post('/adminlogin', (req, res) => {
    var sql = `SELECT * FROM useradmin`;
    dbs.query(sql, (error, result) => {
        if(error) {
            throw error;
        } else {
            var username = req.body.username;
            var password = req.body.password;

            for(var i=0; i < result.length; i++ ){
                if(username === result[i].username && password === result[i].password)
                {       
                    res.send(username);
                    break;
                } else if(i === result.length - 1) {
                    res.send('0');
                }
            }
        }
    });
});



app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});