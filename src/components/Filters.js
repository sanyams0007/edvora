const Filters = ({ products, states, cities, setSelect }) => {
  //create custom dropdown
  const mapDropDown = (name, array) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSelect((old) => ({
        ...old,
        [name]: value,
      }));
    };

    return (
      <>
        <select
          name={name}
          id={name}
          className="my-2 bg-pcard rounded p-2 text-white"
          onChange={handleChange}
        >
          <option value={name} selected disabled hidden>
            {name}
          </option>

          {array.map((name, idx) => (
            <option key={idx} className="bg-pcard" value={name}>
              {name}
            </option>
          ))}
        </select>
      </>
    );
  };

  return (
    <div className=" bg-ccard p-9 rounded-2xl mb-4 md:fixed w-full md:w-1/5">
      <h5 className="text-white border-b-2 border-opacity-25 py-2 mb-6 text-lg">
        Filters
      </h5>
      <div className="flex flex-col w-full">
        {mapDropDown("Product", products)}
        {mapDropDown("State", states)}
        {mapDropDown("City", cities)}
      </div>
    </div>
  );
};

export default Filters;
