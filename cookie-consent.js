// ===== CONSENSO COOKIE (opt-in) =====
// Google Analytics si carica SOLO dopo "Accetta". Nessun cookie di statistica
// prima della scelta. La scelta resta in localStorage (non e' un cookie) ed e'
// legata a CONSENT_VERSION: se cambiano i servizi usati, alzare la versione per
// richiedere di nuovo il consenso.
// Riapertura del banner: qualsiasi elemento con [data-cookie-settings].
(function () {
    var GA_ID = 'G-C3ER6DN593';
    var STORAGE_KEY = 'tt_cookie_consent';
    var CONSENT_VERSION = 1;

    var TEXTS = {
        it: { title: 'Cookie e privacy', body: 'Usiamo cookie di statistica (Google Analytics) solo se ci dai il consenso, per capire come viene usato il sito. I cookie tecnici necessari sono sempre attivi.', more: 'Informativa privacy', accept: 'Accetta', reject: 'Rifiuta' },
        en: { title: 'Cookies and privacy', body: 'We use statistics cookies (Google Analytics) only with your consent, to understand how the site is used. Necessary technical storage is always active.', more: 'Privacy policy', accept: 'Accept', reject: 'Reject' },
        de: { title: 'Cookies und Datenschutz', body: 'Wir verwenden Statistik-Cookies (Google Analytics) nur mit Ihrer Einwilligung, um zu verstehen, wie die Website genutzt wird. Technisch notwendige Speicherungen sind immer aktiv.', more: 'Datenschutzerklärung', accept: 'Akzeptieren', reject: 'Ablehnen' },
        fr: { title: 'Cookies et confidentialité', body: 'Nous utilisons des cookies statistiques (Google Analytics) uniquement avec votre consentement, pour comprendre l\'utilisation du site. Le stockage technique nécessaire est toujours actif.', more: 'Politique de confidentialité', accept: 'Accepter', reject: 'Refuser' },
        ru: { title: 'Файлы cookie и конфиденциальность', body: 'Мы используем статистические cookie (Google Analytics) только с вашего согласия, чтобы понять, как используется сайт. Необходимое техническое хранение всегда активно.', more: 'Политика конфиденциальности', accept: 'Принять', reject: 'Отклонить' },
        ar: { title: 'ملفات تعريف الارتباط والخصوصية', body: 'نستخدم ملفات تعريف الارتباط الإحصائية (Google Analytics) فقط بموافقتك، لفهم كيفية استخدام الموقع. التخزين التقني الضروري نشط دائمًا.', more: 'سياسة الخصوصية', accept: 'قبول', reject: 'رفض' }
    };

    function getLang() {
        var lang = 'it';
        try {
            /* global currentLang */
            if (typeof currentLang === 'string') lang = currentLang;
            else lang = localStorage.getItem('tt_lang') || 'it';
        } catch (e) {}
        return TEXTS[lang] ? lang : 'it';
    }

    function readConsent() {
        try {
            var c = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (c && c.v === CONSENT_VERSION && typeof c.analytics === 'boolean') return c;
        } catch (e) {}
        return null;
    }

    function saveConsent(analytics) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: CONSENT_VERSION, analytics: analytics, ts: new Date().toISOString() }));
        } catch (e) {}
    }

    var gaLoaded = false;
    function loadGA() {
        if (gaLoaded) return;
        gaLoaded = true;
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', GA_ID);
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
    }

    // Cancella i cookie _ga* su tutte le varianti di dominio possibili.
    function deleteGACookies() {
        var host = location.hostname;
        var parts = host.split('.');
        var domains = ['', host, '.' + host];
        if (parts.length > 2) domains.push('.' + parts.slice(-2).join('.'));
        document.cookie.split(';').forEach(function (c) {
            var name = c.split('=')[0].trim();
            if (name.indexOf('_ga') !== 0 && name !== '_gid' && name !== '_gat') return;
            domains.forEach(function (d) {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
            });
        });
    }

    var banner = null;

    function render() {
        var lang = getLang();
        var tx = TEXTS[lang];
        banner.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        banner.setAttribute('lang', lang);
        banner.querySelector('#ccTitle').textContent = tx.title;
        banner.querySelector('.cc-text').textContent = tx.body + ' ';
        banner.querySelector('.cc-link').textContent = tx.more;
        banner.querySelector('[data-cc="reject"]').textContent = tx.reject;
        banner.querySelector('[data-cc="accept"]').textContent = tx.accept;
    }

    function build() {
        banner = document.createElement('div');
        banner.className = 'cc-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-modal', 'false');
        banner.setAttribute('aria-labelledby', 'ccTitle');
        banner.setAttribute('aria-describedby', 'ccDesc');
        banner.setAttribute('tabindex', '-1');
        banner.hidden = true;
        banner.innerHTML =
            '<div class="cc-inner">' +
                '<div class="cc-copy">' +
                    '<p class="cc-title" id="ccTitle"></p>' +
                    '<p id="ccDesc"><span class="cc-text"></span><a class="cc-link" href="privacy.html"></a></p>' +
                '</div>' +
                '<div class="cc-actions">' +
                    '<button type="button" class="cc-btn" data-cc="reject"></button>' +
                    '<button type="button" class="cc-btn" data-cc="accept"></button>' +
                '</div>' +
            '</div>';
        banner.querySelector('[data-cc="accept"]').addEventListener('click', function () { choose(true); });
        banner.querySelector('[data-cc="reject"]').addEventListener('click', function () { choose(false); });
        banner.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && readConsent()) close();
        });
        document.body.appendChild(banner);
    }

    var lastFocus = null;
    function open() {
        if (!banner) build();
        render();
        lastFocus = document.activeElement;
        banner.hidden = false;
        // Focus sul dialogo (non su un pulsante, per non evidenziare una scelta).
        banner.focus({ preventScroll: true });
    }

    function close() {
        if (!banner) return;
        banner.hidden = true;
        if (lastFocus && lastFocus.focus && lastFocus !== document.body) lastFocus.focus({ preventScroll: true });
    }

    function choose(analytics) {
        var prev = readConsent();
        saveConsent(analytics);
        close();
        if (analytics) {
            loadGA();
        } else if (gaLoaded || (prev && prev.analytics)) {
            // Revoca: togli i cookie gia' scritti e ricarica per fermare gtag.
            deleteGACookies();
            location.reload();
        }
    }

    function init() {
        var consent = readConsent();
        if (consent && consent.analytics) loadGA();
        if (!consent) open();

        document.addEventListener('click', function (e) {
            var el = e.target.closest && e.target.closest('[data-cookie-settings]');
            if (!el) return;
            e.preventDefault();
            open();
        });

        // Homepage: se l'utente cambia lingua, il banner segue.
        var langSelect = document.getElementById('langSelect');
        if (langSelect) langSelect.addEventListener('change', function () {
            if (banner && !banner.hidden) setTimeout(render, 0);
        });
    }

    window.TTCookieConsent = { open: open };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
