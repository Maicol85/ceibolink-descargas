# CeiboLink

El puente entre el ecógrafo y EcoSmart. Recibe las imágenes que manda el equipo y las deja listas para que EcoSmart las levante. Corre en tu computadora y no se conecta a internet.

## [Descargar CeiboLink 1.1.1 para Mac](https://github.com/Maicol85/ceibolink-descargas/releases/latest/download/CeiboLink-1.1.1.pkg)

Si el botón no baja el archivo, entrá a [la página de la última versión](https://github.com/Maicol85/ceibolink-descargas/releases/latest) y bajá el archivo que termina en .pkg, en la sección Assets.

## Qué necesitás

- Una Mac. Windows todavía no está disponible.
- EcoSmart abierto en Chrome. Edge todavía no se probó. Safari no funciona por ahora.
- Probado hasta ahora en una sola Mac con chip Apple. En Mac con chip Intel todavía no se probó.

## Cómo instalarlo

1. Bajá el archivo con el botón de arriba. Termina en .pkg y queda en tu carpeta de Descargas.
2. Abrilo con doble clic. Como todavía no está firmado, macOS avisa que no pudo verificarlo. Para aprobarlo: Ajustes del Sistema → Privacidad y seguridad → Abrir igualmente. Los nombres pueden variar según tu versión de macOS.
3. Seguí los pasos del instalador. Te va a pedir tu contraseña o tu huella.
4. Al terminar, abrí «Vincular CeiboLink» desde la carpeta Aplicaciones. Te muestra un código de 6 dígitos.
5. En EcoSmart, entrá a Configuración y escribí el código. Sirve una sola vez y vence a los 10 minutos.

Para sacarlo: abrí «Desinstalar CeiboLink» desde Aplicaciones. Te avisa cuántas imágenes hay esperando sin guardar y te pide confirmación antes de borrar nada.

## Verificá el archivo

La página de cada versión muestra la huella (SHA-256) de su instalador. Para comprobarla, en la Terminal: `shasum -a 256` seguido del nombre del archivo que bajaste. Tiene que dar exactamente esa huella.

## Cuidados

- CeiboLink traslada imágenes. No las interpreta, no mide nada y no sugiere ningún diagnóstico. No es un dispositivo médico certificado.
- Recomendamos activar FileVault (el cifrado del disco) en la computadora donde corra CeiboLink.
- En una computadora de una institución, consultá antes con informática.

## Orthanc (licencia GPLv3+)

CeiboLink incluye Orthanc como receptor de imágenes, tal como lo publica su proyecto. CeiboLink no lo compiló, no lo modificó y no lo firmó. La versión, el código fuente y la huella del programa incluido figuran en la página de cada versión. El texto completo de la licencia viene dentro del instalador.

- Sitio del proyecto: https://orthanc.uclouvain.be/
