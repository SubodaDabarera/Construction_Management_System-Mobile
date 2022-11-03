import axios from "axios";

const BACKEND_URL = "https://construction-management.cyclic.app/api";

export const addProduct = async (
  { owner, title, unitPrice, quantity, location, description },
  setIsCreationSuccess
) => {
  console.log("inside API");
  console.log(owner);
  try {
    await axios
      .post(`${BACKEND_URL}/product/add-product`, {
        owner,
        title,
        unitPrice,
        quantity,
        location,
        description,
      })
      .then((result) => {
        setIsCreationSuccess(result.data.success);
      });
  } catch (err) {
    console.log(err);
    setIsCreationSuccess(false);
  }
};

export const viewProductsList = async (setProductList) =>
  // productId,
  // setDemandList,
  // setFilteredDemands,
  // setIsSearchResultExists

  {
    try {
      await axios.get(`${BACKEND_URL}/product`).then((result) => {
        if (result) {
          // console.log(result.data.existingProducts);
          setProductList(result.data.existingProducts);
          // setDemandList(result.data.demands);
          // setFilteredDemands(result.data.demands);
          // setIsSearchResultExists(result.data.demands);
        } else {
          // setDemandList([]);
          // setFilteredDemands([]);
          // setIsSearchResultExists(result.data.success);
        }
      });
    } catch (err) {
      console.log(err);
      // setDemandList([]);
    }
  };

  export const viewProduct = async (productId, setProductDetails) => {
    try {
      await axios.get(`${BACKEND_URL}/product/` + productId).then((result) => {
        console.log(result.data.existingProduct);
        setProductDetails(result.data.existingProduct);
      });
    } catch (err) {
      console.log(err);
      setProductDetails("");
    }
  };