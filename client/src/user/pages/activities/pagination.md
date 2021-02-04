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