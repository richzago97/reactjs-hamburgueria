import Product from "../Product";
function ProductsList({ products, handleClick }) {
  return (
    <div className="container">
      {products.map((element, index) => (
        <Product key={index} element={element} handleClick={handleClick} />
      ))}
    </div>
  );
}
export default ProductsList;
