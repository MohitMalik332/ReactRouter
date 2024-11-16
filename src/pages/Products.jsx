import { Link } from "react-router-dom";

//we are using this as a reference, because actual data coming from DB will be something like this.
const PRODUCTS = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' },
]


const Product = () => {
    return (
        <>
            <h1>The Products Pages</h1>
            <ul>
                {PRODUCTS.map(prod =>
                    <li key={prod.id}><Link to={prod.id}>{prod.title}</Link></li>
                )}
            </ul>
        </>
    )
}

export default Product;