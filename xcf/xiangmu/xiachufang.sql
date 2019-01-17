SET NAMES UTF8;
DROP DATABASE IF EXISTS xiachufang;
CREATE DATABASE xiachufang CHARSET=UTF8;
USE xiachufang;
CREATE TABLE xia_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname CHAR(16),
	upwd CHAR(12),
  ugender BOOL,
	uphone  VARCHAR(11),
	uemial CHAR(20)
);
CREATE TABLE xia_danming(
	did INT PRIMARY KEY AUTO_INCREMENT,
	dname VARCHAR(4),
	}
CREATE TABLE xia_caidan(
	xid INT PRIMARY KEY AUTO_INCREMENT,
	did INT,
	zid INT,
	xname VARCHAR(11),
	ximg VARCHAR(64);
	xpeifang VARCHAR(64),
	xpingjia  VARCHAR(64),
);
CREATE TABLE xia_zpr(
	zid INT PRIMARY KEY AUTO_INCREMENT,
	zname VARCHAR(16),
};

INSERT INTO xia_danming VALUES(null,"家常菜");
INSERT INTO xia_danming VALUES(null,"快手菜");
INSERT INTO xia_danming VALUES(null,"下饭菜");
INSERT INTO xia_danming VALUES(null,"素菜");
INSERT INTO xia_danming VALUES(null,"大鱼大肉");
INSERT INTO xia_danming VALUES(null,"下酒菜");
INSERT INTO xia_danming VALUES(null,"小清新");
INSERT INTO xia_danming VALUES(null,"创意菜");
INSERT INTO xia_zpr VALUES(null,"泽泽");
INSERT INTO xia_zpr VALUES(null,"小刺ci");
INSERT INTO xia_zpr VALUES(null,"西姥姥");
INSERT INTO xia_zpr VALUES(null,"悟饭");
INSERT INTO xia_zpr VALUES(null,"apple爱自己");
INSERT INTO xia_zpr VALUES(null,"大花花西瓜瓜");
INSERT INTO xia_zpr VALUES(null,"恩泽宝贝");
INSERT INTO xia_zpr VALUES(null,"labordor");
INSERT INTO xia_zpr VALUES(null,"希洛大大大人");
INSERT INTO xia_zpr VALUES(null,"梁小静的食物恋");
INSERT INTO xia_zpr VALUES(null,"小宇私厨");
INSERT INTO xia_zpr VALUES(null,"圆猪猪");
INSERT INTO xia_zpr VALUES(null,"宅与路上");
INSERT INTO xia_zpr VALUES(null,"Saiku");
INSERT INTO xia_zpr VALUES(null,"DUODUO厨子");
INSERT INTO xia_zpr VALUES(null,"万万");
INSERT INTO xia_zpr VALUES(null,"猫厨房");
INSERT INTO xia_zpr VALUES(null,"pia小月");
INSERT INTO xia_zpr VALUES(null,"小美的美食");
