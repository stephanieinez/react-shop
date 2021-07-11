import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Icon } from "../Icon";
import { ShoppingCartModal } from "../ShoppingCartModal";
import { VisuallyHidden } from "../VisuallyHidden";
import { Wrapper, Number } from "./ShoppingCartIcon.styles";

/**
 * If there are items added to the cart, it renders the number.
 * This component acts as the toggle to open the shopping cart dialog modal.
 */
export function ShoppingCartIcon() {
  const { itemsInCart } = useContext(ProductContext);
  const [showItemsInCart, setShowItemsInCart] = useState(false);
  const numberOfItemsInCart = itemsInCart.length;

  return (
    <>
      <Wrapper
        onClick={() => setShowItemsInCart(true)}
        data-testid="open-cart-button"
      >
        <VisuallyHidden>Open shopping cart</VisuallyHidden>
        <Icon name="shopping-cart" />
        {numberOfItemsInCart !== 0 && (
          <Number data-testid="items-in-cart">{numberOfItemsInCart}</Number>
        )}
      </Wrapper>
      <ShoppingCartModal
        isOpen={showItemsInCart}
        onDismiss={() => setShowItemsInCart(false)}
      />
    </>
  );
}
