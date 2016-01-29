-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2015 a las 01:50:04
-- Versión del servidor: 5.6.26
-- Versión de PHP: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE englishcongress;
USE englishcongress;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `englishcongress`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `session`
--

CREATE TABLE IF NOT EXISTS `session` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `location` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `hourStart` varchar(10) NOT NULL,
  `hourFinish` varchar(10) NOT NULL,
  `capacity` int(11) NOT NULL,
  `maxCapacity` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `session`
--

INSERT INTO `session` (`id`, `name`, `location`, `date`, `hourStart`, `hourFinish`, `capacity`, `maxCapacity`) VALUES
(1, 'English 1', 'Bromelia 1', '2015-11-06', '10:00', '11:00', 30, 30),
(2, 'English 2', 'Jacaranda', '2015-11-06', '10:00', '11:00', 30, 30),
(3, 'English 3', 'Tecno Aula 2', '2015-11-06', '10:30', '13:00', 30, 30),
(4, 'English 4', 'Bromelia 2', '2015-11-06', '13:00', '15:00', 30, 30);

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
  `type` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `person`
--

INSERT INTO `person` (`id`, `pass`, `fullName`, `regionGroup`, `email`, `phoneNumber`, `nationality`, `depositNumber`, `direccionRegional`, `informed`, `academicDegree`, `teachingPopulation`, `type`) VALUES
('2-0000-0000', '12345', 'Fauricio Rojas Hernandez', 'CQ', 'fauri-94@hotmail.com', '88888888', 'Costa Rican', '1122-3344', 'San Carlos', 'Website', 'Student', 'Higher education', 'A'),
('2-0000-0001', '12345', 'Cristian Salas Salazar', 'CQ', 'cs.salas94@gmail.com', '88888888', 'Costa Rican', '5566-7788', 'San Carlos', 'Website', 'Student', 'High school', 'U');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personcourse`
--

CREATE TABLE IF NOT EXISTS `personsession` (
  `id` int(11) NOT NULL,
  `idPerson` varchar(11) NOT NULL,
  `idSession` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personsession`
--
ALTER TABLE `personsession`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPerson` (`idPerson`),
  ADD KEY `idSession` (`idSession`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `session`
--
ALTER TABLE `session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `personsession`
--
ALTER TABLE `personsession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `personsession`
--
ALTER TABLE `personsession`
  ADD CONSTRAINT `personsession_ibfk_1` FOREIGN KEY (`idPerson`) REFERENCES `person` (`id`),
  ADD CONSTRAINT `personsession_ibfk_2` FOREIGN KEY (`idSession`) REFERENCES `session` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
