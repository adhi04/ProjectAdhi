-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2018 at 06:14 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mypet`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminlogin`
--

CREATE TABLE `adminlogin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cartID` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `nama_produk` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `total_harga` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cartID`, `user_id`, `nama_produk`, `quantity`, `harga`, `total_harga`, `date`) VALUES
(6, 4, 'felibite', 1, 125000, 125000, '0000-00-00'),
(7, 4, 'felibite', 1, 125000, 125000, '0000-00-00'),
(8, 4, 'felibite 8kg', 1, 183000, 183000, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `categorytbl`
--

CREATE TABLE `categorytbl` (
  `categoryID` int(11) NOT NULL,
  `foodcategory` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categorytbl`
--

INSERT INTO `categorytbl` (`categoryID`, `foodcategory`) VALUES
(1, 'Kucing'),
(2, 'Anjing'),
(4, 'ddasd');

-- --------------------------------------------------------

--
-- Table structure for table `checkout`
--

CREATE TABLE `checkout` (
  `checkID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `cartID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `itemcategory`
--

CREATE TABLE `itemcategory` (
  `itemID` int(11) NOT NULL,
  `itemcategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productlist`
--

CREATE TABLE `productlist` (
  `productID` int(11) NOT NULL,
  `nama_produk` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `categoryID` int(11) NOT NULL,
  `harga` int(100) NOT NULL,
  `detailproduk` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `foto_produk` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `productlist`
--

INSERT INTO `productlist` (`productID`, `nama_produk`, `categoryID`, `harga`, `detailproduk`, `foto_produk`) VALUES
(17, 'felibite 8kg', 1, 183000, 'Isi 8 kg felibite ada dua bentuk ikan dan donat', 'felibite8kg.jpg'),
(20, 'Anjing', 2, 245, 'makanan anjing', 'goodog1200gr.jpg'),
(23, 'fassaf', 2, 133, 'asdf', 'alpo.jpg'),
(36, 'goaursor', 1, 123556, 'agds', 'felibite20kg.jpg'),
(38, 'Aldo Dog Food 400g', 2, 20000, 'Makanan anjing\r\nKelezatan daging sapi asli dan sayuran yang lezat\r\nDilengkapi nutrisi seimbang', 'alpo-dog-food.jpg'),
(39, 'Bolt 1kg', 1, 21000, '- Membuat kulit sehat dan bulu berkilau\r\n- Mempertajam penglihatan\r\n- Membantu menjaga kesehatan gigi', 'bolt1kg.jpg'),
(40, 'felibite 20kg', 1, 430000, 'Terdapat 2 macam bentuk Donat Dan Ikan ( Jika tidak mencantumkan akan dikirim bentuk random )', 'felibite20kg.jpg'),
(41, 'Good Dog 1kg', 1, 65000, 'MAKANAN Anak ANJING Puppy Good Dog dari Best In Show (Made in Australia) merupakan produk makanan anak Anjing super premium dengan protein yang tinggi, berbahan dasar daging sapi berkualitas serta meningkatkan selera makan & mengurangi alergi pada ku', 'goodog1200gr.jpg'),
(42, 'Royal Canin 400g', 1, 65000, 'Royal Canin Kitten 36 adalah makanan untuk anak kucing dalam fase pertumbuhan kedua 4 bulab keatas, Royal Canin mempertahankan bahwa diet kucing harus memperhitungkan semua parameter kehidupan seperti usia, ras, gaya hidup, dan keadaan individual.', 'makanan-kucing-persia-royal-canin.jpg'),
(43, 'Pedigree 3kg', 2, 99000, 'now pedigree dry dog food is even better! it contains an optimal blend of omega 6+ Zinc, scientifically proven to promote healthier and shinier coat visible in 6 weeks.', 'pedigree3kg.jpg'),
(44, 'Proplan', 1, 310000, 'Makanan Kucing jenis kering untuk Dewasa (Dewasa : 1-6th)', 'proplan.jpg'),
(45, 'Sabina 1kg', 1, 25500, 'Makanan kucing premium SABINA', 'sabina1kg.jpg'),
(46, 'Universal world pet', 1, 435000, 'UNIVERSAL seafood 20kg...makanan untuk kucing kesayangan anda...', 'universalworldpet1kg.jpg'),
(47, 'whiskas 400g', 1, 15000, 'Whiskas Rasa Ikan Tuna\r\nDibuat dari ikan segar sangat disukai kucing dan bermanfaat untuk kucing. Kandungan gizi yang lengkap dan seimbang untuk memastikan pertumbuhan kucing yang sehat dan memberikan yang baik sistem kekebalan kucing.', 'whiskas400g.jpg'),
(48, 'Royal Canin Junior 8kg', 1, 544000, 'Royal Canin Mini Junior kemasan 8kg freshpack', 'rc_medium_junior.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `useradmin`
--

CREATE TABLE `useradmin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `useradmin`
--

INSERT INTO `useradmin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin'),
(2, 'adhi', 'adhi'),
(3, 'a', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(10) NOT NULL,
  `nama_depan` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nama_belakang` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alamat` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tanggal_lahir` date NOT NULL,
  `kota` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `negara` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `zip` int(11) NOT NULL,
  `waktu_dibuat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `nama_depan`, `nama_belakang`, `username`, `password`, `email`, `alamat`, `tanggal_lahir`, `kota`, `negara`, `zip`, `waktu_dibuat`) VALUES
(1, 'asd', 'asd', 'as', '123', '13@gmail.com', 'asddas', '2018-08-24', 'asd', 'asd', 123, '0000-00-00 00:00:00'),
(2, 'a', 'a', 'a', 'a', 'a@gmail.com', 'qw', '2018-08-14', 'asd', 'd', 12, '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminlogin`
--
ALTER TABLE `adminlogin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartID`);

--
-- Indexes for table `categorytbl`
--
ALTER TABLE `categorytbl`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `itemcategory`
--
ALTER TABLE `itemcategory`
  ADD PRIMARY KEY (`itemID`);

--
-- Indexes for table `productlist`
--
ALTER TABLE `productlist`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `FK_productcategory` (`categoryID`);

--
-- Indexes for table `useradmin`
--
ALTER TABLE `useradmin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminlogin`
--
ALTER TABLE `adminlogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `categorytbl`
--
ALTER TABLE `categorytbl`
  MODIFY `categoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `itemcategory`
--
ALTER TABLE `itemcategory`
  MODIFY `itemID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productlist`
--
ALTER TABLE `productlist`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `useradmin`
--
ALTER TABLE `useradmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `productlist`
--
ALTER TABLE `productlist`
  ADD CONSTRAINT `FK_productcategory` FOREIGN KEY (`categoryID`) REFERENCES `categorytbl` (`categoryID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
