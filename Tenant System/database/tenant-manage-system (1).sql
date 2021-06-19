-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2021 at 02:24 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tenant-manage-system`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(10) NOT NULL,
  `admin_username` varchar(255) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `admin_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_username`, `admin_email`, `admin_password`) VALUES
(1, 'admin', 'admin@admin.my', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `booking_id` int(100) NOT NULL,
  `booking_date` date NOT NULL,
  `booking_status` varchar(255) NOT NULL,
  `room_id` int(100) NOT NULL,
  `tenant_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`booking_id`, `booking_date`, `booking_status`, `room_id`, `tenant_id`) VALUES
(100, '2021-06-01', 'Succeed', 101, 0),
(101, '2021-06-02', 'Succeed', 102, 1),
(103, '2021-06-04', 'Succeed', 103, 2),
(104, '2021-06-04', 'Succeed', 104, 4);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL,
  `payment_status` varchar(255) NOT NULL,
  `payment_date_pay` date NOT NULL,
  `tenant_id` int(100) NOT NULL,
  `booking_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payment_id`, `payment_status`, `payment_date_pay`, `tenant_id`, `booking_id`) VALUES
(301, 'Paid', '2021-06-01', 1, 100),
(302, 'Paid', '2021-06-07', 2, 101),
(303, 'Paid', '2021-06-07', 3, 103),
(304, 'Paid', '2021-06-07', 4, 104);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_id` int(100) NOT NULL,
  `room_type` varchar(255) NOT NULL,
  `room_price` double NOT NULL,
  `room_image` varchar(255) NOT NULL,
  `room_availability` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `room_type`, `room_price`, `room_image`, `room_availability`) VALUES
(101, 'Single', 250, 'none', 'Occupied'),
(102, 'Double', 350, 'none', 'occupied'),
(103, 'Single', 250, 'none', 'Occupied'),
(104, 'Single', 250, 'none', 'Occupied');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `services_id` int(100) NOT NULL,
  `services_date` date NOT NULL,
  `services_complain` varchar(255) NOT NULL,
  `tenant_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`services_id`, `services_date`, `services_complain`, `tenant_id`) VALUES
(900, '2021-06-03', 'The lights burn out.', 1),
(901, '2021-06-02', 'Blockage of toilet', 3),
(902, '2021-06-03', 'Blockage', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tenant`
--

CREATE TABLE `tenant` (
  `tenant_id` int(100) NOT NULL,
  `tenant_username` varchar(255) NOT NULL,
  `tenant_password` varchar(255) NOT NULL,
  `tenant_email` varchar(255) NOT NULL,
  `tenant_name` varchar(255) NOT NULL,
  `tenant_address` varchar(225) NOT NULL,
  `tenant_phonenum` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tenant`
--

INSERT INTO `tenant` (`tenant_id`, `tenant_username`, `tenant_password`, `tenant_email`, `tenant_name`, `tenant_address`, `tenant_phonenum`) VALUES
(1, 'ally', '160598', 'allyshajin16@gmail.com', 'Allysha Anastasia anak Jin', 'Kuching', 123456789),
(2, 'aiden', '123456', 'aiden@gmail.com', 'Aiden Lee', 'Kuching', 123654987),
(3, 'lith', '789456', 'listra@gmail.com', 'Listra Libin', 'Samarahan', 156478923),
(4, 'louu', '098765', 'lou@gmail.com', 'Louis Lim', 'Siburan', 136598749);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`booking_id`),
  ADD UNIQUE KEY `room_id` (`room_id`),
  ADD UNIQUE KEY `tenant_id` (`tenant_id`),
  ADD UNIQUE KEY `room_id_2` (`room_id`,`tenant_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD UNIQUE KEY `tenant_id` (`tenant_id`,`booking_id`),
  ADD KEY `booking_id` (`booking_id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`services_id`),
  ADD UNIQUE KEY `tenant_id` (`tenant_id`);

--
-- Indexes for table `tenant`
--
ALTER TABLE `tenant`
  ADD PRIMARY KEY (`tenant_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `booking_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=305;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `room_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `services_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=903;

--
-- AUTO_INCREMENT for table `tenant`
--
ALTER TABLE `tenant`
  MODIFY `tenant_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`tenant_id`) REFERENCES `tenant` (`tenant_id`),
  ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`booking_id`);

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`tenant_id`) REFERENCES `tenant` (`tenant_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
