import Carousel from "./Carousel";

const ProductType = ({ products, select, name }) => {
  const capitalizeWord = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="my-7">
      <h3 className="text-white text-lg border-b-2 py-3 border-opacity-25 mb-5">
        {capitalizeWord(name)}
      </h3>
      <div className=" bg-ccard p-5 rounded-2xl">
        <Carousel products={products} select={select} />
      </div>
    </div>
  );
};

export default ProductType;
