import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products").then(
      (response) =>
        response
          .json()
          .then((response) => {
            setProducts(response);
            setAllProducts(response);
          })
          .catch((err) => console.log(err))
    );
  }, []);

  function showProducts(event) {
    const search = event.target.value;
    if (search.length === 0) {
      setProducts(allProducts);
    } else {
      const filterProducts = products.filter(
        (elem) =>
          elem.name.toLowerCase().includes(search.toLowerCase()) ||
          elem.category.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(filterProducts);
    }
  }

  function handleClick(productId) {
    const filterProduct = products.find((item) => item.id === productId);
    if (currentSale.includes(filterProduct)) {
    } else {
      setCurrentSale([...currentSale, filterProduct]);
    }
  }

  function deleteClick(product) {
    const deleteItem = currentSale.filter((elem) => elem.id !== product);
    setCurrentSale(deleteItem);
  }

  function deletAll() {
    setCurrentSale([]);
  }

  return (
    <>
      <Header showProducts={showProducts} />
      <main>
        <ProductsList products={products} handleClick={handleClick} />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          deleteClick={deleteClick}
          deleteAll={deletAll}
        />
      </main>
    </>
  );
}

export default App;
