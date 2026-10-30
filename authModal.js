/**
 * biotrade Universal Supabase Auth Modal & Navbar Controller (authModal.js)
 * Injects modal HTML and controls authentication UI across all pages.
 */

const BiotradeAuthUI = (function() {

  function injectAuthModal() {
    if (document.getElementById('biotrade-auth-modal')) return;

    const modalHtml = `
    <!-- ═══════ Supabase Authentication Modal ═══════ -->
    <div id="biotrade-auth-modal" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-md items-center justify-center p-4">
      <div class="bg-slate-900 border border-white/15 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl text-white relative">
        
        <!-- Close Button -->
        <button type="button" onclick="BiotradeAuthUI.closeModal()" class="absolute top-5 right-5 text-slate-400 hover:text-white text-lg font-bold cursor-pointer">✕</button>

        <!-- Brand Icon & Header -->
        <div class="text-center">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon/20 to-neon/5 border border-neon/30 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-neon/10">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF9D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 id="auth-modal-heading" class="text-xl font-extrabold text-white">เข้าสู่ระบบ biotrade</h3>
          <p id="auth-modal-subheading" class="text-xs text-slate-400 mt-1">ขับเคลื่อนเศรษฐกิจหมุนเวียนและกู้ภัยอาหาร</p>
        </div>

        <!-- Auth Tabs (Sign In / Sign Up) -->
        <div class="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
          <button type="button" onclick="BiotradeAuthUI.switchTab('signin')" id="tab-auth-signin" class="flex-1 py-2 text-xs font-bold rounded-lg transition-all text-neon bg-neon/10 border border-neon/20 cursor-pointer">
            เข้าสู่ระบบ (Sign In)
          </button>
          <button type="button" onclick="BiotradeAuthUI.switchTab('signup')" id="tab-auth-signup" class="flex-1 py-2 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white cursor-pointer">
            สมัครสมาชิกใหม่ (Sign Up)
          </button>
        </div>

        <!-- Alert Banner -->
        <div id="auth-alert" class="hidden p-3 rounded-xl text-xs font-semibold leading-relaxed"></div>

        <!-- ── TAB 1: SIGN IN FORM ── -->
        <form id="form-auth-signin" onsubmit="BiotradeAuthUI.handleSignIn(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">อีเมลผู้ใช้งาน (Email)</label>
            <input type="email" id="signin-email" required placeholder="example@biotrade.asia" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-neon" />
          </div>
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="text-xs font-semibold text-slate-300">รหัสผ่าน (Password)</label>
              <a href="javascript:void(0)" onclick="alert('กรุณาติดต่อ support@biotrade.asia เพื่อรีเซ็ตรหัสผ่าน')" class="text-[0.7rem] text-slate-400 hover:text-neon">ลืมรหัสผ่าน?</a>
            </div>
            <input type="password" id="signin-password" required placeholder="••••••••" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-neon" />
          </div>

          <button type="submit" id="btn-submit-signin" class="w-full py-3 px-4 rounded-xl bg-neon hover:bg-neon-dim text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-neon/20 cursor-pointer">
            เข้าสู่ระบบทันที
          </button>
        </form>

        <!-- ── TAB 2: SIGN UP FORM ── -->
        <form id="form-auth-signup" onsubmit="BiotradeAuthUI.handleSignUp(event)" class="space-y-3.5 hidden">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">ชื่อฟาร์ม / ร้านค้า / บริษัท</label>
            <input type="text" id="signup-shop" required placeholder="เช่น ฟาร์มเกษตรอินทรีย์ นครปฐม" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-neon" />
          </div>
          <div class="grid grid-cols-2 gap-2.5">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">ชื่อผู้ติดต่อ</label>
              <input type="text" id="signup-name" required placeholder="สมชาย" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-neon" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">เบอร์โทรศัพท์</label>
              <input type="tel" id="signup-phone" required placeholder="081-xxx-xxxx" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-neon" />
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">อีเมลสำหรับเข้าสู่ระบบ (Email)</label>
            <input type="email" id="signup-email" required placeholder="contact@farm.co.th" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-neon" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">รหัสผ่าน (อย่างน้อย 6 ตัวอักษร)</label>
            <input type="password" id="signup-password" minlength="6" required placeholder="••••••••" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-neon" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">บทบาทการใช้งานหลัก</label>
            <select id="signup-role" class="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-neon">
              <option value="seller">ผู้ขายวัตถุดิบ (โรงงาน/ร้านอาหาร/ฟาร์ม)</option>
              <option value="buyer">ผู้รับซื้อชีวมวล (โรงแปรรูป/โรงปุ๋ย/อาหารสัตว์)</option>
              <option value="both">ทั้งผู้ซื้อและผู้ขาย (Dual Gateway)</option>
            </select>
          </div>

          <!-- PDPA Consent Checkbox -->
          <div class="flex items-start gap-2 pt-1">
            <input type="checkbox" id="signup-pdpa" required class="mt-0.5 w-3.5 h-3.5 accent-neon cursor-pointer" />
            <label for="signup-pdpa" class="text-[0.68rem] text-slate-400 leading-snug cursor-pointer">
              ข้าพเจ้ายินยอมตามนโยบาย PDPA และเงื่อนไขการค้าวัตถุดิบชีวมวลของ biotrade
            </label>
          </div>

          <button type="submit" id="btn-submit-signup" class="w-full py-3 px-4 rounded-xl bg-neon hover:bg-neon-dim text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-neon/20 cursor-pointer">
            ลงทะเบียน & ขอรับอีเมลยืนยัน
          </button>
        </form>

        <!-- ── TAB 3: EMAIL VERIFICATION PENDING SCREEN ── -->
        <div id="view-email-verify" class="hidden text-center py-4 space-y-4">
          <div class="w-16 h-16 rounded-3xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
            <svg class="w-8 h-8 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <h4 class="text-base font-bold text-white">ระบบได้ส่งอีเมลยืนยันตัวตนแล้ว</h4>
            <p class="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
              กรุณาตรวจสอบกล่องข้อความที่อีเมล:
              <br /><strong id="verify-email-display" class="text-neon font-mono">user@example.com</strong>
            </p>
            <p class="text-[0.7rem] text-slate-400 mt-2">
              เปิดอีเมลและคลิกลิงก์ยืนยัน เพื่อเปิดใช้งานระบบการสั่งซื้อและออกใบรับรอง ESG
            </p>
          </div>

          <div class="pt-2 flex flex-col gap-2">
            <button type="button" onclick="BiotradeAuthUI.handleResendEmail()" class="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-all border border-white/10 cursor-pointer">
              ส่งอีเมลยืนยันใหม่อีกครั้ง (Resend Email)
            </button>
            <!-- Simulated Verify Button for instant demo testing -->
            <button type="button" onclick="BiotradeAuthUI.handleSimulateVerify()" class="w-full py-2 px-3 rounded-lg text-slate-400 hover:text-emerald-400 text-[0.7rem] transition-all cursor-pointer">
              ✓ จำลองคลิกลิงก์ยืนยันอีเมลสำเร็จ (Simulate Confirm Email)
            </button>
          </div>
        </div>

        <!-- Footer Help -->
        <div class="pt-2 border-t border-white/5 flex items-center justify-between text-[0.68rem] text-slate-500">
          <span class="flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>เชื่อมต่อ Supabase Live Project สำเร็จ</span>
          </span>
          <button type="button" onclick="BiotradeAuthUI.openSupabaseConfigPrompt()" class="text-slate-400 hover:text-neon underline">
            ตั้งค่า Supabase URL/Key
          </button>
        </div>

      </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  function openModal(defaultTab = 'signin') {
    injectAuthModal();
    const modal = document.getElementById('biotrade-auth-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      switchTab(defaultTab);
    }
  }

  function closeModal() {
    const modal = document.getElementById('biotrade-auth-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  function switchTab(tab) {
    const tabSignin = document.getElementById('tab-auth-signin');
    const tabSignup = document.getElementById('tab-auth-signup');
    const formSignin = document.getElementById('form-auth-signin');
    const formSignup = document.getElementById('form-auth-signup');
    const verifyView = document.getElementById('view-email-verify');
    const heading = document.getElementById('auth-modal-heading');
    const alertBox = document.getElementById('auth-alert');

    if (alertBox) alertBox.classList.add('hidden');
    if (verifyView) verifyView.classList.add('hidden');

    if (tab === 'signin') {
      tabSignin.className = "flex-1 py-2 text-xs font-bold rounded-lg transition-all text-neon bg-neon/10 border border-neon/20 cursor-pointer";
      tabSignup.className = "flex-1 py-2 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white cursor-pointer";
      formSignin.classList.remove('hidden');
      formSignup.classList.add('hidden');
      heading.textContent = "เข้าสู่ระบบ biotrade";
    } else if (tab === 'signup') {
      tabSignup.className = "flex-1 py-2 text-xs font-bold rounded-lg transition-all text-neon bg-neon/10 border border-neon/20 cursor-pointer";
      tabSignin.className = "flex-1 py-2 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white cursor-pointer";
      formSignup.classList.remove('hidden');
      formSignin.classList.add('hidden');
      heading.textContent = "สมัครสมาชิกบัญชี biotrade";
    }
  }

  function showEmailVerifyScreen(email) {
    document.getElementById('form-auth-signin').classList.add('hidden');
    document.getElementById('form-auth-signup').classList.add('hidden');
    document.getElementById('view-email-verify').classList.remove('hidden');
    document.getElementById('verify-email-display').textContent = email;
    document.getElementById('auth-modal-heading').textContent = "ตรวจสอบอีเมลของคุณ";
  }

  function showAlert(msg, type = 'error') {
    const alertBox = document.getElementById('auth-alert');
    if (!alertBox) return;
    alertBox.classList.remove('hidden', 'bg-rose-500/20', 'text-rose-300', 'border-rose-500/30', 'bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/30');
    
    if (type === 'error') {
      alertBox.classList.add('bg-rose-500/20', 'text-rose-300', 'border', 'border-rose-500/30');
    } else {
      alertBox.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border', 'border-emerald-500/30');
    }
    alertBox.innerHTML = msg;
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    const btn = document.getElementById('btn-submit-signin');

    btn.disabled = true;
    btn.innerHTML = 'กำลังเข้าสู่ระบบ...';

    const res = await SupabaseAuth.signIn({ email, password });
    btn.disabled = false;
    btn.innerHTML = 'เข้าสู่ระบบทันที';

    if (res.error) {
      if (res.error.isEmailUnconfirmed) {
        showEmailVerifyScreen(email);
        showAlert(res.error.message, 'error');
      } else {
        showAlert(res.error.message || 'เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจสอบอีเมลหรือรหัสผ่าน', 'error');
      }
      return;
    }

    closeModal();
    updateNavbarState();
    alert('เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับสู่ biotrade');
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const fullName = document.getElementById('signup-name').value;
    const phone = document.getElementById('signup-phone').value;
    const shopName = document.getElementById('signup-shop').value;
    const role = document.getElementById('signup-role').value;
    const btn = document.getElementById('btn-submit-signup');

    btn.disabled = true;
    btn.innerHTML = 'กำลังส่งอีเมลยืนยันตัวตน...';

    const res = await SupabaseAuth.signUp({ email, password, fullName, phone, role, shopName });
    btn.disabled = false;
    btn.innerHTML = 'ลงทะเบียน & ขอรับอีเมลยืนยัน';

    if (res.error) {
      showAlert(res.error.message || 'การสมัครสมาชิกขัดข้อง กรุณาลองใหม่อีกครั้ง', 'error');
      return;
    }

    showEmailVerifyScreen(email);
  }

  function handleSimulateVerify() {
    const email = document.getElementById('verify-email-display').textContent;
    const ok = SupabaseAuth.simulateVerifyEmail(email);
    if (ok) {
      alert('ยืนยันอีเมลสำเร็จ! บัญชีของคุณพร้อมใช้งานแล้ว');
      closeModal();
      updateNavbarState();
    } else {
      alert('ไม่พบรายการที่รอการยืนยัน');
    }
  }

  async function handleResendEmail() {
    const email = document.getElementById('verify-email-display').textContent;
    const res = await SupabaseAuth.resendVerificationEmail(email);
    if (res.error) {
      showAlert(res.error.message || "การส่งอีเมลซ้ำขัดข้อง", 'error');
    } else {
      showAlert("ส่งลิงก์ยืนยันใหม่ไปยัง " + email + " เรียบร้อยแล้ว กรุณาตรวจสอบกล่องข้อความ", 'success');
    }
  }

  function openSupabaseConfigPrompt() {
    const cfg = SupabaseAuth.getConfig();
    const url = prompt("ระบุ Supabase Project URL:", cfg.supabaseUrl);
    if (url === null) return;
    const key = prompt("ระบุ Supabase Anon/Public Key:", cfg.supabaseAnonKey);
    if (key === null) return;

    SupabaseAuth.saveConfig(url, key);
    alert("บันทึกการตั้งค่า Supabase เรียบร้อยแล้ว!");
  }

  // Update dynamic user button on top navbar
  function updateNavbarState() {
    const user = SupabaseAuth.getCurrentUser();
    const authContainers = document.querySelectorAll('.auth-nav-slot');

    authContainers.forEach(container => {
      if (user) {
        const name = user.user_metadata?.shop_name || user.user_metadata?.full_name || user.email || 'ผู้ใช้งาน';
        const initial = (name[0] || 'U').toUpperCase();
        container.innerHTML = `
          <div class="flex items-center gap-2">
            <a href="dashboard.html" class="flex items-center gap-2 py-1 px-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-colors">
              <div class="w-6 h-6 rounded-lg bg-neon text-slate-950 font-bold text-xs flex items-center justify-center">
                ${initial}
              </div>
              <span class="text-xs font-semibold text-white max-w-[120px] truncate">${name}</span>
            </a>
            <button type="button" onclick="BiotradeAuthUI.handleSignOut()" title="ออกจากระบบ" class="text-slate-400 hover:text-rose-400 p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </button>
          </div>
        `;
      } else {
        container.innerHTML = `
          <button type="button" onclick="BiotradeAuthUI.openModal('signin')" class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-all cursor-pointer">
            <svg class="w-3.5 h-3.5 text-neon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>เข้าสู่ระบบ / สมัคร</span>
          </button>
        `;
      }
    });
  }

  async function handleSignOut() {
    if (confirm('คุณต้องการออกจากระบบหรือไม่?')) {
      await SupabaseAuth.signOut();
      updateNavbarState();
      alert('ออกจากระบบเรียบร้อยแล้ว');
    }
  }

  // Listen to auth events
  if (typeof window !== 'undefined') {
    window.addEventListener('biotrade_auth_state_changed', updateNavbarState);
  }

  // Initialize
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      injectAuthModal();
      updateNavbarState();
    });
  }

  return {
    openModal,
    closeModal,
    switchTab,
    handleSignIn,
    handleSignUp,
    handleSimulateVerify,
    handleResendEmail,
    handleSignOut,
    openSupabaseConfigPrompt,
    updateNavbarState
  };
})();

if (typeof window !== 'undefined') {
  window.BiotradeAuthUI = BiotradeAuthUI;
}
