# Plantilla: Arquitectura FrontEnd 

##### Plantilla Básica para poder empezar casi cualquier proyecto en **FrontEnd**
>
> Metodología de carpetas en FrontEnd

>Estructura en imágenes (svg, webp, iconos, etc)
Readme, licencia MIT, gitignore
Fuentes externas al OS
Semiestructuras en código
Comentarios introductorios  

---

###### _Copyright 2023 - Toni Ferra_

## Archivos del proyecto web

Explicación de la importancia de cada semiestructura de archivos:

#### .gitignore

Este archivo contiene una lista de archivos y directorios que no deben incluirse en el control de versiones de Git.

#### 404.html

Este archivo se muestra cuando un usuario intenta acceder a una URL que no existe.

#### favicon.ico

Este archivo es un icono que se muestra en la pestaña del navegador del usuario.

#### humans.txt

Este archivo es un documento que proporciona información sobre los creadores del proyecto.

#### icon.png

Este archivo es un icono que se muestra en las aplicaciones de escritorio.

#### index.html

Este archivo es el punto de entrada principal del sitio web.

#### LICENSE

Este archivo contiene la licencia de software del proyecto.

#### README.md

Este archivo es un documento que proporciona información sobre el proyecto.

#### robots.txt

Este archivo controla cómo los motores de búsqueda indexan el sitio web.

#### site.webmanifest

Este archivo contiene información sobre el sitio web, como su título, descripción y colores.

#### sitemap.xml

Este archivo contiene un mapa del sitio web, que ayuda a los motores de búsqueda a indexar el sitio web de manera más eficiente.

#### assets

Es la carpeta donde se guardan los archivos originales del proyecto o archivos complementarios al proyecto.

#### assets

const opciones = {
    seisCaracteres: [{
        unElemento: 6,
        dosElementos: 3,
        tresElementos: 2,
        mayMinNumSimb: [{
        mayMin: 2,
        numSimb: 1,
        }]
    }],
    ochoCaracteres: [{
        unElemento: 8,
        dosElementos: 4,
        tresElementos: [{
            dosPrimeros: 3,
            ultimo: 2,
        }],
        MayMinNumSimb: 2
    }],
    diezCaracteres: [{
        unElemento: 10,
        dosElementos: 5,
        mayMinNum: [{
            may: 4,
            minNum: 3,
        }],
        minNumSimb: [{
            min: 4,
            numSimb: 3,
        }],
        mayNumSimb: [{
            may: 4,
            numSimb: 3,
        }],
        mayMinSimb: [{
            mayMin: 4,
            simb: 2,
        }],
        mayMinNumSimb: [{
            mayMin: 3,
            numSimb: 2,
        }]
    }]
};