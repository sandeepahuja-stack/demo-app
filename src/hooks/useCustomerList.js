import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerListAsync } from "redux/reducers/customerList/customerList.thunk";

export default function useCustomerList(pageNumber) {
  const { customerList } = useSelector((state) => state);
  const { err, isLoading, hasMore, filteredData = [] } = customerList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomerListAsync({ pageNumber }));
    return () => {};
  }, [pageNumber, dispatch]);

  return {
    loading: isLoading,
    error: err,
    customerLists: filteredData,
    hasMore,
  };
}
