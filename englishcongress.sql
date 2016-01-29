-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-10-2015 a las 23:23:04
-- Versión del servidor: 5.6.26
-- Versión de PHP: 5.6.12

CREATE DATABASE englishcongress;
USE englishcongress;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `englishcongress`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `details` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `hourStart` varchar(10) NOT NULL,
  `hourFinish` varchar(10) NOT NULL,
  `quota` int(11) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `course`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `id` varchar(11) NOT NULL,
  `pass` varchar(25) NOT NULL,
  `fullName` varchar(75) NOT NULL,
  `regionGroup` varchar(20) NOT NULL,
  `email` varchar(75) NOT NULL,
  `phoneNumber` varchar(8) NOT NULL,
  `nationality` varchar(25) NOT NULL,
  `depositNumber` varchar(30) NOT NULL,
  `direccionRegional` varchar(150) NOT NULL,
  `informed` varchar(150) NOT NULL,
  `academicDegree` varchar(150) NOT NULL,
  `teachingPopulation` varchar(150) NOT NULL,
  `type` varchar(1) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `person`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personcourse`
--

CREATE TABLE IF NOT EXISTS `personcourse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPerson` varchar(11) NOT NULL,
  `idCourse` int(11) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (idPerson) 
        REFERENCES Person(id),
  FOREIGN KEY (idCourse) 
        REFERENCES Course(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
