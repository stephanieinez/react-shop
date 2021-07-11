import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button/Button.styles";
import { Link, Wrapper, Image, Name, Price, Sizes } from "./ProductCard.styles";

/**
 * Renders the product card, which is used in the product grid.
 * Clicking the `Add to cart` button, adds the product to the
 * cart items array and disables the button.
 */
export function ProductCard({ name, image, price, sizes, id }) {
  const { addItemtoCart } = useContext(ProductContext);
  const [addedToCart, setAddedToCart] = useState(false);

  function handleClick() {
    addItemtoCart({ name, image, price });
    setAddedToCart(true);
  }

  return (
    <Wrapper data-testid={`product-${id}`}>
      <Link href={`/product/${id}`}>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
        <Price>{formatPrice(price)}</Price>
        <Sizes>Sizes Available: {sizes.join(", ")}</Sizes>
      </Link>
      <Button
        disabled={addedToCart}
        onClick={handleClick}
        data-testid="cart-button"
      >
        {addedToCart ? "Added" : "Add to cart"}
      </Button>
    </Wrapper>
  );
}
