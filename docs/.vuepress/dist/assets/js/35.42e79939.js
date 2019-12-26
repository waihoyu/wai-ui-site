(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{291:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("Los datos simulados son una parte integral del desarrollo front-end, el enlace clave para separar el desarrollo front-end y el back-end. Como acordamos anteriormente, la interfaz del lado del servidor, los datos de solicitud analógica e incluso la lógica pueden hacer que el desarrollo front-end sea independiente, no será bloqueado por el desarrollo del servidor.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("En el proyecto de mi empresa, el backend simula los datos mediante "),a("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("swagger"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(2),e._v(" "),a("p",[a("a",{attrs:{href:"http://petstore.swagger.io/?_ga=2.222649619.983598878.1509960455-2044209180.1509960455#/pet/addPet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo en línea"),a("OutboundLink")],1)]),e._v(" "),e._m(3),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-admin-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-admin-template"),a("OutboundLink")],1),e._v(" anteriormente utilizó "),a("a",{attrs:{href:"https://easy-mock.com/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("easy-mock"),a("OutboundLink")],1),e._v(" para simular datos.\nEs una visualización pura de front-end y puede generar rápidamente servicios de persistencia para datos analógicos. Muy fácil de usar y también se puede combinar con "),a("code",[e._v("swagger")]),e._v(", tiene soporte para cross-domain, ya sea un equipo o un proyecto personal, vale la pena intentarlo.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://easy-mock.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo en línea"),a("OutboundLink")],1)]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("Como "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-element-admin"),a("OutboundLink")],1),e._v(" es un proyecto personal de front-end puro, todos los datos de simulación son generados por "),a("a",{attrs:{href:"https://github.com/Nuysoft/Mock",target:"_blank",rel:"noopener noreferrer"}},[e._v("mockjs"),a("OutboundLink")],1),e._v(". Su principio es: interceptar todas las solicitudes y proxy al local, y luego simular datos, por lo que descubrirás que no se emiten solicitudes en "),a("code",[e._v("red")]),e._v(".")]),e._v(" "),a("p",[e._v("Pero su mayor problema es el mecanismo de implementación. Sobrescribe el objeto "),a("code",[e._v("XMLHttpRequest")]),e._v(" del navegador para interceptar todas las solicitudes y el proxy al local. En la mayoría de los casos es bastante conveniente de usar, pero debido a que reescribe el objeto "),a("code",[e._v("XMLHttpRequest")]),e._v(", por ejemplo, el método "),a("code",[e._v("progress")]),e._v(" o algunas bibliotecas de terceros que dependen de "),a("code",[e._v("XMLHttpRequest")]),e._v(" serán incompatibles. Mirando los "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues?utf8=%E2%9C%93&q=mock",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),a("OutboundLink")],1),e._v(" de mi proyecto, sabrás cuántas personas tienen problemas.")]),e._v(" "),e._m(6),e._v(" "),a("h2",{attrs:{id:"nueva-manera"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nueva-manera"}},[e._v("#")]),e._v(" Nueva manera "),a("Badge",{attrs:{text:"v4.0.0+"}})],1),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("La ventaja de esta manera es resolver los puntos críticos anteriores mientras se conservan las ventajas de 'mockjs'. Dado que nuestro simulacro se implementa completamente basado en "),a("code",[e._v("webpack-dev-serve")]),e._v(", "),a("code",[e._v("mock-server")]),e._v(" se iniciará automáticamente junto con el proyecto, y también pasará "),a("a",{attrs:{href:"https://github.com/paulmillr/chokidar",target:"_blank",rel:"noopener noreferrer"}},[e._v("chokidar"),a("OutboundLink")],1),e._v(" para observar los cambios en el contenido de la carpeta "),a("code",[e._v("mock")]),e._v(". Cuando se produce un cambio, la interfaz "),a("code",[e._v("mock-api")]),e._v(" registrada previamente se borra y la nueva interfaz se vuelve a montar dinámicamente para admitir actualizaciones. Si estás interesado, puedes mirar el código "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/mock-server.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("mock-server.js"),a("OutboundLink")],1),e._v('. Dado que es un verdadero "servidor", puedes conocer claramente la estructura de datos devuelta por la interfaz a través de la sección "red" de Chrome. Al mismo tiempo, resuelves el problema de que los '),a("code",[e._v("mockjs")]),e._v(" anteriores rescriben el objeto"),a("code",[e._v("XMLHttpRequest")]),e._v(", lo que hace que muchas bibliotecas de terceros fallen.")]),e._v(" "),a("p",[e._v("Todas las solicitudes para este proyecto se envían a través del paquete "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("request.js"),a("OutboundLink")],1),e._v(", mediante la lectura del código fuente puedes encontrar que todas las solicitudes están configuradas en "),a("code",[e._v("baseURL")]),e._v(", y este se configura dinámicamente al leer la variable de entorno "),a("code",[e._v("process.env.VUE_APP_BASE_API")]),e._v(", para que podamos usar diferentes entornos.")]),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("Si no deseas usar "),a("code",[e._v("mock-server")]),e._v(", solo el middleware "),a("code",[e._v("after")]),e._v(" de "),a("code",[e._v("webpack-dev-server")]),e._v(" desde "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue.config.js"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("Por ejemplo, necesito agregar una API para obtener la cantidad de comentarios debajo de un artículo en "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/api/article.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/api/article"),a("OutboundLink")],1),e._v(" a través de "),a("code",[e._v("fetchComments")]),e._v(". Primero crea una nueva api:")]),e._v(" "),e._m(14),a("p",[e._v("Después de declarar la API, necesitamos encontrar la carpeta simulada correspondiente "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/article.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("mock/article.js"),a("OutboundLink")],1),e._v(", debajo Creamos una API simulada que intercepte las rutas.")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._m(17),e._v(" "),a("p",[e._v("La operación más común es: has simulado algunos datos localmente, y una vez que el backend completa la API, reemplaza gradualmente la API del simulacro original.")]),e._v(" "),a("p",[e._v("Tomemos como ejemplo la API "),a("code",[e._v("getRoles")]),e._v(" en "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/api/role.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/api/role.js"),a("OutboundLink")],1),e._v(". Originalmente se simuló de "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/role/index.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("mock/role/index.js"),a("OutboundLink")],1),e._v(". Ahora necesitamos cambiarlo a datos reales de back-end, siempre que esté en "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/role/index.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("mock/role/index.js"),a("OutboundLink")],1),e._v(". Encuentra la ruta correspondiente y luego elimínala. En este momento puedes ver los datos reales en "),a("code",[e._v("network")]),e._v(".")]),e._v(" "),e._m(18),e._m(19),e._v(" "),a("p",[e._v("Actualmente, el proyecto solo inicia un "),a("code",[e._v("mock-server")]),e._v(", por supuesto, también puedes tener tu propia interfaz "),a("code",[e._v("mock-server")]),e._v(" o proxy. Algunas API pueden soportar este servicio, otras pueden soportar otros. Simplemente configúralos en un "),a("code",[e._v("baseURL")]),e._v(" diferente. "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("@/utils/request.js"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("A continuación, configura múltiples "),a("code",[e._v("proxy")]),e._v(" de acuerdo con las reglas de url establecidas en "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue.config.js"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentos relacionados"),a("OutboundLink")],1)]),e._v(" "),e._m(20),e._v(" "),a("p",[e._v("Ahora en "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/index.js#L19",target:"_blank",rel:"noopener noreferrer"}},[e._v("mock/index.js"),a("OutboundLink")],1),e._v(" también se encapsula un método simulado de front-end puro, solo necesita estar en "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/main.js"),a("OutboundLink")],1),e._v(":")]),e._v(" "),e._m(21),a("p",[e._v("Esto se convertirá en pura información simulada de front-end y al igual que la versión anterior a la "),a("code",[e._v("v4.0")]),e._v(", el principio es el anterior. La "),a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo"),a("OutboundLink")],1),e._v(" en línea que estás viendo actualmente es así.")]),e._v(" "),e._m(22),e._v(" "),a("p",[e._v("En muchas ocasiones, encontramos un uso local de datos simulados, entornos en línea que utilizan datos reales o entornos diferentes que utilizan datos diferentes.")]),e._v(" "),e._m(23),e._v(" "),a("p",[e._v("Debes asegurarte de que tu API simulada local sea coherente con todas las demás direcciones, excepto la ruta raíz. como:")]),e._v(" "),e._m(24),a("p",[e._v("Podemos usar las "),a("router-link",{attrs:{to:"/guide/essentials/deploy.html#environmental-variables"}},[e._v("variables de entorno")]),e._v(" para hacer diferentes entornos y solicitar diferentes rutas base de la API.")],1),e._v(" "),e._m(25),e._m(26),a("p",[e._v("Luego crea una instancia de "),a("code",[e._v("axios")]),e._v(" basada en la variable de entorno para tener una "),a("code",[e._v("baseURL")]),e._v(" diferente.\n"),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("@/utils/request.js"),a("OutboundLink")],1)]),e._v(" "),e._m(27),a("p",[e._v("De esta manera, podemos cambiar automáticamente las APIs locales y en línea en función de las variables de entorno.")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),a("p",[e._v("Los datos simulados solo se importan en el entorno local.")])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"datos-simulados"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datos-simulados"}},[this._v("#")]),this._v(" Datos simulados")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"swagger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swagger"}},[this._v("#")]),this._v(" Swagger")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("swagger")]),this._v(" es una herramienta de generación de documentos API REST que genera automáticamente documentación a partir de comentarios en el código. Puede ser multiplataforma, de código abierto, admite la mayoría de los idiomas, la comunidad es buena, en resumen, muy buena y recomendable.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"easy-mock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#easy-mock"}},[this._v("#")]),this._v(" Easy-mock")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("La versión en línea de "),t("code",[this._v("vue-admin-template")]),this._v(" ya no usa "),t("code",[this._v("easy-mock")]),this._v(". Debido a que el servicio gratuito en línea es muy inestable, se colgará de vez en cuando. Si lo necesitas, puede crear tu propio servicio de acuerdo con su tutorial.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"mockjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mockjs"}},[this._v("#")]),this._v(" Mockjs")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("También tiene un problema porque son datos que se simulan localmente y en realidad no realizan ninguna solicitud de red. Por lo tanto, la depuración local es muy problemática y solo se puede depurar mediante "),a("code",[e._v("console.log")]),e._v(". Toma el ejemplo de "),a("code",[e._v("vue-element-admin")]),e._v(". Si deseas averiguar qué datos devuelve la api "),a("code",[e._v("getInfo()")]),e._v(", solo puedes saberlo mirando el código fuente o manualmente "),a("code",[e._v("Debug")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Después de la versión "),t("code",[this._v("v4.0")]),this._v(", se lanzará un "),t("code",[this._v("mock-server")]),this._v(" localmente para simular los datos, y el entorno en línea continuará utilizando "),t("code",[this._v("mockjs")]),this._v(" para la simulación. (Debido a que este proyecto es un proyecto front-end puro, también puedes construir un servidor en línea para proporcionar datos).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"eliminar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eliminar"}},[this._v("#")]),this._v(" Eliminar")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Por defecto, las solicitudes locales son proxy para "),t("code",[this._v("http://localhost:${port}/mock")]),this._v(", y puedes modificar 'proxy' si deseas ajustar a tu propia dirección simulada.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// cambiar xxx-api/login => mock/login")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// detalles: https://cli.vuejs.org/config/#devserver-proxy")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("VUE_APP_BASE_API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("http://localhost:")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("port"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("/mock")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    changeOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    pathRewrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'^'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("VUE_APP_BASE_API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\nafter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./mock/mock-server.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Tenga en cuenta: esta operación requiere un reinicio del servidor.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"agregar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agregar"}},[this._v("#")]),this._v(" Agregar")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Si deseas agregar datos simulados, solo busca el archivo "),t("code",[this._v("mock")]),this._v(" en la carpeta raíz, agrega la ruta correspondiente, intercepta y simula los datos.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("fetchComments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("/article/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("id"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("/comments")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'get'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Ten en cuenta que la intercepción simulada se basa en el enrutamiento. Asegúrate de que la ruta de datos simulados coincida con tu ruta de la API (soporte regular)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// fetchComments mock")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// url debe coincidir con la ruta de tu api")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Por ejemplo, la ruta de fetchComments puede ser /article/1/comments or /article/2/comments")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Por lo que necesitas que coincida con regularidad")]),e._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/article/[A-Za-z0-9]/comments'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Debe ser del mismo tipo que tu interfaz define")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// return result")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// req y res ver detalles")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// https://expressjs.com/zh-cn/api.html#req")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'success'")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cambiar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cambiar"}},[this._v("#")]),this._v(" Cambiar")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Lo declarado en la api")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getRoles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/roles'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'get'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Encuentra la ruta correspondiente y elimina")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/roles'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("_")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" roles\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"servidores-multiples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servidores-multiples"}},[this._v("#")]),this._v(" Servidores múltiples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"habilitar-simulacion-de-front-end-puro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#habilitar-simulacion-de-front-end-puro"}},[this._v("#")]),this._v(" Habilitar simulación de front end puro")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" mockXHR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'../mock'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mockXHR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cambiar-datos-simulados-locales-y-en-linea"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cambiar-datos-simulados-locales-y-en-linea"}},[this._v("#")]),this._v(" Cambiar datos simulados locales y en línea")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("Easy-Mock")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("https://api-dev/login   // Solicitud local\n\nhttps://api-prod/login  // Solicitud en línea\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# .env.development")]),e._v("\nVUE_APP_BASE_API "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/dev-api'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Inyecta la ruta raíz de la API local")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# .env.production")]),e._v("\nVUE_APP_BASE_API "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/prod-api'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Inyecta la ruta raíz de la API de producción")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// crear una instancia de axios")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" service "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  baseURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("BASE_API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// base_url de la API")]),e._v("\n  timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// tiempo de espera de la solicitud")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("Mock.js")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Cuando usamos "),t("code",[this._v("Mock.js")]),this._v(" para simular datos localmente, el método de la API del mundo real se usa en línea. Esto es similar al método de easy-mock anterior. Principalmente damos por hecho que cuando se trata de un entorno en línea, usamos la API del mundo real. Solo importamos "),t("code",[this._v("Mock.js")]),this._v(" localmente.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// main.js")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// se requiere usar variables de entorno para determinarlo")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("NODE_ENV")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./mock'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// datos de simulación")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);