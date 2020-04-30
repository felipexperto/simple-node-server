-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 28-Abr-2020 às 07:16
-- Versão do servidor: 10.1.40-MariaDB
-- versão do PHP: 7.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_greg`
--
CREATE DATABASE IF NOT EXISTS `node_greg` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `node_greg`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `time` int(11) DEFAULT NULL,
  `verified` int(11) DEFAULT '0',
  `timestamp` int(11) DEFAULT NULL,
  `email_address` char(128) DEFAULT NULL,
  `password` char(64) DEFAULT NULL,
  `token` int(11) DEFAULT NULL,
  `login_counter` int(11) DEFAULT '0',
  `ip_address` char(255) DEFAULT NULL,
  `country` char(32) DEFAULT NULL,
  `state` char(32) DEFAULT NULL,
  `city` char(32) DEFAULT NULL,
  `zip` char(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `time`, `verified`, `timestamp`, `email_address`, `password`, `token`, `login_counter`, `ip_address`, `country`, `state`, `city`, `zip`) VALUES
(1, 0, 1, NULL, 'nodegreg@mail.com', '123', NULL, 0, NULL, 'Brasil', 'São Paulo', 'Osasco', '55555'),
(2, NULL, 0, NULL, 'teste@mail.com', 'teste123', NULL, 0, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;