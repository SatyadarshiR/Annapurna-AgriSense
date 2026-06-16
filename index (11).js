/* Utility styles for the mounted feature screens. */
.max-w-6xl {
  max-width: 1220px;
}

.mx-auto {
  margin-right: auto;
  margin-left: auto;
}

.p-6 {
  padding: 24px;
}

.p-4 {
  padding: 16px;
}

.p-3 {
  padding: 12px;
}

.p-2 {
  padding: 8px;
}

.px-2 {
  padding-right: 8px;
  padding-left: 8px;
}

.px-3 {
  padding-right: 12px;
  padding-left: 12px;
}

.px-4 {
  padding-right: 16px;
  padding-left: 16px;
}

.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}

.mb-8 {
  margin-bottom: 32px;
}

.mb-6 {
  margin-bottom: 24px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-3 {
  margin-bottom: 12px;
}

.mb-2 {
  margin-bottom: 8px;
}

.mt-4 {
  margin-top: 16px;
}

.mt-10 {
  margin-top: 40px;
}

.mt-3 {
  margin-top: 12px;
}

.mt-2 {
  margin-top: 8px;
}

.mt-1 {
  margin-top: 4px;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.block {
  display: block;
}

.hidden {
  display: none;
}

.grid {
  display: grid;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.items-start {
  align-items: flex-start;
}

.justify-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.gap-1 {
  gap: 4px;
}

.gap-2 {
  gap: 8px;
}

.gap-3 {
  gap: 12px;
}

.gap-4 {
  gap: 16px;
}

.gap-6 {
  gap: 24px;
}

.space-y-1 > * + * {
  margin-top: 4px;
}

.space-y-4 > * + * {
  margin-top: 16px;
}

.grid-cols-1 {
  grid-template-columns: 1fr;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.flex-1 {
  flex: 1;
  min-width: 0;
}

.w-full {
  width: 100%;
}

.w-64 {
  width: min(256px, 100%);
  min-width: min(256px, 100%);
}

.w-8 {
  width: 32px;
}

.w-5 {
  width: 20px;
}

.w-4 {
  width: 16px;
}

.h-40 {
  height: 160px;
}

.h-full {
  height: 100%;
}

.h-8 {
  height: 32px;
}

.h-5 {
  height: 20px;
}

.h-4 {
  height: 16px;
}

.h-screen {
  min-height: 70vh;
}

.min-w-0 {
  min-width: 0;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.object-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-x-auto {
  overflow-x: auto;
}

.overflow-y-auto {
  overflow-y: auto;
}

.rounded,
.rounded-lg {
  border-radius: 8px;
}

.rounded-full {
  border-radius: 999px;
}

.shadow-md,
.shadow-lg {
  box-shadow:
    0 22px 54px rgba(31, 52, 92, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.85);
}

.border {
  border: 1px solid #d8e2f3;
}

.border-b,
.border-b-2 {
  border-bottom: 1px solid #d8e2f3;
}

.border-l-4 {
  border-left-width: 4px;
}

.border-t-4 {
  border-top-width: 4px;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.font-bold,
.font-semibold {
  font-weight: 800;
}

.text-xs {
  font-size: 0.78rem;
}

.text-sm {
  font-size: 0.9rem;
}

.text-lg {
  font-size: 1.1rem;
}

.text-xl {
  font-size: 1.25rem;
}

.text-2xl {
  font-size: 1.55rem;
}

.text-3xl {
  font-size: 2rem;
}

.text-4xl {
  font-size: 2.45rem;
}

.text-gray-500,
.text-gray-600,
.text-gray-700 {
  color: #5f6368;
}

.text-gray-800 {
  color: #1f2a44;
}

.text-green-600,
.text-green-700,
.text-blue-600,
.text-blue-700,
.text-teal-600,
.text-purple-600,
.text-red-600 {
  color: #0b8043;
}

.bg-gray-50,
.bg-gray-100,
.bg-gray-200 {
  background: #f7faff;
}

.bg-green-100,
.bg-blue-100,
.bg-yellow-100,
.bg-red-100,
.bg-purple-100 {
  background: linear-gradient(135deg, #eef7f1, #eef5ff);
}

.border-green-500,
.border-blue-500,
.border-purple-500,
.border-red-500,
.border-orange-500,
.border-yellow-500,
.border-teal-500 {
  border-color: #0f9d58;
}

.divide-y > * + * {
  border-top: 1px solid #e8edf6;
}

.capitalize {
  text-transform: capitalize;
}

.italic {
  font-style: italic;
}

.list-disc {
  list-style-type: disc;
}

.list-inside {
  list-style-position: inside;
}

.hover\:underline:hover {
  text-decoration: underline;
}

.line-clamp-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

th,
td {
  vertical-align: top;
  line-height: 1.45;
}

.transition {
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease,
    color 180ms ease;
}

.hover\:shadow-lg:hover,
.hover\:bg-green-700:hover,
.hover\:bg-blue-700:hover,
.hover\:bg-gray-100:hover,
.hover\:bg-gray-300:hover {
  transform: translateY(-1px);
  box-shadow: 0 24px 58px rgba(31, 52, 92, 0.16);
}

.max-w-6xl > .flex.items-center,
.max-w-6xl > .flex.items-center.justify-between,
.bg-white .flex.justify-between,
.bg-white .flex.items-center {
  flex-wrap: wrap;
}

.max-w-6xl h1,
.max-w-6xl h2,
.max-w-6xl h3 {
  line-height: 1.18;
}

.max-w-6xl button,
.max-w-6xl input,
.max-w-6xl select,
.max-w-6xl textarea {
  min-height: 42px;
}

.max-w-6xl textarea {
  line-height: 1.45;
  resize: vertical;
}

@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\:col-span-2 {
    grid-column: span 2;
  }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 1120px) {
  .site-header {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 14px 20px;
  }

  .site-nav {
    justify-content: flex-start;
    overflow-x: auto;
  }

  .search-box {
    display: none;
  }
}

@media (max-width: 920px) {
  .auth-gate-shell,
  .hero-grid,
  .voice-command-grid,
  .doctor-layout,
  .market-layout,
  .community-layout,
  .location-panel,
  .dashboard-grid,
  .history-grid,
  .eligibility-panel,
  .calculator-band,
  .signal-header,
  .signal-layout,
  .twin-layout,
  .command-hero-grid,
  .command-workbench {
    grid-template-columns: 1fr;
  }

  .stats-grid,
  .feature-grid,
  .workflow-grid,
  .crop-grid,
  .timeline,
  .insight-strip,
  .expert-grid,
  .scheme-grid,
  .weather-grid,
  .command-feature-grid,
  .command-modules {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .auth-gate {
    align-items: start;
    padding: 18px;
  }

  .auth-gate-shell {
    gap: 22px;
  }

  .auth-gate-copy h1 {
    font-size: 2.55rem;
    line-height: 1;
  }

  .auth-benefit-grid {
    grid-template-columns: 1fr;
  }

  .auth-gate-form {
    padding: 18px;
  }

  .page-section,
  .status-strip {
    padding-left: 16px;
    padding-right: 16px;
  }

  .site-nav button {
    padding: 0 12px;
  }

  .stats-grid,
  .feature-grid,
  .workflow-grid,
  .crop-grid,
  .timeline,
  .insight-strip,
  .expert-grid,
  .scheme-grid,
  .weather-grid,
  .command-feature-grid,
  .command-modules,
  .command-result-grid,
  .admin-metrics,
  .npk-grid {
    grid-template-columns: 1fr;
  }

  .language-tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .price-row {
    grid-template-columns: 1fr auto;
  }

  .signal-metrics,
  .segmented-field,
  .twin-summary-grid,
  .twin-scenario-row {
    grid-template-columns: 1fr;
  }

  .twin-map {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .farmer-passport,
  .auth-form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .p-6 {
    padding: 18px;
  }

  .text-4xl {
    font-size: 2rem;
  }

  .text-3xl {
    font-size: 1.72rem;
  }

  .text-2xl {
    font-size: 1.35rem;
  }

  .max-w-6xl > .flex.gap-6.flex-1 {
    flex-direction: column;
    overflow: visible;
  }

  .w-64 {
    width: 100%;
    min-width: 0;
  }

  .h-screen {
    min-height: auto;
  }

  .max-w-6xl > .flex.items-center.justify-between {
    align-items: flex-start;
    gap: 12px;
  }

  .max-w-6xl table {
    min-width: 680px;
  }
}

