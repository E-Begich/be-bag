import React from 'react';
import { useParams } from 'react-router-dom';
import DATA from '../Data';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to cart");

    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const dispatch = useDispatch();

    const handleCart = () => {
        if (cartBtn === "Add to cart") {
            dispatch(addItem(product));
            setCartBtn("Remove from cart");
        } else {
            dispatch(delItem(product));
            setCartBtn("Add to cart");
        }

    }
    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <p className="lead">{product.desc} </p>
                        <h2 className="my-4">{product.price} €</h2>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-dark"><span className="fa fa-shopping-cart me-1"></span>{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;