
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cart, total } = useSelector((store) => store);
  console.log(total);

  const dipatch = useDispatch();

  return (
    <div className="mt-5" style={{"margin": "40px 300px", "border": "1px solid"}}>
      <h2 className="mt-4" style={{"text-align":"center","font-size": "26px"}}>Cart</h2>
      {cart?.map((item) => {
        console.log(item.quantity);
        return (
          <div className="mt-5">
          <div className="card rounded-3 mb-4" key={item.id}>
            <div className="card-body p-4" style={{"margin":"30px 151px"}}>
              <div className="row d-flex justify-content-between align-items-center" style={{"display": "flex",}}>
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={item.img} width="100px" height="100px"
                    className="img-fluid rounded-3"
                    alt="Cotton T-shirt"
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3" style={{"padding":"40px"}}>
                  <p className="lead fw-normal mb-2">{item.name}</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center" style={{"padding":"40px"}}>
                  <button
                    className="btn btn-link px-2" 
                    onClick={() => {
                      dipatch({
                        type: "cart/increase",
                        payload: item.id,
                      });
                    }}
                  >
                    <i className="bi bi-arrow-up-square-fill">+</i>
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="btn btn-link px-2"
                    onClick={() => {
                      dipatch({
                        type: "cart/decrease",
                        payload: item.id,
                      });
                    }}
                  >
                    <i className="bi bi-arrow-down-square-fill">-</i>
                  </button>
                </div>

                <div className="col-md-3" style={{"padding":"40px"}}>
                  <h5 className="mb-0">{item.total} vnđ</h5>
                </div>
                <div className="col-md-1" style={{"padding":"40px"}}>
                  <button
                    href="#!"
                   
                    onClick={() => {
                      dipatch({
                        type: "cart/delete",
                        payload: item.id,
                      });
                    }}
                  >
                    <i class="material-icons">Xóa</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
      })}
      <div className="total d-flex justify-content-between aligns-center" style={{"margin":"30px 363px"}}>
        <div style={{"text-align":"center", "font-size":"24px"}}>Tổng hóa đơn : </div>
        <h4 style={{color:"red","font-size":"24px"}}>{total} vnđ</h4>
      </div>
    </div>
  );
};

export default Cart;