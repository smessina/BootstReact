# BootstReact

Proyecto base para crear aplicaciones web con **React** + **Bootstrap**.

**Características:**

 - Basado en **[Create React App](https://create-react-app.dev)** y [**Bootstrap 4.5**](https://getbootstrap.com)
 - Implementa las dependencias [`bootstrap`](https://www.npmjs.com/package/bootstrap), [`jquery`](https://www.npmjs.com/package/jquery) y [`popper.js`](https://www.npmjs.com/package/popper.js)
 - Compilación simplificada para deploy en [**GitHub Pages**](https://pages.github.com)

## Instalación

**- Opción 1:** Fork del proyecto **BootstReact**

1. Forkear una copia en las opciones de **GitHub**

![GitHub Fork](https://i.ibb.co/DgxwMvJ/Bootst-React-Git-Hub-Fork.jpg)

2. Seleccionar en el fork, como fuente de **GitHub Pages**, la opción "**master branch /docs folder**"

![master branch /docs folder](https://i.ibb.co/thsFRst/Bootst-React-Git-Hub-Pages.jpg)

3. Clonar el fork del repositorio

		git clone https://github.com/[usuario]/BootstReact

4. Actualizar en la url de la homepage en **package.json** el nombre de usuario y repositorio

		"homepage" : "https://[usuario].github.io/[repositorio]",

5. Ejecutar `npm install` para descargar todas las dependencias de **BootstReact**

6. Listo... a codear, compilar, commitear y pushear.

---

**- Opción 2:** Implementación paso a paso

1. Crear un proyecto de **React**

		npx create-react-app mi-proyecto

2. Instalar las dependencia de **Bootstrap 4**

		npm install bootstrap jquery popper.js

3. Incorporar las dependencias a **index.js** 

		import $ from 'jquery';
		import Popper from 'popper.js';
		import 'bootstrap/dist/css/bootstrap.min.css';
		import 'bootstrap/dist/js/bootstrap.bundle.min.js';
		
		window.jQuery = window.$ = $
		window.Popper = Popper

4. Reconfigurar compilación en **package.json** para deployar en **GitHub Pages**

		"homepage" : "https://[usuario].github.io/[repositorio]",
		"scripts" : {
			[...]
			"build" : "react-scripts build && rm -rf docs && mv build docs",
			[...]
		},

5. Seleccionar como fuente de **GitHub Pages** la opción "**master branch /docs folder**"

![master branch /docs folder](https://i.ibb.co/thsFRst/Bootst-React-Git-Hub-Pages.jpg)

---

**- Opción 3:** Replicado de **BootstReact**

1. Crear un nuevo repositorio

2. Clonar este repositorio

		git clone https://github.com/smessina/BootstReact.git

3. Actualizar en la url de la homepage en **package.json** el nombre de usuario y repositorio

		"homepage" : "https://[usuario].github.io/[repositorio]",

4. Ejecutar `npm install` para descargar todas las dependencias de **BootstReact**

5. Actualizar la url del repositorio remoto

		git remote set-url origin https://github.com/[usuario]/[repositorio].git

6. Hacer un push "forzado" para conservar el historial de commits iniciales de **BootstReact**

		git push --force origin master
 
 7. Listo... a codear, compilar, commitear y pushear.
