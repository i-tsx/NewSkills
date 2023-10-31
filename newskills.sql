-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2023 at 05:58 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newskills`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `marks` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`, `name`, `role`, `avatar`, `marks`) VALUES
('omar@privatemoe.ae', 'POvgq66#', 'Omar', '12_ADV-B', 'http://localhost:3000/assets/logo.png', '{\"Mathematics\":91,\"Physics\":93,\"Biology\":99,\"English\":93,\"Arabic\":94,\"Chemistry\":99,\"Arts\":92,\"Computer Science\":99}'),
('t_2011002039@privatemoe.ae', 'POvgq66#', 'Yasser', 'teacher', 'http://localhost:3000/assets/logo.png', 'Mathematics'),
('yamen@privatemoe.ae', 'POvgq66#', 'Yamen', '12_ADV-B', 'http://localhost:3000/assets/logo.png', '{\"Mathematics\":99,\"Physics\":99,\"Biology\":99,\"English\":93,\"Arabic\":90,\"Chemistry\":89,\"Arts\":99,\"Computer Science\":89}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
