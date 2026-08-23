const tripData = {
  title: "首爾自由行",
  subtitle: "Day 1｜9/12（五）抵達 · 明洞安頓",

  hotel: {
    name: "SKYPARK HOTEL 明洞店",
    nameKr: "스카이파크호텔 명동",
    addressKr: "서울 중구 명동9길 16",
    phone: "02-752-0022（+82-2-752-0022）",
    subway: "4號線明洞站 6號出口步行約4分鐘｜2號線乙支路入口站 7號出口步行約8分鐘"
  },

  prepList: [
    {
      title: "① K-ETA／電子入境卡",
      desc: "出發前72小時內於 e-Arrival Card 官網填妥電子入境卡（免費），出發前再上 K-ETA 官網做最後確認。",
      links: [
        { label: "🔗 e-Arrival Card 電子入境卡官網申請", url: "https://www.e-arrivalcard.go.kr/portal/main/index.do" },
        { label: "🔗 K-ETA 官網申請", url: "https://www.k-eta.go.kr/portal/newapply/index.do" },
        { label: "🔗 K-ETA 申請教學（英文官方說明）", url: "https://www.k-eta.go.kr/portal/guide/viewetaapplication.do?locale=EN" }
      ],
      note: "e-Arrival Card 建議在抵達前72小時內填寫；K-ETA需在出發前完成，通過後有效期一般為2年（可多次入境）。請務必用護照上英文姓名及有效電郵填寫。"
    },
    {
      title: "② 轉轉卡 Discover Seoul Pass（72小時券）",
      desc: "約₩100,000–130,000 ≈HKD 570–745。覆蓋 N首爾塔觀景台（₩21,000≈HKD120）、景福宮（₩3,000≈HKD17）、SPAREX汗蒸幕（₩15,000起≈HKD86起）等景點。Day2首次刷卡啟動，連續72小時覆蓋Day2–4。",
      links: [
        { label: "🔗 Discover Seoul Pass 官方介紹（含使用範圍）", url: "https://english.visitseoul.net/tour-pass" },
        { label: "🔗 Discover Seoul Pass 官方購買/合作平台", url: "https://english.visitseoul.net/partners-en/discoverseoulpass" },
        { label: "🔗 Klook 購買（可選機場取實體卡／Mobile版）", url: "https://www.klook.com/activity/3153-discover-seoul-pass-seoul/" },
        { label: "🔗 KKday 購買", url: "https://www.kkday.com/zh-hk/product/6817" }
      ],
      note: "購買教學：1) 官網／Klook／KKday 下單 → 2) 選擇「機場取卡」或直接用手機Mobile Pass（免排隊） → 3) Day2第一次使用時在景點閘機／入口感應卡片啟動，系統會自動計算72小時效期 → 4) 之後3天內同一張卡可重複用於覆蓋景點，無需再付費。"
    }
  ],

  airportGuideNote: "仁川機場T1與T2之間有免費穿梭巴士（約15-20分鐘車程），下飛機時記得先確認航班在哪個Terminal降落，AREX直達列車主要停靠T1，T2旅客需先搭穿梭巴士或直達列車支線到T1轉乘／T2也有獨立AREX月台（開通後）。",

  airportGuide: [
    {
      terminal: "Terminal 1（T1）",
      facilities: [
        { name: "WOWPASS 自助機台", location: "入境大廳1樓（Arrival Hall）近4號、9號出口附近，及B1往AREX通道沿路" },
        { name: "便利店（CU / GS25）", location: "入境大廳1樓及地下1樓（B1）往AREX方向沿途皆有" },
        { name: "換錢所（Currency Exchange）", location: "入境大廳1樓，近3號、8號出口，多間銀行/換錢櫃檯並列" },
        { name: "AREX 乘搭處", location: "地下1樓（B1），沿指標步行約5-10分鐘，直達列車／普通列車月台在同一層" },
        { name: "T-MONEY 增值機", location: "AREX月台入閘前及便利店內均設有" }
      ]
    },
    {
      terminal: "Terminal 2（T2）",
      facilities: [
        { name: "WOWPASS 自助機台", location: "入境大廳1樓（Arrival Hall）中央區域，近1號、5號出口附近" },
        { name: "便利店（CU / GS25）", location: "入境大廳1樓及地下1樓往AREX通道" },
        { name: "換錢所（Currency Exchange）", location: "入境大廳1樓，近2號、4號出口" },
        { name: "AREX 乘搭處", location: "地下1樓（B1），T2設有獨立AREX月台，指標清晰" },
        { name: "T-MONEY 增值機", location: "AREX月台入閘前及便利店內均設有" }
      ]
    }
  ],

  day1: {
    date: "9/12（五）",
    theme: "抵達 · 明洞安頓",
    route: "仁川機場 → AREX → 明洞 → 換錢 → 豬腳 → 夜逛",
    timeline: [
      { time: "17:05", desc: "到達仁川機場：① 拿WOWPASS　② 找到AREX的位置" },
      { time: "18:05–19:05", desc: "抵達明洞、先回酒店：先放下行李" },
      { time: "19:30", desc: "到對面換錢店換錢——MONEY BOX（서울 중구 명동9길 15｜☎️02-752-0022）" },
      { time: "20:00", desc: "豬腳店晚餐（見下方推薦）" },
      { time: "21:00–22:00", desc: "自由行動，明洞夜逛" }
    ]
  },

  restaurants: [
    {
      name: "明洞餃子",
      nameKr: "명동교자",
      addressKr: "서울 중구 명동10길 29",
      type: "刀切麵／餃子",
      mainDish: "手工刀切麵（칼국수）₩11,000、餃子（만두）₩12,000，明洞代表老店，餐搭配蒜味泡菜。"
    },
    {
      name: "河東館 明洞本店",
      nameKr: "하동관 명동본점",
      addressKr: "서울 중구 명동",
      type: "牛肉湯飯",
      mainDish: "傳承多年的燉牛肉湯（곰탕），清淡濃郁，明洞老字號。"
    },
    {
      name: "元祖南山王豬排 明洞本店",
      nameKr: "원조남산왕돈까스 명동본점",
      addressKr: "서울 중구 명동7길 21 명동아르누보센텀",
      type: "韓式豬排（돈까스）",
      mainDish: "傳統大鍋現炸豬排，招牌南山王豬排₩13,000、芝士豬排₩15,000，份量大、外脆內嫩。"
    },
    {
      name: "平來屋",
      nameKr: "평래옥",
      addressKr: "서울 중구 마른내로 21-1",
      type: "平壤冷麵",
      mainDish: "清淡樸實的平壤冷麵（평양냉면）₩14,000、拌冷麵₩14,000，明洞周邊老字號冷麵店。"
    },
    {
      name: "豬腳晚餐推薦：뚱뚱이할머니집（Ttungttungi Halmoni)",
      nameKr: "뚱뚱이할머니집",
      addressKr: "서울 중구 장충단로 174-1",
      type: "豬腳專門店（족발）",
      mainDish: "招牌豬腳（大）₩50,000，皮彈嫩滑、無腥味，搭配辣拌冷麵解膩。",
      note: "⚠️ 此店位於獎忠洞，距明洞約15-20分鐘車程（非步行距離），建議搭Taxi前往；若想留在明洞步行範圍內用餐，可改選上方「明洞餃子」或「南山王豬排」作為DAY1晚餐，方便安排時間。"
    }
  ],

  shops: [
    {
      name: "Olive Young 明洞站前店",
      nameKr: "올리브영 명동역시티점",
      addressKr: "서울 중구 명동8길 40",
      category: "美妝藥妝",
      recommend: "面膜、防曬、氣墊粉底，遊客最常掃貨的韓國美妝連鎖店，明洞多間分店任何時間都好逛。"
    },
    {
      name: "Nature Republic 明洞店",
      nameKr: "네이처리퍼블릭 명동점",
      addressKr: "서울 중구 명동8길 33",
      category: "韓妝品牌店",
      recommend: "蘆薈膠（알로에 수딩젤）、保濕精華，價格親民、常有買一送一優惠。"
    },
    {
      name: "innisfree 明洞店",
      nameKr: "이니스프리 명동점",
      addressKr: "서울 중구 명동8길",
      category: "韓妝品牌店",
      recommend: "綠茶系列護膚品、氣墊粉底，濟州島天然成分主打，適合買伴手禮。"
    },
    {
      name: "Migliore 明洞店",
      nameKr: "명동밀리오레",
      addressKr: "서울 중구 명동길 33",
      category: "綜合購物商場",
      recommend: "平價服飾、飾品、鞋包，適合掃貨韓系流行單品，多層樓逛足半天。"
    },
    {
      name: "明洞地下購物街",
      nameKr: "명동 지하상가",
      addressKr: "서울 중구 을지로 지하상가 일대（乙支路入口站連接）",
      category: "地下商店街",
      recommend: "平價衣飾、韓國小物、手機配件，價格比路面店更划算，適合順路掃貨。"
    }
  ]
};