import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const user = useSelector((state) => state.user.user);
  const router = useNavigate();


  const [productData, setProductData] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "clothing",
    image: "",
  });

  console.log(productData,"productData")

  const input = {
    width: "90%",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    marginBottom: "10px",
    margin: "10px auto",
  };

  const productDataDiv = {
    boxShadow: "0px 0px 10px #aaa",
    padding: "20px",
    borderRadius: "20px",
  };

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleChangeCategory = (event) => {
    console.log(event.target.name, event.target.value);
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      productData.name &&
      productData.price &&
      productData.quantity &&
      productData.category &&
      productData.image
    ) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/product/add-product",
          {
            productData,
            userId: user.userId,
          }
        );
        console.log(response.data, "response.data");

        if (response.data.success === true) {
          toast.success(response.data.message);
          setProductData({
            name: "",
            price: "",
            quantity: "",
            category: "",
            image: "",
          });

          router("/login");
        } else if (response.data.message === "Email already exist *_*") {
          toast.error(response.data.message + " Kindly login");
          //   router("/login");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Kindly fill all the required fields!");
      return;
    }
  };

  return (
    <>
      <h1 className="main-heading">Add Product</h1>

      <div style={{ minWidth: "300px", maxWidth: "350px", margin: "auto" }}>
        <form style={productDataDiv} onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Product Name"
            onChange={handleChange}
            className="input"
            style={input}
            value={productData.name}
          />
          <br />
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter Your Product Price"
            onChange={handleChange}
            style={input}
            value={productData.price}
          />
          <br />
          <input
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Enter Your Total Quantity"
            onChange={handleChange}
            style={input}
            value={productData.quantity}
          />
          <br />
          <label htmlFor="category">Select Category :</label>
          <br />
          <select
            name="category"
            id="category"
            style={input}
            onChange={handleChangeCategory}
          >
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="footwear">Footwear</option>
          </select>
          <input
            type="url"
            name="image"
            id="image"
            placeholder="Enter Your Image url"
            onChange={handleChange}
            style={input}
            value={productData.image}
          />
          <br />
          <button className="btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
