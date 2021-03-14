import React from "react"

function Product( { status, image, name, price } ) {
    return (
        <>
            <article>
                <span>{status}</span>
                <img src={image} alt="De tas is niet beschikaar"/>
                <p>{name}</p>
                <h4>{price}</h4>
            </article>
        </>
    )
}

export default Product