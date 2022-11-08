import { useEffect, useState } from "react";

const useCustomerListSearch = (query = "", data) => {
  const [filteredData, updateFilteredData] = useState(data);

  useEffect(() => {
    let q = query.trim().toLowerCase();
    if (q === "") {
      updateFilteredData([...data]);
    } else {
      const tempData = data.filter(({ first_name, last_name }) => {
        const name = `${first_name} ${last_name}`;
        return name.toLowerCase().includes(q);
      });
      updateFilteredData(tempData);
    }
  }, [query, data]);

  return filteredData;
};

export default useCustomerListSearch;
