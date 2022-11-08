import React, { useState, useRef, useCallback } from "react";
import UserCustomerDataTable from "../UserCustomerDataTable";
import { Typography, Box, TextField } from "@mui/material";
import useCustomerList from "hooks/useCustomerList";
import useCustomerListSearch from "hooks/useCustomerListSearch";

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, customerLists, hasMore } =
    useCustomerList(pageNumber);
  const [query, updateQuery] = useState("");
  const customersDetails = useCustomerListSearch(query, customerLists);
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
  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    updateQuery(value);
  };

  return (
    <>
      <Typography variant="h5" component="h2" my={2}>
        Customers List
      </Typography>
      <Box mb={3}>
        <TextField
          id="outlined-basic"
          fullWidth
          label=""
          placeholder="Search Customer by Name"
          variant="outlined"
          onChange={onChange}
        />
      </Box>
      <UserCustomerDataTable
        data={customersDetails}
        lastRowRef={lastCustomerElementRef}
        loading={loading}
        error={error}
      />
    </>
  );
};
export default HomePage;
