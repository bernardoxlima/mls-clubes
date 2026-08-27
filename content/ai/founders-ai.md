# Founders AI Club — competitive recon (MLS)

Research date: 2026-08-27 (America/Sao_Paulo). Public sources only. No login bypass.
Labels: **FACT** | **INFERENCE** | **UNKNOWN** | **USER CONTEXT** (starting assumption from Bernardo, not independently verified on the web).

---

## 1. Identity

| Field | Value | Label | Source |
|---|---|---|---|
| Trade / brand names | Founders AI Club, FoundersAI Club, FoundersAI | FACT | LinkedIn company + MLS announcement posts |
| Legal entity of the club | UNKNOWN (no CNPJ for “Founders AI Club” found on public web) | UNKNOWN | — |
| Parent / operator | Delta Academy | FACT | LinkedIn posts 2026-03-12; deltaacademy.com.br |
| MLS status | Member and sócio of Mentoring League Society as of 2026-03-12 | FACT | https://pt.linkedin.com/posts/guijunqueira_ai-mentoria-activity-7437960569980354560-Yb22 |
| MLS tier | Silver | USER CONTEXT | Members Book 2026 index (not independently re-verified on the open web) |
| Festival presence | Club string `"FoundersAI Club"` — 58 attendees in MLS Festival CSV | FACT | workspace `lista-evento-mls.csv` club column (counts only; no PII used) |
| Mentor | Guilherme Junqueira (Founder & CEO, Delta Academy) | FACT | LinkedIn + IG bio |
| Other named partners (Delta, not necessarily club co-mentors) | Felipe Furlan (CTO), Maurílio Alberone (CMO / co-founder), Rafael Arevalo (Partner & AI Education) | FACT | PEGN 2025-12-08; Economia SP 2025-12-09; LinkedIn company page |
| HQ | São Paulo, Brazil | FACT | LinkedIn / PEGN |
| Founded (Delta) | 2025 | FACT | LinkedIn company; PEGN launch 2025-12-08 |

**INFERENCE:** The MLS club is a wrapper around Delta Academy’s 12-month FoundersAI transformation program, not a separate school. The same brand also sells cheaper adjacent products (Delta Board immersion; Vibe Builders community) that are **not** the MLS club.

---

## 2. Handles, sites, socials

| Channel | URL / handle | Label | Notes |
|---|---|---|---|
| Club landing (product) | https://deltaacademy.com.br/founders-ai | FACT | Listed on Delta homepage as Founders AI program. Fetch of the HTML from this research box returned a Chromium error/dino page; homepage index still lists the URL. |
| Parent site | https://deltaacademy.com.br/ | FACT | CTA observed via search index: “Aplicar minha empresa” |
| Adjacent community (NOT the MLS club) | https://comunidade.foundersai.club/ | FACT | “Vibe Builders — Construa sua Startup AI-first em 12 semanas”. Footer: © 2025 Delta Academy |
| Checkout (Vibe Builders only) | https://pay.curseduca.com/comunidadefoundersaiclub/p/comunidade-foundersai | FACT | Direct checkout, not application |
| LinkedIn company (club) | https://linkedin.com/company/foundersaiclub | FACT | Industry: Education; 11–50 employees listed by third-party index |
| LinkedIn company (parent) | https://linkedin.com/company/deltaacademyai | FACT | Homepage deltaacademy.com.br; ~389 followers cited by index (volatile) |
| LinkedIn person | https://linkedin.com/in/guijunqueira | FACT | Headline: “CEO . Delta Academy & FoundersAI . AI-First Companies: Leves & Lucrativas” |
| Instagram (mentor) | https://www.instagram.com/guijunqueira/ | FACT | Bio (Viralist index): “CEO @deltaacademy.ai \| sistema educacional de IA Mentor @foundersai.club \| clube empresários AI-First”. ~38.6k followers (index; volatile) |
| Instagram (parent) | https://www.instagram.com/deltaacademy.ai/ | FACT | Public profile title resolved |
| Instagram (club) | https://www.instagram.com/foundersai.club/ | FACT | Handle exists (IG login wall on fetch). Matches Gui’s bio “Mentor @foundersai.club” |
| Email | contato@deltaacademy.com.br | FACT | Site / Vibe Builders footer also lists suporte@deltaacademy.com.br |
| YouTube (official club/channel) | UNKNOWN | UNKNOWN | Appearances on other people’s channels (e.g. Deep Growth #112: https://www.youtube.com/watch?v=dVVU8m2vz-M). No dedicated FoundersAI channel confirmed. |
| WhatsApp official | UNKNOWN | UNKNOWN | Not published on the pages successfully fetched |
| Application form URL | UNKNOWN | UNKNOWN | LinkedIn CTAs say “link no primeiro comentário” / “Saiba mais:”. The comment links themselves are not in the public index. Homepage CTA is “Aplicar minha empresa”. |

---

## 3. Promise / positioning (copy)

**FACT — MLS announcement (Gui, 2026-03-12):**
> “O FoundersAI Club entra com uma missão específica: transformar empresários em operadores #AI-First. É um programa contínuo de educação, mentoria e implementação que impacta o dono, o líder e o colaborador. Começa pelo CEO e desce em cascata pra empresa inteira. Resultado no caixa, não no slide bonito.”

**FACT — Founders AI Club company post (2026-03-12):**
> “Em 12 meses, o programa instala um sistema #AI-First na empresa: diagnóstico de maturidade, roadmap personalizado, acompanhamento contínuo da implementação e acesso direto ao Guilherme Junqueira.”
> “Não é curso. Não é evento. É o sistema completo que leva a empresa do estágio atual ao modo de operar AI-First, do CEO ao time operacional.”

**FACT — LinkedIn CTA used repeatedly:**
> “Seja membro do FoundersAI Club e tenha a próxima empresa AI-First, leve e lucrativa do Brasil”

**FACT — later post (Gui, 2026-03-24):**
> “A maioria dos CEOs que chega ao FoundersAI Club tem o mesmo problema: sabe que precisa de IA, não sabe por onde começar sem desperdiçar dinheiro.”
> Method described: diagnóstico de 90+ perguntas → roadmap priorizado por impacto financeiro → 12 meses de acompanhamento, CEO ao time operacional.

**FACT — Delta Academy homepage (search index):**
> “Programa de transformação e certificação AI-First para médias empresas, com educação, mentoria e orquestração de IA para todo o time.”

**FACT — Economia SP (2025-12-09), Gui quote on market gap:**
> “Recebemos muitos feedbacks de empreendedores traumatizados por cursos de PPT, infoprodutores oportunistas, missões internacionais para tirar selfie nas big techs, cases genéricos gringos. O que existe no mercado hoje tem zero prática e implementação de verdade.”

**INFERENCE:** Positioning is *operator / implementation / cash-result*, not *lab / research / academic prestige*. The enemy in the copy is “curso, evento, PPT, selfie em big tech”. That is the opposite of a MIT-lab story — they are selling anti-academia, not university affiliation.

---

## 4. Offer (what they say they deliver)

### A. The MLS club / FoundersAI 12-month program (the competitor)

| Element | Claim | Label |
|---|---|---|
| Duration | 12 months | FACT |
| Entry diagnostic | 90+ question maturity diagnostic | FACT (Gui LinkedIn 2026-03-24) |
| Roadmap | Personalized, use-cases prioritized by financial impact | FACT |
| Access | Direct access to Guilherme Junqueira | FACT (claimed) |
| Scope | CEO → leaders → operators (cascade) | FACT (claimed) |
| Deliverable metaphor | “Instala um sistema AI-First na empresa” | FACT (claimed) |
| Cadence of meetings | UNKNOWN (no public calendar of club meetings found) | UNKNOWN |
| Community / WhatsApp | UNKNOWN for the MLS club itself | UNKNOWN |
| Certification | “Programa de transformação e certificação AI-First” | FACT (site index) |
| Target company size | “Médias empresas” / Founders, CEOs, executivos | FACT |
| Minimum revenue (faturamento mínimo) | UNKNOWN for the MLS club | UNKNOWN |
| Ticket / título price | UNKNOWN (not published) | UNKNOWN |

**FACT — proof-of-work they publicize:** Darwin Seguros, “mentorada do FoundersAI”, built with ChatGPT + Lovable “uma solução de R$160 milhões para o setor de seguradoras” (Gui reshare of Delta Board post, 2026-04-24). Treat the R$160M figure as **their claim**, not independently audited here.

**FACT — session content sample:** mentoria on OpenClaw and AI-agent architecture; Bruno Okamoto demo of agents managing marketing, support, finance (Gui, 2026-02-25). This is hands-on agent architecture, not ChatGPT-for-beginners.

### B. Adjacent Delta products (do not confuse with the MLS club)

**Delta Board — FACT**
- Imersão presencial 2 days (site now); PEGN Dec 2025 still said 3 days / R$ 10 mil. Duration and price may have changed after launch.
- PEGN (2025-12-08): “investimento para participação é de R$ 10 mil”
- Aimed at empresários e executivos; monthly in São Paulo at launch
- Used as top-of-funnel / conversion event into FoundersAI (INFERENCE from the Darwin Seguros post mixing Board + FoundersAI mentee)

**Vibe Builders / Comunidade FoundersAI — FACT (https://comunidade.foundersai.club/)**
- 12-week “startup AI-first” community. **Not** the MLS club.
- Price: from R$ 5.998, launch 50% off 12x R$ 298,49 or R$ 2.999 à vista
- 48 recorded lessons, 10 live mentorias/year with 3 founders, WhatsApp group, AI Tutor 24/7, Builder Pack (up to R$ 50k cloud credits)
- Professors: Guilherme Junqueira, Alexandre Messina, Danrley Morais
- Audience: beginners, CLT side-project, founders without code — **much lower ICP than the MLS club**
- Checkout: Curseduca, no application
- Claims “primeira comunidade brasileira que ensina empreendedores a criar, construir e crescer negócios com IA”

**Delta Company — FACT:** custom IA training for large companies (presencial / online / híbrido).

---

## 5. Funnel

**FACT (visible):**
1. Personal-brand LinkedIn of Gui + Delta Academy company page. Almost every FoundersAI post ends with “link no primeiro comentário”.
2. Instagram of Gui (`@guijunqueira`) pointing to `@foundersai.club` and `@deltaacademy.ai`.
3. Site CTA “Aplicar minha empresa” on deltaacademy.com.br (application, not checkout).
4. PR: PEGN (Globo, 2025-12-08) and Economia SP (2025-12-09) at Delta launch.
5. Events as acquisition: Gramado Summit, CONARH, LovableDay (co-organizer), AI Talks Delta Academy (Luma link referenced on LinkedIn, April 2026), in-company kickoffs.
6. Tool-vendor partnerships named in Economia SP: Lovable, n8n, CrewAI, Runflow, Perplexity, Anthropic, ElevenLabs, Cursor.

**INFERENCE:** Funnel is **application / sales-conversation**, not self-serve checkout, for the MLS club. Contrast with Vibe Builders, which is self-serve Curseduca checkout at ~R$3k. Classic value-ladder: cheap community → paid immersion (Board ~R$10k) → high-ticket 12-month club (price unpublished).

**UNKNOWN:** Exact application form (Typeform / Tally / WhatsApp). Comment-link destinations. Whether they run Meta/Google ads. Whether MLS título is sold as a separate line item from the program fee.

---

## 6. Price / ticket / faturamento

| Item | Public figure | Label |
|---|---|---|
| MLS club título | Not published | UNKNOWN |
| FoundersAI 12-month fee | Not published | UNKNOWN |
| Faturamento mínimo to join club | Not published | UNKNOWN |
| Delta Board | R$ 10.000 (Dec 2025 PEGN; may be stale) | FACT at that date |
| Vibe Builders | R$ 2.999 launch / R$ 5.998 list | FACT (landing, 2026 fetch) |
| Delta Academy revenue (company, not club) | “faturou mais de R$ 4 milhões em quatro meses” (bootstrapping, pre/at launch) | FACT as Gui’s claim to PEGN, Dec 2025 |
| Delta headcount model | 20 “employees”: 10 humans + 10 AI agents; BHAG US$ 1M RPE | FACT as claimed in Economia SP |

**INFERENCE:** Silver MLS tickets in this league are typically high five / low six figures BRL. NovaIA (Bronze, same niche) publicly filters for R$ 3M+ revenue and “preparados para investir R$ 120 mil”. FoundersAI, being Silver and CEO-cascade, is likely at or above that band — but that is **not** a published price.

---

## 7. Acquisition strategy (what is visible)

**FACT:**
- **Personal brand of Guilherme Junqueira** is the primary engine (IG ~38.6k, dense LinkedIn posting, TEDx, Forbes Under 30, Gama Academy exit story, book *Tempo, Dinheiro e Atenção*).
- **PR** at company launch (PEGN, Economia SP).
- **Ecosystem events** (Gramado Summit, LovableDay, AI Talks, CONARH).
- **Named enterprise logos** as social proof (Natura, Stone, XP, Darwin Seguros, Banco BV, IVECO, V4 Company) — these are attributed to Delta immersions/training, not necessarily to MLS club members.
- **Vendor co-marketing** (Lovable, n8n, Anthropic, Cursor, etc.).
- **MLS itself** as distribution after 2026-03-12 (Festival 16 Aug 2026: 58 people tagged FoundersAI Club).

**INFERENCE:** They do **not** appear to be an IG-ads infoproduct machine. Tone is executive LinkedIn + founder brand + events. No public VSL page was found for the MLS club (Vibe Builders landing *is* a VSL-style longform, but that is the cheap product).

**UNKNOWN:** Paid media mix, closer script, CRM, SDR (Economia SP claims they run an AI SDR internally).

---

## 8. What they do NOT claim / do not deliver (gaps vs a MIT-lab positioned club)

**FACT — absences in all public copy reviewed:**
- No MIT, no university, no “lab”, no “Latin America first AI lab”, no academic paper, no research agenda.
- No claim of founding AI in Brazil with a university.
- No published scientific board, no named MIT faculty.
- No public lab infrastructure, dataset, model, or open-source flagship.
- “AI-First” is an operating-system metaphor (people, process, data / “pilots, map, fuel”), not a research lab metaphor.
- They explicitly **attack** “missões internacionais para tirar selfie nas big techs” and “cases genéricos gringos” — a MIT-lab story would sit uncomfortably next to that copy unless framed as *applied implementation*, not prestige tourism.

**FACT — what they actually sell instead:**
- Implementation, orchestration, certification, cash/RPE, agents in production, cascade from CEO.

**INFERENCE — competitive implication for a MIT-lab MLS club:**
- FoundersAI occupies “CEO of a mid-size company who needs a 12-month install, not a course”.
- They do **not** occupy “builders who want a lab / research affiliation / MIT halo / first-in-LatAm academic legitimacy”.
- They do **not** occupy the R$3k vibe-coder beginner market under the MLS brand (that is parked in Vibe Builders, outside the título).
- Weaknesses a MIT-lab club can attack: unpublished price and calendar; no public university credential; diagnostic/roadmap is consultant-shaped, not lab-shaped; Silver MLS but the loudest proof (Natura/Stone/XP) is Delta immersions, which muddies whether the *club* has those logos as members.

**UNKNOWN:** Actual NPS, churn, how many MLS títulos sold, how much of the 12 months is really implementation vs group mentoria, whether members get MLS app / interclub access as advertised by the league.

---

## 9. Delta Academy context (parent, not the club)

**FACT (PEGN 2025-12-08, Economia SP 2025-12-09):**
- Gui sold Gama Academy to Ânima (PEGN cites R$ 33.8M; other interviews mention higher figures — treat as inconsistent press). Earn-out + non-compete, then Delta.
- Original thesis was a Y Combinator for AI startups; pivoted to CEOs of existing companies.
- Ambition: “escola de agentes”; BHAG “1 milhão de agentes… pilotados por 100 mil humanos” by ~2030.
- Wants to become a certification standard “a exemplo da ISO”.

**INFERENCE:** The MLS club is a distribution / prestige / título channel inside a broader Delta product stack, not Delta’s only revenue line.

---

## 10. Sources

1. https://pt.linkedin.com/posts/guijunqueira_ai-mentoria-activity-7437960569980354560-Yb22 (MLS join, 2026-03-12)
2. https://pt.linkedin.com/posts/foundersaiclub_ai-activity-7437964535199744000-TzyN
3. https://pt.linkedin.com/posts/deltaacademyai_ai-activity-7437964571530891264-OjQB
4. https://pt.linkedin.com/posts/guijunqueira_ai-faturamento-log%C3%ADstica-activity-7442352915874279424-5cZb (90+ diagnostic)
5. https://pt.linkedin.com/posts/guijunqueira_hoje-no-foundersai-club-a-mentoria-foi-sobre-activity-7432453681343774720-MF1Y (OpenClaw session)
6. https://pt.linkedin.com/posts/guijunqueira_existe-uma-diferen%C3%A7a-enorme-entre-saber-que-activity-7453550066805407746-kcgs (Darwin Seguros / Board)
7. https://linkedin.com/company/foundersaiclub
8. https://linkedin.com/company/deltaacademyai
9. https://br.linkedin.com/in/guijunqueira
10. https://deltaacademy.com.br/
11. https://deltaacademy.com.br/founders-ai
12. https://comunidade.foundersai.club/
13. https://pay.curseduca.com/comunidadefoundersaiclub/p/comunidade-foundersai
14. https://www.instagram.com/guijunqueira/
15. https://www.instagram.com/deltaacademy.ai/
16. https://www.instagram.com/foundersai.club/
17. https://viralist.ai/instagram/creators/guijunqueira
18. https://revistapegn.globo.com/tecnologia/noticia/2025/12/apos-vender-gama-academy-guilherme-junqueira-volta-a-empreender-de-olho-nos-agentes-de-ia.ghtml
19. https://economiasp.com/2025/12/09/apos-venda-para-grupo-anima-empreendedor-cria-escola-para-formar-executivos-em-ia/
20. https://mlsociety.co/
21. https://www.youtube.com/watch?v=dVVU8m2vz-M (Deep Growth interview)
22. Festival CSV club counts (workspace `lista-evento-mls.csv`) — 58 rows with club = FoundersAI Club
