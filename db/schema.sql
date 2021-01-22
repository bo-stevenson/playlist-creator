### Schema

CREATE DATABASE playlist_db;
USE playlist_db;

CREATE TABLE playlist
(
	id int NOT NULL AUTO_INCREMENT,
	artist varchar(255) NOT NULL,
    song_name varchar(255) NOT NULL,
    song_cover varchar(255) NOT NULL, 
    song_url varchar(255) NOT NULL,
    album_cover varchar(255) NOT NULL,

	PRIMARY KEY (id)
);


CREATE TABLE party_playlists
(
	id int NOT NULL AUTO_INCREMENT,
	artist varchar(255) NOT NULL,
    song_name varchar(255) NOT NULL,
    song_cover varchar(255) NOT NULL, 
    song_url varchar(255) NOT NULL,
    album_cover varchar(255) NOT NULL,

	PRIMARY KEY (id)
);

CREATE TABLE workout_playlists
(
	id int NOT NULL AUTO_INCREMENT,
	artist varchar(255) NOT NULL,
    song_name varchar(255) NOT NULL,
    song_cover varchar(255) NOT NULL, 
    song_url varchar(255) NOT NULL,
    album_cover varchar(255) NOT NULL,

	PRIMARY KEY (id)
);

CREATE TABLE chill_playlists
(
	id int NOT NULL AUTO_INCREMENT,
	artist varchar(255) NOT NULL,
    song_name varchar(255) NOT NULL,
    song_cover varchar(255) NOT NULL, 
    song_url varchar(255) NOT NULL,
    album_cover varchar(255) NOT NULL,

	PRIMARY KEY (id)
);

CREATE TABLE videogames_playlists
(
	id int NOT NULL AUTO_INCREMENT,
	artist varchar(255) NOT NULL,
    song_name varchar(255) NOT NULL,
    song_cover varchar(255) NOT NULL, 
    song_url varchar(255) NOT NULL,
    album_cover varchar(255) NOT NULL,

	PRIMARY KEY (id)
);


-- VARIABLES TO CREATE:
-- id
-- song_name
-- song_cover
-- song_url
-- album_cover


-- PLAYLISTS TABLES(5) TO CREATE:
-- party
-- workout
-- chill
-- videogames