(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{285:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("Cuando se completan los proyectos, puedes compilar tu aplicación con solo ejecutar un comando:")]),e._v(" "),e._m(2),e._m(3),e._v(" "),s("p",[e._v("Si necesitas una compilación personalizada, como especificar el directorio dist, debes configurarlo a través de "),s("code",[e._v("outputDir")]),e._v(" en "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("config"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("La configuración de todos los entornos de prueba o variables de entorno formales se encuentra en el archivo "),s("code",[e._v(".env.xxxx")]),e._v(" como "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/.env.development",target:"_blank",rel:"noopener noreferrer"}},[e._v(".env.development"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(5),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("¡NOTA!")]),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("Puedes acceder a ellas en el código de tu aplicación:")]),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),s("p",[e._v("Después de ejecutar, puedes ver la distribución de tamaño específico en "),s("a",{attrs:{href:"http://localhost:9526/report.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:9526/report.html"),s("OutboundLink")],1)]),e._v(" "),e._m(11),e._v(" "),e._m(12)]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._m(17),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("Simplemente hablando, la diferencia entre ellos es el trato con el enrutamiento. "),s("code",[e._v("hashHistory")]),e._v(" es procesado por la ruta que sigue de "),s("code",[e._v("#")]),e._v(", la gestión de enrutamiento de front-end a través de "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML 5 History"),s("OutboundLink")],1),e._v(", y "),s("code",[e._v("browserHistory")]),e._v(" es similar a nuestra ruta de acceso de página habitual, y no con "),s("code",[e._v("#")]),e._v(", pero debe a través de la configuración del servidor.")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Ver detalles "),s("a",{attrs:{href:"https://router.vuejs.org/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-router document"),s("OutboundLink")],1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"compilar-y-desplegar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compilar-y-desplegar"}},[this._v("#")]),this._v(" Compilar y Desplegar")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"compilar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compilar"}},[this._v("#")]),this._v(" Compilar")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compilar para el entorno de producción")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build:prod\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compilar para el entorno de pruebas")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build:stage\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Después de que el paquete de compilación sea exitoso, la carpeta "),s("code",[e._v("dist")]),e._v(" se generará en el directorio raíz, que es la construcción de un archivo empaquetado, generalmente archivos estáticos como "),s("code",[e._v("***. js")]),e._v(", "),s("code",[e._v("***. css")]),e._v(", "),s("code",[e._v("index.html")]),e._v(", etc.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"variables-de-entorno"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables-de-entorno"}},[this._v("#")]),this._v(" Variables de entorno")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Todos se inyectan en el contexto global a través de los complementos "),t("code",[this._v("webpack.DefinePlugin")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Las variables de entorno deben comenzar con "),t("code",[this._v("VUE_APP_")]),this._v(". Tales como: "),t("code",[this._v("VUE_APP_API")]),this._v(", "),t("code",[this._v("VUE_APP_TITLE")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("VUE_APP_xxxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"analizar-el-tamano-del-archivo-de-compilacion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analizar-el-tamano-del-archivo-de-compilacion"}},[this._v("#")]),this._v(" Analizar el tamaño del archivo de compilación")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Si tu archivo de compilación es grande, puedes optimizar tu código compilando y analizando la distribución del tamaño de los módulos dependientes utilizando "),t("code",[this._v("webpack-bundle-analyzer")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run preview -- --report\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://wpimg.wallstcn.com/3fddf034-2b38-4299-b0d2-b748fb2abef0.jpg",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("Se recomienda utilizar gzip, después de usarlo, el volumen será solo el 1/3 del original más o menos. También puedes usar Lazy Loading o Code Splitting.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"publicar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publicar"}},[this._v("#")]),this._v(" Publicar")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Para la publicación, solo tienes que publicar el archivo estático resultante después de la compilación, que generalmente es el archivo estático en la carpeta "),t("code",[this._v("dist")]),this._v(", en tu cdn o servidor estático. Ten en cuenta que "),t("code",[this._v("index.html")]),this._v(" generalmente será una página de entrada para tu servicio de back-end. Es posible que debas cambiar la ruta de importación de la página después de determinar la estática para JS y CSS.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("En el despliegue puedes encontrar que la ruta del recurso es incorrecta, simplemente modifica la ruta del archivo de recurso "),t("code",[this._v("@/config/index.js")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// los cambios se configuran según tu propia ruta")]),this._v("\npublicPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'./'")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"enrutador-y-servidor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enrutador-y-servidor"}},[this._v("#")]),this._v(" Enrutador y servidor")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("En vue-element-admin, el enrutamiento front-end usa "),t("code",[this._v("vue-router")]),this._v(", por lo que tienes dos opciones: "),t("code",[this._v("browserHistory")]),this._v(" y "),t("code",[this._v("hashHistory")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Este proyecto utiliza "),t("code",[this._v("hashHistory")]),this._v(" de forma predeterminada, por lo que, si tienes "),t("code",[this._v("#")]),this._v(" en tu URL y deseas deshacerte de él, debes cambiar a "),t("code",[this._v("browserHistory")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Modificar el modo en "),t("code",[this._v("src/router/index.js")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// mode: 'history' // Necesita soporte de backend")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])}],!1,null,null,null);t.default=r.exports}}]);