# HOW TO SET UP A PAGINATION GET REQUEST

We'll try to find out how to implement a get request that allows us to go through documents and filtering.

## STRUCTURE

On the client side, one has a parent component containing two children : one for tags, the other for pagination.

![illustration](../../../../public/illustration.jpg)

```jsx
const Composant = () => {

    const [page, setPage] = useState('/activities');

    const postArticle = (event) => {
        const option = event.target.value;
    }
    
    
    return <div className="container">
        <select name="page" id="page" onChange={postArticle}>
            <option value="/activities"> Activities</option>
            <option value="/actualities">Actualities</option>
        </select>
    </div>
}
```


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









