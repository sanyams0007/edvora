const Product = ({
  product: {
    product_name,
    brand_name,
    price,
    image,
    discription,
    address: { city, state },
    time,
  },
}) => {
  return (
    <div className="bg-pcard h-full rounded mx-3 p-3 flex-none hover:scale-y-50">
      <div className="flex">
        <img
          src={image}
          alt={product_name}
          className="w-32 h-32 flex-none rounded-xl bg-red-100"
        />
        <div className="ml-6 my-1">
          <p className="text-2xl font-medium break-words overflow-hidden">
            {product_name}
          </p>
          <p className="my-4 text-lg text-gray-400">{brand_name}</p>
          <p className="text-xl ">$ {price}</p>
        </div>
      </div>
      <div className="flex my-3">
        <p className=" text-lg text-gray-400">{`${city}, ${state}`}</p>
        <p className=" text-lg ml-auto text-gray-400">
          Date : {new Date(time).toLocaleDateString("en-US")}
        </p>
      </div>
      <div className="break-all mt-auto text-lg text-gray-400">
        {discription}
      </div>
    </div>
  );
};

export default Product;
