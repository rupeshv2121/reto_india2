import "./CheckOutPage.css";

const CheckoutPage = () => {
  return (
    <>
      <h1 className="heading">Checkout</h1>
      <div className="options">
        <p className="circle"></p>
        <p className="line"></p>
        <p className="circle"></p>
      </div>

      <div className="container">
        <div className="review">
          <h3>Review Your Cart Item</h3>
          <div className="photo">
            <div className="items-info">
              <p>Grinder 300hp blue colour variant</p>
              <p className="quantity">1</p>
            </div>

            <hr />
            <div className="items-info">
              <p>Grinder 300hp blue colour variant</p>
              <p className="quantity">1</p>
            </div>
            <hr />
            <div className="items-info">
              <p>Grinder 300hp blue colour variant</p>
              <p className="quantity">1</p>
            </div>
            <hr />
            <div className="items-info">
              <p>Grinder 300hp blue colour variant</p>
              <p className="quantity">1</p>
            </div>

            <hr />
            <div className="items-info">
              <p>Total Price : </p>
              <p>100</p>
            </div>
          </div>
        </div>

        <div className="vertical-line"></div>

        <div className="details">
          <h3>Enter Your Details</h3>
          <div className="input-details">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone No" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Address Details" />
            <input type="number" placeholder="Pin code" />
          </div>
        </div>
      </div>
      <div className="btn">
        <button>Place Your Order</button>
      </div>
    </>
  );
};

export default CheckoutPage;
