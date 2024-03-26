import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Products(){
    const {
        data: loadedProducts,
        isLoading,
        error} = useHttp('http://localhost:3000/meals', requestConfig, []);

        if(isLoading){
            return <p className="center">Loading data...</p>
        }

        if(error){
            return <Error title="Failed to load" message={error}/>
        }
    //const [loadedProducts, setLoadedProducts] = useState([]);

    /*useEffect(() => {
        async function fetchProducts(){
            const response = await fetch('http://localhost:3000/meals');
    
            if(!response.ok){
    
            }
    
            const products = await response.json();
            setLoadedProducts(products);
        }
        fetchProducts();
    }, []);*/
    

    return (
        <ul id="meals">
            {loadedProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
                ))}
        </ul>
    )
}