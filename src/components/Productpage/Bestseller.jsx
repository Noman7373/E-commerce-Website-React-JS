import "../Productpage/productlist.css";
import { addToCart } from "../../store/cartSlice";
import { useToast } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from "react-redux";
import  useData  from "../../hooks/useData";
import { ImSpinner } from "react-icons/im";
import { TbError404 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Bestseller = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isLoading, isError, filterData, handleSearch, handleSorting } =
    useData();

  if (isLoading) {
    return (
      <div className="loader">
        <ImSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error">
        <TbError404 />
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }

  // Filter for best products with rating greater than 3.6
  const bestProducts = filterData.filter((item) => item.rating.rate > 3.6);

  const handleAddToCart = (id, image, title, price) => {
    const product = { id, image, title, price, quantity: 1 };
    dispatch(addToCart(product));

    toast({
      title: "Product Added",
      description: `${title} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <section className="main-cart">
        <div className="cart-title">
          <h1>
            Our Top Collection <br />
            <hr />
          </h1>
        </div>
        <div className="sale-category">
          <NavLink to="/bestseller">
            {" "}
            <p>Best Sellers</p>
          </NavLink>
          <p>Trending</p>
          <p>New Arrival</p>
        </div>
        <div className="filter-section">
          <div className="input-cart-section">
            <input
              type="text"
              placeholder="Search Product"
              onChange={handleSearch}
            />
          </div>
          <div className="select-section">
            <form action="#">
              <select name="sort" id="sort" onChange={handleSorting}>
                <option value="sort">Sort by</option>
                <option value="a - z">A - Z</option>
                <option value="z - a">Z - A</option>
                <option value="lowest">Lowest Price</option>
                <option value="highest">Highest Price</option>
              </select>
            </form>
          </div>
        </div>
        <div className="cart-items">
          {bestProducts.length > 0 ? (
            bestProducts.map(({ id, image, title, price, rating }) => (
              <div key={id} className="item-cart">
                <div className="product-img">
                  <img className="product-picture" src={image} alt={title} />
                </div>

                <div
                  className={
                    rating.rate > 3.6 ? "product-rating" : "product-rating-low"
                  }
                >
                  <p>{rating.rate}</p>
                </div>

                <div className="product-details">
                  <div className="title-product">
                    <h2>{title.slice(0, 10)}...</h2>
                  </div>
                  <span
                    className="add-icon"
                    onClick={() => handleAddToCart(id, image, title, price)}
                  >
                    <LuShoppingCart />
                  </span>
                </div>
                <div className="price-div">
                  <p>USD {price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-product">
              <h1>No Best Products Available</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Bestseller;
