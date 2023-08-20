
"use client"
import { useAppSelector } from "@/redux/store/hooks";

function ProductList1 (){
    const product = useAppSelector((state) => {
        console.log(state.products)
    })
    return(
        <div>new list</div>
    )
    
}

export default ProductList1 