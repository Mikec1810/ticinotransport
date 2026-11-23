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

  function avvia() {
    var l = lingua();
    sistemaLink(l);
    applica(l);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', avvia);
  } else {
    avvia();
  }
})();
