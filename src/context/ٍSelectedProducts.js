import React, { useContext, useState } from "react";

const SelectedProductsContext = React.createContext()

export function useProductContext(){
    return useContext(SelectedProductsContext)
}

export function SelectedProductsProvider({children}){
    const [selectedProducts , setSelectedProducts] = useState([])

    return(
        <SelectedProductsContext.Provider value={{selectedProducts , setSelectedProducts}}>
            {children}
        </SelectedProductsContext.Provider>
    )
}











// import React, { useState , useContext ,useRef , useEffect } from 'react'

// const SelectedProductsContext  = React.createContext()
// const ProductAddedContext  = React.createContext()
// const ProductDeletedContext  = React.createContext()

// export function useProductAdded(){
//     return useContext(ProductAddedContext)
// }

// export function useProductDeleted(){
//     return useContext(ProductDeletedContext)
// }


// export function SelectedProductsProvider({children}){

//     const [selectedProducts , setSelectedProducts] = useState([])
//     const latestSelectedProducts = useRef(selectedProducts);

//     useEffect(() => {
//       latestSelectedProducts.current = selectedProducts;
//     }, [selectedProducts]);

//     function addProduct(product) {
//         setSelectedProducts((prevSelectedProducts) => [
//           ...prevSelectedProducts,
//           product,
//         ]);
//         console.log(latestSelectedProducts.current);
//       }

//     function removeProduct(product) {
//         setSelectedProducts((prevSelectedProducts) =>
//           prevSelectedProducts.filter((p) => p !== product)
//         );
//         console.log(latestSelectedProducts.current);
//       }

//     return(
//         <SelectedProductsContext.Provider value={selectedProducts}>
//             <ProductAddedContext.Provider value={addProduct}>
//                 <ProductDeletedContext.Provider value={removeProduct}>
//                     {children}
//                 </ProductDeletedContext.Provider>
//             </ProductAddedContext.Provider>
//         </SelectedProductsContext.Provider>
//     )
// }