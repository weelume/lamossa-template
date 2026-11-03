// 固定双语地区名称，避免服务端与浏览器ICU版本差异造成hydration文本不一致。
const countryNames=[
 {
  "code": "AD",
  "name": {
   "zh": "安道尔",
   "en": "Andorra"
  }
 },
 {
  "code": "AE",
  "name": {
   "zh": "阿拉伯联合酋长国",
   "en": "United Arab Emirates"
  }
 },
 {
  "code": "AF",
  "name": {
   "zh": "阿富汗",
   "en": "Afghanistan"
  }
 },
 {
  "code": "AG",
  "name": {
   "zh": "安提瓜和巴布达",
   "en": "Antigua & Barbuda"
  }
 },
 {
  "code": "AI",
  "name": {
   "zh": "安圭拉",
   "en": "Anguilla"
  }
 },
 {
  "code": "AL",
  "name": {
   "zh": "阿尔巴尼亚",
   "en": "Albania"
  }
 },
 {
  "code": "AM",
  "name": {
   "zh": "亚美尼亚",
   "en": "Armenia"
  }
 },
 {
  "code": "AO",
  "name": {
   "zh": "安哥拉",
   "en": "Angola"
  }
 },
 {
  "code": "AQ",
  "name": {
   "zh": "南极洲",
   "en": "Antarctica"
  }
 },
 {
  "code": "AR",
  "name": {
   "zh": "阿根廷",
   "en": "Argentina"
  }
 },
 {
  "code": "AS",
  "name": {
   "zh": "美属萨摩亚",
   "en": "American Samoa"
  }
 },
 {
  "code": "AT",
  "name": {
   "zh": "奥地利",
   "en": "Austria"
  }
 },
 {
  "code": "AU",
  "name": {
   "zh": "澳大利亚",
   "en": "Australia"
  }
 },
 {
  "code": "AW",
  "name": {
   "zh": "阿鲁巴",
   "en": "Aruba"
  }
 },
 {
  "code": "AX",
  "name": {
   "zh": "奥兰群岛",
   "en": "Åland Islands"
  }
 },
 {
  "code": "AZ",
  "name": {
   "zh": "阿塞拜疆",
   "en": "Azerbaijan"
  }
 },
 {
  "code": "BA",
  "name": {
   "zh": "波斯尼亚和黑塞哥维那",
   "en": "Bosnia & Herzegovina"
  }
 },
 {
  "code": "BB",
  "name": {
   "zh": "巴巴多斯",
   "en": "Barbados"
  }
 },
 {
  "code": "BD",
  "name": {
   "zh": "孟加拉国",
   "en": "Bangladesh"
  }
 },
 {
  "code": "BE",
  "name": {
   "zh": "比利时",
   "en": "Belgium"
  }
 },
 {
  "code": "BF",
  "name": {
   "zh": "布基纳法索",
   "en": "Burkina Faso"
  }
 },
 {
  "code": "BG",
  "name": {
   "zh": "保加利亚",
   "en": "Bulgaria"
  }
 },
 {
  "code": "BH",
  "name": {
   "zh": "巴林",
   "en": "Bahrain"
  }
 },
 {
  "code": "BI",
  "name": {
   "zh": "布隆迪",
   "en": "Burundi"
  }
 },
 {
  "code": "BJ",
  "name": {
   "zh": "贝宁",
   "en": "Benin"
  }
 },
 {
  "code": "BL",
  "name": {
   "zh": "圣巴泰勒米",
   "en": "St. Barthélemy"
  }
 },
 {
  "code": "BM",
  "name": {
   "zh": "百慕大",
   "en": "Bermuda"
  }
 },
 {
  "code": "BN",
  "name": {
   "zh": "文莱",
   "en": "Brunei"
  }
 },
 {
  "code": "BO",
  "name": {
   "zh": "玻利维亚",
   "en": "Bolivia"
  }
 },
 {
  "code": "BQ",
  "name": {
   "zh": "荷属加勒比区",
   "en": "Caribbean Netherlands"
  }
 },
 {
  "code": "BR",
  "name": {
   "zh": "巴西",
   "en": "Brazil"
  }
 },
 {
  "code": "BS",
  "name": {
   "zh": "巴哈马",
   "en": "Bahamas"
  }
 },
 {
  "code": "BT",
  "name": {
   "zh": "不丹",
   "en": "Bhutan"
  }
 },
 {
  "code": "BV",
  "name": {
   "zh": "布韦岛",
   "en": "Bouvet Island"
  }
 },
 {
  "code": "BW",
  "name": {
   "zh": "博茨瓦纳",
   "en": "Botswana"
  }
 },
 {
  "code": "BY",
  "name": {
   "zh": "白俄罗斯",
   "en": "Belarus"
  }
 },
 {
  "code": "BZ",
  "name": {
   "zh": "伯利兹",
   "en": "Belize"
  }
 },
 {
  "code": "CA",
  "name": {
   "zh": "加拿大",
   "en": "Canada"
  }
 },
 {
  "code": "CC",
  "name": {
   "zh": "科科斯（基林）群岛",
   "en": "Cocos (Keeling) Islands"
  }
 },
 {
  "code": "CD",
  "name": {
   "zh": "刚果（金）",
   "en": "Congo - Kinshasa"
  }
 },
 {
  "code": "CF",
  "name": {
   "zh": "中非共和国",
   "en": "Central African Republic"
  }
 },
 {
  "code": "CG",
  "name": {
   "zh": "刚果（布）",
   "en": "Congo - Brazzaville"
  }
 },
 {
  "code": "CH",
  "name": {
   "zh": "瑞士",
   "en": "Switzerland"
  }
 },
 {
  "code": "CI",
  "name": {
   "zh": "科特迪瓦",
   "en": "Côte d’Ivoire"
  }
 },
 {
  "code": "CK",
  "name": {
   "zh": "库克群岛",
   "en": "Cook Islands"
  }
 },
 {
  "code": "CL",
  "name": {
   "zh": "智利",
   "en": "Chile"
  }
 },
 {
  "code": "CM",
  "name": {
   "zh": "喀麦隆",
   "en": "Cameroon"
  }
 },
 {
  "code": "CN",
  "name": {
   "zh": "中国",
   "en": "China"
  }
 },
 {
  "code": "CO",
  "name": {
   "zh": "哥伦比亚",
   "en": "Colombia"
  }
 },
 {
  "code": "CR",
  "name": {
   "zh": "哥斯达黎加",
   "en": "Costa Rica"
  }
 },
 {
  "code": "CU",
  "name": {
   "zh": "古巴",
   "en": "Cuba"
  }
 },
 {
  "code": "CV",
  "name": {
   "zh": "佛得角",
   "en": "Cape Verde"
  }
 },
 {
  "code": "CW",
  "name": {
   "zh": "库拉索",
   "en": "Curaçao"
  }
 },
 {
  "code": "CX",
  "name": {
   "zh": "圣诞岛",
   "en": "Christmas Island"
  }
 },
 {
  "code": "CY",
  "name": {
   "zh": "塞浦路斯",
   "en": "Cyprus"
  }
 },
 {
  "code": "CZ",
  "name": {
   "zh": "捷克",
   "en": "Czechia"
  }
 },
 {
  "code": "DE",
  "name": {
   "zh": "德国",
   "en": "Germany"
  }
 },
 {
  "code": "DJ",
  "name": {
   "zh": "吉布提",
   "en": "Djibouti"
  }
 },
 {
  "code": "DK",
  "name": {
   "zh": "丹麦",
   "en": "Denmark"
  }
 },
 {
  "code": "DM",
  "name": {
   "zh": "多米尼克",
   "en": "Dominica"
  }
 },
 {
  "code": "DO",
  "name": {
   "zh": "多米尼加共和国",
   "en": "Dominican Republic"
  }
 },
 {
  "code": "DZ",
  "name": {
   "zh": "阿尔及利亚",
   "en": "Algeria"
  }
 },
 {
  "code": "EC",
  "name": {
   "zh": "厄瓜多尔",
   "en": "Ecuador"
  }
 },
 {
  "code": "EE",
  "name": {
   "zh": "爱沙尼亚",
   "en": "Estonia"
  }
 },
 {
  "code": "EG",
  "name": {
   "zh": "埃及",
   "en": "Egypt"
  }
 },
 {
  "code": "EH",
  "name": {
   "zh": "西撒哈拉",
   "en": "Western Sahara"
  }
 },
 {
  "code": "ER",
  "name": {
   "zh": "厄立特里亚",
   "en": "Eritrea"
  }
 },
 {
  "code": "ES",
  "name": {
   "zh": "西班牙",
   "en": "Spain"
  }
 },
 {
  "code": "ET",
  "name": {
   "zh": "埃塞俄比亚",
   "en": "Ethiopia"
  }
 },
 {
  "code": "FI",
  "name": {
   "zh": "芬兰",
   "en": "Finland"
  }
 },
 {
  "code": "FJ",
  "name": {
   "zh": "斐济",
   "en": "Fiji"
  }
 },
 {
  "code": "FK",
  "name": {
   "zh": "福克兰群岛",
   "en": "Falkland Islands"
  }
 },
 {
  "code": "FM",
  "name": {
   "zh": "密克罗尼西亚",
   "en": "Micronesia"
  }
 },
 {
  "code": "FO",
  "name": {
   "zh": "法罗群岛",
   "en": "Faroe Islands"
  }
 },
 {
  "code": "FR",
  "name": {
   "zh": "法国",
   "en": "France"
  }
 },
 {
  "code": "GA",
  "name": {
   "zh": "加蓬",
   "en": "Gabon"
  }
 },
 {
  "code": "GB",
  "name": {
   "zh": "英国",
   "en": "United Kingdom"
  }
 },
 {
  "code": "GD",
  "name": {
   "zh": "格林纳达",
   "en": "Grenada"
  }
 },
 {
  "code": "GE",
  "name": {
   "zh": "格鲁吉亚",
   "en": "Georgia"
  }
 },
 {
  "code": "GF",
  "name": {
   "zh": "法属圭亚那",
   "en": "French Guiana"
  }
 },
 {
  "code": "GG",
  "name": {
   "zh": "根西岛",
   "en": "Guernsey"
  }
 },
 {
  "code": "GH",
  "name": {
   "zh": "加纳",
   "en": "Ghana"
  }
 },
 {
  "code": "GI",
  "name": {
   "zh": "直布罗陀",
   "en": "Gibraltar"
  }
 },
 {
  "code": "GL",
  "name": {
   "zh": "格陵兰",
   "en": "Greenland"
  }
 },
 {
  "code": "GM",
  "name": {
   "zh": "冈比亚",
   "en": "Gambia"
  }
 },
 {
  "code": "GN",
  "name": {
   "zh": "几内亚",
   "en": "Guinea"
  }
 },
 {
  "code": "GP",
  "name": {
   "zh": "瓜德罗普",
   "en": "Guadeloupe"
  }
 },
 {
  "code": "GQ",
  "name": {
   "zh": "赤道几内亚",
   "en": "Equatorial Guinea"
  }
 },
 {
  "code": "GR",
  "name": {
   "zh": "希腊",
   "en": "Greece"
  }
 },
 {
  "code": "GS",
  "name": {
   "zh": "南乔治亚和南桑威奇群岛",
   "en": "South Georgia & South Sandwich Islands"
  }
 },
 {
  "code": "GT",
  "name": {
   "zh": "危地马拉",
   "en": "Guatemala"
  }
 },
 {
  "code": "GU",
  "name": {
   "zh": "关岛",
   "en": "Guam"
  }
 },
 {
  "code": "GW",
  "name": {
   "zh": "几内亚比绍",
   "en": "Guinea-Bissau"
  }
 },
 {
  "code": "GY",
  "name": {
   "zh": "圭亚那",
   "en": "Guyana"
  }
 },
 {
  "code": "HK",
  "name": {
   "zh": "中国香港特别行政区",
   "en": "Hong Kong SAR China"
  }
 },
 {
  "code": "HM",
  "name": {
   "zh": "赫德岛和麦克唐纳群岛",
   "en": "Heard & McDonald Islands"
  }
 },
 {
  "code": "HN",
  "name": {
   "zh": "洪都拉斯",
   "en": "Honduras"
  }
 },
 {
  "code": "HR",
  "name": {
   "zh": "克罗地亚",
   "en": "Croatia"
  }
 },
 {
  "code": "HT",
  "name": {
   "zh": "海地",
   "en": "Haiti"
  }
 },
 {
  "code": "HU",
  "name": {
   "zh": "匈牙利",
   "en": "Hungary"
  }
 },
 {
  "code": "ID",
  "name": {
   "zh": "印度尼西亚",
   "en": "Indonesia"
  }
 },
 {
  "code": "IE",
  "name": {
   "zh": "爱尔兰",
   "en": "Ireland"
  }
 },
 {
  "code": "IL",
  "name": {
   "zh": "以色列",
   "en": "Israel"
  }
 },
 {
  "code": "IM",
  "name": {
   "zh": "马恩岛",
   "en": "Isle of Man"
  }
 },
 {
  "code": "IN",
  "name": {
   "zh": "印度",
   "en": "India"
  }
 },
 {
  "code": "IO",
  "name": {
   "zh": "英属印度洋领地",
   "en": "British Indian Ocean Territory"
  }
 },
 {
  "code": "IQ",
  "name": {
   "zh": "伊拉克",
   "en": "Iraq"
  }
 },
 {
  "code": "IR",
  "name": {
   "zh": "伊朗",
   "en": "Iran"
  }
 },
 {
  "code": "IS",
  "name": {
   "zh": "冰岛",
   "en": "Iceland"
  }
 },
 {
  "code": "IT",
  "name": {
   "zh": "意大利",
   "en": "Italy"
  }
 },
 {
  "code": "JE",
  "name": {
   "zh": "泽西岛",
   "en": "Jersey"
  }
 },
 {
  "code": "JM",
  "name": {
   "zh": "牙买加",
   "en": "Jamaica"
  }
 },
 {
  "code": "JO",
  "name": {
   "zh": "约旦",
   "en": "Jordan"
  }
 },
 {
  "code": "JP",
  "name": {
   "zh": "日本",
   "en": "Japan"
  }
 },
 {
  "code": "KE",
  "name": {
   "zh": "肯尼亚",
   "en": "Kenya"
  }
 },
 {
  "code": "KG",
  "name": {
   "zh": "吉尔吉斯斯坦",
   "en": "Kyrgyzstan"
  }
 },
 {
  "code": "KH",
  "name": {
   "zh": "柬埔寨",
   "en": "Cambodia"
  }
 },
 {
  "code": "KI",
  "name": {
   "zh": "基里巴斯",
   "en": "Kiribati"
  }
 },
 {
  "code": "KM",
  "name": {
   "zh": "科摩罗",
   "en": "Comoros"
  }
 },
 {
  "code": "KN",
  "name": {
   "zh": "圣基茨和尼维斯",
   "en": "St. Kitts & Nevis"
  }
 },
 {
  "code": "KP",
  "name": {
   "zh": "朝鲜",
   "en": "North Korea"
  }
 },
 {
  "code": "KR",
  "name": {
   "zh": "韩国",
   "en": "South Korea"
  }
 },
 {
  "code": "KW",
  "name": {
   "zh": "科威特",
   "en": "Kuwait"
  }
 },
 {
  "code": "KY",
  "name": {
   "zh": "开曼群岛",
   "en": "Cayman Islands"
  }
 },
 {
  "code": "KZ",
  "name": {
   "zh": "哈萨克斯坦",
   "en": "Kazakhstan"
  }
 },
 {
  "code": "LA",
  "name": {
   "zh": "老挝",
   "en": "Laos"
  }
 },
 {
  "code": "LB",
  "name": {
   "zh": "黎巴嫩",
   "en": "Lebanon"
  }
 },
 {
  "code": "LC",
  "name": {
   "zh": "圣卢西亚",
   "en": "St. Lucia"
  }
 },
 {
  "code": "LI",
  "name": {
   "zh": "列支敦士登",
   "en": "Liechtenstein"
  }
 },
 {
  "code": "LK",
  "name": {
   "zh": "斯里兰卡",
   "en": "Sri Lanka"
  }
 },
 {
  "code": "LR",
  "name": {
   "zh": "利比里亚",
   "en": "Liberia"
  }
 },
 {
  "code": "LS",
  "name": {
   "zh": "莱索托",
   "en": "Lesotho"
  }
 },
 {
  "code": "LT",
  "name": {
   "zh": "立陶宛",
   "en": "Lithuania"
  }
 },
 {
  "code": "LU",
  "name": {
   "zh": "卢森堡",
   "en": "Luxembourg"
  }
 },
 {
  "code": "LV",
  "name": {
   "zh": "拉脱维亚",
   "en": "Latvia"
  }
 },
 {
  "code": "LY",
  "name": {
   "zh": "利比亚",
   "en": "Libya"
  }
 },
 {
  "code": "MA",
  "name": {
   "zh": "摩洛哥",
   "en": "Morocco"
  }
 },
 {
  "code": "MC",
  "name": {
   "zh": "摩纳哥",
   "en": "Monaco"
  }
 },
 {
  "code": "MD",
  "name": {
   "zh": "摩尔多瓦",
   "en": "Moldova"
  }
 },
 {
  "code": "ME",
  "name": {
   "zh": "黑山",
   "en": "Montenegro"
  }
 },
 {
  "code": "MF",
  "name": {
   "zh": "法属圣马丁",
   "en": "St. Martin"
  }
 },
 {
  "code": "MG",
  "name": {
   "zh": "马达加斯加",
   "en": "Madagascar"
  }
 },
 {
  "code": "MH",
  "name": {
   "zh": "马绍尔群岛",
   "en": "Marshall Islands"
  }
 },
 {
  "code": "MK",
  "name": {
   "zh": "北马其顿",
   "en": "North Macedonia"
  }
 },
 {
  "code": "ML",
  "name": {
   "zh": "马里",
   "en": "Mali"
  }
 },
 {
  "code": "MM",
  "name": {
   "zh": "缅甸",
   "en": "Myanmar (Burma)"
  }
 },
 {
  "code": "MN",
  "name": {
   "zh": "蒙古",
   "en": "Mongolia"
  }
 },
 {
  "code": "MO",
  "name": {
   "zh": "中国澳门特别行政区",
   "en": "Macao SAR China"
  }
 },
 {
  "code": "MP",
  "name": {
   "zh": "北马里亚纳群岛",
   "en": "Northern Mariana Islands"
  }
 },
 {
  "code": "MQ",
  "name": {
   "zh": "马提尼克",
   "en": "Martinique"
  }
 },
 {
  "code": "MR",
  "name": {
   "zh": "毛里塔尼亚",
   "en": "Mauritania"
  }
 },
 {
  "code": "MS",
  "name": {
   "zh": "蒙特塞拉特",
   "en": "Montserrat"
  }
 },
 {
  "code": "MT",
  "name": {
   "zh": "马耳他",
   "en": "Malta"
  }
 },
 {
  "code": "MU",
  "name": {
   "zh": "毛里求斯",
   "en": "Mauritius"
  }
 },
 {
  "code": "MV",
  "name": {
   "zh": "马尔代夫",
   "en": "Maldives"
  }
 },
 {
  "code": "MW",
  "name": {
   "zh": "马拉维",
   "en": "Malawi"
  }
 },
 {
  "code": "MX",
  "name": {
   "zh": "墨西哥",
   "en": "Mexico"
  }
 },
 {
  "code": "MY",
  "name": {
   "zh": "马来西亚",
   "en": "Malaysia"
  }
 },
 {
  "code": "MZ",
  "name": {
   "zh": "莫桑比克",
   "en": "Mozambique"
  }
 },
 {
  "code": "NA",
  "name": {
   "zh": "纳米比亚",
   "en": "Namibia"
  }
 },
 {
  "code": "NC",
  "name": {
   "zh": "新喀里多尼亚",
   "en": "New Caledonia"
  }
 },
 {
  "code": "NE",
  "name": {
   "zh": "尼日尔",
   "en": "Niger"
  }
 },
 {
  "code": "NF",
  "name": {
   "zh": "诺福克岛",
   "en": "Norfolk Island"
  }
 },
 {
  "code": "NG",
  "name": {
   "zh": "尼日利亚",
   "en": "Nigeria"
  }
 },
 {
  "code": "NI",
  "name": {
   "zh": "尼加拉瓜",
   "en": "Nicaragua"
  }
 },
 {
  "code": "NL",
  "name": {
   "zh": "荷兰",
   "en": "Netherlands"
  }
 },
 {
  "code": "NO",
  "name": {
   "zh": "挪威",
   "en": "Norway"
  }
 },
 {
  "code": "NP",
  "name": {
   "zh": "尼泊尔",
   "en": "Nepal"
  }
 },
 {
  "code": "NR",
  "name": {
   "zh": "瑙鲁",
   "en": "Nauru"
  }
 },
 {
  "code": "NU",
  "name": {
   "zh": "纽埃",
   "en": "Niue"
  }
 },
 {
  "code": "NZ",
  "name": {
   "zh": "新西兰",
   "en": "New Zealand"
  }
 },
 {
  "code": "OM",
  "name": {
   "zh": "阿曼",
   "en": "Oman"
  }
 },
 {
  "code": "PA",
  "name": {
   "zh": "巴拿马",
   "en": "Panama"
  }
 },
 {
  "code": "PE",
  "name": {
   "zh": "秘鲁",
   "en": "Peru"
  }
 },
 {
  "code": "PF",
  "name": {
   "zh": "法属波利尼西亚",
   "en": "French Polynesia"
  }
 },
 {
  "code": "PG",
  "name": {
   "zh": "巴布亚新几内亚",
   "en": "Papua New Guinea"
  }
 },
 {
  "code": "PH",
  "name": {
   "zh": "菲律宾",
   "en": "Philippines"
  }
 },
 {
  "code": "PK",
  "name": {
   "zh": "巴基斯坦",
   "en": "Pakistan"
  }
 },
 {
  "code": "PL",
  "name": {
   "zh": "波兰",
   "en": "Poland"
  }
 },
 {
  "code": "PM",
  "name": {
   "zh": "圣皮埃尔和密克隆群岛",
   "en": "St. Pierre & Miquelon"
  }
 },
 {
  "code": "PN",
  "name": {
   "zh": "皮特凯恩群岛",
   "en": "Pitcairn Islands"
  }
 },
 {
  "code": "PR",
  "name": {
   "zh": "波多黎各",
   "en": "Puerto Rico"
  }
 },
 {
  "code": "PS",
  "name": {
   "zh": "巴勒斯坦领土",
   "en": "Palestinian Territories"
  }
 },
 {
  "code": "PT",
  "name": {
   "zh": "葡萄牙",
   "en": "Portugal"
  }
 },
 {
  "code": "PW",
  "name": {
   "zh": "帕劳",
   "en": "Palau"
  }
 },
 {
  "code": "PY",
  "name": {
   "zh": "巴拉圭",
   "en": "Paraguay"
  }
 },
 {
  "code": "QA",
  "name": {
   "zh": "卡塔尔",
   "en": "Qatar"
  }
 },
 {
  "code": "RE",
  "name": {
   "zh": "留尼汪",
   "en": "Réunion"
  }
 },
 {
  "code": "RO",
  "name": {
   "zh": "罗马尼亚",
   "en": "Romania"
  }
 },
 {
  "code": "RS",
  "name": {
   "zh": "塞尔维亚",
   "en": "Serbia"
  }
 },
 {
  "code": "RU",
  "name": {
   "zh": "俄罗斯",
   "en": "Russia"
  }
 },
 {
  "code": "RW",
  "name": {
   "zh": "卢旺达",
   "en": "Rwanda"
  }
 },
 {
  "code": "SA",
  "name": {
   "zh": "沙特阿拉伯",
   "en": "Saudi Arabia"
  }
 },
 {
  "code": "SB",
  "name": {
   "zh": "所罗门群岛",
   "en": "Solomon Islands"
  }
 },
 {
  "code": "SC",
  "name": {
   "zh": "塞舌尔",
   "en": "Seychelles"
  }
 },
 {
  "code": "SD",
  "name": {
   "zh": "苏丹",
   "en": "Sudan"
  }
 },
 {
  "code": "SE",
  "name": {
   "zh": "瑞典",
   "en": "Sweden"
  }
 },
 {
  "code": "SG",
  "name": {
   "zh": "新加坡",
   "en": "Singapore"
  }
 },
 {
  "code": "SH",
  "name": {
   "zh": "圣赫勒拿",
   "en": "St. Helena"
  }
 },
 {
  "code": "SI",
  "name": {
   "zh": "斯洛文尼亚",
   "en": "Slovenia"
  }
 },
 {
  "code": "SJ",
  "name": {
   "zh": "斯瓦尔巴和扬马延",
   "en": "Svalbard & Jan Mayen"
  }
 },
 {
  "code": "SK",
  "name": {
   "zh": "斯洛伐克",
   "en": "Slovakia"
  }
 },
 {
  "code": "SL",
  "name": {
   "zh": "塞拉利昂",
   "en": "Sierra Leone"
  }
 },
 {
  "code": "SM",
  "name": {
   "zh": "圣马力诺",
   "en": "San Marino"
  }
 },
 {
  "code": "SN",
  "name": {
   "zh": "塞内加尔",
   "en": "Senegal"
  }
 },
 {
  "code": "SO",
  "name": {
   "zh": "索马里",
   "en": "Somalia"
  }
 },
 {
  "code": "SR",
  "name": {
   "zh": "苏里南",
   "en": "Suriname"
  }
 },
 {
  "code": "SS",
  "name": {
   "zh": "南苏丹",
   "en": "South Sudan"
  }
 },
 {
  "code": "ST",
  "name": {
   "zh": "圣多美和普林西比",
   "en": "São Tomé & Príncipe"
  }
 },
 {
  "code": "SV",
  "name": {
   "zh": "萨尔瓦多",
   "en": "El Salvador"
  }
 },
 {
  "code": "SX",
  "name": {
   "zh": "荷属圣马丁",
   "en": "Sint Maarten"
  }
 },
 {
  "code": "SY",
  "name": {
   "zh": "叙利亚",
   "en": "Syria"
  }
 },
 {
  "code": "SZ",
  "name": {
   "zh": "斯威士兰",
   "en": "Eswatini"
  }
 },
 {
  "code": "TC",
  "name": {
   "zh": "特克斯和凯科斯群岛",
   "en": "Turks & Caicos Islands"
  }
 },
 {
  "code": "TD",
  "name": {
   "zh": "乍得",
   "en": "Chad"
  }
 },
 {
  "code": "TF",
  "name": {
   "zh": "法属南部领地",
   "en": "French Southern Territories"
  }
 },
 {
  "code": "TG",
  "name": {
   "zh": "多哥",
   "en": "Togo"
  }
 },
 {
  "code": "TH",
  "name": {
   "zh": "泰国",
   "en": "Thailand"
  }
 },
 {
  "code": "TJ",
  "name": {
   "zh": "塔吉克斯坦",
   "en": "Tajikistan"
  }
 },
 {
  "code": "TK",
  "name": {
   "zh": "托克劳",
   "en": "Tokelau"
  }
 },
 {
  "code": "TL",
  "name": {
   "zh": "东帝汶",
   "en": "Timor-Leste"
  }
 },
 {
  "code": "TM",
  "name": {
   "zh": "土库曼斯坦",
   "en": "Turkmenistan"
  }
 },
 {
  "code": "TN",
  "name": {
   "zh": "突尼斯",
   "en": "Tunisia"
  }
 },
 {
  "code": "TO",
  "name": {
   "zh": "汤加",
   "en": "Tonga"
  }
 },
 {
  "code": "TR",
  "name": {
   "zh": "土耳其",
   "en": "Türkiye"
  }
 },
 {
  "code": "TT",
  "name": {
   "zh": "特立尼达和多巴哥",
   "en": "Trinidad & Tobago"
  }
 },
 {
  "code": "TV",
  "name": {
   "zh": "图瓦卢",
   "en": "Tuvalu"
  }
 },
 {
  "code": "TW",
  "name": {
   "zh": "台湾",
   "en": "Taiwan"
  }
 },
 {
  "code": "TZ",
  "name": {
   "zh": "坦桑尼亚",
   "en": "Tanzania"
  }
 },
 {
  "code": "UA",
  "name": {
   "zh": "乌克兰",
   "en": "Ukraine"
  }
 },
 {
  "code": "UG",
  "name": {
   "zh": "乌干达",
   "en": "Uganda"
  }
 },
 {
  "code": "UM",
  "name": {
   "zh": "美国本土外小岛屿",
   "en": "U.S. Outlying Islands"
  }
 },
 {
  "code": "US",
  "name": {
   "zh": "美国",
   "en": "United States"
  }
 },
 {
  "code": "UY",
  "name": {
   "zh": "乌拉圭",
   "en": "Uruguay"
  }
 },
 {
  "code": "UZ",
  "name": {
   "zh": "乌兹别克斯坦",
   "en": "Uzbekistan"
  }
 },
 {
  "code": "VA",
  "name": {
   "zh": "梵蒂冈",
   "en": "Vatican City"
  }
 },
 {
  "code": "VC",
  "name": {
   "zh": "圣文森特和格林纳丁斯",
   "en": "St. Vincent & Grenadines"
  }
 },
 {
  "code": "VE",
  "name": {
   "zh": "委内瑞拉",
   "en": "Venezuela"
  }
 },
 {
  "code": "VG",
  "name": {
   "zh": "英属维尔京群岛",
   "en": "British Virgin Islands"
  }
 },
 {
  "code": "VI",
  "name": {
   "zh": "美属维尔京群岛",
   "en": "U.S. Virgin Islands"
  }
 },
 {
  "code": "VN",
  "name": {
   "zh": "越南",
   "en": "Vietnam"
  }
 },
 {
  "code": "VU",
  "name": {
   "zh": "瓦努阿图",
   "en": "Vanuatu"
  }
 },
 {
  "code": "WF",
  "name": {
   "zh": "瓦利斯和富图纳",
   "en": "Wallis & Futuna"
  }
 },
 {
  "code": "WS",
  "name": {
   "zh": "萨摩亚",
   "en": "Samoa"
  }
 },
 {
  "code": "YE",
  "name": {
   "zh": "也门",
   "en": "Yemen"
  }
 },
 {
  "code": "YT",
  "name": {
   "zh": "马约特",
   "en": "Mayotte"
  }
 },
 {
  "code": "ZA",
  "name": {
   "zh": "南非",
   "en": "South Africa"
  }
 },
 {
  "code": "ZM",
  "name": {
   "zh": "赞比亚",
   "en": "Zambia"
  }
 },
 {
  "code": "ZW",
  "name": {
   "zh": "津巴布韦",
   "en": "Zimbabwe"
  }
 }
]

/** 区号选项来自获授权参考组件，保留地区与共享区号，不按区号去重。 */
export const phoneCountries=[
  {
    "code": "AD",
    "name": "Andorra",
    "flag": "🇦🇩",
    "phoneCode": "+376"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "flag": "🇦🇪",
    "phoneCode": "+971"
  },
  {
    "code": "AF",
    "name": "Afghanistan",
    "flag": "🇦🇫",
    "phoneCode": "+93"
  },
  {
    "code": "AL",
    "name": "Albania",
    "flag": "🇦🇱",
    "phoneCode": "+355"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "flag": "🇦🇲",
    "phoneCode": "+374"
  },
  {
    "code": "AO",
    "name": "Angola",
    "flag": "🇦🇴",
    "phoneCode": "+244"
  },
  {
    "code": "AR",
    "name": "Argentina",
    "flag": "🇦🇷",
    "phoneCode": "+54"
  },
  {
    "code": "AT",
    "name": "Austria",
    "flag": "🇦🇹",
    "phoneCode": "+43"
  },
  {
    "code": "AU",
    "name": "Australia",
    "flag": "🇦🇺",
    "phoneCode": "+61"
  },
  {
    "code": "AW",
    "name": "Aruba",
    "flag": "🇦🇼",
    "phoneCode": "+297"
  },
  {
    "code": "AZ",
    "name": "Azerbaijan",
    "flag": "🇦🇿",
    "phoneCode": "+994"
  },
  {
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "flag": "🇧🇦",
    "phoneCode": "+387"
  },
  {
    "code": "BB",
    "name": "Barbados",
    "flag": "🇧🇧",
    "phoneCode": "+1"
  },
  {
    "code": "BD",
    "name": "Bangladesh",
    "flag": "🇧🇩",
    "phoneCode": "+880"
  },
  {
    "code": "BE",
    "name": "Belgium",
    "flag": "🇧🇪",
    "phoneCode": "+32"
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "flag": "🇧🇫",
    "phoneCode": "+226"
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "flag": "🇧🇬",
    "phoneCode": "+359"
  },
  {
    "code": "BH",
    "name": "Bahrain",
    "flag": "🇧🇭",
    "phoneCode": "+973"
  },
  {
    "code": "BI",
    "name": "Burundi",
    "flag": "🇧🇮",
    "phoneCode": "+257"
  },
  {
    "code": "BJ",
    "name": "Benin",
    "flag": "🇧🇯",
    "phoneCode": "+229"
  },
  {
    "code": "BN",
    "name": "Brunei",
    "flag": "🇧🇳",
    "phoneCode": "+673"
  },
  {
    "code": "BO",
    "name": "Bolivia",
    "flag": "🇧🇴",
    "phoneCode": "+591"
  },
  {
    "code": "BR",
    "name": "Brazil",
    "flag": "🇧🇷",
    "phoneCode": "+55"
  },
  {
    "code": "BT",
    "name": "Bhutan",
    "flag": "🇧🇹",
    "phoneCode": "+975"
  },
  {
    "code": "BW",
    "name": "Botswana",
    "flag": "🇧🇼",
    "phoneCode": "+267"
  },
  {
    "code": "BY",
    "name": "Belarus",
    "flag": "🇧🇾",
    "phoneCode": "+375"
  },
  {
    "code": "BZ",
    "name": "Belize",
    "flag": "🇧🇿",
    "phoneCode": "+501"
  },
  {
    "code": "CA",
    "name": "Canada",
    "flag": "🇨🇦",
    "phoneCode": "+1"
  },
  {
    "code": "CD",
    "name": "Democratic Republic of the Congo",
    "flag": "🇨🇩",
    "phoneCode": "+243"
  },
  {
    "code": "CF",
    "name": "Central African Republic",
    "flag": "🇨🇫",
    "phoneCode": "+236"
  },
  {
    "code": "CG",
    "name": "Republic of the Congo",
    "flag": "🇨🇬",
    "phoneCode": "+242"
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "flag": "🇨🇭",
    "phoneCode": "+41"
  },
  {
    "code": "CI",
    "name": "Côte d'Ivoire",
    "flag": "🇨🇮",
    "phoneCode": "+225"
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "flag": "🇨🇰",
    "phoneCode": "+682"
  },
  {
    "code": "CL",
    "name": "Chile",
    "flag": "🇨🇱",
    "phoneCode": "+56"
  },
  {
    "code": "CM",
    "name": "Cameroon",
    "flag": "🇨🇲",
    "phoneCode": "+237"
  },
  {
    "code": "CN",
    "name": "China",
    "flag": "🇨🇳",
    "phoneCode": "+86"
  },
  {
    "code": "CO",
    "name": "Colombia",
    "flag": "🇨🇴",
    "phoneCode": "+57"
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "flag": "🇨🇷",
    "phoneCode": "+506"
  },
  {
    "code": "CU",
    "name": "Cuba",
    "flag": "🇨🇺",
    "phoneCode": "+53"
  },
  {
    "code": "CV",
    "name": "Cape Verde",
    "flag": "🇨🇻",
    "phoneCode": "+238"
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "flag": "🇨🇾",
    "phoneCode": "+357"
  },
  {
    "code": "CZ",
    "name": "Czech Republic",
    "flag": "🇨🇿",
    "phoneCode": "+420"
  },
  {
    "code": "DE",
    "name": "Germany",
    "flag": "🇩🇪",
    "phoneCode": "+49"
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "flag": "🇩🇯",
    "phoneCode": "+253"
  },
  {
    "code": "DK",
    "name": "Denmark",
    "flag": "🇩🇰",
    "phoneCode": "+45"
  },
  {
    "code": "DM",
    "name": "Dominica",
    "flag": "🇩🇲",
    "phoneCode": "+1"
  },
  {
    "code": "DO",
    "name": "Dominican Republic",
    "flag": "🇩🇴",
    "phoneCode": "+1"
  },
  {
    "code": "DZ",
    "name": "Algeria",
    "flag": "🇩🇿",
    "phoneCode": "+213"
  },
  {
    "code": "EC",
    "name": "Ecuador",
    "flag": "🇪🇨",
    "phoneCode": "+593"
  },
  {
    "code": "EE",
    "name": "Estonia",
    "flag": "🇪🇪",
    "phoneCode": "+372"
  },
  {
    "code": "EG",
    "name": "Egypt",
    "flag": "🇪🇬",
    "phoneCode": "+20"
  },
  {
    "code": "ER",
    "name": "Eritrea",
    "flag": "🇪🇷",
    "phoneCode": "+291"
  },
  {
    "code": "ES",
    "name": "Spain",
    "flag": "🇪🇸",
    "phoneCode": "+34"
  },
  {
    "code": "ET",
    "name": "Ethiopia",
    "flag": "🇪🇹",
    "phoneCode": "+251"
  },
  {
    "code": "FI",
    "name": "Finland",
    "flag": "🇫🇮",
    "phoneCode": "+358"
  },
  {
    "code": "FJ",
    "name": "Fiji",
    "flag": "🇫🇯",
    "phoneCode": "+679"
  },
  {
    "code": "FM",
    "name": "Micronesia",
    "flag": "🇫🇲",
    "phoneCode": "+691"
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "flag": "🇫🇴",
    "phoneCode": "+298"
  },
  {
    "code": "FR",
    "name": "France",
    "flag": "🇫🇷",
    "phoneCode": "+33"
  },
  {
    "code": "GA",
    "name": "Gabon",
    "flag": "🇬🇦",
    "phoneCode": "+241"
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "flag": "🇬🇧",
    "phoneCode": "+44"
  },
  {
    "code": "GD",
    "name": "Grenada",
    "flag": "🇬🇩",
    "phoneCode": "+1"
  },
  {
    "code": "GE",
    "name": "Georgia",
    "flag": "🇬🇪",
    "phoneCode": "+995"
  },
  {
    "code": "GH",
    "name": "Ghana",
    "flag": "🇬🇭",
    "phoneCode": "+233"
  },
  {
    "code": "GL",
    "name": "Greenland",
    "flag": "🇬🇱",
    "phoneCode": "+299"
  },
  {
    "code": "GM",
    "name": "Gambia",
    "flag": "🇬🇲",
    "phoneCode": "+220"
  },
  {
    "code": "GN",
    "name": "Guinea",
    "flag": "🇬🇳",
    "phoneCode": "+224"
  },
  {
    "code": "GQ",
    "name": "Equatorial Guinea",
    "flag": "🇬🇶",
    "phoneCode": "+240"
  },
  {
    "code": "GR",
    "name": "Greece",
    "flag": "🇬🇷",
    "phoneCode": "+30"
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "flag": "🇬🇹",
    "phoneCode": "+502"
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau",
    "flag": "🇬🇼",
    "phoneCode": "+245"
  },
  {
    "code": "GY",
    "name": "Guyana",
    "flag": "🇬🇾",
    "phoneCode": "+592"
  },
  {
    "code": "HK",
    "name": "Hong Kong",
    "flag": "🇭🇰",
    "phoneCode": "+852"
  },
  {
    "code": "HN",
    "name": "Honduras",
    "flag": "🇭🇳",
    "phoneCode": "+504"
  },
  {
    "code": "HR",
    "name": "Croatia",
    "flag": "🇭🇷",
    "phoneCode": "+385"
  },
  {
    "code": "HT",
    "name": "Haiti",
    "flag": "🇭🇹",
    "phoneCode": "+509"
  },
  {
    "code": "HU",
    "name": "Hungary",
    "flag": "🇭🇺",
    "phoneCode": "+36"
  },
  {
    "code": "ID",
    "name": "Indonesia",
    "flag": "🇮🇩",
    "phoneCode": "+62"
  },
  {
    "code": "IE",
    "name": "Ireland",
    "flag": "🇮🇪",
    "phoneCode": "+353"
  },
  {
    "code": "IL",
    "name": "Israel",
    "flag": "🇮🇱",
    "phoneCode": "+972"
  },
  {
    "code": "IN",
    "name": "India",
    "flag": "🇮🇳",
    "phoneCode": "+91"
  },
  {
    "code": "IQ",
    "name": "Iraq",
    "flag": "🇮🇶",
    "phoneCode": "+964"
  },
  {
    "code": "IR",
    "name": "Iran",
    "flag": "🇮🇷",
    "phoneCode": "+98"
  },
  {
    "code": "IS",
    "name": "Iceland",
    "flag": "🇮🇸",
    "phoneCode": "+354"
  },
  {
    "code": "IT",
    "name": "Italy",
    "flag": "🇮🇹",
    "phoneCode": "+39"
  },
  {
    "code": "JM",
    "name": "Jamaica",
    "flag": "🇯🇲",
    "phoneCode": "+1"
  },
  {
    "code": "JO",
    "name": "Jordan",
    "flag": "🇯🇴",
    "phoneCode": "+962"
  },
  {
    "code": "JP",
    "name": "Japan",
    "flag": "🇯🇵",
    "phoneCode": "+81"
  },
  {
    "code": "KE",
    "name": "Kenya",
    "flag": "🇰🇪",
    "phoneCode": "+254"
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan",
    "flag": "🇰🇬",
    "phoneCode": "+996"
  },
  {
    "code": "KH",
    "name": "Cambodia",
    "flag": "🇰🇭",
    "phoneCode": "+855"
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "flag": "🇰🇮",
    "phoneCode": "+686"
  },
  {
    "code": "KM",
    "name": "Comoros",
    "flag": "🇰🇲",
    "phoneCode": "+269"
  },
  {
    "code": "KP",
    "name": "North Korea",
    "flag": "🇰🇵",
    "phoneCode": "+850"
  },
  {
    "code": "KR",
    "name": "South Korea",
    "flag": "🇰🇷",
    "phoneCode": "+82"
  },
  {
    "code": "KW",
    "name": "Kuwait",
    "flag": "🇰🇼",
    "phoneCode": "+965"
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "flag": "🇰🇿",
    "phoneCode": "+7"
  },
  {
    "code": "LA",
    "name": "Laos",
    "flag": "🇱🇦",
    "phoneCode": "+856"
  },
  {
    "code": "LB",
    "name": "Lebanon",
    "flag": "🇱🇧",
    "phoneCode": "+961"
  },
  {
    "code": "LI",
    "name": "Liechtenstein",
    "flag": "🇱🇮",
    "phoneCode": "+423"
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "flag": "🇱🇰",
    "phoneCode": "+94"
  },
  {
    "code": "LR",
    "name": "Liberia",
    "flag": "🇱🇷",
    "phoneCode": "+231"
  },
  {
    "code": "LS",
    "name": "Lesotho",
    "flag": "🇱🇸",
    "phoneCode": "+266"
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "flag": "🇱🇹",
    "phoneCode": "+370"
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "flag": "🇱🇺",
    "phoneCode": "+352"
  },
  {
    "code": "LV",
    "name": "Latvia",
    "flag": "🇱🇻",
    "phoneCode": "+371"
  },
  {
    "code": "LY",
    "name": "Libya",
    "flag": "🇱🇾",
    "phoneCode": "+218"
  },
  {
    "code": "MA",
    "name": "Morocco",
    "flag": "🇲🇦",
    "phoneCode": "+212"
  },
  {
    "code": "MC",
    "name": "Monaco",
    "flag": "🇲🇨",
    "phoneCode": "+377"
  },
  {
    "code": "MD",
    "name": "Moldova",
    "flag": "🇲🇩",
    "phoneCode": "+373"
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "flag": "🇲🇪",
    "phoneCode": "+382"
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "flag": "🇲🇬",
    "phoneCode": "+261"
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "flag": "🇲🇭",
    "phoneCode": "+692"
  },
  {
    "code": "MK",
    "name": "North Macedonia",
    "flag": "🇲🇰",
    "phoneCode": "+389"
  },
  {
    "code": "ML",
    "name": "Mali",
    "flag": "🇲🇱",
    "phoneCode": "+223"
  },
  {
    "code": "MM",
    "name": "Myanmar",
    "flag": "🇲🇲",
    "phoneCode": "+95"
  },
  {
    "code": "MN",
    "name": "Mongolia",
    "flag": "🇲🇳",
    "phoneCode": "+976"
  },
  {
    "code": "MO",
    "name": "Macao",
    "flag": "🇲🇴",
    "phoneCode": "+853"
  },
  {
    "code": "MR",
    "name": "Mauritania",
    "flag": "🇲🇷",
    "phoneCode": "+222"
  },
  {
    "code": "MT",
    "name": "Malta",
    "flag": "🇲🇹",
    "phoneCode": "+356"
  },
  {
    "code": "MU",
    "name": "Mauritius",
    "flag": "🇲🇺",
    "phoneCode": "+230"
  },
  {
    "code": "MV",
    "name": "Maldives",
    "flag": "🇲🇻",
    "phoneCode": "+960"
  },
  {
    "code": "MW",
    "name": "Malawi",
    "flag": "🇲🇼",
    "phoneCode": "+265"
  },
  {
    "code": "MX",
    "name": "Mexico",
    "flag": "🇲🇽",
    "phoneCode": "+52"
  },
  {
    "code": "MY",
    "name": "Malaysia",
    "flag": "🇲🇾",
    "phoneCode": "+60"
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "flag": "🇲🇿",
    "phoneCode": "+258"
  },
  {
    "code": "NA",
    "name": "Namibia",
    "flag": "🇳🇦",
    "phoneCode": "+264"
  },
  {
    "code": "NE",
    "name": "Niger",
    "flag": "🇳🇪",
    "phoneCode": "+227"
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "flag": "🇳🇬",
    "phoneCode": "+234"
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "flag": "🇳🇮",
    "phoneCode": "+505"
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "flag": "🇳🇱",
    "phoneCode": "+31"
  },
  {
    "code": "NO",
    "name": "Norway",
    "flag": "🇳🇴",
    "phoneCode": "+47"
  },
  {
    "code": "NP",
    "name": "Nepal",
    "flag": "🇳🇵",
    "phoneCode": "+977"
  },
  {
    "code": "NR",
    "name": "Nauru",
    "flag": "🇳🇷",
    "phoneCode": "+674"
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "flag": "🇳🇿",
    "phoneCode": "+64"
  },
  {
    "code": "OM",
    "name": "Oman",
    "flag": "🇴🇲",
    "phoneCode": "+968"
  },
  {
    "code": "PA",
    "name": "Panama",
    "flag": "🇵🇦",
    "phoneCode": "+507"
  },
  {
    "code": "PE",
    "name": "Peru",
    "flag": "🇵🇪",
    "phoneCode": "+51"
  },
  {
    "code": "PG",
    "name": "Papua New Guinea",
    "flag": "🇵🇬",
    "phoneCode": "+675"
  },
  {
    "code": "PH",
    "name": "Philippines",
    "flag": "🇵🇭",
    "phoneCode": "+63"
  },
  {
    "code": "PK",
    "name": "Pakistan",
    "flag": "🇵🇰",
    "phoneCode": "+92"
  },
  {
    "code": "PL",
    "name": "Poland",
    "flag": "🇵🇱",
    "phoneCode": "+48"
  },
  {
    "code": "PT",
    "name": "Portugal",
    "flag": "🇵🇹",
    "phoneCode": "+351"
  },
  {
    "code": "PW",
    "name": "Palau",
    "flag": "🇵🇼",
    "phoneCode": "+680"
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "flag": "🇵🇾",
    "phoneCode": "+595"
  },
  {
    "code": "QA",
    "name": "Qatar",
    "flag": "🇶🇦",
    "phoneCode": "+974"
  },
  {
    "code": "RO",
    "name": "Romania",
    "flag": "🇷🇴",
    "phoneCode": "+40"
  },
  {
    "code": "RS",
    "name": "Serbia",
    "flag": "🇷🇸",
    "phoneCode": "+381"
  },
  {
    "code": "RU",
    "name": "Russia",
    "flag": "🇷🇺",
    "phoneCode": "+7"
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "flag": "🇷🇼",
    "phoneCode": "+250"
  },
  {
    "code": "SA",
    "name": "Saudi Arabia",
    "flag": "🇸🇦",
    "phoneCode": "+966"
  },
  {
    "code": "SB",
    "name": "Solomon Islands",
    "flag": "🇸🇧",
    "phoneCode": "+677"
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "flag": "🇸🇨",
    "phoneCode": "+248"
  },
  {
    "code": "SD",
    "name": "Sudan",
    "flag": "🇸🇩",
    "phoneCode": "+249"
  },
  {
    "code": "SE",
    "name": "Sweden",
    "flag": "🇸🇪",
    "phoneCode": "+46"
  },
  {
    "code": "SG",
    "name": "Singapore",
    "flag": "🇸🇬",
    "phoneCode": "+65"
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "flag": "🇸🇮",
    "phoneCode": "+386"
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "flag": "🇸🇰",
    "phoneCode": "+421"
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "flag": "🇸🇱",
    "phoneCode": "+232"
  },
  {
    "code": "SM",
    "name": "San Marino",
    "flag": "🇸🇲",
    "phoneCode": "+378"
  },
  {
    "code": "SN",
    "name": "Senegal",
    "flag": "🇸🇳",
    "phoneCode": "+221"
  },
  {
    "code": "SO",
    "name": "Somalia",
    "flag": "🇸🇴",
    "phoneCode": "+252"
  },
  {
    "code": "SR",
    "name": "Suriname",
    "flag": "🇸🇷",
    "phoneCode": "+597"
  },
  {
    "code": "SS",
    "name": "South Sudan",
    "flag": "🇸🇸",
    "phoneCode": "+211"
  },
  {
    "code": "ST",
    "name": "São Tomé and Príncipe",
    "flag": "🇸🇹",
    "phoneCode": "+239"
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "flag": "🇸🇻",
    "phoneCode": "+503"
  },
  {
    "code": "SY",
    "name": "Syria",
    "flag": "🇸🇾",
    "phoneCode": "+963"
  },
  {
    "code": "SZ",
    "name": "Eswatini",
    "flag": "🇸🇿",
    "phoneCode": "+268"
  },
  {
    "code": "TD",
    "name": "Chad",
    "flag": "🇹🇩",
    "phoneCode": "+235"
  },
  {
    "code": "TG",
    "name": "Togo",
    "flag": "🇹🇬",
    "phoneCode": "+228"
  },
  {
    "code": "TH",
    "name": "Thailand",
    "flag": "🇹🇭",
    "phoneCode": "+66"
  },
  {
    "code": "TJ",
    "name": "Tajikistan",
    "flag": "🇹🇯",
    "phoneCode": "+992"
  },
  {
    "code": "TL",
    "name": "Timor-Leste",
    "flag": "🇹🇱",
    "phoneCode": "+670"
  },
  {
    "code": "TM",
    "name": "Turkmenistan",
    "flag": "🇹🇲",
    "phoneCode": "+993"
  },
  {
    "code": "TN",
    "name": "Tunisia",
    "flag": "🇹🇳",
    "phoneCode": "+216"
  },
  {
    "code": "TO",
    "name": "Tonga",
    "flag": "🇹🇴",
    "phoneCode": "+676"
  },
  {
    "code": "TR",
    "name": "Turkey",
    "flag": "🇹🇷",
    "phoneCode": "+90"
  },
  {
    "code": "TT",
    "name": "Trinidad and Tobago",
    "flag": "🇹🇹",
    "phoneCode": "+1"
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "flag": "🇹🇻",
    "phoneCode": "+688"
  },
  {
    "code": "TW",
    "name": "Taiwan",
    "flag": "🇹🇼",
    "phoneCode": "+886"
  },
  {
    "code": "TZ",
    "name": "Tanzania",
    "flag": "🇹🇿",
    "phoneCode": "+255"
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "flag": "🇺🇦",
    "phoneCode": "+380"
  },
  {
    "code": "UG",
    "name": "Uganda",
    "flag": "🇺🇬",
    "phoneCode": "+256"
  },
  {
    "code": "US",
    "name": "United States",
    "flag": "🇺🇸",
    "phoneCode": "+1"
  },
  {
    "code": "UY",
    "name": "Uruguay",
    "flag": "🇺🇾",
    "phoneCode": "+598"
  },
  {
    "code": "UZ",
    "name": "Uzbekistan",
    "flag": "🇺🇿",
    "phoneCode": "+998"
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "flag": "🇻🇪",
    "phoneCode": "+58"
  },
  {
    "code": "VN",
    "name": "Vietnam",
    "flag": "🇻🇳",
    "phoneCode": "+84"
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "flag": "🇻🇺",
    "phoneCode": "+678"
  },
  {
    "code": "WS",
    "name": "Samoa",
    "flag": "🇼🇸",
    "phoneCode": "+685"
  },
  {
    "code": "YE",
    "name": "Yemen",
    "flag": "🇾🇪",
    "phoneCode": "+967"
  },
  {
    "code": "ZA",
    "name": "South Africa",
    "flag": "🇿🇦",
    "phoneCode": "+27"
  },
  {
    "code": "ZM",
    "name": "Zambia",
    "flag": "🇿🇲",
    "phoneCode": "+260"
  },
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "flag": "🇿🇼",
    "phoneCode": "+263"
  }
] as const

export const countries=phoneCountries.map(country=>{const label=countryNames.find(item=>item.code===country.code);if(!label)throw new Error("Missing country translation: "+country.code);return{code:country.code,name:{zh:label.name.zh,en:country.name}}})
