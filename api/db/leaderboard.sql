drop database if exists leaderboard;

create database if not exists leaderboard;

use leaderboard;

CREATE TABLE person (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  points INT NOT NULL
);

INSERT INTO person (name, points)
VALUES
  ('Chi', 15),
  ('Sophie', 14),
  ('Vicky', 12),
  ('Hyin Ki', 9),
  ('Jess Myn', 7),
  ('Ivyn', 5),
  ('Rachel', 3),
  ('Jun Ning', 1);
  