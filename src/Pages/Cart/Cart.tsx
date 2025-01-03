import { useState } from "react";
import emptyCart from "../../Assets/shopping.png";
import Address from "../../Components/Cart/Address";
import CartProdCard from "../../Components/Cart/CartProdCard";
import CartText from "../../Components/Cart/CartText";
import CartTotalItem from "../../Components/Cart/CartTotalItem";
import Modal from "../../Components/Modal/index";
import BreadCrumb from "../../Components/ProductPage/TopSection/BreadCrumb";
import { useCart, useWindowSize } from "../../Context/context";
import "./Cart.css";
function Cart() {
  const { isMobile } = useWindowSize();
  const { getProds } = useCart();
  const datas = getProds();
  const [isModalOpen, setIsModelOpen] = useState(false);
  const handleModelOpen = () => {
    setIsModelOpen(true);
  };
  const handleModelClose = () => {
    setIsModelOpen(false);
  };

  return (
    <div className="">
      <BreadCrumb />
      <div className="cart-main container">
        {datas.length > 0 ? (
          <div
            className={
              " total-product-lister d-flex  justify-content-between gap-4 px-3 " +
              (isMobile ? " flex-column-reverse " : " flex-row-reverse ")
            }
          >
            <div className="total-container  border border-2 border-dark p-3 py-4 d-flex align-items-center flex-column gap-3">
              <div className="fs-5 mb-3 align-self-start fw-600">
                Cart Total
              </div>
              <CartTotalItem className="sub-total-horizontal">
                <CartText className={"fw-500"}>Subtotal:</CartText>
                <CartText className={"fw-500"}>
                  {datas.reduce((acc, curr) => {
                    return parseFloat(
                      parseFloat(
                        (acc + curr.prodPrice * curr.prodQuant).toString()
                      ).toFixed(2)
                    );
                  }, 0.0)}
                </CartText>
              </CartTotalItem>
              <div className="line "></div>
              <CartTotalItem className="sub-total-horizontal">
                <CartText className={"fw-500"}>Shipping:</CartText>
                <CartText className={"fw-500"}>Free</CartText>
              </CartTotalItem>
              <div className="line"></div>
              <CartTotalItem className="sub-total-horizontal">
                <CartText className={"fw-500"}>Total:</CartText>
                <CartText className={"fw-500"}>
                  {datas.reduce((acc, curr) => {
                    return parseFloat(
                      parseFloat(
                        (acc + curr.prodPrice * curr.prodQuant).toString()
                      ).toFixed(2)
                    );
                  }, 0)}
                </CartText>
              </CartTotalItem>
              <div
                className="px-3 rounded mt-4 py-2 fs-7 text-light bg-primary text-align-center"
                onClick={handleModelOpen}
              >
                Checkout
              </div>
              {isModalOpen ? (
                <Modal handleCloseModal={handleModelClose}>
                  <Address handleCloseModal={handleModelClose} />
                </Modal>
              ) : (
                <></>
              )}
            </div>
            <div className="cart-prods-cont ">
              <div className="d-flex head-container mb-3 p-3 align-items-center justify-content-between">
                <CartText className="product-head  p-3">Product</CartText>
                <CartText className="sub-head  p-3">Sub Total</CartText>
                <CartText className="quantity-head  p-3">Quantity</CartText>
              </div>
              {datas.map((data) => (
                <CartProdCard data={data} key={data.prodID + data.prodColor} />
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-cart w-100 h-100 d-flex justify-content-center align-items-center">
            <img className="w-100 h-100" src={emptyCart} alt="empty-cart" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
