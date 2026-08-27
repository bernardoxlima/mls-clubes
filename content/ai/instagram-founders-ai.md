# Instagram recon — Founders AI Club / Delta Academy / Guilherme Junqueira

Research date: **2026-08-27** (America/Sao_Paulo). Public Instagram only, via Apify official actors (`apify/instagram-profile-scraper`, `apify/instagram-scraper`, `apify/instagram-post-scraper`). No login, no DMs, no private groups.
Labels: **FACT** | **INFERENCE** | **UNKNOWN**.

Raw dumps: `ai-recon/ig-raw/` (no API token).

---

## Snapshot (FACT, scrape 2026-08-27 ~10:40 BRT)

| Handle | Exists? | Followers | Following | Posts (lifetime) | Verified | Bio CTA / link |
|---|---|---|---|---|---|---|
| `@foundersai.club` | **NO** — Apify `error: not_found` / “Post does not exist” | — | — | — | — | Prior LinkedIn/Viralist mentions of this handle are **stale**. Live scrape cannot resolve the profile. |
| `@deltaacademy.ai` | YES | **41,686** | 37 | 185 | no (business) | “Tornamos empresas AI-First. Educação → Consultoria → Implementação”. Link: `bit.ly/4emZx7G` → **Delta Board** (`deltaacademy.com.br/delta-board`, UTM `bio` / `delta`). |
| `@guijunqueira` | YES | **39,674** | 4,737 | 201 | yes (Digital creator) | “CEO @deltaacademy.ai \| AI-First Companies / Colunista @mitsloanreviewbrasil / 1x Exit (Gama/Anima), ForbesUnder30”. Link: `hubs.ly/Q044GwyN0` → **board.deltaacademy.com.br** (Delta Board, UTM `bio gui junqueira`). |
| `@founders.ai.delta` | tagged once in a Festival-adjacent carousel (not requested; not fully scraped) | UNKNOWN | — | — | — | One tagged post 2026-08-17 “Foi assim o Founders AI Experience.” **UNKNOWN** if this is an official club handle. |

**FACT:** There is no live Instagram account at `@foundersai.club` as of this scrape. The club is **not** a standalone IG brand. Acquisition runs on Gui’s personal account (~40k) + Delta Academy (~42k). Both bios currently sell **Delta Board**, not Founders AI.

**FACT — bio change vs prior index:** Earlier Viralist/LinkedIn-era bio (“Mentor @foundersai.club”) is **not** on the live Gui profile. Current bio name-drops MIT Sloan Review (columnist), Gama exit, Forbes Under 30, TEDx — prestige, not MLS.

---

## Last-30-days cadence (FACT)

Window: 2026-07-28 → 2026-08-27. Unique posts from post scrapers (~27–40 per profile).

| Account | Posts in 30d | Cadence | Dominant format |
|---|---|---|---|
| `@guijunqueira` | **13** | ~3.0 / week | Video 22/35 of sample; thought-leadership reels |
| `@deltaacademy.ai` | **9** | ~2.1 / week | Sidecar 17/27; Board recap + “how to implement” carousels |
| `@foundersai.club` | **0** | n/a | handle missing |

**INFERENCE:** Cadence is executive-LinkedIn-grade, not infoproduct IG (NovaIA club account posted **27** in the same window). Gui posts almost daily-ish in bursts; Delta is a slower brand channel that recycles Board proof.

Gui sample timestamps (BRT would be UTC−3): 08-21, 08-20, 08-18, 08-13, 08-10, 08-08, 08-07, 08-06… then a gap back to early July. Not a strict daily machine.

---

## What they post

### Gui (`@guijunqueira`) — FACT from captions

Pattern is **operator POV / industry news / FOMO-of-IA**, almost never a product brochure.

- People vs agents: “Contratar mais FTE ou aumentar produtividade com IA?”
- Event as proof: “jornada AI-First para 40 C-levels… @hr_path_brasil. É só o começo!”
- Systems not tools: “Só funciona quando tem pessoas, processos e dados.”
- Tool wars as bait (Meta Muse Code vs Claude Code — “Preço 90% mais barato”) then a trade-off punchline.
- Customer-ops: coordinating 3+ channels, keeping context.
- One explicit club CTA in the 40-post sample (2026-07-03): “Se quiser instalar isso no seu time, clica no link da bio e vem pro FoundersAI.” **The live bio link is Delta Board, not Founders AI** — funnel mismatch.

Tone: founder-celebrity, WEF/Nvidia/Elon as hooks, then “install the operating system.” Hashtags on Gui’s sample: **none** (0). Mentions of MLS Festival: **none** in this sample.

### Delta (`@deltaacademy.ai`) — FACT

Brand account sells the **stack**, with Board as the loudest SKU and FoundersAI as the “install” metaphor.

- Recap of **10ª edição do Delta Board** (2026-08-12/13): “Lideranças saíram… com governança, estrutura e aplicação prática.” CTA implied: next Board.
- Tool-vs-autonomy carousel that closes: “No FoundersAI, transformamos essa curiosidade em diagnóstico, prioridades…”
- Metrics post (2026-07-07): “O FoundersAI existe pra instalar esse sistema… Link na bio.”
- Social proof: FoundersAI Experience with **Maurício Bastos, CTO AZZAS 2154** (“empresa de mais de R$11 bilhões”, 28 marcas). CTA: “aplique-se pelo link na bio.”
- Sector play: “Comente SEGURADORA” → Manual AI-First Seguradoras (Darwin-adjacent).
- Lead magnet: “Comente RADAR” → free maturity diagnostic (20 questions, 4 dimensions: Pessoas, Processos, Dados, Estratégia). **This is a comment-to-DM mechanic** (public caption; we did not send the comment).
- CIMED / Claud.IA case (cost of bula).
- Next Board date in July sample: “Dia 11 e 12 de agosto… Link na bio.”

**INFERENCE:** Delta IG is a **Board top-of-funnel** that occasionally names FoundersAI as the 12-month/install product. The bio never currently points at `/founders-ai`.

### MLS (`@mentoringleaguesociety`) — how the league presents AI clubs / Festival (FACT)

- **184,922** followers. Last 30 days: **36** posts (Festival afterglow machine).
- Festival copy: “estádio lotado”, “mais de **30 mil** empreendedores”, “mais de **200 clubes**”, edição #60 especial Festival.
- They do **not** name FoundersAI, NovaIA, or “clube de IA” in the 36-post sample. AI clubs are invisible at league-brand level.
- Adjacent programming they *do* push: Growth Circle vendas (Caio Carneiro, 31 Aug), Treinamento Start / mentores novos, Elevate Med Club feature (edição #61).
- Vibe: stadium, 8GVs, Blue Table, Simone Mendes, “ninguém cresce sozinho.” Prestige of **scale of the league**, not of any AI curriculum.

**INFERENCE:** A MIT-lab AI club would get distribution from Festival *attendance*, not from MLS IG editorial. NovaIA used Festival as content; Founders/Delta did not (in this sample).

---

## Acquisition pattern on IG (FACT + INFERENCE)

**FACT visible mechanics:**

1. **Personal brand (Gui)** → authority reels. Rare hard CTA to FoundersAI; bio is Board.
2. **Company brand (Delta)** → Board recaps, enterprise logos, “link na bio”, comment-keyword DMs (`RADAR`, `SEGURADORA`).
3. **Bio links both resolve to Delta Board**, with HubSpot/UTM tagging (`utm_campaign=33024183-Delta Board`). Board is the paid/selection TOF.
4. **Privacy policy (site, not IG)** lists Meta ads + Google Ads. They *can* run IG ads; we did not see “publicidade” labels in the post objects (`paidPartnership` not used as a club VSL).
5. **No MLS Festival content** on Gui/Delta sample despite Festival ~2026-08-16. Contrast NovaIA, which posted Festival same week.

**INFERENCE:** IG is not where they close the MLS título. IG fills Board (2-day immersion, published historically at ~R$10k) and a free Radar diagnostic. FoundersAI is mentioned as the “install” after Board / as a named system, then the closer happens on WhatsApp/HubSpot (see `funnels.md`). Classic value ladder, with Board as the visible SKU.

---

## Top CTAs (FACT, phrase counts in ~40-post samples)

**`@deltaacademy.ai`:** `link na bio` (6), `aplica`/`aplicação`/`candidato` (6 combined), `comente`/`comenta` (4), `vagas limitadas` (1), `garanta sua vaga` (1), `inscreva` (1).

**`@guijunqueira`:** `comenta` (3), `link na bio` (3), `clica no link` (1). One “vem pro FoundersAI”.

**Keyword-DM CTAs (Delta):** `RADAR` (free diagnostic), `SEGURADORA` (vertical PDF). These are the sharpest acquisition hooks.

**What they never put in the bio:** Founders AI application, MLS, price, WhatsApp.

---

## Proof they use on IG (FACT)

- **Delta Board 10ª edição** as ritual proof (photos of leaders in a room).
- **AZZAS 2154 / Maurício Bastos** inside FoundersAI Experience (R$11bi claim is *theirs*).
- **CIMED** (Claud.IA, 1bi caixas).
- **HR Path** C-level talk (Gui).
- Gui’s own résumé in bio (Gama/Ânima, Forbes, TEDx, MIT Sloan Review column).
- Named logos from prior web recon (Natura/Stone/XP) did **not** appear as captions in this 30-day sample — Board/Experience is the current proof format.

**INFERENCE:** Proof is “we sat with the CTO of a B3 fashion group” and “we just ran Board #10”, not “here are 58 MLS Festival attendees.” Club membership is not visualized.

---

## Price on IG?

**FACT: club ticket does not appear.** No R$ for FoundersAI, no título, no faturamento mínimo.

Price-adjacent copy that *did* appear:

- Gui 2026-08-07: Meta Muse Code “90% mais barato que Claude Code” — **tool price, not club**.
- Delta 2026-06-30: “empresa de mais de **R$11 bilhões**” — **proof of ICP size / guest company**, not ticket.
- Historical Delta Board PEGN R$10k is **not** restated on these posts.

**UNKNOWN:** whether comment “RADAR” leads to a paid Board form or a free tool (caption says 100% gratuito).

---

## What they never say on IG (FACT absences in this sample)

- Price / parcelamento / título MLS.
- Faturamento mínimo to join the club.
- The words **MIT, lab, universidade, paper, dataset, open-source flagship** (except Gui bio “colunista @mitsloanreviewbrasil” — media affiliation, not a lab).
- **Mentoring League Society**, Festival, sócio MLS, Silver.
- `@foundersai.club` (because it does not exist).
- WhatsApp number.
- Vibe Builders / R$2.999 (correctly kept off the executive brand).
- Calendar of weekly CEO mentorias (site FAQ says qua/qui/sex; IG does not).
- “Aplicar minha empresa” as on-site CTA text — IG uses “aplique-se / link na bio / comente RADAR”.

**INFERENCE — competitive:** FoundersAI occupies “CEO install / anti-curso” on LinkedIn more than on IG. IG is Gui-the-thinker + Board-the-event. A lab-positioned club is still unoccupied here. Weakness: bio→Board while captions sometimes say FoundersAI; Festival unused; club handle dead.

---

## Method / limits

- Handles requested: `foundersai.club` (dead), `guijunqueira`, `deltaacademy.ai`, plus league `mentoringleaguesociety` for Festival presentation.
- Profile scraper returned 12 latest posts/profile; post scrapers filled ~27–40.
- Like counts often `-1` (hidden likes). Treat engagement as directional.
- Comment-keyword destinations not opened (would require posting a comment).
- `founders.ai.delta` spotted as a tagged account; not fully scraped.
