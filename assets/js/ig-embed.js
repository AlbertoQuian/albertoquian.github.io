/* Publicaciones de Instagram completas (imagen + texto). Cada iframe.ig-embed lleva data-ig (código de la
   publicación) y data-h (altura inicial). Se le pasa a Instagram el ancho real (wp), porque de él depende la
   maquetación, y después se ajusta la altura a la que informa la propia publicación. Sin dependencias. */
(function () {
  var frames = document.querySelectorAll('iframe.ig-embed[data-ig]');
  if (!frames.length) return;

  for (var i = 0; i < frames.length; i++) {
    var f = frames[i];
    var w = Math.round(f.getBoundingClientRect().width) || 500;
    f.style.height = (f.getAttribute('data-h') || '900') + 'px';
    f.src = 'https://www.instagram.com/p/' + f.getAttribute('data-ig') + '/embed/captioned/?cr=1&v=14&wp=' + w +
            '&rd=' + encodeURIComponent(location.origin) + '&rp=' + encodeURIComponent(location.pathname);
  }

  window.addEventListener('message', function (e) {
    if (e.origin !== 'https://www.instagram.com') return;
    var d;
    try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (x) { return; }
    if (!d || d.type !== 'MEASURE' || !d.details || !d.details.height) return;
    for (var j = 0; j < frames.length; j++) {
      if (frames[j].contentWindow === e.source) frames[j].style.height = d.details.height + 'px';
    }
  });
})();
