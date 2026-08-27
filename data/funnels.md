# Funnels — Founders AI Club vs NovaIA Club (side by side)

Research date: **2026-08-27** (America/Sao_Paulo). Public pages + public Instagram. No form submit, no WhatsApp send, no login.
Labels: **FACT** | **INFERENCE** | **UNKNOWN**.

Sources used this pass: `deltaacademy.com.br` SPA JS (`/assets/index-C3Nw6RPe.js`), `llms.txt` / `llms-full.txt`, `comunidade.foundersai.club`, `board.deltaacademy.com.br` (bio redirect), `novaiaclub.com` SPA JS, `lp.novaiaclub.com`, `doublex.com.br/mentoria-novaia`, `mlsociety.co`, Instagram bios/posts (see sibling files).

---

## One-screen comparison

| | **Founders AI Club** (Delta / Gui) | **NovaIA Club** (DoubleX / Nelson + Myrko) |
|---|---|---|
| MLS Festival CSV | 58 tagged | 24 tagged |
| Public ticket | **UNKNOWN** (not on site, not on IG) | **FACT: R$ 120.000 à vista ou 12x** (`novaiaclub.com` FAQ “Quanto custa?”) |
| Public ICP floor | UNKNOWN on club page. Proof guests at R$11bi (AZZAS). “Médias empresas.” | **FACT: faturamento > R$ 3 milhões** (site). **FACT on IG teaser: > R$ 5M** for Sala de Máquinas. |
| Primary IG door | Bios → **Delta Board**, not `/founders-ai` | Club bio → **https://lp.novaiaclub.com/** |
| Apply UX | On-site **LeadChat**: Nome → WhatsApp → E-mail → HubSpot + `wa.me` | Bitrix24 form on LP + “Quero saber mais agora” on club site; WhatsApp specialist on DoubleX |
| Self-serve checkout | **No** for the club. Yes for Vibe Builders (~R$2.999) — **not** the MLS club | **No** |
| Promise |  “Instala sistema AI-First” / certificação / CEO cascade. Site now describes **trimestral cycles**, not a hard 12-month SKU. | “Não corra atrás da IA. Assuma o comando.” Monthly **Simbiose** project × 12; método MVO. |
| Paid social | Privacy policy lists **Meta + Google Ads** (FACT they have pixels). | DoubleX is HubSpot CMS; WhatsApp click-to-chat. Ads **UNKNOWN**. |

---

## Founders AI — funnel steps (FACT)

### Step 0 — Attention (off-site)

- Gui LinkedIn + `@guijunqueira` (39.7k) + `@deltaacademy.ai` (41.7k).
- PR (PEGN, Economia SP) and events (Board, Lovable Day, AI Talks, HR Path).
- **IG bios do not send to Founders AI.** Both resolve to Delta Board with campaign `33024183-Delta Board`.
- Keyword-DM magnets on Delta IG: comment **RADAR** (free maturity diagnostic), **SEGURADORA** (vertical manual).

### Step 1 — Delta homepage / product cards

URL: https://www.deltaacademy.com.br/  
Headline/meta: “Delta Academy — Transformação AI-First para empresas.”

Product card **FOUNDERS AI CLUB**:
- Body: “Programa de transformação e certificação AI-First para médias empresas, com educação, mentoria e orquestração de IA para todo o time.”
- CTA: **“Aplicar minha empresa”** (homepage card) / **“Participar da seleção”** (nav card). Same click handler: `openChat('founders-ai')`.

Other cards (do not confuse):
- Delta Board → “Participar da seleção”
- Delta Company → “Solicitar proposta comercial”

### Step 2 — `/founders-ai` (SPA; non-www 404’d, **www works**)

URL: https://www.deltaacademy.com.br/founders-ai  
H1: **“Programa Founders AI: transformação AI-First para médias empresas.”**  
Eyebrow: “Programa de Transformação · Médias Empresas.”  
Sub: educação, mentoria e orquestração de IA para todo o time.  
Primary button: **Aplicar minha empresa** → same LeadChat with product `founders-ai`.

**Delivery bullets (FACT, JS):**
- Diagnóstico completo de maturidade digital
- Roadmap de transformação (plano personalizado)
- Suporte à implementação (acompanhamento técnico e estratégico contínuo)

**Who it’s for:** C-Levels/Sócios; Founders/CEOs who want AI-First “sem depender de terceiros”; líderes de médias empresas “que já têm estrutura.”

**Program map (FACT, JS `_a`):**

| Stage | Title | Cadence | Immersions | Certified |
|---|---|---|---|---|
| ETAPA 1 | Onboarding | Diagnóstico, Kick-off Roadmap #1, AI Leveling | — | contents: LLM Core, GenAI, Data Lake, Assistentes |
| ETAPA 2 | 1º Trimestre | Qua Mentoria CEOs / Qui Delta Skills / Sex Hotseat + CS | FoundersAI Experience #1 (CEOs) + Delta Board (líderes) | AI-Ready People |
| ETAPA 3 | 2º Trimestre | same weekly | Experience #2 + Board | AI-Ready Company |
| ETAPA 4 | 3º Trimestre | same weekly | Experience #3 + Board | AI-First Founder |

FAQ duration: “ciclos trimestrais… Empresas que querem avançar seguem **além do primeiro ano**.”  
Weekly load: mentorias **three times a week** (qua/qui/sex) + Delta Skills async.  
Selective: “Começa com uma aplicação. Nossa equipe entra em contato… confirmar o fit.”  
No public price, no faturamento mínimo.

**INFERENCE:** LinkedIn 2026-03 still said “12 meses.” Current site is a renewable trimester OS that *includes* Board + Experience. Board is both a standalone SKU and a module inside the club. That is why IG bios can sell Board without naming the club.

### Step 3 — LeadChat (form, visible without submit)

Embedded widget, not Typeform. Fields in order:

1. **Nome** — “Olá! … qual é o seu nome completo?” placeholder `Ex: Julio Vieira`
2. **WhatsApp** — “É por onde nosso time fala com você.” Validates 10–11 digits.
3. **E-mail** — “Enviamos materiais e os próximos passos por lá.”
4. **Confirmar** — shows the three values, button **“Confirmar e falar no WhatsApp.”**

Consent: site copy says filling any form = consent to email/WhatsApp.

On confirm (FACT, JS):
- POST to **HubSpot Forms API** `https://api.hsforms.com`  
  - portalId `50721498`  
  - formId `772ee4d9-5412-4804-8e58-1ab58f583760`  
  - property `produto` mapped for this path as **`Imersão FoundersAi`** (stale CRM label; page is the club).
- Then opens `https://wa.me/5511936194998?text=`  
  Template: “Olá! Sou {nome}. Preenchi meu cadastro no site da Delta Academy e gostaria de falar com um especialista. Meu e-mail: {email}.” + “Tenho interesse no Founders AI.”
- If HubSpot fails, JS **still opens WhatsApp**.

Float button: “Falar com a Delta” (WhatsApp-style).

### Step 4 — Human closer (UNKNOWN script)

WhatsApp +55 11 93619-4998. Privacy policy: HubSpot CRM, qualification “agendamento de reuniões,” Meta + Google ads.  
**UNKNOWN:** Calendly, SDR vs closer, whether MLS título is a line item vs program fee.

### Adjacent funnels (do not mix)

**Delta Board** (TOF / SKU):
- Bio links, `board.deltaacademy.com.br` (Figma Make, `noindex`, meta: “Imersão presencial de 2 dias + diagnóstico + comunidade de líderes AI-First”).
- Separate WhatsApp +55 11 93618-0654 (“interesse no Delta Board”).
- PEGN Dec 2025 price R$10k may be stale (UNKNOWN 2026 price). 10ª edição wrapped 2026-08-12/13.

**Vibe Builders** https://comunidade.foundersai.club/ — **NOT the MLS club.**
- H1: “Construa sua Startup AI-first em 12 semanas.”
- Self-serve Curseduca checkout. Launch **12× R$298,49 or R$2.999** (list R$5.998).
- CTA: “Quero Começar Agora” / “Garantir Minha Vaga.”
- Form: none on LP (goes to pay page). WhatsApp: none. Email suporte@ / contato@deltaacademy.com.br.

---

## NovaIA — funnel steps (FACT)

### Step 0 — Attention

- `@novaia.clubmls` (1.9k) bio **Aplique aqui** → LP.
- `@myrkomicali` (5.5k) teaches; podcast in bio (leaks TOF to Spotify).
- `@doublex.tech` (251) consultoria-vs-mentoria.
- LinkedIn company + Zoom workshops (prior recon).
- MLS Festival used as *member content*, not league-sold.

### Step 1a — Club marketing site

URL: https://novaiaclub.com/  
Meta: “Impulsione seu negócio com estratégia, cultura e IA prática.”  
H1-class promise: “Seja protagonista do seu negócio em um clube de empresários que usam IA para vender mais, operar melhor e tomar decisões com clareza.”

ICP chips (FACT, JS): faturamento **acima de R$ 3 milhões**; “preparados para investir **R$ 120 mil** no crescimento.”

Delivery (FACT):
- Aula mensal Negócios + IA (2h)
- Vinho com IA (equipes e convidados)
- Trilha MVO no app MLS (gravada + agentes + frameworks)
- 1:1 mensal com Myrko e Nelson
- Aulas mensais para a equipe
- **Simbiose**: 1 projeto de IA / mês, 12×/ano (preparação → execução 2h → refinamento → consolidação)
- MLS perks: até 3 eventos de outros clubes, Growth Circle, Family Circle
- Comunidade “alto nível”; DoubleX FAQ: turmas 6–12 + individual

CTA: **“Quero saber mais agora”** / “Preencha sua aplicação para entrar para o NOVAIA Club.”  
Widgets in JS: Bitrix24 `loader_4.js` and `loader_8.js` (portal `b36341485`); Chatwoot `chatwoot.doublex.ai`.

**FAQ (FACT, JS `DS`):**

| Q | A |
|---|---|
| Quem pode entrar? | Empresas com faturamento acima de R$ 3 milhões e empresários com maturidade e visão estratégica. |
| Como funciona a aplicação? | Você preenche o formulário. Nosso time avalia seu perfil e agenda uma conversa de alinhamento. |
| **Quanto custa?** | **R$ 120.000 — À vista ou em até 12x.** |
| É preciso saber IA? | Não. Você aprende dentro do clube. |
| Minha equipe participa? | Sim, em alguns programas do clube. |

This is the first **sticker price** we have for an MLS AI club. Earlier recon treated R$120k as “willingness to invest”; the FAQ now states it as the cost.

### Step 1b — DoubleX sales page (same offer, more anti-persona)

URL: https://doublex.com.br/mentoria-novaia  
H1: “Seja protagonista do seu negócio com IA aplicada e mentoria estratégica.”  
CTAs: **Quero saber mais** (→ novaiaclub.com) · **Falar com um especialista** WhatsApp `https://wa.me/5513997235669?text=Olá! Vim pelo site da DoubleX e gostaria de saber mais sobre Mentoria NovaIA.`  
Anti-persona: won’t do it for you (that’s Consultoria); no active business; 30-day magic; wants to **resell IA as a service**; needs dedicated enterprise team.  
No self-checkout. Schema.org Product + Course, `startDate: 2026-04-01`, aggregateRating 4.9/87 (treat as their markup).

### Step 2 — Application LP (the actual form)

URL: **https://lp.novaiaclub.com/**  
Eyebrow: “Para quem decide o rumo do negócio.”  
H1: **“Não corra atrás da IA. Assuma o comando dela.”**  
Promise: IA is alavanca, not piloto; “estratégia primeiro, ferramenta depois.”  
Bullets:
- Você define o rumo. A IA executa e amplifica.
- Estratégia primeiro, ferramenta depois. Nunca o contrário.
- Pare de testar funcionalidade solta. Comece a conduzir.

CTA strip: “Assuma o comando. Vamos desenhar a IA que trabalha pra você.”  
Urgency: “Quem espera demais vira passageiro do próprio negócio.”

**Form (Bitrix24 inline `data-b24-form="inline/4/2p97e1"`, visible without submitting):**

| Field | Required |
|---|---|
| Nome | yes |
| Sobrenome | yes |
| Nome da Empresa | yes |
| E-mail | yes |
| Telefone | yes |
| Onde nos conheceu? | yes |
| Perfil rede social de preferência | yes |
| Observação | yes |
| Aceito os Termos de Uso | yes checkbox |

Subhead: “**Trinta minutos, de dono para dono**” — conversa estratégica, sem compromisso.  
Leads “vão direto para o CRM do Bitrix.”  
No price on this LP (price lives on novaiaclub.com FAQ). No WhatsApp on this LP.

### Step 3 — Qualification call (30 min)

**UNKNOWN** script. Site language: “time avalia seu perfil e agenda uma conversa de alinhamento.” DoubleX: “programa por seleção, vagas limitadas.”

### Step 4 — Close / payment

FAQ says R$120k à vista ou 12x. **UNKNOWN** whether that is título + program, program only, or 12-month fee. No public checkout.

---

## Side-by-side steps

```
FOUNDERS AI                         NOVAIA
-----------                         ------
0  Gui/Delta IG + LinkedIn          0  Club IG + Myrko + Festival photos
   (bio → Board, not club)             (bio → LP)
1  Site product card                1  novaiaclub.com promise + FAQ price
   “Aplicar minha empresa”
2  /founders-ai narrative           1b doublex.com.br/mentoria-novaia
   + trimester map                     (WhatsApp specialist)
3  LeadChat 3 fields                2  lp.novaiaclub.com Bitrix 9 fields
   HubSpot + wa.me/11 93619-4998
4  WA specialist / UNKNOWN close    3  30-min “dono para dono”
5  (Board as paid TOF / module)     4  R$120k close (FAQ)
```

**INFERENCE:** Founders captures with a **tiny form + immediate WhatsApp** (speed, HubSpot). NovaIA captures with a **heavier qualifying form** (empresa, how-heard, social, observação) then a scheduled conversation (Bitrix). NovaIA is more “admissions”; Founders is more “talk to sales now.” Founders hides price completely; NovaIA publishes it on the marketing site but not on IG or the LP.

---

## Price signals (rolled up)

| Signal | Founders AI | NovaIA |
|---|---|---|
| Sticker on club site | none | **R$ 120.000 à vista ou 12x** (FACT, FAQ) |
| Sticker on IG | none | none |
| ICP revenue | unpublished; “médias empresas”; proof at R$11bi | **> R$ 3M** (site) / **> R$ 5M** (IG immersion teaser) |
| Adjacent SKU | Board ~R$10k (PEGN 2025, maybe stale); Vibe Builders R$2.999 | Consultoria DoubleX (enterprise, “we do it for you”); Selora product |
| MLS título called out | no | no (price framed as club investment, not “título”) |

---

## WhatsApp / ads / CRM (FACT)

| | Founders / Delta | NovaIA / DoubleX |
|---|---|---|
| WhatsApp club/apply | +55 11 93619-4998 after LeadChat | LP has **no** WA; DoubleX `+55 13 99723-5669` |
| Other WA | Board/mentor: +55 11 93618-0654 | — |
| CRM | HubSpot (portal 50721498) | Bitrix24 (b36341485) + Chatwoot |
| Ads | Meta + Google named in privacy policy | UNKNOWN (HubSpot CMS; pixels not inventoried) |
| Legal entity (privacy) | **Junqueira Treinamentos Ltda.** | DoubleX / novaiaclub.com.br email from prior recon |

MLS league site CTA is its own WA +55 11 92085-2728 — not a club funnel.

---

## What each funnel never shows (FACT)

**Founders:** price, faturamento mínimo, MLS badge, club IG, application questions about company size, a dedicated apply LP.  
**NovaIA:** self-checkout, a celebrity 40k IG, enterprise logos, MIT/lab language, Simbiose named on IG.

**INFERENCE for a MIT-lab MLS club:** NovaIA already occupies “transparent-ish high-ticket + SME operator + monthly project.” Founders occupies “founder brand + Board event + unpublished high-ticket install.” Empty: academic lab admissions, published research, LatAm-first lab story, a public application that feels like a lab (NovaIA’s Bitrix is the closest — nine fields, 30-min interview — but the story is business-model, not lab).
