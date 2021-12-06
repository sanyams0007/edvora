import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import ProductType from "./components/ProductType";
const URL = "https://assessment-edvora.herokuapp.com";

function App() {
  const [data, setData] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);
  const [productType, setProductType] = useState({});
  const [select, setSelect] = useState({
    Product: "",
    City: "",
    State: "",
  });

  const groupBy = (array, key = "product_name") => {
    const orderedData = array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
    return orderedData;
  };

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      let stateList = [];
      let cityList = [];
      let productList = [];

      data.forEach(({ product_name, address: { state, city } }) => {
        !stateList.includes(state) && stateList.push(state);
        !cityList.includes(city) && cityList.push(city);
        !productList.includes(product_name) && productList.push(product_name);
      });

      setData(data);
      setProductType(groupBy([...data]));
      setStates(stateList);
      setCities(cityList);
      setProducts(productList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const res = groupBy(
      [...data].filter(
        ({ product_name, address }) =>
          product_name === select.Product ||
          address.city === select.City ||
          address.state === select.State
      )
    );
    setProductType(res);
  }, [select]);

  return (
    <div className="min-h-screen bg-app p-7 md:py-12 md:px-20">
      <Filters
        products={products}
        states={states}
        cities={cities}
        select={select}
        setSelect={setSelect}
      />
      <div className=" w-full md:w-9/12 md:ml-auto">
        <h2 className=" text-white text-4xl font-medium">Edvora</h2>
        <p className=" text-gray-400 text-3xl font-medium my-7">Products</p>
        {Object.keys(productType).map((key, index) => (
          <ProductType
            products={productType[key]}
            name={key}
            key={index}
            select={select}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
