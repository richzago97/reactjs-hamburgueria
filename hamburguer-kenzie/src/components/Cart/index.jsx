import "./styles.css";
const Cart = ({ currentSale, deleteClick, deleteAll }) => {
  return (
    <>
      {currentSale.length <= 0 ? (
        <div className="containerCart">
          <div className="cartTittle">
            <h2>Carrinho de compras</h2>
          </div>
          <div className="cartInfo">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        </div>
      ) : (
        <>
          <div className="containerCartMain">
          <div className="cartTittle">
            <h2>Carrinho de compras</h2>
          </div>
          {currentSale.map((elem, index) => (
            <div className="containerCartAdd" key={index}>
              <div className="imgCart">
                <img src={elem.img} alt="" />
              </div>
              <div className="infoCart">
                <span>{elem.name}</span>
                <p>{elem.category}</p>
              </div>
              <div className="CartRemove">
                <button
                  className="btnRemove"
                  onClick={() => deleteClick(elem.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}

          <div className="cartTotal">
            <p>Total: </p>

            <p className="cartPrice">
              {currentSale.reduce(
                (acc, currentValue) => acc + Number(currentValue.price),
                0
              )}
            </p>
          </div>
                {currentSale.length > 1 ? 
                  <div  className="divBtnRemove">
                  <button onClick={deleteAll} className="btnRemoveAll">
                    Remover Todos
                  </button>
                </div>
                :null}
                </div>
                
        </>
      )}
    </>       
  );
};

export default Cart;
