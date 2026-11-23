/* Traduzione delle pagine interne.
   I testi stanno in testi-pagine.js (variabile TESTI_PAGINE), divisi per pagina e per chiave.
   L'italiano resta nell'HTML: qui si sostituisce solo quando la lingua è un'altra. */
(function () {
  'use strict';

  var LINGUE = ['it', 'de', 'fr', 'en', 'ru', 'ar'];

  function pagina() {
    var p = location.pathname.split('/').pop();
    return p || 'index.html';
  }

  function lingua() {
    var u = new URLSearchParams(location.search).get('lang');
    if (u && LINGUE.indexOf(u) > -1) {
      try { localStorage.setItem('tt_lang', u); } catch (e) {}
      return u;
    }
    try { return localStorage.getItem('tt_lang') || 'it'; } catch (e) { return 'it'; }
  }

  function applica(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    var dizionario = (typeof TESTI_PAGINE !== 'undefined') && TESTI_PAGINE[pagina()];
    if (lang === 'it' || !dizionario) return;

    document.querySelectorAll('[data-tp]').forEach(function (e) {
      var voce = dizionario[e.getAttribute('data-tp')];
      if (voce && voce[lang]) e.innerHTML = voce[lang];
    });

    var titoli = dizionario.__meta;
    if (titoli && titoli[lang]) {
      if (titoli[lang].titolo) document.title = titoli[lang].titolo;
      var d = document.querySelector('meta[name="description"]');
      if (d && titoli[lang].descrizione) d.setAttribute('content', titoli[lang].descrizione);
    }
  }

  /* i link della barra lingue restano sulla pagina corrente invece di tornare alla home */
  function sistemaLink(lang) {
    document.querySelectorAll('.lingue-testo a').forEach(function (a) {
      var codice = (a.textContent || '').trim().toLowerCase();
      if (LINGUE.indexOf(codice) === -1) return;
      a.setAttribute('href', pagina() + '?lang=' + codice);
      a.classList.toggle('on', codice === lang);
    });
  }


  /* voci di menu e piè di pagina, uguali su tutte le pagine interne */
  var COMUNI = {
    'trasporto-veicoli.html': {de:'Fahrzeugtransport', fr:'Transport de véhicules', en:'Vehicle transport', ru:'Перевозка авто', ar:'نقل المركبات'},
    'trasporto-moto.html': {de:'Motorradtransport', fr:'Transport de motos', en:'Motorcycle transport', ru:'Перевозка мотоциклов', ar:'نقل الدراجات'},
    'trasporto-supercar-carrello-chiuso.html': {de:'Geschlossener Anhänger', fr:'Remorque fermée', en:'Enclosed trailer', ru:'Закрытый прицеп', ar:'مقطورة مغلقة'},
    'pratiche-doganali.html': {de:'Zollformalitäten', fr:'Formalités douanières', en:'Customs paperwork', ru:'Таможня', ar:'معاملات جمركية'},
    'noleggio-furgoni.html': {de:'Transportervermietung', fr:'Location de fourgons', en:'Van rental', ru:'Аренда фургонов', ar:'تأجير الشاحنات'},
    'autosoccorso-stradale.html': {de:'Pannenhilfe', fr:'Dépannage', en:'Roadside assistance', ru:'Техпомощь', ar:'إنقاذ على الطريق'},
    'richiesta.html': {de:'Kontakt', fr:'Contact', en:'Contact', ru:'Контакты', ar:'اتصل بنا'},
    'privacy.html': {de:'Datenschutz', fr:'Confidentialité', en:'Privacy', ru:'Конфиденциальность', ar:'الخصوصية'}
  };

  function tradMenu(lang) {
    if (lang === 'it') return;
    document.querySelectorAll('header a[href], footer a[href]').forEach(function (a) {
      var f = (a.getAttribute('href') || '').split('/').pop().split('#')[0];
      var v = COMUNI[f];
      if (v && v[lang] && !a.querySelector('img')) a.textContent = v[lang];
    });
  }


  var CASA = {de:'Startseite', fr:'Accueil', en:'Home', ru:'Главная', ar:'الرئيسية'};

  function tradBriciole(lang) {
    if (lang === 'it') return;
    var b = document.querySelector('.breadcrumb');
    if (!b) return;
    b.querySelectorAll('a').forEach(function (a) {
      var f = (a.getAttribute('href') || '').split('/').pop().split('#')[0];
      if (!f || f === 'index.html') { a.textContent = CASA[lang] || a.textContent; return; }
      var v = COMUNI[f];
      if (v && v[lang]) a.textContent = v[lang];
    });
    var voce = COMUNI[pagina()];
    if (voce && voce[lang]) {
      var ultimo = b.lastChild;
      if (ultimo && ultimo.nodeType === 3) ultimo.textContent = ' / ' + voce[lang];
    }
  }

  function avvia() {
    var l = lingua();
    sistemaLink(l);
    tradMenu(l);
    tradBriciole(l);
    applica(l);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', avvia);
  } else {
    avvia();
  }
})();
