import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { sortItems } from "../../constants/sortItems";
import { filterItems } from "../../constants/filterItems";
import {
  Wrapper,
  Title,
  Text,
  TitleWrapper,
  InputWrapper,
  Label,
  Select,
} from "./ProductControls.styles";

const sortOptions = [sortItems.ASCENDING, sortItems.DESCENDING];

const filterOptions = [
  filterItems.ALL,
  filterItems.S,
  filterItems.M,
  filterItems.L,
  filterItems.XL,
];

function SelectInput({ name, labelText, handleChange, values }) {
  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      <Select id={name} name={name} onChange={handleChange} defaultValue={0}>
        {values.map((value, index) => (
          <option value={value} key={`option-${index}`}>
            {value}
          </option>
        ))}
      </Select>
    </>
  );
}

/**
 * Renders the select inputs to sort and filter the products.
 * Dynamically renders the current number of items displayed.
 */
export function ProductControls({ numberOfDisplayedItems }) {
  const { setFilter, setSort } = useContext(ProductContext);

  const handleOrder = (event) => setSort(event.target.value);
  const handleFilter = (event) => setFilter(event.target.value);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Products</Title>
        <Text data-testid="number-of-items">
          {numberOfDisplayedItems}{" "}
          {numberOfDisplayedItems === 1 ? "item" : "items"}
        </Text>
      </TitleWrapper>
      <InputWrapper>
        <SelectInput
          name="order"
          labelText="Order by:"
          handleChange={handleOrder}
          values={sortOptions}
        />
        <SelectInput
          name="filter"
          labelText="Filter by size:"
          handleChange={handleFilter}
          values={filterOptions}
        />
      </InputWrapper>
    </Wrapper>
  );
}
