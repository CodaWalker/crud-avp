-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 20 2018 г., 14:56
-- Версия сервера: 10.0.31-MariaDB
-- Версия PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `crud_`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `master` tinyint(1) NOT NULL DEFAULT '0',
  `statusOnline` tinyint(1) NOT NULL,
  `nickName` varchar(30) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `middleName` varchar(30) NOT NULL,
  `imgSrc` varchar(255) NOT NULL DEFAULT 'http://i.imgur.com/SMCNXdf.jpg',
  `birthday` date NOT NULL,
  `sex` varchar(15) NOT NULL,
  `maritalStatus` varchar(15) NOT NULL,
  `password` varchar(30) NOT NULL,
  `createAccount` date NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `master`, `statusOnline`, `nickName`, `firstName`, `lastName`, `middleName`, `imgSrc`, `birthday`, `sex`, `maritalStatus`, `password`, `createAccount`, `email`) VALUES
(2, 0, 0, 'Nastya', 'Анастасия', '', 'Сергеевна', '.\\src\\images\\nastya.jpg', '1988-11-02', 'women', 'free', '1111111', '2018-10-08', 'nas@list.ru'),
(3, 0, 1, 'Leon', 'Леонид', '', '', '.\\src\\images\\user_lamer.jpg', '1984-06-02', 'men', 'is married', '12345678', '2018-10-03', 'leon@gmail.com'),
(5, 1, 1, '@Rush', 'Елена', '', 'Владимировна', '.\\src\\images\\user.jpg', '1984-03-02', 'women', 'free', '123456780', '2018-10-08', 'rush@mail.ru'),
(6, 1, 0, '@PiterParker', 'Даня', 'Успенский', '', '.\\src\\images\\user.jpg', '1992-11-01', 'men', 'is married', '12111111', '2018-10-02', 'PParker@list.ru'),
(7, 1, 0, '@TrustSpec', 'Алекс', 'Иванов', '', '.\\src\\images\\user.jpg', '1992-12-03', 'men', 'is married', '11111111', '2018-08-06', 'trust.spec@mail.ru'),
(8, 1, 1, '@Bingo', 'Валера', '', '', '.\\src\\images\\user.jpg', '1990-08-30', 'men', 'free', '4434343', '2018-10-01', 'ValeraBingo@mail.ru');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING HASH;

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
