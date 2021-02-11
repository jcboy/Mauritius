# À FAIRE

Mettre à jour les styles de l'input et des preview

## JEST

Remarque : Attention lorsqu'on teste des fonctions à les exporter comme module !
```javascript
// bien
module.exports = maFonction;
// pas bien
export default maFonction;
```

Remarque 2 : Jest ne reconnait pas la syntaxe ES6 pour l'importation:

```javascript
// bien
const maFonction = require('./maFonction.js'); 

// pas bien
import maFonction from './maFonction.js'
```



* commande utile : `npm run test -- --watch` (surveille les erreurs)

### ANNEXE

* Redux

* Stacking HOC

* Cross-cutting concerns

* PROBLEM : HOCs Inside the render Method
[Do not put HOC in render method](https://stackoverflow.com/questions/58941150/react-what-is-meant-by-do-not-use-hoc-s-in-the-render-method-of-a-component)

* https://reactjs.org/docs/higher-order-components.html

* https://codesandbox.io/s/withered-bash-0604e?file=/src/index.js

* https://daveceddia.com/usestate-hook-examples/

* https://stackoverflow.com/questions/37387351/reactjs-warning-setstate-cannot-update-during-an-existing-state-transiti



### MASTERCLASS

search engine optimisation

react snap (postbuild) : react-snap && firebase deploy --only hosting

webpack : optimize, uglify, minimise

codewar

skillvalue

next

dockerjs

electronjs

react-helmet

cda diplome

méthode uml et merise

certificat ssh

uml diagramme entité association dev

puppeteer

