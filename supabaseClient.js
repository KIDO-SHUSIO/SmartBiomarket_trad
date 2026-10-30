/**
 * biotrade Supabase Authentication & Realtime Client (supabaseClient.js)
 * Connected to Live Supabase Backend:
 * Project URL: https://bafeagmzjzbyjlrbpquv.supabase.co
 * Anon / Public Key: sb_publishable_U2nzY-c9RipbwuycB_V9Dg_KeEnQ21I
 */

const SupabaseAuth = (function() {
  const CONFIG_KEY = 'biotrade_supabase_config';
  const ACTIVE_USER_CACHE_KEY = 'biotrade_supabase_cached_user';
  const MOCK_SESSION_KEY = 'biotrade_mock_auth_session';

  // Live Supabase Project Credentials
  const DEFAULT_CONFIG = {
    supabaseUrl: "https://bafeagmzjzbyjlrbpquv.supabase.co",
    supabaseAnonKey: "sb_publishable_U2nzY-c9RipbwuycB_V9Dg_KeEnQ21I"
  };

  let client = null;
  let isMockMode = false;
  let cachedUser = null;

  // Retrieve stored configuration (or fallback to live defaults)
  function getConfig() {
    try {
      const stored = localStorage.getItem(CONFIG_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // If stored config has old dummy url, upgrade to live project
        if (parsed.supabaseUrl && !parsed.supabaseUrl.includes('xyzcompany')) {
          return parsed;
        }
      }
      localStorage.setItem(CONFIG_KEY, JSON.stringify(DEFAULT_CONFIG));
      return DEFAULT_CONFIG;
    } catch (e) {
      return DEFAULT_CONFIG;
    }
  }

  function saveConfig(url, key) {
    const config = { supabaseUrl: url.trim(), supabaseAnonKey: key.trim() };
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
    initClient();
    return config;
  }

  // Initialize Supabase Client
  function initClient() {
    const cfg = getConfig();

    if (typeof window !== 'undefined' && window.supabase && cfg.supabaseUrl && cfg.supabaseAnonKey) {
      try {
        client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
          }
        });
        isMockMode = false;
        console.log("biotrade: Connected to Live Supabase Backend ->", cfg.supabaseUrl);

        // Listen for Supabase Auth state changes (Login, Logout, Email Confirmed Redirect)
        client.auth.onAuthStateChange((event, session) => {
          console.log("biotrade Auth State Change:", event, session ? session.user.email : 'No session');
          if (session && session.user) {
            cachedUser = session.user;
            localStorage.setItem(ACTIVE_USER_CACHE_KEY, JSON.stringify(session.user));

            if (typeof biotradeDB !== 'undefined') {
              biotradeDB.updateUser({
                id: session.user.id,
                email: session.user.email,
                shopName: session.user.user_metadata?.shop_name || session.user.user_metadata?.full_name || "Enterprise User",
                contactPerson: session.user.user_metadata?.full_name || "",
                phone: session.user.user_metadata?.phone || "",
                role: session.user.user_metadata?.role || "seller"
              });
            }
          } else if (event === 'SIGNED_OUT') {
            cachedUser = null;
            localStorage.removeItem(ACTIVE_USER_CACHE_KEY);
          }
          dispatchAuthEvent(event, session);
        });

        // Initial sync of current session
        client.auth.getSession().then(({ data: { session } }) => {
          if (session && session.user) {
            cachedUser = session.user;
            localStorage.setItem(ACTIVE_USER_CACHE_KEY, JSON.stringify(session.user));
            dispatchAuthEvent('INITIAL_SESSION', session);
          }
        });

      } catch (err) {
        console.warn("biotrade: Supabase init error, using fallback mode:", err);
        isMockMode = true;
      }
    } else {
      isMockMode = true;
    }
  }

  // ── Session & User Helpers (Synchronous for fast UI rendering) ──
  function getCurrentUser() {
    if (cachedUser) return cachedUser;

    try {
      const cached = localStorage.getItem(ACTIVE_USER_CACHE_KEY);
      if (cached) {
        cachedUser = JSON.parse(cached);
        return cachedUser;
      }
      const mockSession = localStorage.getItem(MOCK_SESSION_KEY);
      if (mockSession) {
        return JSON.parse(mockSession).user;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  async function getSession() {
    if (!isMockMode && client) {
      return await client.auth.getSession();
    }
    try {
      const session = localStorage.getItem(MOCK_SESSION_KEY);
      return { data: { session: session ? JSON.parse(session) : null }, error: null };
    } catch (e) {
      return { data: { session: null }, error: null };
    }
  }

  // ── Sign Up with Live Supabase & Email Verification ────────
  async function signUp({ email, password, fullName, phone, role, shopName }) {
    if (!email || !password) {
      return { error: { message: "กรุณาระบุอีเมลและรหัสผ่าน (Email and password required)" } };
    }

    if (!isMockMode && client) {
      try {
        // Redirect to current page upon clicking verification link in email
        const redirectUrl = window.location.origin + window.location.pathname;

        const { data, error } = await client.auth.signUp({
          email: email.trim(),
          password: password,
          options: {
            data: {
              full_name: fullName || "",
              phone: phone || "",
              role: role || "seller",
              shop_name: shopName || fullName || ""
            },
            emailRedirectTo: redirectUrl
          }
        });

        if (error) throw error;

        // Sync local profile state
        if (typeof biotradeDB !== 'undefined' && data.user) {
          biotradeDB.updateUser({
            id: data.user.id,
            email: email.trim(),
            shopName: shopName || fullName || "ผู้ใช้งานใหม่",
            contactPerson: fullName || "",
            phone: phone || "",
            role: role || "seller"
          });
        }

        dispatchAuthEvent('SIGNED_IN_OR_PENDING', data);
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err };
      }
    }

    // Fallback Mock Engine
    const mockUser = {
      id: "usr_" + Math.random().toString(36).substring(2, 9),
      email: email.trim(),
      created_at: new Date().toISOString(),
      email_confirmed_at: null,
      user_metadata: {
        full_name: fullName || "สมชาย ปลอดขยะ",
        phone: phone || "081-234-5678",
        role: role || "seller",
        shop_name: shopName || "ฟาร์มเกษตรชีวมวลตัวอย่าง"
      }
    };
    const pendingKey = 'biotrade_pending_verification_' + email.trim();
    localStorage.setItem(pendingKey, JSON.stringify(mockUser));

    return {
      data: {
        user: mockUser,
        session: null,
        requiresEmailVerification: true
      },
      error: null
    };
  }

  // ── Sign In with Live Supabase ─────────────────────────────
  async function signIn({ email, password }) {
    if (!email || !password) {
      return { error: { message: "กรุณาระบุอีเมลและรหัสผ่าน" } };
    }

    if (!isMockMode && client) {
      try {
        const { data, error } = await client.auth.signInWithPassword({
          email: email.trim(),
          password: password
        });

        if (error) {
          // Detect Supabase unconfirmed email error
          if (error.message && (error.message.toLowerCase().includes('email not confirmed') || error.code === 'email_not_confirmed')) {
            return {
              data: null,
              error: {
                message: "อีเมลยังไม่ได้รับการยืนยัน กรุณาคลิกลิงก์ยืนยันในกล่องข้อความอีเมลของคุณ (Email not confirmed)",
                isEmailUnconfirmed: true,
                email: email.trim()
              }
            };
          }
          throw error;
        }

        if (data.user) {
          cachedUser = data.user;
          localStorage.setItem(ACTIVE_USER_CACHE_KEY, JSON.stringify(data.user));

          if (typeof biotradeDB !== 'undefined') {
            biotradeDB.updateUser({
              id: data.user.id,
              email: data.user.email,
              shopName: data.user.user_metadata?.shop_name || "Enterprise User",
              contactPerson: data.user.user_metadata?.full_name || "",
              phone: data.user.user_metadata?.phone || "",
              role: data.user.user_metadata?.role || "seller"
            });
          }
        }

        dispatchAuthEvent('SIGNED_IN', data);
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err };
      }
    }

    // Mock mode fallback
    const pendingKey = 'biotrade_pending_verification_' + email.trim();
    const pendingData = localStorage.getItem(pendingKey);

    if (pendingData) {
      const userObj = JSON.parse(pendingData);
      if (!userObj.email_confirmed_at) {
        return {
          data: null,
          error: {
            message: "อีเมลยังไม่ได้รับการยืนยัน กรุณาคลิกลิงก์ยืนยันในกล่องข้อความอีเมลของคุณ (Email not confirmed)",
            isEmailUnconfirmed: true,
            email: email.trim()
          }
        };
      }
    }

    const sessionUser = {
      id: "usr_sb_" + Math.random().toString(36).substring(2, 8),
      email: email.trim(),
      email_confirmed_at: new Date().toISOString(),
      user_metadata: {
        full_name: "คุณสมชาย เจริญกิจ",
        phone: "089-765-4321",
        role: "both",
        shop_name: "โรงงานแปรรูปอาหาร & ปุ๋ยชีวภาพ นครปฐม"
      }
    };
    const mockSession = { access_token: "mock_jwt_" + Date.now(), user: sessionUser };
    localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(mockSession));
    localStorage.setItem(ACTIVE_USER_CACHE_KEY, JSON.stringify(sessionUser));
    cachedUser = sessionUser;

    dispatchAuthEvent('SIGNED_IN', mockSession);
    return { data: mockSession, error: null };
  }

  // ── Resend Live Verification Email ────────────────────────
  async function resendVerificationEmail(email) {
    if (!email) return { error: { message: "กรุณาระบุอีเมล" } };

    if (!isMockMode && client) {
      try {
        const { data, error } = await client.auth.resend({
          type: 'signup',
          email: email.trim(),
          options: {
            emailRedirectTo: window.location.origin + window.location.pathname
          }
        });
        if (error) throw error;
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err };
      }
    }

    return {
      data: { message: "ส่งลิงก์ยืนยันไปยัง " + email + " สำเร็จแล้ว" },
      error: null
    };
  }

  // ── Simulate Confirm Email (For Demo/Testing convenience) ──
  function simulateVerifyEmail(email) {
    const pendingKey = 'biotrade_pending_verification_' + email.trim();
    const stored = localStorage.getItem(pendingKey);
    let user = null;

    if (stored) {
      user = JSON.parse(stored);
      user.email_confirmed_at = new Date().toISOString();
      localStorage.setItem(pendingKey, JSON.stringify(user));
    } else {
      user = {
        id: "usr_sim_" + Date.now(),
        email: email.trim(),
        email_confirmed_at: new Date().toISOString(),
        user_metadata: {
          full_name: "ผู้ใช้งานที่ยืนยันแล้ว",
          shop_name: "สถานประกอบการยืนยันตัวตน",
          role: "both"
        }
      };
    }

    const session = { access_token: "sim_token_" + Date.now(), user: user };
    localStorage.setItem(ACTIVE_USER_CACHE_KEY, JSON.stringify(user));
    localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(session));
    cachedUser = user;

    dispatchAuthEvent('SIGNED_IN', session);
    return true;
  }

  // ── Sign Out ──────────────────────────────────────────────
  async function signOut() {
    if (!isMockMode && client) {
      try {
        await client.auth.signOut();
      } catch (e) {
        console.warn("Supabase signOut error:", e);
      }
    }
    cachedUser = null;
    localStorage.removeItem(ACTIVE_USER_CACHE_KEY);
    localStorage.removeItem(MOCK_SESSION_KEY);
    dispatchAuthEvent('SIGNED_OUT', null);
    return { error: null };
  }

  function dispatchAuthEvent(eventName, payload) {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('biotrade_auth_state_changed', {
        detail: { event: eventName, payload: payload }
      }));
    }
  }

  // Get raw client if needed for custom queries
  function getClient() {
    return client;
  }

  // Auto-init on load
  if (typeof window !== 'undefined') {
    initClient();
  }

  return {
    signUp,
    signIn,
    signOut,
    getCurrentUser,
    getSession,
    resendVerificationEmail,
    simulateVerifyEmail,
    saveConfig,
    getConfig,
    getClient,
    isMockMode: () => isMockMode
  };
})();

if (typeof window !== 'undefined') {
  window.SupabaseAuth = SupabaseAuth;
}
