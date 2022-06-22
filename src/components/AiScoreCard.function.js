export function checkName(name) {
  switch (name) {
    case '巴萨':
      return '巴塞隆拿';
    case '皇马':
      return '皇家馬德里';
    case '西汉姆联':
      return '韋斯咸';
    case '切尔西':
      return '車路士';
    case '阿森纳':
      return '阿仙奴';
    case '尤文图斯':
      return '祖雲達斯';
    case '诺维奇':
      return '諾域治';
    case '吉马良斯':
      return '甘馬雷斯';
    case '巴黎圣日尔曼':
      return '巴黎聖日爾門';
    case '利兹联':
      return '列斯聯';
    case '西班牙人':
      return '愛斯賓奴';
    default:
      return name;
  }
}

export function returnTeamIcon(name) {
  switch (name) {
    case '巴萨':
      return 'https://sortitoutsi.net/uploads/team/1708.png';
    case '皇马':
      return 'https://sortitoutsi.net/uploads/team/1736.png';
    // 英超
    case '西汉姆联':
      return 'https://sortitoutsi.net/uploads/team/735.png';
    case '切尔西':
      return 'https://sortitoutsi.net/uploads/team/630.png';
    case '阿森纳':
      return 'https://sortitoutsi.net/uploads/team/602.png';
    case '水晶宫':
      return 'https://sortitoutsi.net/uploads/team/642.png';
    case '阿斯顿维拉':
      return 'https://sortitoutsi.net/uploads/team/603.png';
    case '布伦特福德':
      return 'https://sortitoutsi.net/uploads/team/617.png';
    case '布莱顿':
      return 'https://sortitoutsi.net/uploads/team/618.png';
    case '伯恩利':
      return 'https://sortitoutsi.net/uploads/team/622.png';
    case '埃弗顿':
      return 'https://sortitoutsi.net/uploads/team/650.png';
    case '莱切斯特城':
      return 'https://sortitoutsi.net/uploads/team/673.png';
    case '利物浦':
      return 'https://sortitoutsi.net/uploads/team/676.png';
    case '曼彻斯特城':
      return 'https://sortitoutsi.net/uploads/team/679.png';
    case '曼彻斯特联':
      return 'https://sortitoutsi.net/uploads/team/680.png';
    case '纽卡斯尔联':
      return 'https://sortitoutsi.net/uploads/team/688.png';
    case '南安普敦':
      return 'https://sortitoutsi.net/uploads/team/713.png';
    case '诺维奇':
      return 'https://sortitoutsi.net/uploads/team/691.png';
    case '利兹联':
      return 'https://sortitoutsi.net/uploads/team/671.png';
    case '托特纳姆热刺':
      return 'https://sortitoutsi.net/uploads/team/728.png';
    case '沃特福德':
      return 'https://sortitoutsi.net/uploads/team/732.png';
    case '狼队':
      return 'https://sortitoutsi.net/uploads/team/740.png';
    // 英超
    case '尤文图斯':
      return 'https://sortitoutsi.net/uploads/team/1139.png';
    case '吉马良斯':
      return 'https://sortitoutsi.net/uploads/team/1494.png';
    case '巴黎圣日尔曼':
      return 'https://sortitoutsi.net/uploads/team/868.png';
    case '西班牙人':
      return 'https://sortitoutsi.net/uploads/team/1725.png';
    case '金泉尚武':
      return 'https://sortitoutsi.net/uploads/team/106809.png';
    case '水原城':
      return 'https://sortitoutsi.net/uploads/team/5707530.png';
    case '浦项制铁':
      return 'https://sortitoutsi.net/uploads/team/106818.png';
    case '江原FC':
      return 'https://sortitoutsi.net/uploads/team/66006663.png';
    case '千叶市原':
      return 'https://sortitoutsi.net/uploads/team/1187.png';
    case '大宫松鼠':
      return 'https://sortitoutsi.net/uploads/team/107305.png';
    case '磐田喜悦':
      return 'https://sortitoutsi.net/uploads/team/1188.png';
    case '鸟栖沙岩':
      return 'https://sortitoutsi.net/uploads/team/107309.png';
    case '清水鼓动':
      return 'https://sortitoutsi.net/uploads/team/1194.png';
    case '福冈黄蜂':
      return 'https://sortitoutsi.net/uploads/team/1183.png';
    case '湘南海洋':
      return 'https://sortitoutsi.net/uploads/team/1184.png';
    case 'FC东京':
      return 'https://sortitoutsi.net/uploads/team/107313.png';
    case '鹿岛鹿角':
      return 'https://sortitoutsi.net/uploads/team/1189.png';
    case '京都':
      return 'https://sortitoutsi.net/uploads/team/1192.png';
    case '熊本深红':
      return 'https://sortitoutsi.net/uploads/team/786558.png';
    case '水户蜀葵':
      return 'https://sortitoutsi.net/uploads/team/107289.png';
    case '东京绿茵':
      return 'https://sortitoutsi.net/uploads/team/1196.png';
    case '山口雷法':
      return 'https://sortitoutsi.net/uploads/team/775166.png';
    case '枥木SC':
      return 'https://sortitoutsi.net/uploads/team/775187.png';
    case '大分三神':
      return 'https://sortitoutsi.net/uploads/team/107303.png';
    case '仙台七夕':
      return 'https://sortitoutsi.net/uploads/team/107283.png';
    case '横滨FC':
      return 'https://sortitoutsi.net/uploads/team/7100042.png';
    case '盛冈仙鹤':
      return 'https://sortitoutsi.net/uploads/team/786372.png';
    case '德岛漩涡':
      return 'https://sortitoutsi.net/uploads/team/786384.png';
    case '济州联队':
      return 'https://sortitoutsi.net/uploads/team/106817.png';
    case '水原三星':
      return 'https://sortitoutsi.net/uploads/team/106813.png';
    case 'FC首尔':
      return 'https://sortitoutsi.net/uploads/team/130777.png';
    case '乌兹别克U23':
      return 'https://sortitoutsi.net/uploads/flags/144.png';
    case '沙特U23':
      return 'https://sortitoutsi.net/uploads/flags/133.png';
    case '维京':
      return 'https://sortitoutsi.net/uploads/team/1422.png';
    case '桑德菲杰':
      return 'https://sortitoutsi.net/uploads/team/1380.png';
    case '特罗姆瑟':
      return 'https://sortitoutsi.net/uploads/team/1410.png';
    case '海于格松':
      return 'https://sortitoutsi.net/uploads/team/1326.png';
    case '利勒斯特':
      return 'https://sortitoutsi.net/uploads/team/1341.png';
    case '罗森博格':
      return 'https://sortitoutsi.net/uploads/team/1376.png';
    case '谢夫':
      return 'https://sortitoutsi.net/uploads/team/1330.png';
    case '汉坎':
      return 'https://sortitoutsi.net/uploads/team/103283.png';

    case '城南FC':
      return 'https://sortitoutsi.net/uploads/team/200373.png';
    case '大邱FC':
      return 'https://sortitoutsi.net/uploads/team/5705626.png';
    case '蔚山现代':
      return 'https://sortitoutsi.net/uploads/team/106808.png';
    case '札幌冈萨':
      return 'https://sortitoutsi.net/uploads/team/107285.png';
    case '甲府风林':
      return 'https://sortitoutsi.net/uploads/team/107314.png';
    case '柏太阳神':
      return 'https://sortitoutsi.net/uploads/team/1190.png';
    case '神户胜利':
      return 'https://sortitoutsi.net/uploads/team/106844.png';
    case '金泽赛维':
      return 'https://sortitoutsi.net/uploads/team/775165.png';
    case '名古屋鲸':
      return 'https://sortitoutsi.net/uploads/team/1191.png';
    case '大阪樱花':
      return 'https://sortitoutsi.net/uploads/team/1185.png';
    case '大阪钢巴':
      return 'https://sortitoutsi.net/uploads/team/1186.png';
    case '川崎前锋':
      return 'https://sortitoutsi.net/uploads/team/107296.png';
    case '广岛三箭':
      return 'https://sortitoutsi.net/uploads/team/1193.png';
    case '横滨水手':
      return 'https://sortitoutsi.net/uploads/team/1198.png';
    case '全北现代':
      return 'https://sortitoutsi.net/uploads/team/130776.png';

    case '博塔弗戈':
      return 'https://sortitoutsi.net/uploads/team/316.png';
    case '圣保罗':
      return 'https://sortitoutsi.net/uploads/team/337.png';
    case '帕梅拉斯':
      return 'https://sortitoutsi.net/uploads/team/329.png';
    case '戈竞技':
      return 'https://sortitoutsi.net/uploads/team/301151.png';
    case '阿瓦伊':
      return 'https://sortitoutsi.net/uploads/team/107208.png';
    case '福塔雷萨':
      return 'https://sortitoutsi.net/uploads/team/104750.png';
    case '西雅图':
      return 'https://sortitoutsi.net/uploads/team/72014006.png';
    case '洛杉矶FC':
      return 'https://sortitoutsi.net/uploads/team/72049313.png';
    case '洛城银河':
      return 'https://sortitoutsi.net/uploads/team/1907.png';
    case '波特兰':
      return 'https://sortitoutsi.net/uploads/team/975489.png';
    case '奎尔巴':
      return 'https://sortitoutsi.net/uploads/team/318915.png';
    case '塞阿拉':
      return 'https://sortitoutsi.net/uploads/team/104749.png';
    case '纽约红牛':
      return 'https://sortitoutsi.net/uploads/team/72000160.png';
    case '多伦多FC':
      return 'https://sortitoutsi.net/uploads/team/72000789.png';
    case '费城联合':
      return 'https://sortitoutsi.net/uploads/team/72019000.png';
    case '辛辛那提':
      return 'https://sortitoutsi.net/uploads/team/20041327.png';
    case '奥兰多城':
      return 'https://sortitoutsi.net/uploads/team/72014193.png';
    case '休斯敦':
      return 'https://sortitoutsi.net/uploads/team/72000112.png';
    case '蒙特利尔CF':
      return 'https://sortitoutsi.net/uploads/team/2000152066.png';
    case '奥斯汀FC':
      return 'https://sortitoutsi.net/uploads/team/72053036.png';
    case '哥伦布':
      return 'https://sortitoutsi.net/uploads/team/1904.png';
    case '夏洛特FC':
      return 'https://sortitoutsi.net/uploads/team/20032874.png';
    case '芝加哥':
      return 'https://sortitoutsi.net/uploads/team/108893.png';
    case '华盛顿联':
      return 'https://sortitoutsi.net/uploads/team/1913.png';
    case '温哥华':
      return 'https://sortitoutsi.net/uploads/team/4400014.png';
    case '达拉斯FC':
      return 'https://sortitoutsi.net/uploads/team/1905.png';

    default:
      return 'https://www.nepal90.com/images/original/icon_team.png';
  }
}

export function checkLeagueName(name) {
  switch (name) {
    case '日皇杯':
      return 'https://sortitoutsi.net/uploads/flags/116.png';
    case '韩K联':
      return 'https://sortitoutsi.net/uploads/comp/136407.png';
    case '巴西杯':
      return 'https://sortitoutsi.net/uploads/flags/1651.png';
    case '日职联':
      return 'https://sortitoutsi.net/uploads/flags/116.png';
    case '日职乙':
      return 'https://sortitoutsi.net/uploads/flags/116.png';
    case '挪超':
      return 'https://sortitoutsi.net/uploads/flags/786.png';
    case '亚青U223':
      return '諾域治';
    case '美职业':
      return 'https://sortitoutsi.net/uploads/flags/390.png';
    case '巴黎圣日尔曼':
      return '巴黎聖日爾門';
    case '利兹联':
      return '列斯聯';
    case '西班牙人':
      return '愛斯賓奴';
    default:
      return name;
  }
}
