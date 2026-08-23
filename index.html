<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<title>首爾行程 Day1 - 明洞安頓</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body{font-family:"Noto Sans TC","PingFang HK",sans-serif;background:#f7f5f2;color:#333;margin:0;padding:0;}
  header{background:#2b2b52;color:#fff;padding:20px;text-align:center;}
  h1{margin:0;font-size:22px;}
  .container{max-width:900px;margin:0 auto;padding:16px;}
  section{background:#fff;border-radius:12px;padding:16px;margin-bottom:16px;box-shadow:0 2px 6px rgba(0,0,0,0.08);}
  h2{color:#2b2b52;border-left:5px solid #e8734a;padding-left:8px;}
  h3{color:#e8734a;margin-top:20px;}
  .card{border:1px solid #eee;border-radius:10px;padding:12px;margin-bottom:10px;background:#fafafa;}
  .tag{display:inline-block;background:#e8734a;color:#fff;font-size:12px;padding:2px 8px;border-radius:20px;margin-right:6px;}
  .time{font-weight:bold;color:#2b2b52;}
  a{color:#e8734a;text-decoration:none;}
  a:hover{text-decoration:underline;}
  table{width:100%;border-collapse:collapse;font-size:14px;}
  table td, table th{border:1px solid #ddd;padding:6px;text-align:left;}
  ul{padding-left:18px;}
  .note{font-size:12px;color:#888;}
</style>
</head>
<body>
<header>
  <h1 id="tripTitle">首爾行程</h1>
  <p id="tripSubtitle"></p>
</header>

<div class="container">

  <section id="hotelSection">
    <h2>🏨 酒店資訊</h2>
    <div id="hotelInfo"></div>
  </section>

  <section id="prepSection">
    <h2>🔑 出發前必辦 Top 5</h2>
    <div id="prepList"></div>
  </section>

  <section id="airportSection">
    <h2>🗺️ 仁川機場 T1／T2 指南</h2>
    <div id="airportGuide"></div>
  </section>

  <section id="day1Section">
    <h2>DAY 1 行程</h2>
    <div id="day1Itinerary"></div>
  </section>

  <section id="restaurantSection">
    <h2>🍜 DAY 1 明洞附近餐廳推薦</h2>
    <div id="restaurantList"></div>
  </section>

  <section id="shopSection">
    <h2>🛍️ DAY 1 附近商圈店舖推薦</h2>
    <div id="shopList"></div>
  </section>

</div>

<script src="data.js"></script>
<script>
const d = tripData;

document.getElementById('tripTitle').innerText = d.title;
document.getElementById('tripSubtitle').innerText = d.subtitle;

// Hotel
document.getElementById('hotelInfo').innerHTML = `
  <p><strong>${d.hotel.name}</strong>（${d.hotel.nameKr}）</p>
  <p>📍 韓文地址：${d.hotel.addressKr}</p>
  <p>☎️ 電話：${d.hotel.phone}</p>
  <p>🚇 地鐵：${d.hotel.subway}</p>
`;

// Prep Top5
document.getElementById('prepList').innerHTML = d.prepList.map(p => `
  <div class="card">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <ul>
      ${p.links.map(l => `<li><a href="${l.url}" target="_blank">${l.label}</a></li>`).join('')}
    </ul>
    ${p.note ? `<p class="note">⚠️ ${p.note}</p>` : ''}
  </div>
`).join('');

// Airport Guide
document.getElementById('airportGuide').innerHTML = d.airportGuide.map(t => `
  <div class="card">
    <h3>${t.terminal}</h3>
    <table>
      <tr><th>設施</th><th>位置</th></tr>
      ${t.facilities.map(f => `<tr><td>${f.name}</td><td>${f.location}</td></tr>`).join('')}
    </table>
  </div>
`).join('') + `<p class="note">${d.airportGuideNote}</p>`;

// Day1 Itinerary
document.getElementById('day1Itinerary').innerHTML = `
  <p><strong>${d.day1.date}｜${d.day1.theme}</strong></p>
  <p>${d.day1.route}</p>
  <table>
    <tr><th>時間</th><th>內容</th></tr>
    ${d.day1.timeline.map(t => `<tr><td class="time">${t.time}</td><td>${t.desc}</td></tr>`).join('')}
  </table>
`;

// Restaurants
document.getElementById('restaurantList').innerHTML = d.restaurants.map(r => `
  <div class="card">
    <strong>${r.name}</strong>（${r.nameKr}）<span class="tag">${r.type}</span>
    <p>📍 ${r.addressKr}</p>
    <p>🍽️ 主要菜式：${r.mainDish}</p>
    ${r.note ? `<p class="note">${r.note}</p>` : ''}
  </div>
`).join('');

// Shops
document.getElementById('shopList').innerHTML = d.shops.map(s => `
  <div class="card">
    <strong>${s.name}</strong>（${s.nameKr}）<span class="tag">${s.category}</span>
    <p>📍 ${s.addressKr}</p>
    <p>🛒 推薦購買：${s.recommend}</p>
  </div>
`).join('');
</script>
</body>
</html>