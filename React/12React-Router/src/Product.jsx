import { Link,Outlet } from "react-router-dom"

export default function Product(){
    return(
        <>
        <h1>welcome to product page</h1>
        <p>this is product page</p>

        <nav>
            <Link to="phone">Phone</Link> |
            <Link to="Laptop">Laptop</Link>
        </nav>

        <Outlet/>
         </>
    )
}