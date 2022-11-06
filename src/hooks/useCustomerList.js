import { useEffect, useState } from "react";
import fetchUserList from "services/fetchUserList";
import filteredCustomers from "utils/userlist";

export default function useCustomerList(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [customerLists, setCustomerList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    async function fetchData() {
      await fetchUserList(pageNumber, {
        onSuccess: (users) => {
          setCustomerList((prevCustomers) => {
            const filteredData = filteredCustomers(users.data);
            return [...new Set([...prevCustomers, ...filteredData])];
          });
          setHasMore(users.total_pages > pageNumber);
          setLoading(false);
        },
        onFailure: (e) => {
          setError(true);
        },
      });
    }
    fetchData();
    return () => {};
  }, [pageNumber]);

  return { loading, error, customerLists, hasMore };
}
