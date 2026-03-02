
import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer, Legend
} from "recharts";

const INV = [
  {n:"Le Paté",p:2800,s:4,c:"Alimentation"},{n:"Chocolat GM",p:2350,s:5,c:"Alimentation"},
  {n:"Chocolat PM",p:1500,s:6,c:"Alimentation"},{n:"Matinal PM",p:1500,s:15,c:"Alimentation"},
  {n:"Beurre Jadida 900g",p:2500,s:2,c:"Alimentation"},{n:"Ovaltine 400g",p:2500,s:9,c:"Alimentation"},
  {n:"Lait Liquide Broli",p:1400,s:11,c:"Alimentation"},{n:"Huile Arachide Mayor",p:1500,s:2,c:"Alimentation"},
  {n:"Huile Arachide Oléo",p:1500,s:4,c:"Alimentation"},{n:"Brosse à dent",p:400,s:11,c:"Hygiène"},
  {n:"Colgate Charbon",p:1250,s:3,c:"Hygiène"},{n:"Colgate Herbal",p:1100,s:7,c:"Hygiène"},
  {n:"Sucre en poudre 1kg",p:850,s:6,c:"Alimentation"},{n:"Lait Peak",p:500,s:22,c:"Alimentation"},
  {n:"Sauce Crudité",p:1900,s:8,c:"Alimentation"},{n:"Maïs doux",p:1500,s:9,c:"Alimentation"},
  {n:"Olive Wadifood",p:1300,s:17,c:"Alimentation"},{n:"Olive Vert",p:1550,s:4,c:"Alimentation"},
  {n:"Beignet Crevette",p:500,s:16,c:"Alimentation"},{n:"Nido Chocolat",p:200,s:40,c:"Alimentation"},
  {n:"Nido Vanille",p:150,s:40,c:"Alimentation"},{n:"Mambo Riz",p:250,s:11,c:"Boissons"},
  {n:"Mambo Noir",p:200,s:16,c:"Boissons"},{n:"Mambo au Lait",p:200,s:16,c:"Boissons"},
  {n:"Grand Mambo",p:1000,s:5,c:"Boissons"},{n:"Spaghetti Salaka",p:400,s:15,c:"Alimentation"},
  {n:"Spaghetti Barka",p:400,s:17,c:"Alimentation"},{n:"Spaghetti Pasta First",p:500,s:28,c:"Alimentation"},
  {n:"Macaroni Pasta First",p:250,s:40,c:"Alimentation"},{n:"Cube Magie",p:1000,s:7,c:"Alimentation"},
  {n:"Mayonnaise GM",p:3000,s:3,c:"Alimentation"},{n:"Mayonnaise PM",p:1500,s:0,c:"Alimentation"},
  {n:"Vinaigre",p:400,s:4,c:"Alimentation"},{n:"Thé Vert",p:15000,s:4,c:"Boissons"},
  {n:"Emily Essuie Tout",p:1100,s:6,c:"Maison"},{n:"Couche Molfix PM",p:1100,s:10,c:"Bébé"},
  {n:"Papier Aluminium",p:1000,s:16,c:"Maison"},{n:"Ketchup",p:1000,s:17,c:"Alimentation"},
  {n:"Papier Hyg. Hobby",p:180,s:5,c:"Hygiène"},{n:"Papier Hyg. Sita",p:285,s:28,c:"Hygiène"},
  {n:"Faytex",p:650,s:1,c:"Hygiène"},{n:"Détergent Ola",p:50,s:34,c:"Maison"},
  {n:"Lingettes GM",p:1000,s:4,c:"Hygiène"},{n:"Lingettes PM",p:500,s:5,c:"Hygiène"},
  {n:"Savon Azur",p:350,s:12,c:"Hygiène"},{n:"Savon Mayor",p:350,s:0,c:"Hygiène"},
  {n:"Crème Citron",p:1350,s:11,c:"Beauté"},{n:"Bain Bouche Colgate",p:3500,s:3,c:"Hygiène"},
  {n:"Désodorisants",p:1950,s:6,c:"Hygiène"},{n:"Insecticides",p:1750,s:2,c:"Maison"},
  {n:"Biscuit Parle G",p:1500,s:4,c:"Alimentation"},{n:"Biscuits O'choco",p:1300,s:4,c:"Alimentation"},
  {n:"Biscuits Cookies",p:1500,s:4,c:"Alimentation"},{n:"Biscuits Amore",p:1800,s:3,c:"Alimentation"},
  {n:"Biscuits Peticœur",p:600,s:12,c:"Alimentation"},{n:"Lotus Tiof",p:100,s:7,c:"Alimentation"},
  {n:"Whisky Grants",p:10000,s:7,c:"Alcools"},{n:"Whisky AFRICAN Queen",p:4000,s:4,c:"Alcools"},
  {n:"Vin MSX NUA Moscato",p:6400,s:5,c:"Alcools"},{n:"Vin MSX NUA Moscato Rose",p:6400,s:5,c:"Alcools"},
  {n:"Merrys Irish Cream",p:8000,s:6,c:"Alcools"},{n:"Baileys",p:10000,s:8,c:"Alcools"},
  {n:"Yacht Club 3 ans",p:6200,s:4,c:"Alcools"},{n:"MONKEY SHOULDER",p:27000,s:5,c:"Alcools"},
  {n:"Robertson Winery Blanc",p:5600,s:6,c:"Alcools"},{n:"Robertson Winery Rouge",p:5600,s:6,c:"Alcools"},
  {n:"Vin ASCONi AGOR",p:5100,s:6,c:"Alcools"},{n:"MSX SPU Moscato Rose",p:5100,s:6,c:"Alcools"},
  {n:"MSX SPU Moscato Blanc",p:6200,s:4,c:"Alcools"},{n:"Isabelle de France Rouge",p:3500,s:4,c:"Alcools"},
  {n:"Isabelle de France Blanc",p:3500,s:0,c:"Alcools"},{n:"Eschenauer Bx Rouge",p:5400,s:2,c:"Alcools"},
  {n:"Eschenauer Bx Blanc",p:5400,s:2,c:"Alcools"},{n:"Eschenauer Merlot",p:5100,s:4,c:"Alcools"},
  {n:"Eschenauer Cab. Sauv.",p:5100,s:2,c:"Alcools"},{n:"Vin Grand VERSANT",p:3250,s:3,c:"Alcools"},
  {n:"Grandia Blanc",p:3000,s:5,c:"Alcools"},{n:"Grandia Rouge",p:3000,s:6,c:"Alcools"},
  {n:"MONTMEYRAC Rouge",p:3100,s:1,c:"Alcools"},{n:"Whisky CHANCELER",p:4000,s:1,c:"Alcools"},
  {n:"El Vino",p:1500,s:7,c:"Alcools"},{n:"Malta Vanpur",p:800,s:23,c:"Boissons"},
  {n:"Beaucoup Ordinaire",p:1000,s:3,c:"Boissons"},{n:"33",p:1000,s:18,c:"Boissons"},
  {n:"Castel",p:1000,s:12,c:"Boissons"},{n:"Booster",p:1000,s:0,c:"Boissons"},
  {n:"Chill",p:700,s:8,c:"Boissons"},{n:"Manyan",p:700,s:19,c:"Boissons"},
  {n:"Bullet",p:1000,s:14,c:"Boissons"},{n:"Malta Guinness",p:500,s:1,c:"Boissons"},
  {n:"Bavaria Pomme",p:1000,s:13,c:"Boissons"},{n:"Bavaria Nature",p:1000,s:14,c:"Boissons"},
  {n:"Mützig",p:1000,s:23,c:"Boissons"},{n:"Heineken",p:1000,s:0,c:"Boissons"},
  {n:"Top Grenadine",p:500,s:15,c:"Boissons"},{n:"Top Orange",p:500,s:17,c:"Boissons"},
  {n:"Top Pamplemousse",p:500,s:3,c:"Boissons"},{n:"Top Ananas",p:500,s:14,c:"Boissons"},
  {n:"Djino",p:650,s:36,c:"Boissons"},{n:"Vimto",p:800,s:0,c:"Boissons"},
  {n:"Orangina",p:800,s:0,c:"Boissons"},{n:"Schweppes Agrume",p:6500,s:6,c:"Boissons"},
  {n:"Schweppes Tonic",p:6500,s:10,c:"Boissons"},{n:"Spécial Pamplemousse",p:600,s:13,c:"Boissons"},
  {n:"Coca Cola",p:600,s:16,c:"Boissons"},{n:"American Cola",p:500,s:4,c:"Boissons"},
  {n:"Fruit Rouge",p:500,s:1,c:"Boissons"},{n:"Reaktor",p:500,s:60,c:"Boissons"},
  {n:"Fanta",p:500,s:12,c:"Boissons"},{n:"Lait Vitamine C",p:5000,s:60,c:"Beauté"},
  {n:"Lait Collagène",p:5000,s:70,c:"Beauté"},{n:"Lait Acide Hyaluronic",p:5000,s:89,c:"Beauté"},
  {n:"Savon Anti Acné",p:1500,s:1,c:"Beauté"},
  {n:"Hair Oil Hair Care",p:3000,s:1,c:"Beauté"},
  {n:"Tea Free Hair Oil",p:3000,s:1,c:"Beauté"},
  {n:"Eau Supermont",p:400,s:63,c:"Eau"},
  {n:"Eau Vitale",p:300,s:3,c:"Eau"},
  {n:"Petite Bouteille d'eau",p:200,s:2,c:"Eau"},
];

const SALES_RAW = [
  // VENDREDI 27
  {n:"Schweppes Agrume",q:1,d:0,r:650},
  {n:"Savon Anti Acné",q:1,d:0,r:1500},
  {n:"Hair Oil Hair Care",q:1,d:0,r:3000},
  {n:"Tea Free Hair Oil",q:1,d:0,r:3000},
  {n:"Lait Vitamine C",q:1,d:0,r:5000},
  {n:"Eau Supermont",q:3,d:0,r:1200},
  {n:"Huile Arachide Oléo",q:1,d:0,r:1500},
  {n:"Eau Vitale",q:1,d:0,r:300},
  {n:"Fruit Rouge",q:1,d:0,r:500},
  {n:"Petite Bouteille d'eau",q:1,d:0,r:200},
  // SAMEDI 28
  {n:"Coca Cola",q:1,d:1,r:600},
  {n:"Fanta",q:1,d:1,r:500},
  {n:"Malta Vanpur",q:3,d:1,r:2400},
  {n:"Ketchup",q:1,d:1,r:1000},
  {n:"El Vino",q:2,d:1,r:3000},
  {n:"Schweppes Tonic",q:1,d:1,r:7000},
  {n:"Mambo Noir",q:1,d:1,r:200},
  {n:"Bavaria Pomme",q:2,d:1,r:2000},
  {n:"Eau Supermont",q:1,d:1,r:400},
  {n:"Papier Aluminium",q:1,d:1,r:1100},
  {n:"Biscuits Peticœur",q:1,d:1,r:600},
  {n:"Malta Guinness",q:1,d:1,r:500},
  // DIMANCHE 1er
  {n:"Fanta",q:1,d:2,r:500},
  {n:"Petite Bouteille d'eau",q:2,d:2,r:400},
  {n:"Coca Cola",q:3,d:2,r:1800},
  {n:"Malta Vanpur",q:2,d:2,r:1600},
  {n:"Top Grenadine",q:2,d:2,r:1000},
  {n:"Bavaria Pomme",q:1,d:2,r:1000},
  {n:"Mützig",q:1,d:2,r:1000},
  {n:"Mambo Riz",q:2,d:2,r:500},
  {n:"Reaktor",q:1,d:2,r:500},
  {n:"Lotus Tiof",q:1,d:2,r:100},
  {n:"33",q:1,d:2,r:3000},
  {n:"Eau Supermont",q:1,d:2,r:400},
  {n:"Mambo Noir",q:1,d:2,r:200},
  {n:"Papier Hyg. Hobby",q:1,d:2,r:1100},
  {n:"Vimto",q:1,d:2,r:800},
  {n:"Top Grenadine",q:1,d:2,r:500},
];

// Build sold map
const SM = {};
SALES_RAW.forEach(s => {
  if (!SM[s.n]) SM[s.n] = { d: [0,0,0], q: 0, r: 0 };
  SM[s.n].d[s.d] += s.q; SM[s.n].q += s.q; SM[s.n].r += s.r;
});

// Enrich inventory
const inventory = INV.map(i => {
  const sold = SM[i.n]?.q || 0;
  return { ...i, sold, rem: Math.max(0, i.s - sold) };
});

const DAYS = ["Vendredi 27", "Samedi 28", "Dimanche 1er"];
const DAY_REV = [16850, 13000, 14400];
const COLORS = ["#6366f1","#22d3ee","#f59e0b","#10b981","#f43f5e","#a78bfa","#34d399","#fb923c","#60a5fa","#e879f9","#fbbf24","#4ade80"];
const CAT_COLORS = { Boissons:"#22d3ee", Alimentation:"#6366f1", Alcools:"#f59e0b", Hygiène:"#10b981", Beauté:"#f43f5e", Maison:"#a78bfa", Bébé:"#34d399", Eau:"#38bdf8" };

const fmt = n => n.toLocaleString("fr-FR");

const statusInfo = rem => {
  if (rem === 0) return { label: "Rupture", bg: "bg-purple-900", text: "text-purple-300" };
  if (rem <= 2) return { label: "Critique", bg: "bg-red-900", text: "text-red-300" };
  if (rem <= 5) return { label: "Faible", bg: "bg-orange-900", text: "text-orange-300" };
  return { label: "OK", bg: "bg-green-900", text: "text-green-300" };
};

const Badge = ({ rem }) => {
  const { label, bg, text } = statusInfo(rem);
  return <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${bg} ${text}`}>{label}</span>;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, padding: "8px 12px" }}>
        <p style={{ color: "#e2e8f0", fontSize: 12, marginBottom: 2 }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color || "#6366f1", fontSize: 13, fontWeight: 700 }}>{fmt(p.value)}{p.unit || ""}</p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const [tab, setTab] = useState("overview");

  // Stats
  const outStock = inventory.filter(i => i.rem === 0).length;
  const lowStock = inventory.filter(i => i.rem > 0 && i.rem <= 3).length;
  const available = inventory.filter(i => i.rem > 0).length;

  // Top sold chart data
  const topSold = Object.entries(SM)
    .sort((a, b) => b[1].q - a[1].q)
    .slice(0, 10)
    .map(([name, v]) => ({ name: name.length > 16 ? name.slice(0, 16) + "…" : name, qty: v.q, rev: v.r }));

  // Critical stock
  const criticalItems = inventory.filter(i => i.rem > 0 && i.rem <= 5).sort((a, b) => a.rem - b.rem).slice(0, 12)
    .map(i => ({ name: i.n.length > 18 ? i.n.slice(0, 18) + "…" : i.n, rem: i.rem, fill: i.rem === 1 ? "#ef4444" : i.rem <= 2 ? "#f97316" : "#eab308" }));

  // Category pie
  const catMap = {};
  inventory.forEach(i => { catMap[i.c] = (catMap[i.c] || 0) + i.rem; });
  const catData = Object.entries(catMap).sort((a, b) => b[1] - a[1]).map(([name, value]) => ({ name, value }));

  // Revenue bar
  const revData = DAYS.map((d, i) => ({ name: d, rev: DAY_REV[i] }));

  const tabs = [
    { id: "overview", label: "📊 Vue d'ensemble" },
    { id: "sold", label: "🛒 Ventes" },
    { id: "critical", label: "🚨 Stock Critique" },
    { id: "all", label: "📋 Inventaire" },
  ];

  return (
    <div style={{ background: "#0a0f1e", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif", color: "#e2e8f0", padding: 20 }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px", color: "#f1f5f9" }}>
          📦 Tableau de Bord Inventaire
        </h1>
        <p style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>
          2 Mars 2026 · Ventes: Vendredi 27 Fév, Samedi 28, Dimanche 1er Mars
        </p>
      </div>

      {/* Stat Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
        {[
          { label: "Rupture de Stock", val: outStock, color: "#f87171" },
          { label: "Stock Faible (≤3)", val: lowStock, color: "#fb923c" },
          { label: "Articles Disponibles", val: available, color: "#4ade80" },
          { label: "CA Total (FCFA)", val: "44 250f", color: "#60a5fa" },
        ].map((s, i) => (
          <div key={i} style={{ background: "#111827", borderRadius: 12, padding: "16px 12px", textAlign: "center", border: "1px solid #1f2937" }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: 11, color: "#64748b", marginTop: 5 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              padding: "7px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13,
              background: tab === t.id ? "#6366f1" : "#1f2937",
              color: tab === t.id ? "#fff" : "#94a3b8",
              fontWeight: tab === t.id ? 700 : 400,
              transition: "all 0.15s"
            }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {tab === "overview" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            {/* Top Sold */}
            <div style={{ background: "#111827", borderRadius: 12, padding: 18, border: "1px solid #1f2937" }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 14 }}>🏆 Top 10 Articles Vendus</h2>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={topSold} layout="vertical" margin={{ left: 0, right: 20, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 11 }} width={110} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "#ffffff08" }} />
                  <Bar dataKey="qty" radius={[0, 6, 6, 0]}>
                    {topSold.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Critical Stock */}
            <div style={{ background: "#111827", borderRadius: 12, padding: 18, border: "1px solid #1f2937" }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 14 }}>⚠️ Stock Critique (restant)</h2>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={criticalItems} layout="vertical" margin={{ left: 0, right: 20, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 5]} />
                  <YAxis type="category" dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 11 }} width={120} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "#ffffff08" }} />
                  <Bar dataKey="rem" radius={[0, 6, 6, 0]}>
                    {criticalItems.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Revenue by Day */}
            <div style={{ background: "#111827", borderRadius: 12, padding: 18, border: "1px solid #1f2937" }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 14 }}>💰 CA par Jour (FCFA)</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={revData} margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={v => (v/1000)+"k"} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "#ffffff08" }} />
                  <Bar dataKey="rev" radius={[6, 6, 0, 0]}>
                    {revData.map((_, i) => <Cell key={i} fill={["#6366f1","#22d3ee","#10b981"][i]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Category Pie */}
            <div style={{ background: "#111827", borderRadius: 12, padding: 18, border: "1px solid #1f2937" }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 14 }}>📦 Stock par Catégorie</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={catData} cx="40%" cy="50%" outerRadius={75} dataKey="value" paddingAngle={2}>
                    {catData.map((entry, i) => <Cell key={i} fill={CAT_COLORS[entry.name] || COLORS[i]} />)}
                  </Pie>
                  <Legend
                    layout="vertical" align="right" verticalAlign="middle"
                    formatter={(v) => <span style={{ color: "#cbd5e1", fontSize: 11 }}>{v}</span>}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Ventes */}
      {tab === "sold" && (
        <div style={{ background: "#111827", borderRadius: 12, padding: 18, border: "1px solid #1f2937", overflowX: "auto" }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 14 }}>🛒 Détail des Ventes (27 Fév – 1 Mars)</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1f2937" }}>
                {["Article","Vendredi","Samedi","Dimanche","Total Qté","Total FCFA"].map(h => (
                  <th key={h} style={{ padding: "8px 10px", textAlign: "left", color: "#64748b", fontWeight: 600, fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(SM).sort((a,b) => b[1].q - a[1].q).map(([name, d], i) => (
                <tr key={i} style={{ borderBottom: "1px solid #0f172a" }}>
                  <td style={{ padding: "8px 10px", color: "#e2e8f0" }}>{name}</td>
                  <td style={{ padding: "8px 10px", color: "#94a3b8" }}>{d.d[0] || "—"}</td>
                  <td style={{ padding: "8px 10px", color: "#94a3b8" }}>{d.d[1] || "—"}</td>
                  <td style={{ padding: "8px 10px", color: "#94a3b8" }}>{d.d[2] || "—"}</td>
                  <td style={{ padding: "8px 10px", fontWeight: 700, color: "#6366f1" }}>{d.q}</td>
                  <td style={{ padding: "8px 10px", color: "#22d3ee" }}>{fmt(d.r)} f</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Critical */}
      {tab === "critical" && (
        <div style={{ background: "#111827", borderRadius: 12, padding: 18, border: "1px solid #1f2937", overflowX: "auto" }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 14 }}>🚨 Articles à Réapprovisionner</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1f2937" }}>
                {["Article","Catégorie","Prix","Stock Restant","Statut"].map(h => (
                  <th key={h} style={{ padding: "8px 10px", textAlign: "left", color: "#64748b", fontWeight: 600, fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inventory.filter(i => i.rem <= 3).sort((a,b) => a.rem - b.rem).map((i, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #0f172a" }}>
                  <td style={{ padding: "8px 10px", color: "#e2e8f0", fontWeight: 600 }}>{i.n}</td>
                  <td style={{ padding: "8px 10px", color: "#64748b" }}>{i.c}</td>
                  <td style={{ padding: "8px 10px", color: "#94a3b8" }}>{fmt(i.p)} f</td>
                  <td style={{ padding: "8px 10px", fontWeight: 800, color: i.rem === 0 ? "#a78bfa" : i.rem === 1 ? "#f87171" : "#fb923c" }}>{i.rem}</td>
                  <td style={{ padding: "8px 10px" }}><Badge rem={i.rem} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* All Inventory */}
      {tab === "all" && (
        <div style={{ background: "#111827", borderRadius: 12, padding: 18, border: "1px solid #1f2937", overflowX: "auto" }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 14 }}>📋 Inventaire Complet ({inventory.length} articles)</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1f2937" }}>
                {["Article","Catégorie","Prix","Initial","Vendu","Restant","Statut"].map(h => (
                  <th key={h} style={{ padding: "7px 10px", textAlign: "left", color: "#64748b", fontWeight: 600, fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...inventory].sort((a,b) => a.rem - b.rem).map((i, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #0f172a" }}>
                  <td style={{ padding: "7px 10px", color: "#e2e8f0" }}>{i.n}</td>
                  <td style={{ padding: "7px 10px", color: "#64748b" }}>{i.c}</td>
                  <td style={{ padding: "7px 10px", color: "#94a3b8" }}>{fmt(i.p)}</td>
                  <td style={{ padding: "7px 10px", color: "#64748b" }}>{i.s}</td>
                  <td style={{ padding: "7px 10px", color: "#6366f1" }}>{i.sold}</td>
                  <td style={{ padding: "7px 10px", fontWeight: 700, color: i.rem === 0 ? "#a78bfa" : i.rem <= 2 ? "#f87171" : i.rem <= 5 ? "#fb923c" : "#4ade80" }}>{i.rem}</td>
                  <td style={{ padding: "7px 10px" }}><Badge rem={i.rem} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
