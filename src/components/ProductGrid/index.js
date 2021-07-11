import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { ProductCard } from "../ProductCard";
import { ProductControls } from "../ProductControls";
import { Wrapper, GridWrapper } from "./ProductGrid.styles";

/**
 * Renders the full product grid, including the controls.
 * Products are fetched from the provider.
 */
export function ProductGrid() {
  const { products } = useContext(ProductContext);

  return (
    <Wrapper>
      <ProductControls numberOfDisplayedItems={products.length} />
      <GridWrapper data-testid="product-grid">
        {products.map(({ id, name, image, price, sizes }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            image={`${process.env.PUBLIC_URL}/assets/products/${image}`}
            price={price}
            sizes={sizes}
          />
        ))}
      </GridWrapper>
    </Wrapper>
  );
}
