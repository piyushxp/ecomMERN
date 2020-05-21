import React from "react";
import data from "../data";
import {Link} from "react-router-dom"
function ProductScreen(props){
    console.log(props.match.params.id)
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div >
        <div>
            <Link to="/">Back to Result</Link>
        </div>
        <div className="details">
            <div class="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
<li><h4>{product.name}</h4></li>
<li>{product.rating} Stars ({product.numReviews} Reviews)</li>
<li>{product.price}</li>

                    <li></li>

                </ul>
            </div>
        </div>
        </div>
        
}

export default ProductScreen;