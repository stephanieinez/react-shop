import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button/Button.styles";
import {
  StyledDialogOverlay,
  StyledDialogContent,
  Items,
  ItemWrapper,
  Image,
  Name,
  Price,
  Total,
  EmptyText,
} from "./ShoppingCartModal.styles";

/**
 * Uses a ReachUI dialog modal as the foundation of this component (https://reach.tech/dialog/)
 * Adds custom stylings and passes in all required functionality.
 */
export function ShoppingCartModal({ isOpen, onDismiss }) {
  const { itemsInCart } = useContext(ProductContext);
  if (!isOpen) {
    return null;
  }

  // calculates total price of items currently in the cart
  function totalPrice() {
    return itemsInCart.reduce((acc, item) => acc + (item.price || 0), 0);
  }

  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDialogContent aria-label="shopping-cart">
        <Button onClick={onDismiss}>Continue Shopping</Button>

        {itemsInCart.length > 0 ? (
          <>
            <Items data-testid="cart-items">
              {itemsInCart.map((item, index) => (
                <ItemWrapper key={`cart-item-${index}`}>
                  <Image src={item.image} />
                  <div>
                    <Name>{item.name}</Name>
                    <Price>{formatPrice(item.price)}</Price>
                  </div>
                </ItemWrapper>
              ))}
            </Items>

            <Total data-testid="total-price">
              Total Price: {formatPrice(totalPrice())}
            </Total>
          </>
        ) : (
          <EmptyText>Your cart is empty</EmptyText>
        )}
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
}
