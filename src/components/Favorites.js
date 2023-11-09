import Products from "api/products.json"
import { useState,useEffect } from "react"
import ProductsItem from "./ui/ProductsItem";
export default function Favorites(params) {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products)
    }, []);

    return (
        <div>
           <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
           <div className="grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-6 gap-1  rounded-lg overflow-hidden ">
             {products.length && products.map((product,index) => <ProductsItem key = {index} product = {product} /> )}
           </div>
        </div>
    )
}