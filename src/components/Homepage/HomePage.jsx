import React, { useState, useRef, useCallback } from "react";
import UserCustomerDataTable from "../UserCustomerDataTable";
import { Typography } from "@mui/material";
import useCustomerList from "hooks/useCustomerList";
const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, customerLists, hasMore } =
    useCustomerList(pageNumber);

  const observer = useRef();
  const lastCustomerElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  if (loading && customerLists.length === 0) {
    return <>Loadder</>;
  }
  return (
    <>
      <Typography variant="h3" component="h2" my={2}>
        Customers List
      </Typography>
      <UserCustomerDataTable
        data={customerLists}
        lastRowRef={lastCustomerElementRef}
      />
    </>
  );
};
export default HomePage;
