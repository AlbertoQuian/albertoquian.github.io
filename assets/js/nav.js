/* Menú móvil (☰): abre y cierra la cabecera. Sin dependencias. */
(function () {
  var sb = document.querySelector('.sidebar');
  var btn = document.querySelector('.menu-toggle');
  if (!sb || !btn) return;

  function set(open) {
    sb.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    btn.textContent = open ? '✕' : '☰';
  }

  btn.addEventListener('click', function () {
    set(!sb.classList.contains('open'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') set(false);
  });
  sb.addEventListener('click', function (e) {
    if (e.target.closest('.sidebar-nav a')) set(false);
  });
})();
