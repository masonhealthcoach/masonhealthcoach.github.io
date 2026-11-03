# CLAUDE.md: Mason Havenstein Wellness

Handover for Claude Code. This file covers who Mason is, what the business is, what has been built (up to 3 November 2026), and what's next. Read it in full before doing any work in this repo.

---

## 1. Who Mason is

- **Mason Havenstein**, 27, from Mona Vale / Warriewood on Sydney's Northern Beaches. He has a partner and two dogs, and he's Catholic.
- **A holistic lifestyle coach.** He trained in CHEK HLC Levels 1 & 2 and IMS 1, and he's studying Dr Stephen Cabral's **Integrative Health Practitioner (IHP)** course.
- **A former tradie:** roofer, sparky (electrician) and butcher, working 8–10 hour days. Don't present him as *only* an ex-tradie.
- **Instagram:** @mason_havenstein_wellness, display name "Mason Health Coach". His brand is outdoorsman: the bush, dogs, the ocean, real food.
- **He trusts Dr Stephen Cabral completely** and models the business on Cabral's. Save and teach Cabral's material as taught. Keep any safety or credibility notes brief, and only where public content or client safety needs them.

### His story (the core of the brand)

- **His dad:** terminal cancer, died in 2017. Mason was 18 and studying electrical at TAFE, right next to the private hospital where his dad was treated and died.
- **School:** never fit in, was told he had ADHD and would "never amount to anything".
- **After his dad:** lost two close mates (both tattooed on his arms). Then drinking, drugs and benders, and a bulk from 70 to 110 kg eating rubbish.
- **Rock bottom:** woke up vomiting blood, followed by a year of doctors saying "we don't know". Dropped to 60 kg. **Chronic illness: chronic fatigue, leaky gut and autoimmune issues.** 3 hours of sleep a night, could only keep down white bread (he's gluten intolerant), forgot how to drive, couldn't leave the house.
- **Recovery:** his mum found **Ryan** (@ryanroseevans), a holistic coach. Two years of one change a week brought him back. Describe Ryan publicly as his **inspiration** (alongside "the brothers in my circle"), **not** his "hero".
- **His signature lines:**
  - "It felt like a great white shark swimming at me all day. The shark was in my head and my body didn't know the difference."
  - "The body is easy. The mind and nervous system aren't."
- **Philosophy:** **"Surround the dragon."** He can't diagnose, treat or cure disease, so he works on everything around it: food, sleep, stress, movement, toxins, mind and spirit. It all comes together like a domino effect.
- **Why he coaches:** he doesn't want to build someone else's dream. He wants to reach people before they end up where he was, or where his dad was.

### His own health and food (check before giving food advice)

- Did carnivore for a year: great early, terrible by the end. He thinks meat is good but won't push extremes.
- Can't tolerate oats, gluten, peanut butter, nuts or spicy food. Eggs sometimes. Too many raw greens give him gas, but cooked greens are fine.
- Doesn't drink coffee. Doesn't use protein powder. Has a daily smoothie with dates and is trying to cut back on dairy and dates.
- Training: heavy hypertrophy work, bulking from about 80 kg toward 85–88 kg on 3,000–3,500 cal of Cabral-style food.

---

## 2. How to work with Mason

- **Plain, casual Aussie English.** He talks fast and swears. Match that warmth, but keep outputs clean and simple.
- **Captions and copy in his voice:** casual, mostly lowercase, little or no punctuation, like texting a mate.
- **Do the work, don't just advise.** He wants things built and live, and he approves as the overseer.
- **He wants as much automation as possible**, with himself as the person who approves things.
- **"Checklist"** means his Game Plan artifact: https://claude.ai/artifact/Bu9TkQ7kSiUtU4BKjhPihe (an Artifact DB with a `tasks` collection). Read it to see what's done and what's next.
- **Save everything he shares** from the IHP course and treat it as the foundation of the business.
- **Health-claim guardrails (Australia, ACCC/TGA):**
  - Never say anything cures, treats or prevents disease. Use "can help", "supports" and "in my experience".
  - Point to a GP for red flags.
  - Lifeline 13 11 14, emergency 000.
- **Memory:** a shared memory filesystem exists across Claude surfaces. The detailed IHP module notes live there (see section 7).

---

## 3. The business

**Niche:** people who are always tired, especially tradies, desk workers and gym goers.

**1:1 offer: 12 weeks, 3 phases**

| Phase | Weeks | Focus |
| --- | --- | --- |
| Reset | 1–4 | Sleep, rhythm, regular meals, water and salt, walking |
| Rebuild | 5–8 | Food plan for their type and goal, stress tools, training, supplements if needed |
| Recharge | 9–12 | Full training, optional detox and testing, a plan to run on their own |

- **$299/month** founding price, no lock-in.
- 1-hour first consult, then a 30-minute weekly video check-in.
- Offer name still undecided: The Energy Reset, Recharge 12 or Back to Full Tank.

**The funnel:**
1. A Reel → comment **QUIZ** → ManyChat auto-DM with the quiz link.
2. The quiz collects name and email (Web3Forms emails Mason) → shows the result plus a DM keyword.
3. Coaching page → **intake form (apply)** → **Mason approves** → Stripe payment link → **/welcome/** onboarding page → Calendly consult.

**Long-term goal:** a business he can run from anywhere: 1:1 coaching, a Skool community, and a podcast. He also has a detox course. An idea for later (undecided): building websites for local businesses.

---

## 4. This repo (the website)

- **Live at https://masonhealthcoach.github.io**, hosted on GitHub Pages from the `main` branch. Plain static HTML with relative links. There's no build step.
- **Repo:** `masonhealthcoach/masonhealthcoach.github.io`. The username was renamed from `masonhavenstein-coder`, and **old links are dead with no redirect**.
- **Commit convention:**
  ```
  git -c user.name="Mason Havenstein" -c user.email="masonhavenstein-coder@users.noreply.github.com" commit -m "..."
  git fetch origin main && git rebase origin/main && git push origin HEAD:main
  ```

### Pages

| Path | What it is |
| --- | --- |
| `/` | Homepage: hero photo (Mason and the dogs), short story, 3 quiz cards (`#quizzes`), four pillars, photos, pill artwork above the offer, 12 weeks / $299, credentials, CTA |
| `/about/` | Full story in chapters (Never fit the mould → Watching my dad go → Going off the rails → The day it broke → great white quote → Ryan photo → Then I met Ryan → Rebuilding from empty → Why I coach) plus a Lifeline line |
| `/tired/` | **Main energy quiz**, "Wired, burnt out or just flat?" Ten questions. Types: Wired / Crashing / Burnt Out / Flat (DM words WIRED / CRASH / BURNT / FLAT) |
| `/food/` | Body-type quiz: Ayurveda underneath, shown as **Air Type / Fire Type / Earth Type** (vata / pitta / kapha). Names appear only on the results. Ten questions plus a goal question (lose / maintain / gain) that shows Cabral's plate for that goal. DM words AIR / FIRE / EARTH |
| `/toxins/` | "How full is your barrel?": Cabral's Rain Barrel toxicity quiz. Scoring: 0 never, 1 monthly, 2 weekly, 3 daily; immunity questions 10 each; fillings or root canals 3. Bands: 0–9 / 10–19 / 20+. Animated barrel. DM words DETOX / BARREL. States plainly that it can't test for heavy metals |
| `/coaching/` | Offer page with FAQ (includes "surround the dragon") |
| `/intake/` | Application form, about 40 questions plus a 7-item body check scored 0–3 (bands 0–5 / 6–11 / 12+). Includes a multi-select "What do you want help with?". Required: name, email, consent checkbox |
| `/welcome/` | Post-payment onboarding: 3 steps (intake, book consult, 3-day log), how he works, goals, the 12 weeks, how each week runs, fine print. `const CALENDLY = ""` turns on the booking button once filled |
| `/agreement/` | Coaching agreement: 16 sections, NSW law, ACL carve-out, HCCC complaints, 7-year record keeping |
| `/privacy/`, `/terms/` | Privacy policy (APPs, overseas storage, OAIC/IPC) and website terms |
| `/quiz/` | Redirects to `/#quizzes` (it was the old Ayurveda quiz) |
| `/wired/`, `/nervous-system/` | Older pages, not linked from the menu |
| `assets/reveal.js` | Scroll effects: text fades in, a highlighter (`<mark class="hl">`) and underlines (`<u class="ul">`) draw in. Used on Home, About, Coaching and Welcome only. **Not used on the quizzes or forms.** Hero sections are excluded |
| `img/` | Photos. Mason has OK'd these; get permission from anyone else pictured |

### Forms

- **Web3Forms** JSON POST to `https://api.web3forms.com/submit`, key `75b67772-c155-457c-9c59-15891a043302` (a public client key, sitting in each page's JS).
- Quiz emails carry the subject, name, email, result, scores and every answer.

### Design: "olive grove" palette (Mason chose this)

```
--bg:#F2ECE1; --surface:#FBF8F2; --fg:#231E19; --muted:#6B6157; --line:#DCD2C2;
--gum:#4A5A2E (olive); --gum-ink:#FBF8F2; --ochre:#7E2232 (pomegranate accent);
hero/dark panels #2A2418; hero accent word #D9A86A
dark mode: --bg:#171410 --surface:#211C16 --fg:#EDE6DA --gum:#B4C08A --ochre:#D9A86A
fonts: "Big Shoulders Display" (headings, uppercase, 900) + "Figtree" (body)
```

- Phone-first, max width about 600px.
- Test at 390px wide with Playwright (`require('playwright')`), and check `scrollWidth === 390`.

### Website rules Mason has set

- **Keep it uncluttered:** three quizzes maximum.
- Keep highlights to a few per page, and **no circled words**.
- The top section of every page loads solid, with no fade-in.
- Keep his voice: emotional and raw, not polished AI-speak.

---

## 5. Connected tools and automation status (3 Nov 2026)

| Tool | Status | What it's for |
| --- | --- | --- |
| Gmail, Google Drive, MailerLite, vidIQ, Canva, Notion, Stripe (test mode only) | Connected | Leads and intakes, client files, email automation, Instagram stats and posting, design, notes |
| Calendly | Half-connected (sign-in not finished) | Free 15-min call, 60-min consult and 30-min check-in event types |
| Make (or Zapier) | Not yet | Bridge to ManyChat, Skool, Linktree, Stripe → MailerLite |
| Google Calendar, Xero | Not yet | Xero after the ABN |
| Grok | No connector exists | Use vidIQ plus web search instead |

- **vidIQ Instagram account id:** `39524388680508784`.
- **Email sequences doc** (Claude Docs): https://claude.ai/artifact/Qzuxf9Y4wgTueFhGv7traA. It holds the automation flow, a 5-email quiz welcome sequence (with a line for each result) and a 4-email client onboarding sequence, plus a cheat sheet of Cabral's focus for each goal.


**Built 3 Nov 2026:**
- **Stripe (test mode):** product "12-Week 1:1 Coaching (Founding Price)", $299 AUD/month, payment link https://buy.stripe.com/test_28EbIUgojcM1c2l7NJ6J200 → redirects to /welcome/. Account `acct_1UXbwf3UX7039JqZ`. Live mode needs Mason to activate the account (ABN + bank), then make the live link.
- **MailerLite:** field `quiz_result`; groups Quiz - Energy type / Quiz - Body type / Quiz - Toxin barrel / Clients; one embedded form per quiz. Each quiz posts to its form (`mlSubscribe()` in the quiz JS, no-cors, fire and forget) alongside Web3Forms. Not yet confirmed live because this sandbox can't reach assets.mailerlite.com, so check subscribers after a real quiz run. No automations loaded yet.
- **Free 15-min call:** buttons on home, coaching (hero, price box, FAQ) and all quiz results. One setting: `CALL_LINK` in `assets/links.js`. Empty = opens an Instagram DM.
- **Link previews:** og/twitter tags and `assets/icon.svg` favicon on every public page.
- **Game Plan:** new "Needs your OK" section (group `approve`). Mason ticks or says go before Claude does those.

**Built 3–4 Nov 2026 (overnight):**
- **MailerLite automations (both OFF, awaiting Mason):** "Quiz welcome (5 emails)" id 203101914977535816 (trigger: joins any of the 3 quiz groups; days 0/2/4/7/10) and "Client onboarding (4 emails)" id 203102037529855086 (trigger: joins Clients). Mason wants to write quiz email 1 himself and approve every client email before anything sends. MailerLite account still needs activation (test sends blocked).
- **Analytics report:** scheduled task `trig_01WwZpEFiRQWZX8MiL6NydXp`, every 2 days 6:47am Sydney, emails masonhealthcoach@gmail.com. Saved WITHOUT connectors; Mason must add vidIQ, Gmail, MailerLite, Stripe, Supermetrics in the claude.ai UI. Facebook (FB) and TikTok (TIKBA) need Supermetrics sign-in.
- **Branch `overnight-updates` (not live):** his interview lines on Home (pull quote "I've been where you are. There is a way out.") and About, SEO title, canonical tags, noindex on welcome/wired/nervous-system, sitemap.xml, robots.txt, JSON-LD. Merge to main when Mason says "go website".
- **Morning briefing doc:** https://claude.ai/artifact/7p79hV7uH7SVaH61pws9vC — email 1 draft in his voice, mates trial pack, Reel scripts, Instagram numbers, 14-day posting plan, legal/costs research, client phase guides, Ayurveda cheat sheet, and an "approve in one go" list.
- **Decisions:** price stays $299 (no founding discount). Free 4-week trial for 2–3 mates: yes (disclose free trial next to testimonials). Before/after photos: yes, awaiting photos. Claude posting Reels and the 5-day challenge: parked. ManyChat link fixed by Mason. Zapier, Granola and Claude in Chrome connected.
- **Interview with Mason (his words feed all copy):** done Q1–Q6. Best lines: "I've been where you are, and there is a way out." / "Sleep's the secret ingredient. It creates capacity." / "maybe there is a way to unravel all of this and fix it all up" / the 1sec app (socials locked 9pm to 4:30am) / isolation and no one knowing what was wrong were the worst parts. Next: Q7 "what does a good day look like for you now", then why you coach, what makes you different, what people should feel after a call.
- **Instagram (3 Nov):** 427 followers, 65K views/30 days. Story-led Reel held best (37% watched, 35% skip). He posted a duplicate 4 min later (0 views) and three 140s Reels (0 views). One a day, 30–50s, no duplicates.

**Next build steps once connected:**
1. Create the Stripe payment link with redirect to `/welcome/`.
2. Set up Calendly events and paste the link into `CALENDLY` in `welcome/index.html`. Add a "Book a call" button on the coaching page and quiz results.
3. Hook the quizzes into MailerLite, tagging each person by result, and load both sequences.
4. Build Make scenarios for ManyChat → MailerLite and Stripe → Clients group.
5. Set up a weekly Monday Instagram report via vidIQ as a scheduled task (offered, not yet created).

---

## 6. Open to-dos (mirrors the Game Plan)

**For Mason to do:**
- **Fix the ManyChat button:** it still points to the old `masonhavenstein-coder` link. Change it to `https://masonhealthcoach.github.io/tired/`, then switch the QUIZ keyword to "any post or Reel".
- Update the Instagram bio, Linktree and LinkedIn to the new domain. The About page link for LinkedIn is `/about/`.
- **Legal:**
  - Get an ABN (free).
  - Register the business name with ASIC.
  - Get insurance: professional indemnity plus public liability.
  - Follow the NSW Code of Conduct for non-registered health practitioners.
  - Keep client data secure, set his scope and referral rules, and check every claim.
  - Make emails Spam Act compliant.
  - Sort out tax basics.
  - Get photo OKs from Ryan and his brothers, and for the pill artwork.
  - Optional: have a lawyer review everything.
- Once the ABN, business name, insurance and contact email exist, add them to the agreement, privacy page and footer.
- Pick the offer name.
- Send the remaining IHP modules: Emotional Balance, Supplements, Success Mindset.
- Send his existing detox course material and the supplements and brands he uses (he buys from Biov8 and other Australian suppliers).

**For Claude to do when asked:** client guides for each phase, a plain-talk Ayurveda cheat sheet, a "Book a call" button, and a custom domain later.

---

## 7. IHP course knowledge (in shared memory)

Detailed notes from each lecture, saved as Mason sent them. Read these before writing health content or plans:

| Memory file | Covers |
| --- | --- |
| `/projects/01a19516-29bd-7681-903d-2861a65ce1c2/areas/ihp-diet-module.md` | Weight loss, maintenance and gain plans; the smoothie; fasting; digestion; food sensitivities |
| `.../areas/ihp-exercise-module.md` | Body-type training; nervous system fatigue checks; the graduated exercise program; 2–5 day templates |
| `.../areas/ihp-stress-module.md` | HPA axis; cortisol stages; pregnenolone steal; thyroid; blood sugar; gut and immune; testing; the stress plan |
| `.../areas/ihp-toxins-module.md` | Toxin sources and swaps; Rain Barrel quiz scoring; lymph, kidney and liver work; Panchakarma; coffee enema; the 21-day detox |
| `.../areas/ihp-rest-module.md` | Autonomic nervous system; sympathetic vs parasympathetic; burnout; sleep; the ideal day |

Key teaching points used across the site:
- Cabral's 3 main stressors: emotional/life, gut infections, and viruses.
- Body type sets the diet: needs to lose weight = Earth/kapha, needs to gain = Air/vata, maintaining = Fire/pitta.
- Healthy waking temperature 98–98.9°F. Resting heart rate 50–70 bpm. Fasting glucose 75–95 mg/dL.
- Rest and the parasympathetic nervous system come first.

---

## 8. Content (Instagram)

- He edits in **Edits** (not CapCut). His signature format is talking to camera while eating or prepping food with his hands, plus outdoor b-roll.
- **His stats (Oct 2026):** about 425 followers and 64K views in 30 days.
  - Average watch is only about 25%, and 50–76% of viewers skip in the first seconds. **Hooks are the problem.**
  - He has posted near-duplicate Reels minutes apart and Reels over 140 seconds long. Advise **one a day, 30–50 seconds**.
- **What's outperforming in the niche (vidIQ, Oct 2026):**
  - A list of fight-or-flight symptoms as text over moody music.
  - "These aren't 3 separate problems."
  - A healing-journey montage ending in an offer.
  - "Doctors said it's just IBS."
  - Quick hands-on nervous system fixes.
  - Good / Better / Best food lists.
  - Myth-busting framed around his own story (his carnivore year).
- **Story carousel:** 9 slides were built (4:5, olive palette, his photos, health-journey focused, ends with "comment QUIZ"). Suggested audio: "Someday We Will Dream About Today" by The Sways. Pin it to his profile.
- If a song he wants doesn't show up, his Instagram may be a business account. A creator account gets the full music library.

---

*Last updated 3 November 2026. Keep this file current whenever something meaningful changes.*
