/* Resalta el instalador que corresponde al sistema de quien está mirando.
 *
 * Lo que este archivo NO hace, a propósito: esconder el otro botón. Los dos
 * están siempre visibles, y si este archivo no corre —JavaScript apagado, un
 * bloqueador, un error— la página queda con las dos tarjetas iguales y los dos
 * botones funcionando. La detección sólo AGREGA el resaltado; nunca saca nada.
 *
 * Tampoco redirige, no mide nada, no manda nada a ninguna parte y no guarda
 * nada en el navegador. Es lo único que corre en esta página.
 */
(function () {
  'use strict';

  /* Tres formas de preguntar, de la más confiable a la más vieja.
     Devuelve 'windows', 'mac' o '' cuando no se puede decir. */
  function queSistema() {
    try {
      // 1) La moderna. En Chrome y Edge contesta 'Windows' o 'macOS'.
      var datos = navigator.userAgentData;
      if (datos && typeof datos.platform === 'string' && datos.platform !== '') {
        var p = datos.platform.toLowerCase();
        if (p.indexOf('win') === 0) { return 'windows'; }
        if (p.indexOf('mac') === 0) { return 'mac'; }
      }

      // 2) navigator.platform. Está en desuso pero sigue contestando en todos.
      //    En un iPad moderno dice 'MacIntel', así que después se descarta por táctil.
      if (typeof navigator.platform === 'string' && navigator.platform !== '') {
        var q = navigator.platform.toLowerCase();
        if (q.indexOf('win') !== -1) { return 'windows'; }
        if (q.indexOf('mac') !== -1) { return 'mac'; }
      }

      // 3) La cadena del navegador, como último recurso.
      if (typeof navigator.userAgent === 'string') {
        var r = navigator.userAgent.toLowerCase();
        if (r.indexOf('windows') !== -1) { return 'windows'; }
        if (r.indexOf('mac os x') !== -1 || r.indexOf('macintosh') !== -1) { return 'mac'; }
      }
    } catch (e) {
      // Si cualquiera de las tres tira, no se resalta nada y la página sigue
      // sirviendo igual. Un error acá no puede dejar a nadie sin descargar.
      return '';
    }
    return '';
  }

  /* Un celular o una tablet no son la computadora donde se instala esto: el
     ecógrafo se conecta a una Mac o a una PC.

     CUIDADO CON USAR EL TÁCTIL SOLO: muchas notebooks con Windows tienen pantalla
     táctil y contestan maxTouchPoints 10. Tratarlas como «celular» les sacaría el
     resaltado a máquinas donde CeiboLink SÍ se instala, que es la mitad del
     hospital. Así que el táctil se pregunta nada más para el caso que de verdad
     confunde: el iPad, que desde iPadOS 13 dice ser 'MacIntel' y es lo único que
     se hace pasar por una computadora de las que acá importan. */
  function esTactil() {
    try {
      return (navigator.maxTouchPoints || 0) > 1;
    } catch (e) {
      return false;
    }
  }

  /* Un teléfono que se nombra a sí mismo. Esto no se adivina por el táctil. */
  function esTelefono() {
    try {
      var u = (navigator.userAgent || '').toLowerCase();
      return u.indexOf('android') !== -1 ||
             u.indexOf('iphone') !== -1 ||
             u.indexOf('ipod') !== -1;
    } catch (e) {
      return false;
    }
  }

  function texto(elemento, frase) {
    if (!elemento) { return; }
    elemento.textContent = frase;   // textContent y no innerHTML: nada se interpreta
    elemento.hidden = false;
  }

  var sistema = queSistema();

  /* Portátil de mano: o se nombra como teléfono, o dice ser una Mac con pantalla
     táctil, que es un iPad. Una Windows táctil NO entra acá, a propósito. */
  var deMano = esTelefono() || (sistema === 'mac' && esTactil());

  var tarjetaWindows = document.getElementById('tarjeta-windows');
  var tarjetaMac = document.getElementById('tarjeta-mac');
  var cartel = document.getElementById('deteccion');

  if (!tarjetaWindows || !tarjetaMac) { return; }

  if (deMano) {
    texto(cartel, 'Parece que estás en un celular o una tablet. CeiboLink se instala en la computadora a la que vas a conectar el ecógrafo: abrí esta página ahí, o bajá desde acá el instalador que corresponda y pasalo a esa computadora.');
  } else if (sistema === 'windows') {
    tarjetaWindows.classList.add('destacada', 'primera');
    tarjetaMac.classList.add('segunda');
    texto(document.getElementById('marca-windows'), 'Parece que estás en Windows');
    texto(cartel, 'Parece que estás en Windows: el instalador que te toca es «Para Windows», en la tarjeta resaltada. El de Mac también está en esta página.');
  } else if (sistema === 'mac') {
    tarjetaMac.classList.add('destacada', 'primera');
    tarjetaWindows.classList.add('segunda');
    texto(document.getElementById('marca-mac'), 'Parece que estás en una Mac');
    texto(cartel, 'Parece que estás en una Mac: el instalador que te toca es «Para Mac», en la tarjeta resaltada. El de Windows también está en esta página.');
  }
  /* Si no se pudo decidir, no se escribe nada y quedan las dos tarjetas
     iguales. Decir «no pude saber en qué estás» no le sirve a nadie. */
})();
