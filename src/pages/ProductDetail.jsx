import { useParams } from 'react-router-dom'


const ProductDetail = () => {
    const params = useParams();
//this param object is a simple js object, which contains every dynamic path segment because of useParam


    return (
        <>
            <h1>Product Details...</h1>
            <p>{params.productId}</p>
        </>
    )
}

export default ProductDetail;


//The useParam hook is used to retrive the dynamic parameters from the current URL. 
//we can set a dynamic value in URL using ' : ' colons.
// e.g:  products/:ID
// if the url is :-    products/37 
// useParam will return 37, it is recognised as a value after ":" colon symbol.