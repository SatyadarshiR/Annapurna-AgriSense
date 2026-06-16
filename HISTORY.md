.site-shell {
  min-height: 100vh;
  background:
    linear-gradient(180deg, rgba(232, 240, 254, 0.9), rgba(248, 250, 252, 0) 440px), #f8fafc;
}

.auth-gate {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: clamp(22px, 4vw, 46px);
  background:
    linear-gradient(180deg, rgba(232, 240, 254, 0.92), rgba(248, 250, 252, 0.72) 58%),
    #f8fafc;
}

.auth-gate-shell {
  width: min(1180px, 100%);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(380px, 0.74fr);
  gap: clamp(28px, 5vw, 58px);
  align-items: center;
}

.auth-gate-copy {
  display: grid;
  gap: 24px;
}

.auth-gate-copy h1 {
  max-width: 760px;
  margin: 0;
  color: #122018;
  font-size: clamp(2.85rem, 6.4vw, 5.8rem);
  line-height: 0.93;
  letter-spacing: 0;
}

.auth-gate-copy p {
  max-width: 680px;
  margin: 0;
  color: #40534a;
  font-size: 1.08rem;
  line-height: 1.7;
}

.auth-kicker {
  display: inline-flex;
  width: fit-content;
  min-height: 34px;
  align-items: center;
  padding: 7px 13px;
  border: 1px solid rgba(15, 157, 88, 0.2);
  border-radius: 999px;
  color: #0b8043;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 0 14px 34px rgba(31, 52, 92, 0.08);
  font-size: 0.82rem;
  font-weight: 850;
  text-transform: uppercase;
}

.auth-benefit-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  max-width: 560px;
}

.auth-benefit-grid span {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 54px;
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.68);
  border-radius: 8px;
  color: #20352b;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 14px 34px rgba(31, 52, 92, 0.08);
  font-weight: 780;
  line-height: 1.25;
}

.auth-benefit-grid svg {
  color: #0b8043;
}

.auth-preview-panel {
  display: grid;
  gap: 14px;
  max-width: 640px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.74);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(232, 245, 233, 0.82)),
    rgba(255, 255, 255, 0.72);
  box-shadow:
    0 24px 58px rgba(31, 52, 92, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.auth-preview-topline,
.auth-trust-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.auth-preview-topline span,
.auth-trust-strip span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #174ea6;
  font-size: 0.84rem;
  font-weight: 850;
}

.auth-preview-topline strong {
  color: #0b8043;
  font-size: 0.86rem;
}

.auth-preview-panel p {
  color: #1f2a44;
  font-size: 1rem;
  font-weight: 720;
  line-height: 1.55;
}

.auth-trust-strip {
  justify-content: flex-start;
  padding-top: 2px;
}

.auth-trust-strip span {
  min-height: 32px;
  padding: 6px 10px;
  border-radius: 999px;
  color: #40534a;
  background: rgba(255, 255, 255, 0.68);
}

.auth-gate-form {
  display: grid;
  gap: 18px;
  padding: clamp(20px, 3vw, 30px);
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 8px;
  background: #ffffff;
  box-shadow:
    0 30px 80px rgba(31, 52, 92, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.auth-form-heading {
  display: grid;
  gap: 6px;
}

.auth-form-heading h2 {
  margin: 0;
  color: #18213a;
  font-size: 1.72rem;
  letter-spacing: 0;
}

.auth-submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 50px;
  padding: 0 18px;
  border: 0;
  border-radius: 8px;
  color: #ffffff;
  background: #1a73e8;
  font-weight: 850;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: minmax(230px, 300px) minmax(420px, 1fr) minmax(220px, 360px);
  gap: 18px;
  align-items: center;
  min-height: 76px;
  padding: 0 28px;
  border-bottom: 1px solid #e8eaed;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(18px);
}

.site-header > * {
  min-width: 0;
}

.brand-row,
.search-box,
.site-nav,
.status-strip,
.meta-row,
.card-heading,
.hero-actions,
.location-actions,
.price-row,
.document-list {
  display: flex;
  align-items: center;
}

.brand-row {
  gap: 14px;
  min-width: 0;
}

.brand-mark {
  display: inline-grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #e8f0fe, #e6f4ea);
  color: #188038;
  box-shadow: inset 0 0 0 1px rgba(60, 64, 67, 0.08);
}

.product-name,
.product-meta,
.eyebrow,
h1,
h2,
h3,
p {
  margin-top: 0;
}

.product-name {
  margin-bottom: 2px;
  font-size: 1rem;
  font-weight: 760;
  letter-spacing: 0;
}

.product-meta {
  margin-bottom: 0;
  color: #5f6368;
  font-size: 0.82rem;
}

.site-nav {
  justify-content: center;
  gap: 6px;
  padding: 6px;
  border: 1px solid #e8eaed;
  border-radius: 999px;
  background: #f8fafd;
  max-width: 100%;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: thin;
}

.site-nav button {
  flex: 0 0 auto;
  min-height: 38px;
  padding: 8px 16px;
  border: 0;
  border-radius: 999px;
  color: #3c4043;
  background: transparent;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.2;
}

.card-heading,
.meta-row,
.hero-actions,
.location-actions,
.passport-actions,
.ai-actions,
.document-list {
  flex-wrap: wrap;
}

.site-nav button:hover,
.site-nav button.active {
  color: #174ea6;
  background: #e8f0fe;
}

.search-box {
  gap: 10px;
  min-height: 44px;
  padding: 0 15px;
  border: 1px solid transparent;
  border-radius: 24px;
  color: #5f6368;
  background: #f1f3f4;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.search-box:focus-within {
  border-color: #d2e3fc;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(60, 64, 67, 0.12);
}

.search-box input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  color: #202124;
  background: transparent;
}

.status-strip {
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1220px;
  margin: 0 auto;
  padding: 18px 28px 0;
}

.status-strip span,
.meta-row span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 38px;
  padding: 8px 14px;
  border: 1px solid #e8eaed;
  border-radius: 999px;
  color: #3c4043;
  background: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 1px 2px rgba(60, 64, 67, 0.05);
}

.status-strip span:nth-child(1) {
  color: #174ea6;
  background: #e8f0fe;
}

.status-strip span:nth-child(2) {
  color: #188038;
  background: #e6f4ea;
}

.status-strip span:nth-child(3) {
  color: #b06000;
  background: #fef7e0;
}

.page-section {
  display: grid;
  gap: 28px;
  max-width: 1220px;
  margin: 0 auto;
  padding: 42px 28px 72px;
}

.section-intro {
  max-width: 820px;
}

.eyebrow {
  margin-bottom: 9px;
  color: #1a73e8;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1 {
  margin-bottom: 16px;
  color: #202124;
  font-size: clamp(2.45rem, 6vw, 5.35rem);
  font-weight: 760;
  line-height: 0.96;
  letter-spacing: 0;
}

h2 {
  margin-bottom: 12px;
  color: #202124;
  font-size: clamp(1.35rem, 2.5vw, 2.1rem);
  line-height: 1.12;
}

h3 {
  margin-bottom: 6px;
  color: #202124;
  font-size: 1rem;
}

p {
  margin-bottom: 0;
  color: #5f6368;
  line-height: 1.58;
}

.hero-grid,
.voice-command-grid,
.doctor-layout,
.market-layout,
.community-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.86fr);
  gap: 24px;
  align-items: stretch;
}

.hero-copy-block,
.farm-visual,
.feature-card,
.feature-panel,
.sathi-signal-band,
.signal-controls,
.signal-result,
.crop-twin-band,
.twin-map,
.twin-control-panel,
.farmer-passport,
.admin-ops-card,
.real-ai-panel,
.ai-answer-card,
.command-feature-grid article,
.command-panel,
.command-modules article,
.voice-console,
.voice-status-card,
.advisory-card,
.upload-card,
.diagnosis-result,
.price-board,
.map-card,
.schedule-card,
.scheme-card,
.expert-grid article,
.insight-strip article,
.stats-grid article,
.workflow-grid article,
.crop-row {
  border: 1px solid #e8eaed;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(60, 64, 67, 0.08);
}

.hero-copy-block {
  padding: clamp(28px, 5vw, 54px);
}

.hero-copy-block p {
  max-width: 680px;
  font-size: 1.06rem;
}

.hero-actions {
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero-actions button,
.upload-card button,
.map-card button,
.location-actions button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #ffffff;
  background: #1a73e8;
  font-weight: 760;
}

.hero-actions button:nth-child(2) {
  color: #174ea6;
  background: #e8f0fe;
}

.location-actions button:nth-child(2) {
  color: #3c4043;
  background: #f1f3f4;
}

.farm-visual {
  position: relative;
  min-height: 460px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(227, 242, 253, 0.95), rgba(232, 245, 233, 0.88) 48%, #d9ead3),
    #e8f0fe;
}

.sun {
  position: absolute;
  top: 42px;
  right: 54px;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: #fbbc04;
  box-shadow: 0 0 0 18px rgba(251, 188, 4, 0.18);
}

.field-lines {
  position: absolute;
  right: -8%;
  bottom: -18%;
  left: -8%;
  height: 54%;
  border-radius: 50% 50% 0 0;
  background:
    repeating-linear-gradient(105deg, transparent 0 32px, rgba(24, 128, 56, 0.24) 33px 38px),
    #a8d08d;
}

.field-lines span {
  position: absolute;
  right: 12%;
  left: 12%;
  height: 2px;
  background: rgba(255, 255, 255, 0.55);
}

.field-lines span:nth-child(1) {
  top: 25%;
}

.field-lines span:nth-child(2) {
  top: 48%;
}

.field-lines span:nth-child(3) {
  top: 70%;
}

.floating-card {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 10px 28px rgba(60, 64, 67, 0.14);
  font-weight: 760;
}

.floating-card.weather {
  top: 150px;
  left: 34px;
  color: #174ea6;
}

.floating-card.alert {
  right: 28px;
  bottom: 112px;
  color: #b06000;
}

.stats-grid,
.feature-grid,
.workflow-grid,
.crop-grid,
.insight-strip,
.expert-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.stats-grid article {
  padding: 20px;
}

.stats-grid strong {
  display: block;
  margin-bottom: 6px;
  color: #1a73e8;
  font-size: 2.25rem;
  line-height: 1;
}

.stats-grid span {
  color: #5f6368;
  font-weight: 700;
}

.feature-card,
.feature-panel,
.insight-strip article,
.expert-grid article {
  padding: 22px;
}

.sathi-signal-band {
  display: grid;
  gap: 22px;
  padding: clamp(24px, 4vw, 40px);
  background:
    linear-gradient(135deg, rgba(232, 240, 254, 0.92), rgba(255, 255, 255, 0.82) 52%),
    #ffffff;
}

.signal-header,
.signal-layout,
.signal-metrics {
  display: grid;
  gap: 18px;
}

.signal-header {
  grid-template-columns: minmax(0, 1fr) minmax(190px, 0.22fr);
  align-items: center;
}

.signal-badge {
  display: grid;
  min-height: 154px;
  place-items: center;
  padding: 18px;
  border-radius: 18px;
  color: #174ea6;
  background: #e8f0fe;
  text-align: center;
}

.signal-badge.medium {
  color: #b06000;
  background: #fef7e0;
}

.signal-badge.high {
  color: #b3261e;
  background: #fce8e6;
}

.signal-badge span {
  font-weight: 850;
  text-transform: capitalize;
}

.signal-badge strong {
  font-size: 2.4rem;
  line-height: 1;
}

.signal-layout {
  grid-template-columns: minmax(280px, 0.78fr) minmax(0, 1fr);
}

.signal-controls,
.signal-result {
  display: grid;
  gap: 14px;
  padding: 18px;
}

.signal-controls label,
.segmented-field {
  display: grid;
  gap: 8px;
  color: #3c4043;
  font-weight: 780;
}

.signal-controls select,
.signal-controls input[type='range'] {
  width: 100%;
}

.signal-controls select {
  min-height: 42px;
  padding: 0 12px;
  border: 1px solid #dadce0;
  border-radius: 12px;
  color: #202124;
  background: #ffffff;
}

.segmented-field {
  grid-template-columns: 1fr repeat(3, auto);
  align-items: center;
  padding: 10px;
  border: 1px solid #e8eaed;
  border-radius: 14px;
  background: #f8fafd;
}

.segmented-field button {
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid #dadce0;
  border-radius: 999px;
  color: #3c4043;
  background: #ffffff;
  font-size: 0.84rem;
  font-weight: 800;
  text-transform: capitalize;
}

.segmented-field button.active {
  border-color: #d2e3fc;
  color: #174ea6;
  background: #e8f0fe;
}

.signal-metrics {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.signal-metrics div {
  display: grid;
  gap: 6px;
  min-height: 156px;
  padding: 18px;
  border-radius: 16px;
  background: #f8fafd;
}

.signal-metrics span {
  color: #5f6368;
  font-weight: 760;
}

.signal-metrics strong {
  color: #174ea6;
  font-size: 2.2rem;
  line-height: 1;
}

.signal-meter {
  height: 12px;
  border-radius: 999px;
  background: #f1f3f4;
  overflow: hidden;
}

.signal-meter span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #34a853, #fbbc04, #ea4335);
}

.signal-task-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-left: 22px;
}

.signal-task-list li {
  color: #3c4043;
  font-weight: 720;
  line-height: 1.46;
}

.crop-twin-band {
  display: grid;
  gap: 22px;
  padding: clamp(24px, 4vw, 42px);
  background:
    linear-gradient(135deg, rgba(230, 244, 234, 0.9), rgba(255, 255, 255, 0.78) 52%),
    #ffffff;
}

.twin-copy {
  max-width: 850px;
}

.twin-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.82fr) minmax(0, 1fr);
  gap: 18px;
}

.twin-map {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  min-height: 390px;
  padding: 18px;
  background: #f8fafd;
}

.twin-plot {
  display: grid;
  align-content: space-between;
  min-height: 112px;
  padding: 12px;
  border: 1px solid #dadce0;
  border-radius: 16px;
  color: #202124;
  background: #ffffff;
  text-align: left;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
}

.twin-plot:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(60, 64, 67, 0.12);
}

.twin-plot.stable {
  border-color: #ceead6;
  background: #f1f8f3;
}

.twin-plot.watch {
  border-color: #fde293;
  background: #fffbeb;
}

.twin-plot.critical {
  border-color: #f6aea9;
  background: #fce8e6;
}

.twin-plot span,
.twin-plot small {
  color: #5f6368;
  font-weight: 780;
}

.twin-plot strong {
  color: #202124;
  font-size: 2rem;
  line-height: 1;
}

.twin-control-panel {
  display: grid;
  gap: 16px;
  padding: 18px;
}

.twin-scenario-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.twin-scenario-row button {
  min-height: 40px;
  border: 1px solid #dadce0;
  border-radius: 999px;
  color: #3c4043;
  background: #ffffff;
  font-size: 0.85rem;
  font-weight: 820;
  text-transform: capitalize;
}

.twin-scenario-row button.active {
  border-color: #ceead6;
  color: #188038;
  background: #e6f4ea;
}

.twin-control-panel label {
  display: grid;
  gap: 8px;
  color: #3c4043;
  font-weight: 780;
}

.twin-control-panel input {
  width: 100%;
}

.twin-summary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.twin-summary-grid div,
.twin-explain-card {
  display: grid;
  gap: 8px;
  padding: 16px;
  border-radius: 16px;
  background: #f8fafd;
}

.twin-summary-grid svg {
  color: #188038;
}

.twin-summary-grid span,
.twin-explain-card span {
  color: #5f6368;
  font-weight: 760;
}

.twin-summary-grid strong {
  color: #188038;
  font-size: 1.35rem;
  line-height: 1.15;
}

.twin-explain-card {
  border: 1px solid #ceead6;
  background: #f1f8f3;
}

.twin-explain-card strong {
  color: #202124;
  font-size: 1.1rem;
  line-height: 1.35;
}

.command-hero-grid,
.command-workbench {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(330px, 0.75fr);
  gap: 18px;
}

.farmer-passport,
.admin-ops-card,
.command-panel {
  display: grid;
  gap: 18px;
  padding: 24px;
}

.farmer-passport {
  grid-template-columns: minmax(0, 1fr) 150px;
  align-items: center;
}

.real-profile-panel,
.auth-form-grid,
.real-ai-panel {
  display: grid;
  gap: 14px;
}

.auth-mode-row,
.ai-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.auth-mode-row button {
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid #dadce0;
  border-radius: 999px;
  color: #3c4043;
  background: #ffffff;
  font-weight: 800;
}

.auth-mode-row button.active {
  border-color: #d2e3fc;
  color: #174ea6;
  background: #e8f0fe;
}

.auth-form-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.auth-form-grid label,
.real-ai-panel label {
  display: grid;
  gap: 8px;
  color: #2e4137;
  font-weight: 780;
  font-size: 0.9rem;
}

.auth-form-grid input,
.auth-form-grid select,
.real-ai-panel textarea {
  width: 100%;
  min-height: 44px;
  padding: 0 13px;
  border: 1px solid #d8e2f3;
  border-radius: 12px;
  color: #18213a;
  background: rgba(255, 255, 255, 0.94);
}

.real-ai-panel textarea {
  min-height: 112px;
  padding: 12px;
  resize: vertical;
}

.passport-actions {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.passport-actions button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 14px;
  border: 0;
  border-radius: 999px;
  color: #174ea6;
  background: #e8f0fe;
  font-weight: 800;
}

.status-message {
  grid-column: 1 / -1;
  color: #174ea6;
  font-weight: 800;
}

.real-ai-panel {
  padding: 24px;
  background:
    linear-gradient(135deg, rgba(232, 240, 254, 0.86), rgba(255, 255, 255, 0.74)),
    #ffffff;
}

.ai-actions button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  color: #ffffff;
  background: #1a73e8;
  font-weight: 820;
}

.ai-actions span {
  color: #5f6368;
  font-weight: 760;
}

.ai-answer-card {
  padding: 18px;
  background: #ffffff;
}

.qr-card {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  width: 150px;
  aspect-ratio: 1;
  padding: 12px;
  border: 1px solid #dadce0;
  border-radius: 18px;
  background: #ffffff;
}

.qr-card span {
  border-radius: 3px;
  background: #eef0f3;
}

.qr-card span.dark {
  background: #202124;
}

.admin-ops-card {
  background:
    linear-gradient(135deg, rgba(232, 240, 254, 0.9), rgba(230, 244, 234, 0.78)),
    #ffffff;
}

.admin-metrics,
.command-feature-grid,
.command-result-grid,
.npk-grid,
.command-modules {
  display: grid;
  gap: 12px;
}

.admin-metrics {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.admin-metrics span {
  min-height: 42px;
  padding: 10px;
  border-radius: 14px;
  color: #174ea6;
  background: #ffffff;
  font-size: 0.86rem;
  font-weight: 800;
}

.command-feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.command-feature-grid article {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 12px;
  align-items: start;
  padding: 16px;
}

.command-feature-grid svg {
  color: #188038;
}

.command-feature-grid article > span {
  min-height: 28px;
  padding: 5px 9px;
  border-radius: 999px;
  color: #188038;
  background: #e6f4ea;
  font-size: 0.76rem;
  font-weight: 850;
}

.command-panel label {
  display: grid;
  gap: 8px;
  color: #3c4043;
  font-weight: 780;
}

.command-panel input,
.command-panel select {
  width: 100%;
}

.command-panel input[type='number'],
.command-panel select {
  min-height: 40px;
  padding: 0 12px;
  border: 1px solid #dadce0;
  border-radius: 12px;
  background: #ffffff;
}

.npk-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.command-result-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.command-result-grid div {
  display: grid;
  gap: 6px;
  min-height: 106px;
  padding: 14px;
  border-radius: 16px;
  background: #f8fafd;
}

.command-result-grid span {
  color: #5f6368;
  font-size: 0.86rem;
  font-weight: 760;
}

.command-result-grid strong {
  color: #174ea6;
  line-height: 1.25;
}

.command-modules {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.command-modules article {
  display: grid;
  align-content: start;
  gap: 10px;
  min-height: 168px;
  padding: 18px;
}

.command-modules svg {
  color: #1a73e8;
}

.feature-card svg,
.feature-panel svg,
.card-heading svg,
.insight-strip svg,
.expert-grid svg,
.scheme-card svg {
  color: #1a73e8;
}

.long-feature-band {
  display: grid;
  gap: 22px;
  padding: clamp(28px, 5vw, 48px);
  border: 1px solid #e8eaed;
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(232, 240, 254, 0.84), rgba(230, 244, 234, 0.82)), #ffffff;
}

.workflow-grid article {
  padding: 20px;
  background: rgba(255, 255, 255, 0.78);
}

.workflow-grid span,
.timeline span {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  margin-bottom: 14px;
  border-radius: 50%;
  color: #ffffff;
  background: #1a73e8;
  font-weight: 800;
}

.language-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

.language-tabs button {
  min-height: 40px;
  border: 1px solid #dadce0;
  border-radius: 20px;
  color: #3c4043;
  background: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
}

.language-tabs button.active {
  border-color: #d2e3fc;
  color: #174ea6;
  background: #e8f0fe;
}

.voice-console {
  display: grid;
  gap: 24px;
  justify-items: center;
  padding: 28px;
}

.mic-button {
  display: grid;
  width: min(54vw, 176px);
  aspect-ratio: 1;
  place-items: center;
  border: 0;
  border-radius: 50%;
  color: #ffffff;
  background:
    radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.28), transparent 34%), #1a73e8;
  box-shadow:
    0 18px 38px rgba(26, 115, 232, 0.28),
    0 0 0 14px #e8f0fe,
    0 0 0 28px rgba(232, 240, 254, 0.54);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    background 160ms ease;
}

.mic-button.listening {
  transform: scale(0.96);
  background: #ea4335;
  box-shadow:
    0 18px 38px rgba(234, 67, 53, 0.28),
    0 0 0 14px #fce8e6,
    0 0 0 28px rgba(252, 232, 230, 0.58);
}

.voice-status-card {
  display: grid;
  width: 100%;
  gap: 8px;
  padding: 14px 16px;
  border: 1px solid #d8e2f3;
  border-radius: 8px;
  color: #3c4043;
  background: rgba(255, 255, 255, 0.76);
}

.voice-status-card p {
  margin: 0;
  font-weight: 750;
}

.voice-status-card span {
  color: #5f6368;
  font-size: 0.9rem;
  line-height: 1.5;
}

.advisory-card {
  width: 100%;
  padding: 22px;
}

.advisory-card h2 {
  font-size: 1.32rem;
  line-height: 1.25;
}

.meta-row {
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.stacked-cards {
  display: grid;
  gap: 16px;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.timeline article {
  padding: 22px;
  border: 1px solid #e8eaed;
  border-radius: 20px;
  background: #ffffff;
}

.upload-card {
  display: grid;
  gap: 18px;
  align-content: end;
  min-height: 360px;
  padding: 22px;
  background: linear-gradient(180deg, rgba(230, 244, 234, 0.35), rgba(255, 255, 255, 0)), #ffffff;
}

.plant-visual {
  position: relative;
  min-height: 246px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(232, 240, 254, 0.9), rgba(230, 244, 234, 0.96)), #e6f4ea;
  overflow: hidden;
}

.plant-visual::before {
  position: absolute;
  inset: 44px 32% 40px;
  border-radius: 80% 0 80% 0;
  background: #34a853;
  content: '';
  transform: rotate(-20deg);
}

.plant-visual span {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fbbc04;
  box-shadow: 0 0 0 4px rgba(251, 188, 4, 0.2);
}

.plant-visual span:nth-child(1) {
  top: 72px;
  left: 50%;
}

.plant-visual span:nth-child(2) {
  top: 126px;
  left: 58%;
}

.plant-visual span:nth-child(3) {
  top: 154px;
  left: 42%;
}

.diagnosis-result,
.price-board,
.map-card,
.schedule-card,
.scheme-card {
  padding: 24px;
}

.card-heading {
  gap: 10px;
  margin-bottom: 18px;
}

.risk-meter {
  height: 10px;
  margin-top: 22px;
  border-radius: 999px;
  background: #f1f3f4;
  overflow: hidden;
}

.risk-meter span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #34a853, #fbbc04, #ea4335);
}

.crop-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.crop-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 54px;
  gap: 14px;
  padding: 16px;
  border-left: 4px solid #4285f4;
}

.crop-row span {
  grid-column: 1 / -1;
  color: #b06000;
  font-weight: 800;
}

.score-ring {
  display: grid;
  width: 54px;
  aspect-ratio: 1;
  place-items: center;
  border: 6px solid #e6f4ea;
  border-top-color: #34a853;
  border-right-color: #34a853;
  border-radius: 50%;
  color: #188038;
  font-weight: 800;
}

.price-board {
  display: grid;
  gap: 12px;
}

.price-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto 70px 56px;
  gap: 14px;
  min-height: 72px;
  padding: 14px;
  border: 1px solid #e8eaed;
  border-radius: 14px;
  background: #ffffff;
}

.price-row strong {
  white-space: nowrap;
}

.price-row small {
  color: #5f6368;
  font-weight: 700;
}

.gain {
  color: #188038;
  font-weight: 800;
}

.loss {
  color: #d93025;
  font-weight: 800;
}

.map-card {
  display: grid;
  align-content: start;
  gap: 16px;
}

.map-visual {
  position: relative;
  min-height: 244px;
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(232, 240, 254, 0.92), rgba(254, 247, 224, 0.92)), #e8f0fe;
  overflow: hidden;
}

.map-visual::before {
  position: absolute;
  inset: 44px 34px;
  border: 6px solid #1a73e8;
  border-right-color: transparent;
  border-radius: 48% 52% 42% 58%;
  content: '';
  transform: rotate(-14deg);
}

.map-visual span {
  position: absolute;
  width: 18px;
  height: 18px;
  border: 4px solid #ffffff;
  border-radius: 50%;
  background: #ea4335;
  box-shadow: 0 4px 12px rgba(60, 64, 67, 0.24);
}

.map-visual span:nth-child(1) {
  top: 52px;
  left: 72px;
}

.map-visual span:nth-child(2) {
  right: 92px;
  bottom: 64px;
  background: #34a853;
}

.map-visual span:nth-child(3) {
  right: 50px;
  top: 88px;
  background: #fbbc04;
}

.insight-strip,
.expert-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.community-layout {
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.8fr);
}

.location-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.55fr);
  gap: 18px;
}

.location-panel article,
.scheme-tile,
.policy-assistant {
  border: 1px solid #e8eaed;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(60, 64, 67, 0.08);
}

.location-panel article {
  padding: 24px;
}

.location-actions {
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.location-readout {
  display: grid;
  align-content: center;
  gap: 10px;
  background:
    linear-gradient(135deg, rgba(232, 240, 254, 0.74), rgba(230, 244, 234, 0.68)), #ffffff;
}

.location-readout span {
  color: #188038;
  font-weight: 800;
}

.location-readout strong {
  color: #202124;
  font-size: 1.4rem;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.scheme-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.scheme-tile {
  display: grid;
  gap: 16px;
  padding: 24px;
}

.scheme-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.scheme-header small {
  color: #5f6368;
  font-weight: 700;
}

.scheme-status {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 800;
}

.scheme-status.open {
  color: #188038;
  background: #e6f4ea;
}

.scheme-status.seasonal {
  color: #b06000;
  background: #fef7e0;
}

.scheme-status.check-local {
  color: #174ea6;
  background: #e8f0fe;
}

.apply-window {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 10px;
  align-items: start;
  padding: 14px;
  border-radius: 14px;
  color: #3c4043;
  background: #f8fafd;
  font-weight: 700;
}

.apply-window svg {
  color: #1a73e8;
}

.scheme-tile a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  width: fit-content;
  padding: 0 16px;
  border-radius: 999px;
  color: #174ea6;
  background: #e8f0fe;
  font-weight: 800;
  text-decoration: none;
}

.policy-assistant {
  display: grid;
  gap: 22px;
  padding: clamp(24px, 4vw, 42px);
  background:
    linear-gradient(135deg, rgba(232, 240, 254, 0.84), rgba(254, 247, 224, 0.72)), #ffffff;
}

.dashboard-grid,
.history-grid,
.eligibility-panel,
.weather-planner,
.calculator-band {
  display: grid;
  gap: 18px;
}

.dashboard-grid {
  grid-template-columns: 1.1fr 0.8fr 1fr;
}

.history-grid,
.eligibility-panel,
.calculator-band {
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.88fr);
}

.dashboard-card,
.history-card,
.eligibility-panel,
.weather-planner,
.calculator-band {
  border: 1px solid #e8eaed;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(60, 64, 67, 0.08);
}

.dashboard-card,
.history-card {
  padding: 22px;
}

.mini-row,
.history-row,
.sync-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid #eef0f3;
}

.mini-row:first-of-type,
.history-row:first-of-type,
.sync-row:first-of-type {
  border-top: 0;
}

.mini-row strong {
  color: #174ea6;
  font-size: 1.1rem;
}

.mini-row span,
.history-row span {
  color: #3c4043;
  font-weight: 750;
}

.history-row span {
  min-height: 30px;
  padding: 6px 10px;
  border-radius: 999px;
  color: #174ea6;
  background: #e8f0fe;
  font-size: 0.78rem;
}

.sync-meter {
  width: min(140px, 28vw);
  height: 10px;
  border-radius: 999px;
  background: #f1f3f4;
  overflow: hidden;
}

.sync-meter span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #1a73e8, #34a853);
}

.sync-row.compact {
  grid-template-columns: minmax(0, 1fr);
}

.sync-row.compact .sync-meter {
  width: 100%;
}

.readiness-ring {
  display: grid;
  width: 132px;
  aspect-ratio: 1;
  place-items: center;
  margin: 8px 0 16px;
  border: 14px solid #e8f0fe;
  border-top-color: #1a73e8;
  border-right-color: #34a853;
  border-radius: 50%;
  color: #174ea6;
  font-size: 1.75rem;
  font-weight: 850;
}

.eligibility-panel,
.weather-planner,
.calculator-band {
  padding: clamp(22px, 4vw, 34px);
}

.eligibility-card,
.calculator-card {
  display: grid;
  gap: 14px;
}

.check-row,
.land-input,
.calculator-card label {
  display: grid;
  gap: 8px;
  padding: 14px;
  border: 1px solid #e8eaed;
  border-radius: 14px;
  background: #f8fafd;
  color: #3c4043;
  font-weight: 760;
}

.check-row {
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
}

.check-row input {
  width: 18px;
  height: 18px;
  accent-color: #1a73e8;
}

.land-input input,
.calculator-card input[type='range'] {
  width: 100%;
}

.land-input input {
  min-height: 40px;
  padding: 0 12px;
  border: 1px solid #dadce0;
  border-radius: 10px;
  background: #ffffff;
}

.readiness-result,
.calculator-result {
  display: grid;
  gap: 6px;
  padding: 16px;
  border-radius: 16px;
  background: #e6f4ea;
}

.readiness-result strong,
.calculator-result strong {
  color: #188038;
  font-size: 1.55rem;
}

.readiness-result span,
.calculator-result span {
  color: #3c4043;
  font-weight: 800;
}

.calculator-result {
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
}

.calculator-result svg {
  color: #188038;
}

.weather-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.weather-grid article {
  display: grid;
  gap: 8px;
  padding: 18px;
  border: 1px solid #e8eaed;
  border-radius: 16px;
  background: #f8fafd;
}

.weather-grid svg {
  color: #1a73e8;
}

.weather-grid span {
  color: #5f6368;
  font-weight: 760;
}

.weather-grid strong {
  color: #174ea6;
  font-size: 1.55rem;
}

.task-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding-left: 22px;
}

.task-list li {
  color: #3c4043;
  font-weight: 700;
  line-height: 1.45;
}

.scheme-card {
  display: grid;
  align-content: start;
  gap: 16px;
  background:
    linear-gradient(180deg, rgba(232, 240, 254, 0.65), rgba(255, 255, 255, 0) 70%), #ffffff;
}

.document-list {
  flex-wrap: wrap;
  gap: 10px;
}

.document-list span {
  min-height: 34px;
  padding: 7px 11px;
  border-radius: 999px;
  background: #f1f3f4;
  color: #3c4043;
  font-size: 0.85rem;
  font-weight: 760;
}


