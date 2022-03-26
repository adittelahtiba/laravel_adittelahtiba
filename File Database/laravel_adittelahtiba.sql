-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Mar 2022 pada 12.46
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_adittelahtiba`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `hospitals`
--

CREATE TABLE `hospitals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `hospitals`
--

INSERT INTO `hospitals` (`id`, `name`, `address`, `email`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'RS Manado', 'Ds. Sugiyopranoto No. 341, Bekasi 94776, Kalbar', 'opung82@nababan.desa.id', '(+62) 953 1682 968', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(2, 'RS Banjarmasin', 'Dk. Yos No. 158, Denpasar 42711, Kalteng', 'napitupulu.ghaliyati@gunarto.or.id', '(+62) 258 9268 8704', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(3, 'RS Administrasi Jakarta Timur', 'Psr. Yos No. 30, Mataram 70227, DIY', 'vpratiwi@sihotang.asia', '023 3941 753', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(4, 'RS Manado', 'Dk. Ters. Buah Batu No. 916, Administrasi Jakarta Utara 71411, DIY', 'gandewa88@gmail.co.id', '0740 2173 185', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(5, 'RS Administrasi Jakarta Barat', 'Psr. Raya Ujungberung No. 151, Prabumulih 29395, Kaltim', 'paulin08@gmail.com', '(+62) 200 9964 294', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(6, 'RS Banda Aceh', 'Ki. K.H. Maskur No. 316, Pontianak 36681, Jambi', 'jarwa32@gmail.com', '(+62) 573 7735 8803', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(7, 'RS Sabang', 'Gg. Cemara No. 179, Madiun 49609, NTT', 'gabriella.prakasa@yahoo.co.id', '(+62) 928 2481 208', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(8, 'RS Tangerang', 'Dk. Merdeka No. 368, Administrasi Jakarta Selatan 44822, Lampung', 'jindra.maryati@gmail.co.id', '0881 970 238', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(9, 'RS Bima', 'Gg. Ciwastra No. 635, Palembang 71374, NTT', 'pardi.wibisono@sihombing.or.id', '0752 4721 1107', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(10, 'RS Tangerang', 'Gg. Sutarto No. 666, Ternate 64652, Banten', 'diana66@yahoo.com', '(+62) 837 9683 059', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(11, 'RS Sabang', 'Jln. Otista No. 686, Sibolga 78177, Riau', 'uriyanti@yahoo.co.id', '0358 8041 730', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(12, 'RS Palangka Raya', 'Kpg. Basket No. 380, Payakumbuh 12116, Malut', 'janet88@tarihoran.biz.id', '(+62) 435 9663 0575', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(13, 'RS Dumai', 'Dk. Zamrud No. 307, Banda Aceh 71785, Malut', 'cindy.yulianti@yahoo.co.id', '0798 4535 166', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(14, 'RS Bogor', 'Gg. Laksamana No. 8, Makassar 98978, Jabar', 'zaenab.namaga@gmail.co.id', '0541 9721 1053', '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(15, 'RS Bengkulu', 'Dk. Baranang No. 535, Bengkulu 30435, DIY', 'naradi88@gmail.com', '(+62) 961 6955 5385', '2022-03-26 11:44:51', '2022-03-26 11:44:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_03_26_071025_create_hospitals_table', 1),
(6, '2022_03_26_071703_create_patients_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `patients`
--

CREATE TABLE `patients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hospital_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `patients`
--

INSERT INTO `patients` (`id`, `name`, `address`, `phone`, `hospital_id`, `created_at`, `updated_at`) VALUES
(1, 'Lanang Zulkarnain', 'Gg. Hasanuddin No. 934, Palu 72692, Gorontalo', '0893 5890 833', 7, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(2, 'Maria Hariyah', 'Jln. Moch. Yamin No. 198, Batam 13180, Banten', '(+62) 636 9756 8308', 6, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(3, 'Sabri Hutagalung', 'Dk. Bass No. 341, Banjar 88920, Jatim', '(+62) 985 0632 388', 7, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(4, 'Candrakanta Situmorang', 'Dk. Ciwastra No. 196, Tual 66101, Kalteng', '0913 9977 1576', 2, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(5, 'Cakrajiya Habibi S.E.I', 'Ki. Raden Saleh No. 925, Administrasi Jakarta Pusat 96229, Sulut', '(+62) 741 1202 014', 9, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(6, 'Ozy Tampubolon', 'Ds. Tangkuban Perahu No. 727, Tebing Tinggi 29229, Kepri', '(+62) 511 5676 712', 4, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(7, 'Ganda Ajimin Marbun S.Gz', 'Dk. Tambak No. 599, Malang 23902, Gorontalo', '0717 6634 983', 5, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(8, 'Cagak Sitorus', 'Jln. Supono No. 166, Banjarmasin 57866, Jabar', '0332 7773 267', 1, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(9, 'Ulya Kamaria Handayani', 'Ki. Karel S. Tubun No. 684, Tomohon 43452, Sulbar', '(+62) 874 8862 7538', 6, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(10, 'Mursita Dongoran', 'Gg. Sutoyo No. 170, Subulussalam 38874, Malut', '(+62) 809 8857 0966', 2, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(11, 'Irma Uyainah', 'Psr. Suryo Pranoto No. 345, Padangpanjang 41381, Kaltim', '(+62) 304 2328 320', 5, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(12, 'Dewi Tantri Utami', 'Ki. Babakan No. 393, Tual 11598, Babel', '0802 7455 6077', 3, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(13, 'Wirda Hastuti M.Pd', 'Ki. Imam No. 615, Probolinggo 36000, Bali', '0471 1916 7864', 2, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(14, 'Icha Agustina', 'Dk. Moch. Ramdan No. 672, Banjarbaru 17653, Sumbar', '0423 4916 9522', 4, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(15, 'Lalita Purwanti S.Ked', 'Gg. Honggowongso No. 697, Banjar 44131, Jambi', '(+62) 731 6409 1073', 3, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(16, 'Emil Dimas Pratama', 'Jr. Dago No. 431, Manado 70621, Sulut', '(+62) 362 8711 9370', 4, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(17, 'Rini Silvia Rahmawati', 'Jln. Honggowongso No. 307, Sawahlunto 65299, DIY', '0385 6754 8343', 7, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(18, 'Umay Santoso', 'Gg. Sukabumi No. 453, Samarinda 82659, Lampung', '(+62) 228 1750 540', 3, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(19, 'Jumari Tarihoran S.Gz', 'Jln. Thamrin No. 554, Makassar 19848, Kepri', '021 8119 821', 9, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(20, 'Victoria Uyainah M.Pd', 'Jr. Cikutra Timur No. 867, Kendari 80873, Sulbar', '0359 3171 004', 3, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(21, 'Intan Halimah', 'Dk. Basuki No. 245, Padangpanjang 31030, NTB', '(+62) 257 6772 974', 1, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(22, 'Devi Agustina S.E.I', 'Kpg. Ters. Pasir Koja No. 157, Mojokerto 91431, Sumbar', '0998 7482 196', 9, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(23, 'Tiara Halimah', 'Ki. Abdullah No. 583, Banda Aceh 46805, Lampung', '0940 6961 237', 3, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(24, 'Belinda Usamah', 'Gg. Antapani Lama No. 946, Administrasi Jakarta Pusat 45664, Sulut', '0585 5936 329', 7, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(25, 'Saiful Hardiansyah', 'Jr. Jend. Sudirman No. 956, Metro 10088, Kalbar', '(+62) 509 1887 285', 3, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(26, 'Cakrabuana Widodo', 'Psr. Adisumarmo No. 331, Depok 91395, Kepri', '0400 5652 8180', 8, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(27, 'Karman Prakasa', 'Psr. Sadang Serang No. 36, Bogor 62654, Kalteng', '027 0918 5606', 9, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(28, 'Mala Pudjiastuti', 'Jln. Ters. Jakarta No. 504, Jambi 73388, Kalbar', '(+62) 327 8653 439', 9, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(29, 'Vicky Calista Yulianti M.Kom.', 'Jr. Babadan No. 734, Tidore Kepulauan 54760, Sulsel', '0979 0872 723', 4, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(30, 'Emong Jailani S.I.Kom', 'Gg. Dago No. 74, Padangsidempuan 59456, Kaltim', '(+62) 933 5073 845', 2, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(31, 'Kalim Rajasa', 'Psr. Ters. Pasir Koja No. 242, Dumai 77522, Lampung', '(+62) 620 3679 3612', 3, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(32, 'Humaira Oktaviani', 'Ds. Bappenas No. 995, Bukittinggi 45403, Papua', '0861 6192 8443', 4, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(33, 'Mitra Mahdi Nababan', 'Psr. Flora No. 668, Palembang 55224, Kalbar', '0990 6478 8531', 9, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(34, 'Warsa Natsir', 'Psr. Babadak No. 260, Ternate 86863, Sulbar', '(+62) 549 5080 264', 4, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(35, 'Nrima Prabowo', 'Jln. K.H. Maskur No. 754, Jayapura 83720, Kepri', '(+62) 440 5388 2843', 3, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(36, 'Elon Sirait', 'Gg. Pahlawan No. 551, Ambon 50882, NTB', '0673 7568 0636', 4, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(37, 'Gandi Danang Saragih', 'Gg. K.H. Wahid Hasyim (Kopo) No. 497, Bau-Bau 19157, Sulbar', '0292 2275 7200', 2, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(38, 'Natalia Mardhiyah', 'Psr. S. Parman No. 555, Mataram 87275, Sumsel', '0775 0214 5758', 8, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(39, 'Kasiyah Najwa Permata S.Ked', 'Gg. K.H. Maskur No. 18, Bandung 40025, Jabar', '(+62) 424 0584 118', 1, '2022-03-26 11:44:51', '2022-03-26 11:44:51'),
(40, 'Halima Prastuti', 'Jr. Kyai Mojo No. 60, Manado 54129, Sulteng', '0893 5336 3196', 9, '2022-03-26 11:44:51', '2022-03-26 11:44:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Aditya Pangestu', 'admin', 'pangestuaditya.solihin@gmail.com', NULL, '$2y$10$f9WVX.Rq9GmgnjOGVEu/vO2d.cmLp1DiHDyC.KIMWA/nm9gBaWV4.', NULL, '2022-03-26 11:44:50', '2022-03-26 11:44:50');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `hospitals`
--
ALTER TABLE `hospitals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
