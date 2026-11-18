// Comportements du site, en JavaScript natif (pas de jQuery).
(function () {
  document.documentElement.classList.add('js');

  // Menu replié sous 1200 px ($menu dans _variables.scss). Sans JS, le bouton reste masqué et le menu déplié.
  var bouton = document.querySelector('.site-nav__toggle');
  var nav = document.getElementById('site-nav');
  if (bouton && nav) {
    bouton.hidden = false;
    bouton.addEventListener('click', function () {
      var ouvert = bouton.getAttribute('aria-expanded') === 'true';
      bouton.setAttribute('aria-expanded', String(!ouvert));
      nav.classList.toggle('is-open', !ouvert);
    });
  }

  // Démos : le cadre du service tiers n'est créé qu'au clic.
  document.querySelectorAll('.demo__cadre[data-embed]').forEach(function (cadre) {
    var lien = cadre.querySelector('.demo__charger');
    if (!lien) { return; }
    lien.addEventListener('click', function (e) {
      e.preventDefault();
      var iframe = document.createElement('iframe');
      iframe.src = cadre.getAttribute('data-embed');
      iframe.title = 'Démo : ' + cadre.getAttribute('data-titre');
      iframe.loading = 'lazy';
      iframe.setAttribute('allow', 'clipboard-write');
      cadre.classList.add('is-loaded');
      cadre.replaceChildren(iframe);
      iframe.focus();
    });
  });
})();
