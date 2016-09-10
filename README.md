# ReactBasicUI
Interfaz web simple hecha con React.Js.

Para iniciar la aplicación, clone el proyecto y a continuación digite:
 1. npm install sobre el directorio del proyecto, para instalar las dependencias.
 2. npm start para iniciar la aplicación.

 La aplicación por defecto carga la información del archivo estático "news_mock.json".Este
 se encuentra en la carpeta "src/sources". Si desea cargar desde un servicio http, diríjase
 primero el archivo "/src/config/dev/constants.js" y en la constante *IPHost* escriba la ip
 de donde se quiere consumir el servicio. También debe cambiar las constantes *PORT* y  
 *RESOURCE*  donde debe escribir el puerto del host y la url del recurso respectivamente.

 Finalmente dirijase al archivo "src/actions/AppActions.js" y en la funcion "startNews"
ponga como comentario la funcion *api.getNewsOffline()* y quite habilite la función
*api.getNewsOnline()*.
