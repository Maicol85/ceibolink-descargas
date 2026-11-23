# CeiboLink

El puente entre el ecógrafo y EcoSmart. Recibe las imágenes que manda el equipo y las deja listas para que EcoSmart las levante. Corre en tu computadora y no se conecta a internet.

## [Descargar CeiboLink 1.4.0 — Windows y Mac](https://descargas.ceibomed.com/)

La página de descarga tiene los dos instaladores, con los pasos de cada sistema y los carteles que te va a mostrar la computadora la primera vez. Si preferís bajarlo desde acá, los archivos están en [la página de la versión 1.4.0](https://github.com/Maicol85/ceibolink-descargas/releases/tag/v1.4.0), en la sección Assets:

- **Windows:** `CeiboLink-1.4.0-windows-x64.exe` — 17.875.795 bytes
- **Mac:** `CeiboLink-1.4.0.pkg` — 44.910.371 bytes

## Qué necesitás

- **Windows** de 64 bits (x64) — no funciona en Windows ARM — **o una Mac**. El instalador de Mac trae chip Apple e Intel, pero hasta ahora sólo se probó en una Mac con chip Apple.
- EcoSmart abierto en Chrome. Edge todavía no se probó. Safari no funciona por ahora.
- En Windows, la instalación pide permisos de administrador. En una computadora de una institución, eso lo hace informática.

## Los dos instaladores todavía no están firmados

Es lo primero que vas a ver, y los dos sistemas lo avisan a su manera:

- **Windows** muestra un cartel azul, «Windows protegió tu PC». No es un virus: Windows no reconoce al autor. Para seguir: «Más información» → «Ejecutar de todas formas».
- **macOS** dice que no pudo verificar quién hizo CeiboLink y no te deja abrirlo. Se resuelve en Ajustes del Sistema → Privacidad y seguridad → «Abrir de todas formas». Los nombres pueden variar según tu versión de macOS.

En Windows puede faltar además un componente de Microsoft, el «Microsoft Visual C++ 2015-2022 Redistributable (x64)». Si el instalador lo pide, hay que instalarlo, reiniciar y volver a abrirlo. Los pasos completos de los dos sistemas están en [la página de descarga](https://descargas.ceibomed.com/).

## Verificá el archivo

La página de descarga y la página de cada versión muestran la huella (SHA-256) de cada instalador. Para comprobarla: en Mac, en la Terminal, `shasum -a 256` seguido del nombre del archivo que bajaste; en Windows, en `cmd`, `certutil -hashfile` seguido del nombre del archivo y de `SHA256`. Tiene que dar exactamente esa huella.

## Cuidados

- CeiboLink traslada imágenes. No las interpreta, no mide nada y no sugiere ningún diagnóstico. No es un dispositivo médico certificado.
- Recomendamos activar FileVault (el cifrado del disco) en la computadora donde corra CeiboLink.
- En una computadora de una institución, consultá antes con informática.

## Orthanc (licencia GPLv3+)

CeiboLink incluye Orthanc como receptor de imágenes, tal como lo publica su proyecto. CeiboLink no lo compiló, no lo modificó y no lo firmó. La versión, el código fuente y la huella del programa incluido figuran en la página de cada versión. El texto completo de la licencia viene dentro del instalador.

- Sitio del proyecto: https://orthanc.uclouvain.be/

## Versiones anteriores

La [1.1.1 para macOS](https://github.com/Maicol85/ceibolink-descargas/releases/tag/v1.1.1) queda publicada como archivo histórico, con su huella, para quien la tenga instalada. Para instalar de cero, usá la 1.4.0.
