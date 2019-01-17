SET NAMES utf8
CREATE DATABASE dgwj CHARSET=utf8;
USE dgwj;
CREATE TABLE dgwj_tehui(
  teid INT PRIMARY KEY AUTO_INCREMENT,
  tetitle VARCHAR(50),
  teimg_url VARCHAR(255)
);
INSERT INTO dgwj_tehui VALUES(1,"Coach双肩包 7折",
"http://127.0.0.1:3000/img/tehui/1.jpg");
INSERT INTO dgwj_tehui VALUES(2,"Coach链条包 6折",
"http://127.0.0.1:3000/img/tehui/2.jpg");
INSERT INTO dgwj_tehui VALUES(3,"FURLA手拎包 75折",
"http://127.0.0.1:3000/img/tehui/3.jpg");
INSERT INTO dgwj_tehui VALUES(4,"Kate Spade钱包 9折",
"http://127.0.0.1:3000/img/tehui/4.jpg");
INSERT INTO dgwj_tehui VALUES(5,"Marina Hoermanseder",
"http://127.0.0.1:3000/img/tehui/5.jpg");
INSERT INTO dgwj_tehui VALUES(6,"Kate Spade斜挎包 9折",
"http://127.0.0.1:3000/img/tehui/6.jpg");
INSERT INTO dgwj_tehui VALUES(7,"Coccinelle马鞍包 9折",
"http://127.0.0.1:3000/img/tehui/7.jpg");
INSERT INTO dgwj_tehui VALUES(8,"Coccinelle斜挎包 75折",
"http://127.0.0.1:3000/img/tehui/8.jpg");