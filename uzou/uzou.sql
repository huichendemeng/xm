SET NAMES UTF8;
DROP DATABASE IF EXISTS uzouphone;
CREATE DATABASE uzouphone CHARSET=UTF8;
USE uzouphone;
#创建商旅-商铺列表
CREATE TABLE shop(
  id int primary key auto_increment,
  shop varchar(128),
  vpic varchar(128),
  intr varchar(128),
  pic varchar(128)
);
INSERT INTO shop VALUES(null,"澳洲夏日聖霊大堡礁旅遊工作室","http://localhost:3000/img/p11.jpg","Made in Australia","http://localhost:3000/img/p1.png");
INSERT INTO shop VALUES(null,"欧来欧去","http://localhost:3000/img/p22.jpg","
Made In Europe","http://localhost:3000/img/p2.png");
INSERT INTO shop VALUES(null,"至美旅行","http://localhost:3000/img/p33.jpg","
Made in U.S.A","http://localhost:3000/img/p3.png");
INSERT INTO shop VALUES(null,"顺通签证","http://localhost:3000/img/p44.jpg","
Made In China","http://localhost:3000/img/p4.png");
CREATE TABLE recommend(
  id int primary key auto_increment,
  place varchar(128),
  cprice varchar(32),
  fprice varchar(32),
  pic varchar(128)
);
INSERT INTO recommend VALUES(null,"<佛州6日游>迈阿密出发,大沼泽国家公园,西棕榈滩,罗德岱堡,奥兰多（需二次确认）","¥ 4,892起","","http://localhost:3000/img/dy.png");
INSERT INTO recommend VALUES(null,"英国一地7天6晚巴士循环深度游【全年保证出发 伦敦 爱丁堡 曼彻斯特】","¥ 3,326起","EUR 419起","http://localhost:3000/img/de.png");
INSERT INTO recommend VALUES(null,"「跳傘」聖靈群島自由落體跳傘體驗 (僅限艾爾利海灘出發)","¥ 1,609起","AUD 319起","http://localhost:3000/img/ds.png");
INSERT INTO recommend VALUES(null,"<荷兰风车村、沃伦丹一日游>阿姆斯特丹出发 中文导游 当天来回 保证出发","¥ 476起","EUR 60起","http://localhost:3000/img/dss.png");
INSERT INTO recommend VALUES(null,"A行程：乌兰巴托-特日乐极 经典4日（蒙古包）","
¥ 2,100起","","http://localhost:3000/img/dw.png");
INSERT INTO recommend VALUES(null,"<夏威夷5日游>夏威夷出发,珍珠港,中国城,小环岛,火山大岛,茂宜岛(两岛游)（需二次确认）","¥ 3,612起","","http://localhost:3000/img/dl.png");
INSERT INTO recommend VALUES(null,"<奥兰多5日游>奥兰多出发,未来世界,环球影城,迪士尼（需二次确认）","¥ 3,283起","","http://localhost:3000/img/d7.png");
INSERT INTO recommend VALUES(null,"“普羅維登斯五世號”白天堂帆船巡航(艾爾利海灘出發)","¥ 419起","AUD 83起","http://localhost:3000/img/db.png");
INSERT INTO recommend VALUES(null,"汉密尔顿岛激情游（艾尔利海滩出发）","¥ 1,367起","AUD 271起","http://localhost:3000/img/dj.png");
INSERT INTO recommend VALUES(null,"法国+比利时+荷兰+卢森堡+德国 7天6晚巴士循环游【全年保证出发 凡尔赛宫 风车村】","
¥ 3,326起","EUR 419起","http://localhost:3000/img/dsss.png");
INSERT INTO recommend VALUES(null,"中国北京","¥ 419起","AUD 83起","http://localhost:3000/img/211.jpg");
INSERT INTO recommend VALUES(null,"中国三亚","¥ 419起","AUD 83起","http://localhost:3000/img/210.jpg");
INSERT INTO recommend VALUES(null,"意大利","¥ 419起","AUD 83起","http://localhost:3000/img/225.jpg");
INSERT INTO recommend VALUES(null,"美国","¥ 419起","AUD 83起","http://localhost:3000/img/227.jpg");
INSERT INTO recommend VALUES(null,"意大利","¥ 419起","AUD 83起","http://localhost:3000/img/225.jpg");
INSERT INTO recommend VALUES(null,"奥地利","¥ 419起","AUD 83起","http://localhost:3000/img/99.jpg");
INSERT INTO recommend VALUES(null,"泰国","¥ 419起","AUD 83起","http://localhost:3000/img/229.jpg");
INSERT INTO recommend VALUES(null,"日本","¥ 419起","AUD 83起","http://localhost:3000/img/222.jpg");
CREATE TABLE placelist(
  id int primary key auto_increment,
  sale varchar(32),
  place varchar(128),
  cprice varchar(32),
  fprice varchar(32),
  pic varchar(128)
);
INSERT INTO placelist VALUES(null,"欧来欧去","圣米歇尔山一日游（需二次确认）","¥ 521起","EUR66","http://localhost:3000/img/11.jpg");
INSERT INTO placelist VALUES(null,"欧来欧去","卡尔瓦多斯、奥格地区伯夫龙、卡昂（需二次确认）","¥ 521起","EUR66","http://localhost:3000/img/22.jpg");
INSERT INTO placelist VALUES(null,"欧来欧去","法国古堡卢瓦尔河谷一日游（需二次确认）","¥ 521起","EUR66","http://localhost:3000/img/33.jpg");
INSERT INTO placelist VALUES(null,"欧来欧去","
丹麦+瑞典+挪威冰川峡湾7天6晚巴士循环北欧深度游【全年保证出发 哥本哈根 斯德哥尔摩 奥斯陆】","¥ 3835起","EUR486","http://localhost:3000/img/44.png");
INSERT INTO placelist VALUES(null,"欧来欧去","
法国+西班牙+安道尔7天6晚巴士循环游【全年保证出发 安道尔 波尔多 香波堡】","¥ 3835起","EUR486","http://localhost:3000/img/55.png");
INSERT INTO placelist VALUES(null,"欧来欧去","西班牙+葡萄牙7天6晚巴士循环深度游【全年保证出发 马德里 巴塞罗那】","¥ 3835起","EUR486","http://localhost:3000/img/66.png");
INSERT INTO placelist VALUES(null,"欧来欧去","英国一地7天6晚巴士循环深度游【全年保证出发 伦敦 爱丁堡 曼彻斯特】","¥ 3835起","EUR486","http://localhost:3000/img/77.png");
INSERT INTO placelist VALUES(null,"欧来欧去","德国+奥地利+捷克+斯洛伐克+匈牙利+瑞士7天6晚巴士循环游【全年保证出发 布拉格 维也纳】","¥ 3835起","EUR486","http://localhost:3000/img/88.png");
INSERT INTO placelist VALUES(null,"欧来欧去","瑞士+意大利+梵蒂冈+摩纳哥+法国 7天6晚巴士循环游【全年保证出发 威尼斯 戛纳】","¥ 3835起","EUR486","http://localhost:3000/img/99.jpg");
INSERT INTO placelist VALUES(null,"欧来欧去","法国+比利时+荷兰+卢森堡+德国 7天6晚巴士循环游【全年保证出发 凡尔赛宫 风车村】","¥ 3835起","EUR486","http://localhost:3000/img/210.jpg");
INSERT INTO placelist VALUES(null,"欧来欧去","
枫丹白露、莫雷镇、巴比松艺术村（需二次确认）","¥ 521起","EUR66","http://localhost:3000/img/211.jpg");
INSERT INTO placelist VALUES(null,"至美旅行","
<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）","¥ 4270起","","http://localhost:3000/img/212.jpg");
INSERT INTO placelist VALUES(null,"至美旅行","
<美中7日游>芝加哥出发,春田市,圣路易斯,橡树庄园,新奥尔良,肯塔基育马园,普渡大学（中部风情游）（需二次确认）","￥4,270起","","http://localhost:3000/img/213.jpg");
INSERT INTO placelist VALUES(null,"至美旅行","
<美东7日游>纽约出发,自由女神,Woodbury,尼亚加拉大瀑布,波士顿(纽约自选一天)（需二次确认）","￥3,291起","","http://localhost:3000/img/214.jpg");

INSERT INTO placelist VALUES(null,"至美旅行","
<美东7日游>华盛顿接机,尼亚加拉大瀑布,哈佛大学,波士顿,罗德岛,耶鲁大学,第五大道（需二次确认）","¥2340起","","http://localhost:3000/img/215.jpg");

INSERT INTO placelist VALUES(null,"至美旅行","<美东7日游>纽约出发,费城,阿米西村,尼加拉瀑布,哈佛大学（名城美景精华游）（需二次确认","￥2297起","","http://localhost:3000/img/222.jpg");

INSERT INTO placelist VALUES(null,"至美旅行","<华盛顿3日游>五角大楼,国会山庄,二战纪念碑,林肯纪念堂,越战纪念碑,朝鲜战争纪念碑,费农山庄（需二次确认）","￥1476起","","http://localhost:3000/img/223.jpg");
INSERT INTO placelist VALUES(null,"至美旅行","<美西3日游>洛杉矶出发,包伟湖,羚羊彩穴,马蹄湾,布莱斯峡谷,锡安国家公园,拉斯维加斯（需二次确认）","￥1095起","","http://localhost:3000/img/224.jpg");

INSERT INTO placelist VALUES(null,"至美旅行","<美西豪华6日游>洛杉矶出发,圣塔芭芭拉,丹麦村,旧金山,17哩湾,主题项目八选二（需二次确认）","￥4889起","","http://localhost:3000/img/225.jpg");

INSERT INTO placelist VALUES(null,"至美旅行","<西雅图3日游>奥林匹克国家公园,斯诺雷米瀑布,德国村,雷尼尔火山国家公园（需二次确认）","￥1188起","","http://localhost:3000/img/226.jpg");
INSERT INTO placelist VALUES(null,"至美旅行","<美东6日游>纽约出发,耶鲁大学,波士顿,奥本尼,尼亚加拉大瀑布,华盛顿（需二次确认）","￥2686起","","http://localhost:3000/img/227.jpg");

INSERT INTO placelist VALUES(null,"至美旅行","英国一地7天6晚巴士循环深度游【全年保证出发 伦敦 爱丁堡 曼彻斯特】","￥3835起","","http://localhost:3000/img/228.jpg");
INSERT INTO placelist VALUES(null,"至美旅行","<华盛顿3日游>五角大楼,国会山庄,二战纪念碑,林肯纪念堂,越战纪念碑,朝鲜战争纪念碑,费农山庄（需二次确认）","￥1476起","","http://localhost:3000/img/229.jpg");
CREATE TABLE mudidi(
  id int primary key auto_increment,
  place varchar(128),
  pic varchar(128),
  zhou varchar(32)
);
INSERT INTO mudidi VALUES(null,"美国","http://localhost:3000/img/1111.jpg","北美洲");
INSERT INTO mudidi VALUES(null,"法国","http://localhost:3000/img/2222.jpg","欧洲");
INSERT INTO mudidi VALUES(null,"德国","http://localhost:3000/img/3333.jpg","欧洲");
INSERT INTO mudidi VALUES(null,"巴黎","http://localhost:3000/img/4444.jpg","欧洲");
INSERT INTO mudidi VALUES(null,"瑞士","http://localhost:3000/img/5555.jpg","欧洲");
INSERT INTO mudidi VALUES(null,"纽约","http://localhost:3000/img/6666.jpg","北美洲");
INSERT INTO mudidi VALUES(null,"旧金山","http://localhost:3000/img/7777.jpg","北美洲");
INSERT INTO mudidi VALUES(null,"洛杉矶","http://localhost:3000/img/8888.jpg","北美洲");
INSERT INTO mudidi VALUES(null,"黄石公园","http://localhost:3000/img/11111111.jpg","北美洲");
INSERT INTO mudidi VALUES(null,"秦皇岛","http://localhost:3000/img/10101010.jpg","亚洲");
INSERT INTO mudidi VALUES(null,"意大利","http://localhost:3000/img/9999.jpg","欧洲");
#签证列表
CREATE TABLE qianzheng(
  id int primary key auto_increment,
  title varchar(128),
  pic varchar(128),
  sale varchar(32),
  price varchar(32)
);
INSERT INTO qianzheng VALUES(null,"澳大利亚个人旅游签证","http://localhost:3000/img/adly.jpg","艾思途","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
INSERT INTO qianzheng VALUES(null,"日本个人旅游签证-单次（北京领区）","http://localhost:3000/img/rb.png","顺通签证","￥1,422起");
#创建用户列表
CREATE TABLE user(
 uid  int primary key auto_increment, 
 uname VARCHAR(8),
 upwd varchar(8),
 gender bool,
 realname  varchar(8),
 phone  char(11),
 email  char(20),
 IDcardnum char(18)
);
insert into user value(1,"tom",123,1,"汤姆","18235701849","tom@qq.com","1406241987");
INSERT INTO user value(null,"hyf",1849,"0","黄玉峰","","hyf@qq.com","");
INSERT INTO user value(null,"ghh",3611,"0","高慧慧","","ghh@qq.com","");
INSERT INTO user value(null,"gjh",8911,"0","高金红","","gjh@qq.com","");
INSERT INTO user value(null,"slx",5852,"0","申立新","","slx@qq.com","");
INSERT INTO user value(null,"xmr",8900,"0","肖明睿","","xmr@qq.com","");
CREATE TABLE  America(
  id int primary key auto_increment,
  place varchar(128),
  cprice varchar(32),
  pic varchar(128),
  sale varchar(8)
);
INSERT INTO America VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）",
"￥4270起","http://localhost:3000/img/a1.jpg","至美旅行");
INSERT INTO America VALUES(null,
"<美中7日游>芝加哥出发,春田市,圣路易斯,橡树庄园,新奥尔良,肯塔基育马园,普渡大学（中部风情游）（需二次确认）",
"￥3291起","http://localhost:3000/img/a2.jpg","至美旅行");
INSERT INTO America VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）",
"￥4270起","http://localhost:3000/img/a3.jpg","至美旅行");
INSERT INTO America VALUES(null,
"<美东7日游>纽约出发,自由女神,Woodbury,尼亚加拉大瀑布,波士顿(纽约自选一天)（需二次确认）",
"￥3291起","http://localhost:3000/img/a4.jpg","至美旅行");
INSERT INTO America VALUES(null,
"<美东7日游>华盛顿接机,尼亚加拉大瀑布,哈佛大学,波士顿,罗德岛,耶鲁大学,第五大道（需二次确认）",
"￥2340起","http://localhost:3000/img/a5.jpg","至美旅行");
INSERT INTO America VALUES(null,
"美东7日游>纽约出发,费城,阿米西村,尼加拉瀑布,哈佛大学（名城美景精华游）（需二次确认）",
"￥2340起","http://localhost:3000/img/a6.jpg","至美旅行");
INSERT INTO America VALUES(null,
"<美东7日游>纽约出发,费城,阿米西村,尼加拉瀑布,哈佛大学,大都会博物馆（名城美景精华游）（需二次确认）",
"￥2297起","http://localhost:3000/img/a7.jpg","至美旅行");
INSERT INTO America VALUES(null,
"<美东6日游>波士顿接机,纽约,费城,华盛顿,康宁玻璃中心,尼亚加拉大瀑布(瀑布美景豪华游)（需二次确认）",
"￥2297起","http://localhost:3000/img/a8.jpg","至美旅行");
CREATE TABLE  shopping(
  id int primary key auto_increment,
  place varchar(128),
  cprice varchar(32),
  pic varchar(128),
  sale varchar(8)
);
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/4444.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/5555.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/22.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/21.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/33.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/11.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/99.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/214.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/211.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/a7.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/a8.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/a6.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/22.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/210.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/a8.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/a5.jpg","至美旅行");
INSERT INTO shopping VALUES(null,
"<美东7日游>芝加哥出发,底特律,华盛顿,阿米西村,纽约,尼亚加拉大瀑布（需二次确认）
","￥4,270起","http://localhost:3000/img/a4.jpg","至美旅行");
CREATE TABLE collection(
  cid int primary key auto_increment,
  uid int,
  id int,
  cprice varchar(32),
  pic varchar(32),
  place varchar(128),
  foreign key(id) references America(id)
);









