"use strict";

const DATA = {
  clubs: "data/clubs.json",
  ranking: "data/ranking-top25.json",
  aiClubs: "data/ai-clubs.json",
  catalogSummary: "data/SUMMARY.md",
  delivery: "data/delivery-pattern.md",
  topSummary: "data/top-SUMMARY.md",
  topClubs: "data/top-clubs.md",
  urls: "data/urls.json",
  foundersAi: "data/founders-ai.md",
  otherAi: "data/other-ai-clubs.md",
  funnels: "data/funnels.md",
  igFounders: "data/instagram-founders-ai.md",
  igNovaia: "data/instagram-novaia.md",
  aiUrls: "data/ai-urls.json",
};

const TABS = ["overview", "playbook", "ranking", "catalogo", "top", "ai", "fontes"];
const cache = new Map();
let catalogState = { clubs: null, q: "", tier: "", ai: "", sort: "name", dir: 1 };

function $(sel, root) {
  return (root || document).querySelector(sel);
}

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fmt(n) {
  if (n == null || n === "") return "—";
  return Number(n).toLocaleString("pt-BR");
}

function emptyHTML(path, err) {
  const hint = location.protocol === "file:"
    ? "Abra via HTTP (GitHub Pages ou um servidor local). fetch() não lê file://."
    : "Confira se o arquivo está em data/ ao lado de index.html.";
  return (
    '<div class="empty"><strong>Não foi possível carregar este arquivo.</strong>' +
    "<p>" + esc(path) + (err ? " · " + esc(err.message || err) : "") + "</p>" +
    "<p>" + hint + "</p></div>"
  );
}

function loadingHTML() {
  return '<div class="loading">Carregando recon…</div>';
}

async function loadText(path) {
  if (cache.has(path)) return cache.get(path);
  const res = await fetch(path);
  if (!res.ok) throw new Error(res.status + " " + res.statusText);
  const t = await res.text();
  cache.set(path, t);
  return t;
}

async function loadJSON(path) {
  const t = await loadText(path);
  return JSON.parse(t);
}

function inlineMd(raw) {
  let s = esc(raw);
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, function (_, t, u) {
    return '<a href="' + u + '" target="_blank" rel="noopener noreferrer">' + t + "</a>";
  });
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<)]+)/g, function (_, pre, u) {
    const clean = u.replace(/[.,;:]+$/, "");
    return pre + '<a href="' + clean + '" target="_blank" rel="noopener noreferrer">' + clean + "</a>";
  });
  s = s.replace(/\b(FACT|INFERENCE|UNKNOWN)\b/g, '<span class="chip-label $1">$1</span>');
  s = s.replace(/\bUSER CONTEXT\b/g, '<span class="chip-label USER">USER CONTEXT</span>');
  return s;
}

function isTableSep(line) {
  return /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/.test(line);
}

function splitRow(line) {
  let l = line.trim();
  if (l.startsWith("|")) l = l.slice(1);
  if (l.endsWith("|")) l = l.slice(0, -1);
  return l.split("|").map(function (c) { return c.trim(); });
}

function parseMarkdown(md) {
  if (!md) return "";
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let inCode = false;
  let code = [];

  function blockStart(line) {
    return (
      /^(#{1,4})\s+/.test(line) ||
      /^---+$/.test(line.trim()) ||
      /^\*\*\*+$/.test(line.trim()) ||
      line.startsWith("> ") ||
      line.startsWith("```") ||
      /^\s*[-*]\s+/.test(line) ||
      /^\s*\d+\.\s+/.test(line)
    );
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCode) {
        out.push("<pre><code>" + esc(code.join("\n")) + "</code></pre>");
        code = [];
        inCode = false;
      } else {
        inCode = true;
      }
      i++;
      continue;
    }
    if (inCode) {
      code.push(line);
      i++;
      continue;
    }

    if (/^---+$/.test(line.trim()) || /^\*\*\*+$/.test(line.trim())) {
      out.push("<hr>");
      i++;
      continue;
    }

    const hm = line.match(/^(#{1,4})\s+(.*)$/);
    if (hm) {
      const lvl = hm[1].length;
      out.push("<h" + lvl + ">" + inlineMd(hm[2]) + "</h" + lvl + ">");
      i++;
      continue;
    }

    if (line.startsWith(">")) {
      const qs = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        qs.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      out.push(
        "<blockquote>" +
          qs.map(function (q) { return "<p>" + inlineMd(q) + "</p>"; }).join("") +
          "</blockquote>"
      );
      continue;
    }

    if (line.includes("|") && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const heads = splitRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes("|") && !isTableSep(lines[i])) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      let html = "<div class='table-wrap'><table><thead><tr>";
      heads.forEach(function (h) { html += "<th>" + inlineMd(h) + "</th>"; });
      html += "</tr></thead><tbody>";
      rows.forEach(function (r) {
        html += "<tr>";
        r.forEach(function (c) { html += "<td>" + inlineMd(c) + "</td>"; });
        html += "</tr>";
      });
      html += "</tbody></table></div>";
      out.push(html);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push("<li>" + inlineMd(lines[i].replace(/^\s*[-*]\s+/, "")) + "</li>");
        i++;
      }
      out.push("<ul>" + items.join("") + "</ul>");
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push("<li>" + inlineMd(lines[i].replace(/^\s*\d+\.\s+/, "")) + "</li>");
        i++;
      }
      out.push("<ol>" + items.join("") + "</ol>");
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    const buf = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !blockStart(lines[i]) &&
      !(lines[i].includes("|") && i + 1 < lines.length && isTableSep(lines[i + 1]))
    ) {
      buf.push(lines[i]);
      i++;
    }
    out.push("<p>" + inlineMd(buf.join(" ")) + "</p>");
  }
  return out.join("\n");
}

function extractSection(md, heading) {
  if (!md) return "";
  const re = new RegExp("^##\\s+" + heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*$", "im");
  const m = md.match(re);
  if (!m) return "";
  const start = m.index + m[0].length;
  const rest = md.slice(start);
  const next = rest.search(/^##\s+/m);
  return (next === -1 ? rest : rest.slice(0, next)).trim();
}

function pillTier(tier) {
  const t = (tier || "unknown").toLowerCase();
  return '<span class="pill ' + esc(t) + '">' + esc(t) + "</span>";
}

function pillAI(club) {
  const rel = club.ai_relevance || "none";
  if (rel === "direct") return '<span class="pill ai">IA</span>';
  if (rel === "adjacent") return '<span class="pill adj">adjacente</span>';
  if (club.is_ai) return '<span class="pill ai">IA</span>';
  return "";
}

function mentorsOf(c) {
  const m = c.mentors || [];
  if (!m.length) return "—";
  return m.join(", ");
}

function snippet(text, n) {
  const t = (text || "").replace(/\s+/g, " ").trim();
  if (!t) return "—";
  return t.length > n ? t.slice(0, n).trim() + "…" : t;
}

/* ---------- tabs ---------- */

async function renderOverview(root) {
  root.innerHTML = loadingHTML();
  try {
    const [clubs, summary, top] = await Promise.all([
      loadJSON(DATA.clubs),
      loadText(DATA.catalogSummary),
      loadText(DATA.topSummary),
    ]);
    const tiers = { frame: 0, platinum: 0, gold: 0, silver: 0, bronze: 0 };
    clubs.forEach(function (c) {
      if (tiers[c.tier] != null) tiers[c.tier]++;
      else tiers[c.tier] = (tiers[c.tier] || 0) + 1;
    });
    const aiCore = clubs.filter(function (c) {
      return c.ai_relevance === "direct";
    });
    const implications = extractSection(top, "Implications for an AI club with MIT-lab positioning");
    const pattern = extractSection(top, "5-line pattern of how the winners acquire");
    const counts = extractSection(summary, "Contagens por tier");
    const aiBlock = extractSection(summary, "Clubes AI / adjacentes");
    const gaps = extractSection(summary, "Gaps de parsing");

    root.innerHTML =
      '<p class="kicker">Mentoring League Society · Members Book 2026</p>' +
      '<h1 class="display">Mapa da liga.</h1>' +
      '<p class="lede">214 clubes no catálogo. Quatro com tese de IA. FoundersAI e NovaIA vendem implementação — MIT/lab é espaço em branco. Mentoring League Society, não soccer.</p>' +
      '<div class="stat-grid">' +
        stat("214", "clubes no catálogo") +
        stat(String(tiers.gold), "gold") +
        stat(String(tiers.silver), "silver") +
        stat(String(tiers.bronze), "bronze") +
        stat("4", "núcleo IA") +
        stat("1", "platinum · ClaxClub") +
      "</div>" +
      '<div class="callout">' +
        "<h2>Veredito para um clube de IA com posicionamento MIT/lab</h2>" +
        (implications ? '<div class="md">' + parseMarkdown(implications) + "</div>" : "<p>Implicações não encontradas no SUMMARY.</p>") +
      "</div>" +
      '<div class="section-head"><h2>Como os vencedores adquirem</h2><span class="meta">top/SUMMARY.md</span></div>' +
      '<div class="card">' + (pattern ? '<div class="md">' + parseMarkdown(pattern) + "</div>" : "") + "</div>" +
      '<div class="section-head"><h2>Liga em números</h2><span class="meta">catalog/SUMMARY.md</span></div>' +
      '<div class="md">' + parseMarkdown(counts) + "</div>" +
      '<div class="section-head"><h2>Clubes de IA no book</h2><span class="meta">' +
        aiCore.length + " direto / adjacente no catálogo</span></div>" +
      '<div class="md">' + parseMarkdown(aiBlock) + "</div>" +
      '<div class="section-head"><h2>Gaps de parsing</h2><span class="meta">índice vs páginas</span></div>' +
      '<div class="md">' + parseMarkdown(gaps) + "</div>";
  } catch (e) {
    root.innerHTML = emptyHTML(DATA.catalogSummary, e);
  }
}

function stat(n, label) {
  return '<div class="stat"><b>' + esc(n) + "</b><span>" + esc(label) + "</span></div>";
}

async function renderPlaybook(root) {
  root.innerHTML = loadingHTML();
  try {
    const md = await loadText(DATA.delivery);
    root.innerHTML =
      '<div class="page-intro">' +
        "<h1>Playbook de entrega</h1>" +
        "<p>O que se repete nas 212 páginas extraídas do Members Book 2026. Encontros quase universais; a diferença Gold vs Bronze está no que se vende — ambiência vs implementação.</p>" +
      "</div>" +
      '<div class="bars">' +
        bar("Bloco ENCONTROS", 97) +
        bar("WhatsApp / grupo", 77) +
        bar("Plataforma / gravados", 70) +
        bar("Experiências / imersão", 47) +
      "</div>" +
      '<div class="md md-wide">' + parseMarkdown(md) + "</div>";
  } catch (e) {
    root.innerHTML = emptyHTML(DATA.delivery, e);
  }
}

function bar(label, pct) {
  return (
    '<div class="bar-row"><div class="label">' +
    esc(label) +
    '</div><div class="bar-track"><div class="bar-fill" style="width:' +
    pct +
    '%"></div></div><div class="pct">' +
    pct +
    "%</div></div>"
  );
}

async function renderRanking(root) {
  root.innerHTML = loadingHTML();
  try {
    const rows = await loadJSON(DATA.ranking);
    const list = rows
      .map(function (r) {
        return (
          '<article class="rank-row">' +
            '<div class="rank-n">' + esc(String(r.rank).padStart(2, "0")) + "</div>" +
            "<div>" +
              '<p class="rank-name">' + esc(r.name) + "</p>" +
              '<div class="rank-meta">' +
                pillTier(r.tier) +
                "<span>" + esc(mentorsOf(r)) + "</span>" +
                "<span>" + esc(r.audience_nicho || "—") + "</span>" +
              "</div>" +
            "</div>" +
            '<div class="rank-metrics">' +
              "<div><b>" + fmt(r.members_count) + "</b><span>membros</span></div>" +
              "<div><b>" + fmt(r.family_table_count) + "</b><span>family</span></div>" +
              "<div><b>" + fmt(r.attendees_with_club_field) + "</b><span>festival</span></div>" +
            "</div>" +
          "</article>"
        );
      })
      .join("");
    root.innerHTML =
      '<div class="page-intro">' +
        "<h1>Top 25 por membros no Festival</h1>" +
        "<p>Não é ranking de tier da liga. Mentoria Makers é bronze e lidera. ClaxClub (platinum) aparece em 25º por densidade de sócios no festival, não por status.</p>" +
      "</div>" +
      '<div class="rank-list">' + list + "</div>";
  } catch (e) {
    root.innerHTML = emptyHTML(DATA.ranking, e);
  }
}

async function renderCatalog(root) {
  root.innerHTML = loadingHTML();
  try {
    const clubs = await loadJSON(DATA.clubs);
    catalogState.clubs = clubs;
    root.innerHTML =
      '<div class="page-intro">' +
        "<h1>Catálogo</h1>" +
        "<p>214 clubes do Members Book 2026. Busca instantânea no cliente. Filtros por tier e tese de IA.</p>" +
      "</div>" +
      '<div class="toolbar">' +
        '<input type="search" id="cat-q" placeholder="Buscar nome, mentor, nicho, promessa…" autocomplete="off">' +
        '<select id="cat-tier" aria-label="Filtrar por tier">' +
          '<option value="">Todos os tiers</option>' +
          '<option value="platinum">platinum</option>' +
          '<option value="gold">gold</option>' +
          '<option value="silver">silver</option>' +
          '<option value="bronze">bronze</option>' +
          '<option value="frame">frame</option>' +
        "</select>" +
        '<select id="cat-ai" aria-label="Filtrar por IA">' +
          '<option value="">IA: todos</option>' +
          '<option value="core">Núcleo IA</option>' +
          '<option value="adjacent">Adjacente</option>' +
          '<option value="none">Sem IA</option>' +
        "</select>" +
        '<span class="count-chip" id="cat-count"></span>' +
      "</div>" +
      '<div class="table-wrap"><table class="data" id="cat-table">' +
        "<thead><tr>" +
          th("name", "Clube") +
          th("tier", "Tier") +
          "<th data-k='mentors'>Mentores</th>" +
          th("nicho", "Nicho") +
          th("members_count", "Membros") +
          th("family_table_count", "Family") +
          "<th>IA</th>" +
          "<th>Promessa</th>" +
        "</tr></thead><tbody></tbody></table></div>";

    const q = $("#cat-q");
    const tier = $("#cat-tier");
    const ai = $("#cat-ai");
    q.value = catalogState.q;
    tier.value = catalogState.tier;
    ai.value = catalogState.ai;
    q.addEventListener("input", function () {
      catalogState.q = q.value;
      paintCatalog();
    });
    tier.addEventListener("change", function () {
      catalogState.tier = tier.value;
      paintCatalog();
    });
    ai.addEventListener("change", function () {
      catalogState.ai = ai.value;
      paintCatalog();
    });
    root.querySelectorAll("th[data-k]").forEach(function (thEl) {
      thEl.addEventListener("click", function () {
        const k = thEl.getAttribute("data-k");
        if (catalogState.sort === k) catalogState.dir *= -1;
        else {
          catalogState.sort = k;
          catalogState.dir = k === "members_count" || k === "family_table_count" ? -1 : 1;
        }
        paintCatalog();
      });
    });
    paintCatalog();
    q.focus();
  } catch (e) {
    root.innerHTML = emptyHTML(DATA.clubs, e);
  }
}

function th(k, label) {
  return '<th data-k="' + k + '">' + label + "</th>";
}

function paintCatalog() {
  const clubs = catalogState.clubs || [];
  const q = catalogState.q.trim().toLowerCase();
  const filtered = clubs.filter(function (c) {
    if (catalogState.tier && c.tier !== catalogState.tier) return false;
    const rel = c.ai_relevance || "none";
    const core = rel === "direct";
    if (catalogState.ai === "core" && !core) return false;
    if (catalogState.ai === "adjacent" && rel !== "adjacent") return false;
    if (catalogState.ai === "none" && (core || rel === "adjacent")) return false;
    if (!q) return true;
    const blob = [
      c.name,
      (c.name_variants || []).join(" "),
      mentorsOf(c),
      c.audience_nicho,
      c.promise,
      c.tagline,
      c.ai_notes,
    ]
      .join(" ")
      .toLowerCase();
    return blob.indexOf(q) !== -1;
  });

  const sort = catalogState.sort;
  const dir = catalogState.dir;
  filtered.sort(function (a, b) {
    let va;
    let vb;
    if (sort === "nicho") {
      va = a.audience_nicho || "";
      vb = b.audience_nicho || "";
    } else if (sort === "members_count" || sort === "family_table_count") {
      va = a[sort] || 0;
      vb = b[sort] || 0;
      return (va - vb) * dir;
    } else {
      va = a[sort] || "";
      vb = b[sort] || "";
    }
    return String(va).localeCompare(String(vb), "pt-BR") * dir;
  });

  const count = $("#cat-count");
  if (count) count.textContent = filtered.length + " de " + clubs.length;

  const tb = $("#cat-table tbody");
  if (!tb) return;
  if (!filtered.length) {
    tb.innerHTML = '<tr><td colspan="8" class="muted">Nenhum clube com esse filtro.</td></tr>';
    return;
  }
  tb.innerHTML = filtered
    .map(function (c) {
      return (
        "<tr>" +
        '<td class="name">' + esc(c.name) + "</td>" +
        "<td>" + pillTier(c.tier) + "</td>" +
        "<td>" + esc(mentorsOf(c)) + "</td>" +
        "<td>" + esc(c.audience_nicho || "—") + "</td>" +
        '<td class="num">' + fmt(c.members_count) + "</td>" +
        '<td class="num">' + fmt(c.family_table_count) + "</td>" +
        "<td>" + (pillAI(c) || '<span class="muted">—</span>') + "</td>" +
        '<td class="promise">' + esc(snippet(c.promise || c.tagline, 140)) + "</td>" +
        "</tr>"
      );
    })
    .join("");
}

async function renderTop(root) {
  root.innerHTML = loadingHTML();
  try {
    const [summary, clubsMd] = await Promise.all([
      loadText(DATA.topSummary),
      loadText(DATA.topClubs),
    ]);
    const prices = extractSection(summary, "Public prices / tickets / min-revenue (only what is on public pages)");
    const mix = extractSection(summary, "Nicho mix (top 15 + ClaxClub)");
    root.innerHTML =
      '<div class="page-intro">' +
        "<h1>Top clubes</h1>" +
        "<p>Festival top-15 por members_count + ClaxClub. Cards de funil público, com preços só quando a página mostra.</p>" +
      "</div>" +
      '<div class="section-head"><h2>Preços e pisos públicos</h2><span class="meta">quase todo título é UNKNOWN</span></div>' +
      '<div class="md">' + parseMarkdown(prices) + "</div>" +
      '<div class="section-head"><h2>Mix de nicho</h2><span class="meta">saúde domina o festival</span></div>' +
      '<div class="md">' + parseMarkdown(mix) + "</div>" +
      '<div class="section-head"><h2>Cards de funil</h2><span class="meta">top/clubs.md</span></div>' +
      '<div class="md md-wide">' + parseMarkdown(clubsMd) + "</div>";
  } catch (e) {
    root.innerHTML = emptyHTML(DATA.topClubs, e);
  }
}

async function renderAI(root) {
  root.innerHTML = loadingHTML();
  const facts =
    '<div class="fact-grid">' +
      factCard("Handle morto", "<p><strong>@foundersai.club não existe.</strong> Scrape de 27 ago 2026: Apify <em>not_found</em>. A aquisição roda em @guijunqueira e @deltaacademy.ai — ambos vendem Delta Board, não o clube.</p>") +
      factCard("Ticket NovaIA", "<p><strong>R$ 120.000 à vista ou 12×</strong> no FAQ de novaiaclub.com. Piso de faturamento &gt; R$ 3 milhões. Único ticket de clube de IA publicado.</p>") +
      factCard("Os dois vendem implementação", "<p>FoundersAI instala um sistema AI-First (CEO → time). NovaIA entrega um projeto Simbiose por mês × 12. Nenhum vende laboratório ou pesquisa.</p>") +
      factCard("Espaço em branco", "<p><strong>MIT / lab é whitespace na liga.</strong> FoundersAI é anti-academia (“não é curso, não é selfie em big tech”). NovaIA é modelo de negócio + execução mensal.</p>") +
      factCard("Medgest IA", "<p><strong>Saúde + IA.</strong> Bronze no book, tese para médicos e gestores de clínicas. Não confundir com Medgest Club (silver, gestão médica, sem tese de IA).</p>") +
      factCard("One Code", "<p><strong>Sem página no book e sem LP pública.</strong> Nome no índice bronze; 15 tagged no festival. Mentor, nicho e preço: UNKNOWN.</p>") +
    "</div>";

  const sections = [
    { id: "founders", label: "Founders AI", path: DATA.foundersAi },
    { id: "outros", label: "Outros clubes", path: DATA.otherAi },
    { id: "funis", label: "Funis", path: DATA.funnels },
    { id: "ig-f", label: "Instagram Founders", path: DATA.igFounders },
    { id: "ig-n", label: "Instagram NovaIA", path: DATA.igNovaia },
  ];

  try {
    const mds = await Promise.all(
      sections.map(function (s) {
        return loadText(s.path).catch(function (e) {
          return { __err: e, path: s.path };
        });
      })
    );
    const nav = sections
      .map(function (s, i) {
        return (
          '<button type="button" data-ai="' +
          s.id +
          '"' +
          (i === 0 ? ' class="is-active"' : "") +
          ">" +
          s.label +
          "</button>"
        );
      })
      .join("");
    const bodies = sections
      .map(function (s, i) {
        const md = mds[i];
        const body =
          md && md.__err
            ? emptyHTML(s.path, md.__err)
            : '<div class="md md-wide">' + parseMarkdown(md) + "</div>";
        return (
          '<section class="ai-section' +
          (i === 0 ? " is-on" : "") +
          '" data-ai-panel="' +
          s.id +
          '">' +
          body +
          "</section>"
        );
      })
      .join("");

    root.innerHTML =
      '<div class="page-intro">' +
        "<h1>Mapa de IA na liga</h1>" +
        "<p>Dois clubes vendem IA como produto a empresários. O resto é adjacência, saúde, ou nome tech sem página.</p>" +
      "</div>" +
      facts +
      '<div class="subnav" role="tablist">' + nav + "</div>" +
      bodies;

    root.querySelectorAll(".subnav button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-ai");
        root.querySelectorAll(".subnav button").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        root.querySelectorAll(".ai-section").forEach(function (sec) {
          sec.classList.toggle("is-on", sec.getAttribute("data-ai-panel") === id);
        });
      });
    });
  } catch (e) {
    root.innerHTML =
      '<div class="page-intro"><h1>Mapa de IA na liga</h1></div>' + facts + emptyHTML("data/*.md", e);
  }
}

function factCard(tag, html) {
  return '<article class="fact"><div class="tag">' + esc(tag) + "</div>" + html + "</article>";
}

function collectUrls(node, acc) {
  if (typeof node === "string") {
    if (/^https?:\/\//i.test(node)) acc.push(node);
    return;
  }
  if (Array.isArray(node)) {
    node.forEach(function (x) { collectUrls(x, acc); });
    return;
  }
  if (node && typeof node === "object") {
    Object.keys(node).forEach(function (k) { collectUrls(node[k], acc); });
  }
}

function groupFromObject(obj, title) {
  const groups = [];
  if (obj && obj.league) {
    const u = [];
    collectUrls(obj.league, u);
    groups.push({ title: "Liga · " + title, urls: uniq(u) });
  }
  if (Array.isArray(obj.clubs)) {
    obj.clubs.forEach(function (c) {
      const u = [];
      collectUrls(c, u);
      groups.push({ title: (c.name || "Clube") + (c.tier ? " · " + c.tier : ""), urls: uniq(u) });
    });
  }
  Object.keys(obj).forEach(function (k) {
    if (k === "league" || k === "clubs" || k === "generated_at" || k === "timezone" || k === "note") return;
    if (Array.isArray(obj.clubs)) return;
    const u = [];
    collectUrls(obj[k], u);
    if (u.length) groups.push({ title: labelize(k), urls: uniq(u) });
  });
  return groups;
}

function labelize(k) {
  return k.replace(/_/g, " ");
}

function uniq(arr) {
  return arr.filter(function (v, i, a) { return a.indexOf(v) === i; });
}

async function renderFontes(root) {
  root.innerHTML = loadingHTML();
  try {
    const [topUrls, aiUrls] = await Promise.all([
      loadJSON(DATA.urls),
      loadJSON(DATA.aiUrls),
    ]);
    const groups = groupFromObject(topUrls, "top clubes").concat(groupFromObject(aiUrls, "IA"));
    const html = groups
      .map(function (g) {
        if (!g.urls.length) {
          return (
            '<section class="source-group"><h3>' +
            esc(g.title) +
            '</h3><p class="empty-note">Sem URL pública neste bloco.</p></section>'
          );
        }
        const lis = g.urls
          .map(function (u) {
            return (
              "<li><a href=\"" +
              esc(u) +
              '" target="_blank" rel="noopener noreferrer">' +
              esc(u) +
              "</a></li>"
            );
          })
          .join("");
        return "<section class='source-group'><h3>" + esc(g.title) + "</h3><ul>" + lis + "</ul></section>";
      })
      .join("");
    root.innerHTML =
      '<div class="page-intro">' +
        "<h1>Fontes</h1>" +
        "<p>URLs públicas coletadas no recon. Sem CPF, e-mail ou telefone do CSV do festival. Instagram login-walled não entra.</p>" +
      "</div>" +
      html;
  } catch (e) {
    root.innerHTML = emptyHTML("data/urls.json", e);
  }
}

const RENDER = {
  overview: renderOverview,
  playbook: renderPlaybook,
  ranking: renderRanking,
  catalogo: renderCatalog,
  top: renderTop,
  ai: renderAI,
  fontes: renderFontes,
};

let current = null;

function showTab(id) {
  if (!TABS.includes(id)) id = "overview";
  current = id;
  document.querySelectorAll(".tabs a").forEach(function (a) {
    a.classList.toggle("is-active", a.getAttribute("data-tab") === id);
  });
  const panel = $("#panel");
  const render = RENDER[id];
  if (render) render(panel);
  else panel.innerHTML = emptyHTML(id, new Error("aba desconhecida"));
  if (location.hash.slice(1) !== id) {
    try { history.replaceState(null, "", "#" + id); } catch (e) {}
  }
  window.scrollTo(0, 0);
  closeMenu();
}

function closeMenu() {
  const nav = $("#nav-tabs");
  const btn = $(".hamburger");
  nav.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
}

function init() {
  document.querySelectorAll(".tabs a, .brand").forEach(function (a) {
    a.addEventListener("click", function (e) {
      const id = a.getAttribute("data-tab");
      if (!id) return;
      e.preventDefault();
      showTab(id);
    });
  });
  $(".hamburger").addEventListener("click", function () {
    const nav = $("#nav-tabs");
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    this.setAttribute("aria-expanded", open ? "true" : "false");
  });
  window.addEventListener("hashchange", function () {
    const id = location.hash.slice(1) || "overview";
    if (id !== current) showTab(id);
  });
  showTab(location.hash.slice(1) || "overview");
}

document.addEventListener("DOMContentLoaded", init);
