import "./styles.css";
const Product = ({ element, handleClick }) => {
  return (
    <div className="cardProducts">
      <div className="cardImg">
        <img src={element.img} alt="Foto Produto"></img>
      </div>

      <div className="cardInfo">
        <h1 className="cardName">{element.name}</h1>
        <p className="cardCategory">{element.category}</p>
        <h3 className="cardPrice">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(element.price)}
        </h3>
        <button onClick={() => handleClick(element.id)} className="cardBtn">
          Adicionar
        </button>
      </div>
    </div>
  );
};
export default Product;
