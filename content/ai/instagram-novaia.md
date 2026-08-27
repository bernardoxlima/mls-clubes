# Instagram recon — NovaIA Club / Myrko Micali / doubleX

Research date: **2026-08-27** (America/Sao_Paulo). Public Instagram via Apify official actors. No login, no DMs, no private groups.
Labels: **FACT** | **INFERENCE** | **UNKNOWN**.

Raw dumps: `ai-recon/ig-raw/` (no API token).

---

## Snapshot (FACT, scrape 2026-08-27 ~10:40 BRT)

| Handle | Exists? | Followers | Following | Posts | Verified | Bio CTA / link |
|---|---|---|---|---|---|---|
| `@novaia.clubmls` | YES | **1,864** | 410 | 581 | no | “IA aplicada a negócios / ROI, escala e networking entre decisores / 👇 Aplique aqui”. Link: **https://lp.novaiaclub.com/** (Bitrix24 application). |
| `@myrkomicali` | YES | **5,457** | 986 | 593 | **yes** (Entrepreneur) | “Estratégias de produtividade com IA / Especialista em Liderança pela Harvard / @doublex.tech @novaia.clubmls / Saiba mais ⬇️”. Link: Spotify **Podcast IA e Lucro**. |
| `@doublex.tech` | **YES** (exists) | **251** | 93 | 73 | no (IT Company) | “Transforme seu negócio com automação inteligente…”. Link: https://doublex.com.br |
| `@onelsonnaibert` | tagged as co-mentor, not in requested scrape set | UNKNOWN | — | — | — | Named in club captions as strategy/business-model half of the duo. |

**FACT:** Unlike FoundersAI, NovaIA **owns a live club IG**. Follower graph is inverted vs Delta: club 1.9k, mentor 5.5k, consultancy 251. The club handle is the apply-here property; Myrko is the education/personal-brand engine; doubleX is a quiet B2B sister.

**FACT:** Bio of the club is a single-step CTA (“Aplique aqui”) to a dedicated LP. That is tighter than Founders/Delta, whose bios currently dump into Delta Board.

---

## Last-30-days cadence (FACT)

Window: 2026-07-28 → 2026-08-27.

| Account | Posts in 30d | Cadence | Dominant format in ~30–40 sample |
|---|---|---|---|
| `@novaia.clubmls` | **27** | **~6.3 / week** | Video 25/32 — immersion + Festival recap |
| `@myrkomicali` | **18** | **~4.2 / week** | Sidecar 16/29 — carousels with prompts/frameworks |
| `@doublex.tech` | **4** | **~1 / week** | Mix; Selora product + consultoria-vs-mentoria |

**INFERENCE:** Club IG was in **event mode** (Sala de Máquinas 13–14 Aug + MLS Festival ~16 Aug). That inflates cadence. Steady-state is still more aggressive than Delta’s brand account. Myrko is a teaching machine (carousels), not a Festival machine.

---

## What they post

### Club (`@novaia.clubmls`) — FACT

Two content seasons in the sample: **immersion** and **Festival**, plus older pinned-style positioning.

**Positioning (older posts still in sample):**

- “Não falamos de ferramenta. Falamos de negócio.”
- Method **MVO** (Marketing, Vendas, Operações).
- Duo: `@onelsonnaibert` (modelagem, visão, fundamentos) + `@myrkomicali` (IA aplicada, processos).
- MLS name-drop: “Conectados ao ecossistema @mentoringleaguesociety”.
- “movimento no Brasil que já ultrapassou **1 bilhão em faturamento em 2 anos**. O NOVAIA Club faz parte desse ecossistema.” (league revenue claim, not club ticket.)
- CTA: “Quer fazer parte? Acesse o link na bio.”

**Sala de Máquinas (13–14 Aug 2026):**

- Teaser 2026-08-10: “Faltam 4 dias. Duas perguntas: **Sua empresa fatura acima de R$5M?** Você quer liderar a IA, não virar técnico?” Hashtags `#novaia #saladasmaquinas #lideranca`.
- Day-of: “Celulares no modo avião. Foco na operação.”
- Member story: sócio `@olsenrodrigo` — after onboarding with Nelson+Myrko, “conversão alta e clientes percebendo ROI já no primeiro mês.”
- Member `@eulucienefeitosa` — anti-prompt-magic: “Saber como a IA pensa muda mais resultado do que qualquer prompt mágico.”

**MLS Festival (~16 Aug):**

- Multiple videos standing *with sócios* in the stadium. “maior festival de negócios do Brasil.”
- “O ambiente certo para ampliar visão e negócios.”
- Second MLS meeting of the year tagged `@mentoringleaguesociety`.
- They treat Festival as **member benefit / status photo**, not as a teaching session.

Hashtags (club sample): `novaia` (7), `saladasmaquinas` (4), then sparse `ia`, `lideranca`, `modelodenegocio`, `empresarios`.

### Myrko (`@myrkomicali`) — FACT

Personal brand is **tactical IA for operators**, Harvard-in-bio, podcast in bio — not club brochure.

- Anti-vendor: “Não caia na conversa de quem só quer te vender IA… Bota IA que suas vendas dobram? Não é bem assim.”
- How-to carousels: onboarding with IA; precificação; relatório gerencial em 20 min; planilha que responde uma decisão; “time de marketing inteiro com IA.”
- FOMO warning: “comece devagar a construir seus agentes, mas comece.”
- Festival 2026-08-16: “Mais de 30 mil empresários… estaremos lá junto com os nossos.”
- Hashtags heavy: `inteligenciaartificial` (16/29), `automacao`, `iaparaempresas`, `claudecode`, `chatgpt`.
- Bio does **not** apply-link the club; it apply-links a **podcast**. Club is an @mention.

**INFERENCE:** Myrko is TOF education (so he can stay useful to non-members). Conversion is supposed to happen on `@novaia.clubmls` bio / DoubleX WhatsApp, not on his Spotify link. Slight leak: his strongest CTA is “saiba mais” to a show, not the Bitrix form.

### doubleX (`@doublex.tech`) — FACT, handle exists

Small, B2B, productized.

- Consultoria vs mentoria carousels (explicit ladder: “Prefere que façam por você?”).
- **Selora**: sales copilot that listens to Meet/Teams/Zoom.
- “Empresas de IA não travam por falta de cliente… Quem passa dos **R$ 100k/mês** domina 3 pilares” — that is **ICP revenue of AI *agencies***, not NovaIA ticket.
- CTAs: `link na bio` (13/34), `aplica` (7). Low engagement (likes 1–4).

**INFERENCE:** doubleX IG is not a club acquisition engine. It is a consulting/SaaS remnant that occasionally explains why mentoria ≠ consultoria (same copy as the site).

### MLS presentation of AI clubs (FACT)

League IG never names NovaIA. NovaIA names the league constantly. Asymmetry: Bronze club uses MLS as borrowed prestige; the league uses Festival as its own product.

---

## Acquisition pattern on IG (FACT + INFERENCE)

**FACT:**

1. Club bio → `lp.novaiaclub.com` (“Aplique aqui”). Single door.
2. Event content (Sala de Máquinas, Festival) → belonging → link in bio.
3. Myrko teaches; club documents the *room*.
4. Qualification asked in public: **R$5M** faturamento for Sala de Máquinas (stricter than the site’s R$3M FAQ).
5. Comment CTAs exist (`comenta`) but are weaker than Delta’s `RADAR` magnet.
6. WhatsApp is **not** in the club bio (it is on DoubleX web: `wa.me/5513997235669`).

**INFERENCE:** Funnel is event-led community, then Bitrix application, then closer. Less founder-celebrity than Gui, more “we have a room of sócios and a stadium behind us.” The R$5M teaser is a public filter that will scare off small operators before they hit the form.

---

## Top CTAs (FACT)

**`@novaia.clubmls`:** `aplica` (4), `link na bio` (3), `comenta` (1). Bio itself is the CTA (“Aplique aqui”).

**`@myrkomicali`:** `comenta` (3), `whatsapp` (2), `direct` (1), `aplica` (1). Soft.

**`@doublex.tech`:** `link na bio` (13) — strongest raw count, weakest audience.

Festival captions have **no apply CTA**; they are proof-of-tribe.

---

## Proof they use on IG (FACT)

- Named sócios on camera (`@eulucienefeitosa`, `@olsenrodrigo`) with first-month ROI anecdotes.
- Immersion production value: two days, phones in airplane mode, “Sala de Máquinas.”
- Standing inside MLS Festival with members (stadium B-roll).
- Dual-mentor story (Nelson strategy + Myrko IA).
- League “R$1 bi in 2 years” halo.
- Myrko: Harvard leadership credential in bio; tactical before/after carousels.

They do **not** show Natura/Stone-class logos. Proof is **peer empresário**, not enterprise brand.

---

## Price on IG?

**FACT: the R$120.000 ticket is not on Instagram.** Site FAQ states it (see `funnels.md`); captions do not.

What *does* appear:

- Club 2026-08-10: filter **“fatura acima de R$5M?”** (qualification, not price).
- Club 2026-04-30: league “1 bilhão em faturamento” (ecosystem, not ticket).
- doubleX: “R$ 100k/mês” for AI service firms (different SKU).

**INFERENCE:** Price is reserved for the landing FAQ / closer. IG only publishes a **revenue floor**, and the floor they shout (R$5M) is *higher* than the site FAQ (R$3M). Either the immersion is a higher-tier invite, or they tightened ICP and forgot to update the site — **UNKNOWN which**.

---

## What they never say on IG (FACT absences)

- **R$ 120 mil**, 12x, à vista, título MLS, Bronze.
- MIT / lab / universidade / research (Harvard in Myrko bio is an *executive education* flex, not a lab).
- Simbiose (the monthly-project product name is **site copy**, not IG copy in this sample).
- ChatGPT-for-beginners as the promise (they mock prompt-magic).
- “Revenda agentes de IA” (site anti-persona; IG just doesn’t go there).
- WhatsApp number on the club profile.
- Nelson’s face as frequently as Myrko’s (Nelson is tagged, not the daily poster).

**INFERENCE — competitive:** NovaIA owns “clube de empresários + monthly execution + MLS photo.” It does **not** own lab/MIT. Public ICP (R$3–5M, R$120k) is the most transparent in the AI-club set. Weakness vs a lab club: small IG (1.9k), event-dependent posting, price hidden on IG but leaked on site, R$5M vs R$3M inconsistency.

---

## Method / limits

- Handles: `novaia.clubmls`, `myrkomicali`, `doublex.tech` (confirmed live), plus MLS for Festival context.
- Like counts often hidden (`-1`) on some accounts; NovaIA club likes were visible (11–78 on recent videos).
- Did not submit the Bitrix form or open WhatsApp.
