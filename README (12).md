:root {
  color: #202124;
  background: #f8fafc;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
}

body {
  background: #f5f7fb;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

select,
textarea {
  font: inherit;
}

img,
svg {
  flex-shrink: 0;
}

p,
h1,
h2,
h3,
span,
button,
a,
td,
th,
li {
  overflow-wrap: anywhere;
}

.ks-app {
  min-height: 100vh;
  color: #17211c;
  background:
    linear-gradient(180deg, rgba(229, 244, 237, 0.92), rgba(245, 247, 251, 0) 360px),
    #f5f7fb;
}

.ks-header {
  position: sticky;
  top: 0;
  z-index: 40;
  display: grid;
  grid-template-columns: minmax(220px, 280px) 1fr auto;
  gap: 18px;
  align-items: center;
  min-height: 76px;
  padding: 0 clamp(16px, 3vw, 34px);
  border-bottom: 1px solid rgba(26, 115, 232, 0.12);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  box-shadow: 0 12px 34px rgba(42, 70, 56, 0.08);
}

.ks-brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  min-width: 0;
  padding: 0;
  border: 0;
  color: #14251c;
  background: transparent;
  text-align: left;
}

.ks-brand-mark,
.ks-page-title > span {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  color: #ffffff;
  background: #168454;
  box-shadow: 0 12px 26px rgba(22, 132, 84, 0.24);
}

.ks-brand strong {
  display: block;
  font-size: 1.05rem;
}

.ks-brand small {
  display: block;
  color: #66756c;
  font-size: 0.78rem;
  font-weight: 760;
}

.ks-nav {
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;
}

.ks-nav::-webkit-scrollbar {
  display: none;
}

.ks-nav-button,
.ks-icon-button,
.ks-button,
.ks-feature-tile {
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background 160ms ease,
    color 160ms ease,
    box-shadow 160ms ease;
}

.ks-nav-button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 40px;
  padding: 0 11px;
  border: 1px solid transparent;
  border-radius: 8px;
  color: #4d5c54;
  background: transparent;
  font-size: 0.9rem;
  font-weight: 780;
  white-space: nowrap;
}

.ks-nav-button:hover,
.ks-nav-button.is-active {
  color: #0b6b43;
  border-color: rgba(22, 132, 84, 0.22);
  background: #eef8f3;
}

.ks-nav-button.is-active {
  box-shadow: inset 0 0 0 1px rgba(22, 132, 84, 0.1);
}

.ks-header-actions {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
}

.ks-user-chip {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  max-width: 180px;
  padding: 0 11px;
  border-radius: 999px;
  color: #23513e;
  background: #e9f6ef;
  font-size: 0.86rem;
  font-weight: 820;
}

.ks-button,
.ks-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  border: 0;
  border-radius: 8px;
  font-weight: 850;
}

.ks-button {
  padding: 0 16px;
  color: #ffffff;
  background: #1a73e8;
  box-shadow: 0 14px 30px rgba(26, 115, 232, 0.2);
}

.ks-button:hover,
.ks-icon-button:hover,
.ks-feature-tile:hover {
  transform: translateY(-1px);
}

.ks-button:disabled {
  cursor: progress;
  opacity: 0.7;
}

.ks-button-ghost {
  color: #23513e;
  background: #edf5f1;
  box-shadow: none;
}

.ks-button-wide {
  width: 100%;
}

.ks-icon-button {
  width: 42px;
  padding: 0;
  color: #30443a;
  background: #f0f4f2;
}

.ks-mobile-toggle {
  display: none;
}

.ks-page-wrap {
  width: min(1440px, 100%);
  margin: 0 auto;
  padding: clamp(18px, 3vw, 36px);
}

.ks-page {
  min-height: calc(100vh - 140px);
}

.ks-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.72fr);
  gap: clamp(22px, 4vw, 42px);
  align-items: stretch;
}

.ks-hero-copy {
  display: grid;
  align-content: center;
  gap: 22px;
  min-height: 520px;
  padding: clamp(24px, 4vw, 44px);
  border-radius: 8px;
  color: #ffffff;
  background:
    linear-gradient(90deg, rgba(9, 40, 27, 0.84), rgba(9, 40, 27, 0.42)),
    url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80') center/cover;
  box-shadow: 0 28px 70px rgba(22, 48, 34, 0.18);
}

.ks-hero-copy h1 {
  max-width: 860px;
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: 0;
}

.ks-hero-copy p {
  max-width: 720px;
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.08rem;
  line-height: 1.65;
}

.ks-hero-actions,
.ks-inline-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.ks-hero-panel {
  display: grid;
  gap: 16px;
  align-content: start;
}

.ks-eyebrow {
  display: inline-flex;
  width: fit-content;
  min-height: 28px;
  align-items: center;
  padding: 5px 10px;
  border-radius: 999px;
  color: #0b6b43;
  background: #e9f6ef;
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.ks-hero-copy .ks-eyebrow {
  color: #ecfff6;
  background: rgba(255, 255, 255, 0.16);
}

.ks-auth-panel,
.ks-panel,
.ks-side-panel,
.ks-empty-state,
.ks-farmer-card,
.ks-metric,
.ks-feature-tile {
  border: 1px solid rgba(30, 86, 57, 0.11);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 18px 46px rgba(43, 68, 54, 0.08);
}

.ks-auth-panel,
.ks-panel,
.ks-side-panel,
.ks-empty-state {
  display: grid;
  gap: 16px;
  padding: clamp(18px, 2.4vw, 26px);
}

.ks-panel-heading {
  display: grid;
  gap: 5px;
}

.ks-panel-heading h2,
.ks-page-title h1,
.ks-side-panel h2 {
  margin: 0;
  color: #15231b;
  letter-spacing: 0;
}

.ks-panel-heading p,
.ks-page-title p,
.ks-side-panel p,
.ks-muted {
  margin: 0;
  color: #65766d;
  line-height: 1.55;
}

.ks-segmented {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  border-radius: 8px;
  background: #edf3f0;
}

.ks-segmented button {
  min-height: 38px;
  border: 0;
  border-radius: 7px;
  color: #56665e;
  background: transparent;
  font-weight: 850;
}

.ks-segmented button.is-active {
  color: #0b6b43;
  background: #ffffff;
  box-shadow: 0 6px 16px rgba(41, 68, 53, 0.08);
}

.ks-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.ks-form-wide {
  grid-column: 1 / -1;
}

.ks-field {
  display: grid;
  gap: 6px;
  min-width: 0;
  color: #415147;
  font-size: 0.86rem;
  font-weight: 820;
}

.ks-field input,
.ks-field select,
.ks-textarea,
.ks-inline-form input {
  width: 100%;
  min-height: 44px;
  border: 1px solid #dce5e0;
  border-radius: 8px;
  color: #17211c;
  background: #ffffff;
  padding: 10px 12px;
  outline: none;
}

.ks-field input:focus,
.ks-field select:focus,
.ks-textarea:focus,
.ks-inline-form input:focus {
  border-color: #168454;
  box-shadow: 0 0 0 3px rgba(22, 132, 84, 0.12);
}

.ks-upload-box {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 4px 12px;
  align-items: center;
  min-height: 92px;
  padding: 16px;
  border: 1px dashed rgba(22, 132, 84, 0.42);
  border-radius: 8px;
  color: #1f4634;
  background: #f4fbf7;
  cursor: pointer;
}

.ks-upload-box:hover {
  border-color: #168454;
  background: #eff8f3;
}

.ks-upload-box input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.ks-upload-box svg {
  grid-row: 1 / span 2;
  color: #168454;
}

.ks-upload-box strong {
  align-self: end;
}

.ks-upload-box span {
  align-self: start;
  color: #65766d;
  font-size: 0.9rem;
}

.ks-upload-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 8px;
  color: #23513e;
  background: #edf8f2;
  font-size: 0.9rem;
  font-weight: 820;
}

.ks-upload-preview a {
  color: #174ea6;
  font-weight: 850;
  text-decoration: none;
}

.ks-textarea {
  min-height: 130px;
  resize: vertical;
  line-height: 1.55;
}

.ks-error {
  margin: 0;
  color: #b3261e;
  font-size: 0.9rem;
  font-weight: 780;
}

.ks-farmer-card {
  display: grid;
  gap: 8px;
  padding: 22px;
  color: #ffffff;
  background:
    linear-gradient(135deg, rgba(20, 97, 66, 0.92), rgba(26, 115, 232, 0.76)),
    #146142;
}

.ks-farmer-card span {
  width: fit-content;
  padding: 5px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  font-size: 0.8rem;
  font-weight: 850;
}

.ks-farmer-card strong {
  font-size: 1.8rem;
}

.ks-farmer-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
}

.ks-mini-grid,
.ks-stat-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.ks-stat-grid {
  grid-column: 1 / -1;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ks-metric {
  display: grid;
  gap: 6px;
  padding: 17px;
}

.ks-metric span {
  color: #68776f;
  font-size: 0.82rem;
  font-weight: 850;
}

.ks-metric strong {
  color: #17211c;
  font-size: clamp(1.35rem, 2.5vw, 2rem);
}

.ks-feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 24px;
}

.ks-feature-tile {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 6px 12px;
  align-items: center;
  min-height: 112px;
  padding: 18px;
  color: #21352a;
  text-align: left;
}

.ks-feature-tile svg:first-child {
  color: #168454;
}

.ks-feature-tile strong {
  align-self: end;
}

.ks-feature-tile span {
  grid-column: 2 / 3;
  color: #65766d;
  font-size: 0.9rem;
}

.ks-page-title {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 15px;
  align-items: center;
  margin-bottom: 22px;
}

.ks-page-title h1 {
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.05;
}

.ks-content-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.ks-two-column {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
  gap: 16px;
  align-items: start;
}

.ks-result {
  display: grid;
  gap: 6px;
  padding: 14px;
  border: 1px solid rgba(26, 115, 232, 0.14);
  border-radius: 8px;
  background: #f4f8ff;
}

.ks-result strong {
  color: #174ea6;
}

.ks-result p {
  margin: 0;
  color: #2b3b52;
  line-height: 1.58;
}

.ks-advisory-form,
.ks-chat-list,
.ks-chat-response {
  display: grid;
  gap: 12px;
}

.ks-chat-response {
  padding: 14px;
  border: 1px solid #e5ece8;
  border-radius: 8px;
  background: #fbfdfc;
}

.ks-chat-question {
  display: flex;
  gap: 8px;
  align-items: center;
  color: #1e3127;
}

.ks-chat-response p {
  margin: 0;
  color: #2b3d32;
  line-height: 1.58;
}

.ks-advice-tag {
  width: fit-content;
  padding: 5px 9px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 850;
}

.ks-advice-tag.is-personalized {
  color: #11613e;
  background: #e6f6ed;
}

.ks-advice-tag.is-general {
  color: #5c6670;
  background: #eef1f3;
}

.ks-context-details {
  color: #5f6d65;
  font-size: 0.9rem;
}

.ks-context-details summary {
  cursor: pointer;
  font-weight: 820;
}

.ks-context-details ul {
  display: grid;
  gap: 6px;
  margin: 10px 0 0;
  padding-left: 18px;
}

.ks-list {
  display: grid;
  gap: 10px;
}

.ks-data-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  min-height: 66px;
  padding: 12px;
  border: 1px solid #edf2ef;
  border-radius: 8px;
  background: #fbfdfc;
}

.ks-data-row div {
  display: grid;
  gap: 4px;
  min-width: 0;
}

.ks-data-row strong {
  color: #1c2b22;
}

.ks-data-row span {
  color: #6b7a72;
  font-size: 0.9rem;
}

.ks-data-row em {
  justify-self: end;
  color: #0b6b43;
  font-style: normal;
  font-weight: 900;
}

.ks-side-panel {
  position: sticky;
  top: 98px;
}

.ks-empty-state {
  place-items: center;
  max-width: 520px;
  margin: 80px auto;
  text-align: center;
}

.ks-empty-state svg {
  color: #168454;
}

.ks-inline-form {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
}

.ks-message-list {
  display: grid;
  gap: 8px;
  max-height: 300px;
  overflow: auto;
}

.ks-message-list p,
.ks-message-list span {
  margin: 0;
  padding: 10px 12px;
  border-radius: 8px;
  background: #f2f7f4;
  color: #34443b;
}

.ks-impact-panel {
  margin-top: 24px;
}

.ks-impact-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.ks-trust-panel {
  grid-column: 1 / -1;
}

.ks-trust-score {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 16px;
  align-items: center;
}

.ks-trust-score > div:last-child {
  display: grid;
  gap: 6px;
}

.ks-trust-score strong {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: #174ea6;
}

.ks-trust-score p {
  margin: 0;
  color: #53645b;
  line-height: 1.52;
}

.ks-trust-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ks-trust-list span {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  min-height: 34px;
  padding: 6px 10px;
  border-radius: 999px;
  color: #23513e;
  background: #edf8f2;
  font-size: 0.85rem;
  font-weight: 820;
}

.ks-decision-hero {
  grid-column: 1 / -1;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  background:
    linear-gradient(135deg, rgba(232, 240, 254, 0.88), rgba(230, 244, 234, 0.78)),
    #ffffff;
}

.ks-risk-ring {
  --risk: 48%;
  display: grid;
  place-items: center;
  width: 156px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at center, #ffffff 0 57%, transparent 58%),
    conic-gradient(#1a73e8 var(--risk), #dfe8e3 0);
  box-shadow:
    0 20px 42px rgba(26, 115, 232, 0.16),
    inset 0 0 0 1px rgba(255, 255, 255, 0.9);
}

.ks-risk-ring strong {
  color: #174ea6;
  font-size: 2.35rem;
  line-height: 1;
}

.ks-risk-ring span {
  color: #66756c;
  font-size: 0.78rem;
  font-weight: 850;
  text-transform: uppercase;
}

.ks-decision-actions {
  display: grid;
  gap: 10px;
}

.ks-slider-grid,
.ks-signal-grid,
.ks-action-timeline {
  display: grid;
  gap: 12px;
}

.ks-slider-field {
  display: grid;
  gap: 10px;
  padding: 13px;
  border: 1px solid #e4ece7;
  border-radius: 8px;
  background: #fbfdfc;
}

.ks-slider-field span {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  color: #415147;
  font-size: 0.86rem;
  font-weight: 820;
}

.ks-slider-field svg {
  color: #168454;
}

.ks-slider-field strong {
  color: #174ea6;
}

.ks-slider-field input[type='range'] {
  width: 100%;
  accent-color: #1a73e8;
}

.ks-decision-stats {
  grid-column: 1 / -1;
}

.ks-action-timeline article {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 14px;
  border: 1px solid #edf2ef;
  border-radius: 8px;
  background: #fbfdfc;
}

.ks-action-timeline article > span {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  color: #ffffff;
  background: #168454;
  font-weight: 900;
}

.ks-action-timeline div {
  display: grid;
  gap: 5px;
}

.ks-action-timeline strong {
  color: #1c2b22;
}

.ks-action-timeline p {
  margin: 0;
  color: #53645b;
  line-height: 1.5;
}

.ks-action-timeline small {
  color: #174ea6;
  font-weight: 850;
}

.ks-signal-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ks-signal-grid article {
  display: grid;
  gap: 7px;
  min-height: 132px;
  align-content: start;
  padding: 14px;
  border: 1px solid #edf2ef;
  border-radius: 8px;
  background: #fbfdfc;
}

.ks-signal-grid svg {
  color: #1a73e8;
}

.ks-signal-grid strong {
  color: #1c2b22;
}

.ks-signal-grid span {
  color: #66756c;
  line-height: 1.45;
}

.ks-scheme-panel {
  grid-column: 1 / -1;
}

.ks-scheme-helper-panel {
  display: grid;
  gap: 14px;
  padding: 16px;
  border: 1px solid rgba(26, 115, 232, 0.14);
  border-radius: 8px;
  background: #f4f8ff;
}

.ks-scheme-helper-panel h3 {
  margin: 0;
  color: #1c2b22;
}

.ks-check-grid,
.ks-match-list,
.ks-offline-grid {
  display: grid;
  gap: 10px;
}

.ks-check-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ks-check-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  min-height: 44px;
  padding: 10px;
  border: 1px solid #dce7fb;
  border-radius: 8px;
  background: #ffffff;
  color: #34443b;
  font-weight: 820;
}

.ks-check-card input {
  width: 18px;
  height: 18px;
  accent-color: #1a73e8;
}

.ks-match-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ks-match-list article {
  display: grid;
  gap: 7px;
  padding: 12px;
  border: 1px solid #dce7fb;
  border-radius: 8px;
  background: #ffffff;
}

.ks-match-list strong {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  color: #1f2a44;
}

.ks-match-list em {
  color: #0b6b43;
  font-style: normal;
  font-weight: 900;
}

.ks-match-list p,
.ks-match-list small {
  margin: 0;
  color: #53645b;
  line-height: 1.45;
}

.ks-scheme-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.ks-scheme-card {
  display: grid;
  gap: 14px;
  align-content: space-between;
  min-height: 300px;
  padding: 16px;
  border: 1px solid #edf2ef;
  border-radius: 8px;
  background: #fbfdfc;
}

.ks-scheme-card h3 {
  margin: 10px 0 6px;
  color: #1c2b22;
  font-size: 1.05rem;
  line-height: 1.22;
}

.ks-scheme-card p {
  margin: 0;
  color: #53645b;
  line-height: 1.48;
}

.ks-scheme-card ul {
  display: grid;
  gap: 7px;
  margin: 0;
  padding-left: 18px;
  color: #4d5c54;
  font-size: 0.9rem;
  line-height: 1.42;
}

.ks-safe-link {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  min-height: 42px;
  padding: 9px 10px;
  border-radius: 8px;
  font-size: 0.84rem;
  font-weight: 820;
  line-height: 1.32;
}

.ks-safe-link.is-official {
  color: #11613e;
  background: #e6f6ed;
}

.ks-safe-link.is-warning {
  color: #8a4b00;
  background: #fff4d6;
}

.ks-scheme-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.ks-scheme-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 38px;
  padding: 0 12px;
  border-radius: 8px;
  color: #23513e;
  background: #edf5f1;
  font-size: 0.88rem;
  font-weight: 850;
  text-decoration: none;
}

.ks-scheme-actions a.is-primary {
  color: #ffffff;
  background: #1a73e8;
  box-shadow: 0 12px 24px rgba(26, 115, 232, 0.16);
}

.ks-offline-panel {
  grid-column: 1 / -1;
}

.ks-offline-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ks-offline-grid article {
  display: grid;
  gap: 8px;
  align-content: start;
  min-height: 150px;
  padding: 14px;
  border: 1px solid #edf2ef;
  border-radius: 8px;
  background: #fbfdfc;
}

.ks-offline-grid svg {
  color: #168454;
}

.ks-offline-grid strong {
  color: #1c2b22;
}

.ks-offline-grid span {
  color: #53645b;
  line-height: 1.45;
}

.ks-mobile-panel {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  align-items: start;
  justify-items: end;
  padding: 14px;
  background: rgba(10, 20, 14, 0.42);
}

.ks-mobile-card {
  display: grid;
  gap: 8px;
  width: min(360px, 100%);
  padding: 14px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.18);
}

.ks-mobile-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.ks-toast {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 100;
  max-width: min(420px, calc(100vw - 36px));
  padding: 13px 16px;
  border-radius: 8px;
  color: #ffffff;
  background: #163524;
  box-shadow: 0 18px 45px rgba(22, 53, 36, 0.24);
  font-weight: 760;
}

.ks-spin {
  animation: ks-spin 900ms linear infinite;
}

@keyframes ks-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1180px) {
  .ks-header {
    grid-template-columns: auto 1fr auto;
  }

  .ks-mobile-toggle {
    display: inline-flex;
  }

  .ks-nav {
    display: none;
  }

  .ks-brand {
    justify-self: start;
  }

  .ks-feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ks-scheme-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ks-impact-grid,
  .ks-check-grid,
  .ks-match-list,
  .ks-offline-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .ks-hero,
  .ks-two-column,
  .ks-content-grid {
    grid-template-columns: 1fr;
  }

  .ks-decision-hero,
  .ks-signal-grid,
  .ks-scheme-grid {
    grid-template-columns: 1fr;
  }

  .ks-trust-score {
    grid-template-columns: 1fr;
  }

  .ks-risk-ring {
    justify-self: start;
  }

  .ks-hero-copy {
    min-height: 420px;
  }

  .ks-side-panel {
    position: static;
  }
}

@media (max-width: 680px) {
  .ks-header {
    min-height: 66px;
    padding: 0 12px;
  }

  .ks-brand small,
  .ks-header-actions .ks-user-chip {
    display: none;
  }

  .ks-page-wrap {
    padding: 14px;
  }

  .ks-hero-copy {
    min-height: 390px;
    padding: 22px;
  }

  .ks-form-grid,
  .ks-mini-grid,
  .ks-stat-grid,
  .ks-feature-grid,
  .ks-impact-grid,
  .ks-check-grid,
  .ks-match-list,
  .ks-offline-grid {
    grid-template-columns: 1fr;
  }

  .ks-page-title {
    align-items: start;
  }
}

