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

  return (
    <>
      <Typography variant="h5" component="h2" my={2}>
        Customers List
      </Typography>
      <UserCustomerDataTable
        data={customerLists}
        lastRowRef={lastCustomerElementRef}
        loading={loading}
        error={error}
      />
    </>
  );
};
export default HomePage;
