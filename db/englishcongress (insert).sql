-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2016 a las 19:27:32
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.15

CREATE DATABASE englishcongress;
USE englishcongress;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `englishcongress`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups`
--

CREATE TABLE IF NOT EXISTS `groups` (
  `id` smallint(6) NOT NULL,
  `name` varchar(75) NOT NULL,
  `capacity` smallint(6) NOT NULL,
  `maxCapacity` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=7;

--
-- Volcado de datos para la tabla `groups`
--

INSERT INTO `groups` (`id`, `name`, `capacity`, `maxCapacity`) VALUES
(1, 'Dirección Regional de Educación, San Carlos', 87, 87),
(2, 'Dirección Regional de Educación, Norte-Norte', 28, 28),
(3, 'Dirección Regional de Educación, Sarapiquí', 26, 26),
(4, 'Dirección Regional de Educación, Occidente', 9, 9),
(5, 'Consejo Académico Regional', 50, 50),
(6, 'General Public', 50, 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `id` varchar(11) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `fullName` varchar(75) NOT NULL,
  `regionGroup` varchar(50) NOT NULL,
  `email` varchar(75) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL,
  `nationality` varchar(50) NOT NULL,
  `receipt` tinyint(1) NOT NULL,
  `informed` varchar(150) NOT NULL,
  `academicDegree` varchar(150) NOT NULL,
  `teachingPopulation` varchar(150) NOT NULL,
  `type` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `person`
--

INSERT INTO `person` (`id`, `pass`, `fullName`, `regionGroup`, `email`, `phoneNumber`, `nationality`, `receipt`, `informed`, `academicDegree`, `teachingPopulation`, `type`) VALUES
('2-0000-0000', '827ccb0eea8a706c4c34a16891f84e7b', 'Fauricio Rojas Hernandez', 'CQ', 'fauri-94@hotmail.com', '88888888', 'Costa Rican', 0, 'Website', 'Student', 'Higher education', 'A'),
('2-0000-0001', '827ccb0eea8a706c4c34a16891f84e7b', 'Cristian Salas Salazar', 'CQ', 'cs.salas94@gmail.com', '88888888', 'Costa Rican', 0, 'Website', 'Student', 'High school', 'U');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personsession`
--

CREATE TABLE IF NOT EXISTS `personsession` (
`id` int(11) NOT NULL,
  `idPerson` varchar(11) NOT NULL,
  `idSession` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5;

--
-- Volcado de datos para la tabla `personsession`
--

INSERT INTO `personsession` (`id`, `idPerson`, `idSession`) VALUES
(1, '2-0000-0001', 2),
(2, '2-0000-0001', 4),
(3, '2-0000-0001', 3),
(4, '2-0000-0001', 1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `session`
--

INSERT INTO `session` (`id`, `name`, `location`, `date`, `hourStart`, `hourFinish`, `capacity`, `maxCapacity`) VALUES
(1, 'English 1', 'Bromelia 1', '2015-11-06', '10:00', '11:00', 0, 30),
(2, 'English 2', 'Jacaranda', '2015-11-06', '10:00', '11:00', 29, 30),
(3, 'English 3', 'Tecno Aula 2', '2015-11-06', '10:30', '13:00', 29, 30),
(4, 'English 4', 'Bromelia 2', '2015-11-06', '13:00', '15:00', 29, 30);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `groups`
--
ALTER TABLE `groups`
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
 ADD PRIMARY KEY (`id`), ADD KEY `idPerson` (`idPerson`), ADD KEY `idSession` (`idSession`);

--
-- Indices de la tabla `session`
--
ALTER TABLE `session`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `groups`
--
ALTER TABLE `groups`
MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `personsession`
--
ALTER TABLE `personsession`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `session`
--
ALTER TABLE `session`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
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
