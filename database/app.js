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
    port: '3306',
    multipleStatements:true
});
dbs.connect();


var port = 8002;

app.use(koneksi());
app.use(upload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/tampunganFile', express.static('tampunganFile'));

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

// LOGIN USER
app.post('/userlogin', (req, res) => {
    var sql = `SELECT * FROM users`;
    dbs.query(sql, (error, result) => {
        if(error) {
            throw error;
        } else {
            var username = req.body.username;
            var password = req.body.password;
        
            // console.log(username)

            for(var i=0; i < result.length; i++ ){
                if(username === result[i].username && password === result[i].password)
                {       
                    var userID= result[i].userID
                    console.log(userID);
                    res.send((userID).toString());
                    break;
                } else if(i === result.length - 1) {
                    res.send('0');
                }
            }
        }
    });
});


//BUAT NEWPRODUCT
app.get('/newestproduct', (req, res) => {
    var panggilData = 'SELECT * FROM  productlist ORDER BY productID DESC LIMIT 3;'
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

//BUAT REGISTRASI
app.post('/registration', (req, res) => {
    var namadepan = req.body.namadepan;
    var namabelakang = req.body.namabelakang;
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var alamat = req.body.alamat;
    var birthday = req.body.birthday;
    var kota = req.body.kota;
    var negara = req.body.negara;
    var zip = req.body.zip;

    console.log(namadepan)
    console.log(namabelakang)
    console.log(username)

        var queryinsert = `INSERT INTO users VALUES("${''}", "${namadepan}", "${namabelakang}", "${username}", "${password}",
            "${email}","${alamat}","${birthday}", "${kota}","${negara}","${zip}", "${''}")`;
            dbs.query(queryinsert, (err, result) => {
                if(err){
                    throw err;
                } else {
                    res.send('1');
                }
            });
});



// UPDATE CART
app.post('/updateCart', (req,res) =>{
    // console.log(req.body.user_id)
    // console.log(req.body.harga)
    // console.log(req.body.namaproduk)
    // var user_id = req.body.userID
    var newQuantity = req.body.newQuantity
    var cartid = req.body.cartID
    var hargaproduk = req.body.hargaproduk
    var subtotal = newQuantity*hargaproduk

    var sql= `UPDATE cart SET quantity="${newQuantity}", total_harga="${subtotal}" WHERE cartID="${cartid}"`
    
    dbs.query(sql,(err, result) =>{
    if (err) throw err
    else
    {
        // var sql= 'SELECT * FROM `cart` WHERE user_id=?'
    
        // dbs.query(sql,user_id,(err, result) =>{
        // if (err) throw err
        // // console.log(result)
        // else res.send(result)
        // })
        res.send("1")
    }
    
    })
})
app.post('/insertcart', (req,res) =>{
    // console.log(req.body.user_id)
    // console.log(req.body.harga)
    // console.log(req.body.namaproduk)
    var namaproduk = req.body.namaproduk
    var harga = req.body.harga
    var userid = req.body.user_id
    
    

    var sql= `INSERT INTO cart SET nama_produk="${namaproduk}", harga="${harga}", user_id="${userid}", total_harga="${harga}", quantity="1" `
    
    dbs.query(sql,(err, result) =>{
    if (err) throw err
    else
    {
        console.log("data berhasil masuk")
    }
    
    })
})

app.post('/updatecheckout', (req,res) =>{
    // console.log(req.body.user_id)
    // console.log(req.body.harga)
    console.log(req.body.userid)
    var userID = req.body.userid
    var status = 2
    // var nama_produk = req.body.namaproduk
    // var harga = req.body.harga
    // var quantity = 1
    // var total_harga = harga*quantity

    var sql= `UPDATE cart SET statusID = "${status}" WHERE userID="${userID}" AND statusID= "1" `;   
    //  INSERT INTO cart SET user_id=?, nama_produk=?, quantity=?, harga=?, total_harga=?`
    
    dbs.query(sql,(err, result) =>{
    if (err) throw err
    res.send("berhasil")
    })
})

app.post(`/showcart`, (req,res) =>
{
    // console.log(req.body.user_id)
    // console.log(req.body.harga)
    // console.log(req.body.produk_id)
    var user_id = req.body.user_id
    // console.log(user_id)


    // var sql= 'SELECT * FROM `cart` JOIN produk_samid ON cart.product_id=produk_samid.id WHERE cart.user_id=?'
    var sql= `SELECT * FROM cart WHERE user_id="${user_id}"`;
    
    dbs.query(sql, (err, result) =>{
    if (err) throw err
    else{
        res.send(result)
    }
    // console.log(result)
    
    })
})

// DELETE CART/////////////
app.post('/deleteCart', (req, res) => {
    // ambil paramater dari fe, eg: namaproduk, harga, file
       var cartID = req.body.cartID;
        // console.log(idProduk)
       var sql = `DELETE from cart where cartID = ?`;
        dbs.query(sql, cartID, (kaloError, hasilnya) => {
            if(kaloError){
                throw kaloError;
            }
             else {
                res.send('1')
            }
        });
    });

// TAMPIL BERDASAR KATEGORI////////////////////////
app.post('/basedcategory', (req, res) => {
    // ambil paramater dari fe, eg: namaproduk, harga, file
       var categoryID = req.body.categoryID;
        // console.log(idProduk)
       var sql = `SELECT * from cart where categoryID = ?`;
        dbs.query(sql, categoryID, (kaloError, hasilnya) => {
            if(kaloError){
                throw kaloError;
            }
             else {
                res.send('1')
            }
        });
    });

    // SHOW USERID//////////
    app.post('/userdata', (req, res) => {
        // ambil paramater dari fe, eg: namaproduk, harga, file
           var userID = req.body.user_id;
            console.log(userID)
           var sql = `SELECT * from users where userID = ?`;
            dbs.query(sql, userID, (kaloError, datanya) => {
                if(kaloError){
                    throw kaloError;
                }
                 else {
                    res.send(datanya)
                }
            });
        });

// TAMPILIN PROFILE////////////////////

app.post('/showprofile', (req,res) => {
    // console.log(req.body.id)
    var userID = req.body.user_id;
    var panggilData = `SELECT * FROM  users WHERE userID= ${userID} `
    // panggilData += 'SELECT * FROM size'
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            res.send(hasilQuery);
            console.log(hasilQuery)
        }
    });
});

//JUMLAH PRODUK///////
app.get('/jumlahproduk', (req,res) => {
    var panggilData = `SELECT * FROM productlist`
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            var count = 0;
            for(var i = 0; i<hasilQuery.length;i++)
            {
                count++
            }
            console.log(count)
            // res.send(count);
            res.send((count).toString());
        }
    });
});

// JUMLAH KATEGORI////////
app.get('/jumlahkategori', (req,res) => {
    var panggilData = `SELECT * FROM categorytbl`
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            var count = 0;
            for(var i = 0; i<hasilQuery.length;i++)
            {
                count++
            }
            console.log(count)
            // res.send(count);
            res.send((count).toString());
        }
    });
});

// JUMLAH USER///////////////
app.get('/jumlahuser', (req,res) => {
    var panggilData = `SELECT * FROM users`
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            var count = 0;
            for(var i = 0; i<hasilQuery.length;i++)
            {
                count++
            }
            console.log(count)
            // res.send(count);
            res.send((count).toString());
        }
    });
});

app.get('/ambilDaftarBank', (req, res) => {
    var sql = `SELECT * FROM bank`;
    dbs.query(sql, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send(result);
        }
    })
})

app.post('/insertinvoice',(req,res) => {
    var status= 1;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var username = req.body.username;
    var email = req.body.email;
    var adress = req.body.adress;
    var negara = req.body.negara;
    var kota = req.body.kota;
    var zip = req.body.zip;
    var bank = req.body.bank;
    var cart = req.body.listCart;

    var sql= `SELECT invoice_number FROM invoice`
    dbs.query(sql, (err, result) => {
        if (err) {
            console.log(err, 'error di invoice')
        }else{
            var length = result.length;
            var lastorderID = 0;
            (length === 0) ? lastorderID = 0: lastorderID = parseInt(result[length-1].invoice_number);
            var orderID = lastorderID + 1;
            var orders = '';

            if (orderID<10) orders = orders+ '0000' + orderID
            else if (orderID>=10 && orderID<100) orders = orders+ '000' + orderID
            else if (orderID>=100 && orderID<1000) orders = orders+ '00' + orderID
            if (orderID>=1000 && orderID<10000) orders = orders+ '0' + orderID
            else orders = orders + orderID
            
            var counter = 0

            for(var i=0; i<cart.length; i++){
                var productName = cart[i].namaproduk
                var quantity = cart[i].quantity
                var userid = cart[i].user_id
                var totalPerItem = (cart[i].quantity + cart[i].harga)
                // var delivery = req.body.delivery
                var sql = `INSERT INTO invoice (invoice_number, status, product_name, quantity, 
                    shipping_adress, user_id, user_firstname, user_lastname, total, bank_option)
                    Values ("${orders}", "${status}", "${productName}", "${quantity}", 
                    "${adress}", "${userid}", "${firstname}", "${lastname}", "${totalPerItem}", "${bank}" );`
                sql+= `UPDATE cart SET statusID= "1" WHERE user_id="${userid}" `;

                dbs.query(sql, (err, result) => {
                    if(err){
                        throw err;
                    } else{
                        counter++
                        if (counter === cart.length){
                            res.send('1')
                        }
                    }
                })
            }
        }
    })
})


app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});