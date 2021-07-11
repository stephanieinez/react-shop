import { useState, createContext, useMemo } from "react";
import { filterItems } from "../constants/filterItems";
import { sortItems } from "../constants/sortItems";
import data from "../data/products.json";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [filter, setFilter] = useState(filterItems.ALL);
  const [sort, setSort] = useState(sortItems.ASCENDING);
  const [itemsInCart, setItemsInCart] = useState([]);

  function addItemtoCart(newItem) {
    setItemsInCart([...itemsInCart, newItem]);
  }

  // memorises the current product array and then applies the filter or sort
  // when either of these values change. Returns the updated product array.
  const products = useMemo(() => {
    function filterBySize() {
      const applyFilter = (size) =>
        data.products.filter((product) => product.sizes.includes(size));

      switch (filter) {
        case filterItems.S:
          return applyFilter(filterItems.S);
        case filterItems.M:
          return applyFilter(filterItems.M);
        case filterItems.L:
          return applyFilter(filterItems.L);
        case filterItems.XL:
          return applyFilter(filterItems.XL);
        default:
          return data.products;
      }
    }

    function sortByPrice(items) {
      if (sort === sortItems.ASCENDING) {
        return items.sort((a, b) => (a.price > b.price ? 1 : -1));
      } else {
        return items.sort((a, b) => (a.price > b.price ? -1 : 1));
      }
    }

    return sortByPrice(filterBySize());
  }, [filter, sort]);

  return (
    <ProductContext.Provider
      value={{
        filter,
        sort,
        setFilter,
        setSort,
        itemsInCart,
        addItemtoCart,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
