import { AnimatePresence, motion } from 'framer-motion';
import { Leaf, LogIn, LogOut, Menu, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { AuthPrompt } from './components/ui';
import { VoiceRecorder } from './components/VoiceRecorder';
import { navItems } from './navigation';
import DecisionOSPage from './pages/DecisionOSPage';
import ResourcesPage from './pages/ResourcesPage';
import {
  AdvisorPage,
  CommunityPage,
  CropsPage,
  FinancePage,
  LogisticsPage,
  MarketPage,
  OverviewPage
} from './pages/WorkspacePages';

const SESSION_KEY = 'krishisathi.session';
const readSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
  } catch {
    return null;
  }
};

const saveSession = (session) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

function App() {
  const [session, setSession] = useState(() => readSession());
  const [activePage, setActivePage] = useState('overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState('');

  const token = session?.token;

  const notify = useCallback((message) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2800);
  }, []);

  const api = useCallback(
    async (path, options = {}) => {
      const headers = {
        ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers
      };
      const response = await fetch(path, { ...options, headers });
      if (response.status === 204) return {};
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || data.code || 'Request failed');
      }
      return data;
    },
    [token]
  );

  const refreshProfile = useCallback(async () => {
    if (!token) return;
    try {
      const data = await api('/api/farmer/me');
      const nextSession = { ...session, farmer: data.farmer };
      setSession(nextSession);
      saveSession(nextSession);
    } catch {
      clearSession();
      setSession(null);
    }
  }, [api, session, token]);

  useEffect(() => {
    refreshProfile();
  }, []);

  const handleAuth = (authSession) => {
    setSession(authSession);
    saveSession(authSession);
    setActivePage('overview');
    notify('Session ready. Your features are connected.');
  };

  const handleLogout = () => {
    clearSession();
    setSession(null);
    setActivePage('overview');
    notify('Signed out.');
  };

  const pageProps = { api, session, notify, setActivePage, onAuth: handleAuth };
  const page = useMemo(() => {
    if (!session && activePage !== 'overview') {
      return <AuthPrompt setActivePage={setActivePage} />;
    }

    switch (activePage) {
      case 'advisor':
        return <AdvisorPage {...pageProps} />;
      case 'decision':
        return <DecisionOSPage {...pageProps} />;
      case 'crops':
        return <CropsPage {...pageProps} />;
      case 'market':
        return <MarketPage {...pageProps} />;
      case 'finance':
        return <FinancePage {...pageProps} />;
      case 'logistics':
        return <LogisticsPage {...pageProps} />;
      case 'community':
        return <CommunityPage {...pageProps} />;
      case 'resources':
        return <ResourcesPage {...pageProps} />;
      default:
        return <OverviewPage {...pageProps} />;
    }
  }, [activePage, api, notify, session]);

  return (
    <div className="ks-app">
      <header className="ks-header">
        <button
          className="ks-icon-button ks-mobile-toggle"
          type="button"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} />
        </button>
        <button className="ks-brand" type="button" onClick={() => setActivePage('overview')}>
          <span className="ks-brand-mark">
            <Leaf size={22} />
          </span>
          <span>
            <strong>KrishiSathi</strong>
            <small>Connected farm workspace</small>
          </span>
        </button>
        <nav className="ks-nav">
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={activePage === item.id}
              onClick={setActivePage}
            />
          ))}
        </nav>
        <div className="ks-header-actions">
          {session ? (
            <>
              <span className="ks-user-chip">{session.farmer?.name || 'Farmer'}</span>
              <button className="ks-button ks-button-ghost" type="button" onClick={handleLogout}>
                <LogOut size={17} />
                Logout
              </button>
            </>
          ) : (
            <button className="ks-button" type="button" onClick={() => setActivePage('overview')}>
              <LogIn size={17} />
              Login
            </button>
          )}
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.aside
            animate={{ opacity: 1 }}
            className="ks-mobile-panel"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div className="ks-mobile-card">
              <div className="ks-mobile-title">
                <strong>Pages</strong>
                <button
                  className="ks-icon-button"
                  type="button"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>
              {navItems.map((item) => (
                <NavButton
                  key={item.id}
                  item={item}
                  active={activePage === item.id}
                  onClick={(id) => {
                    setActivePage(id);
                    setMobileOpen(false);
                  }}
                />
              ))}
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <main className="ks-page-wrap">
        <AnimatePresence mode="wait">
          <motion.section
            key={activePage}
            animate={{ opacity: 1, y: 0 }}
            className="ks-page"
            exit={{ opacity: 0, y: -16 }}
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {page}
          </motion.section>
        </AnimatePresence>
      </main>

      {session ? (
        <VoiceRecorder
          floating
          token={token}
          onCommand={({ intent }) => {
            if (intent) notify(`Voice command: ${intent}`);
          }}
          onTranscript={({ answer }) => {
            if (answer) notify('Voice answer ready.');
          }}
        />
      ) : null}

      <AnimatePresence>
        {toast ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="ks-toast"
            exit={{ opacity: 0, y: 20 }}
            initial={{ opacity: 0, y: 20 }}
          >
            {toast}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function NavButton({ item, active, onClick }) {
  const Icon = item.icon;
  return (
    <button
      className={`ks-nav-button ${active ? 'is-active' : ''}`}
      type="button"
      onClick={() => onClick(item.id)}
    >
      <Icon size={17} />
      <span>{item.label}</span>
    </button>
  );
}

export default App;



