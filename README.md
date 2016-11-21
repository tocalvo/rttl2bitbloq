# rttl2bitbloq
Conversor de politonos RTTTL a bloques de Bitbloq

Este conversor está en Javascript, para usarlo tienes que descargar el fichero app.js, e instalar nodejs (https://nodejs.org/es/download/)

Los politonos tienen que estar en formato RTTTL.

Son de este tipo:

'SuperManTheme:d=4,o=5,b=180:8g,8g,8g,c6,8c6,2g6,8p,8g6,8a.6,16g6,8f6,1g6,8p,8g,8g,8g,c6,8c6,2g6,8p,8g6,8a.6,16g6,8f6,8a6,2g.6,p,8c6,8c6,8c6,2b.6,g.6,8c6,8c6,8c6,2b.6,g.6,8c6,8c6,8c6,8b6,8a6,8b6,2c7,8c6,8c6,8c6,8c6,8c6,2c.6';

Para usarlo tienes que:
Instalar nodejs
Abrir el fichero app.js y cambiar :
La canción: para ello en la linea 184, tienes que quitar la que viene y añadir la nueva.
La ruta donde te dejara el fichero que podrás cargar en Bitbloq: En la linea 228 modifica "/Users/tom/song.bitbloq" por una ruta en tu pc donde tengas permisos, del tipo: "c:/DocumentsAndSettings/tuusuario/documents"
Después abrir un terminal en la carpeta donde está el fichero app.js y ejecuta "node app.js", eso debería dejarte el fichero song.bitbloq en la ruta que le has puesto y ya se podrá cargar dentro de Bitbloq.

Lo que hace el fichero es traducir las corcheas, semicorcheas y demás elementos del politono a tiempo y frecuencia. Luego crea un programa de Bitbloq con los bloques necesarios del Buzzer.