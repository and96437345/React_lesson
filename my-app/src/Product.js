import React from "react";
import Slider from "./Swiper";

const ProductCard = ({ product }) => {
        const [inBasket, setInBasket] = useState(false);
        const addToBasket = () => {
            setInBasket(true);
        }
    return (
        <div class="product-card">
            <div className="product-card__image">
                <img src={product.src} alt={product.name}/>
            </div>
            <Slider />
            <h3 className="product-card__title">
                {product.name}
            </h3>
            <div className="product-card__desc">
                {product.desc}
            </div>
            <div className="product-card__price">
                {product.price}
            </div>
            <button onClick={addToBasket}>
            { inBasket ? "В корзине" : "Добавить в корзину"}
            </button>
        </div>
    );
};

export default ProductCard;
