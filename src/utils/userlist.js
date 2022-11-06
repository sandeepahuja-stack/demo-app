const filteredCustomers = (
  customersList = [],
  startsWith = {
    firstName: "G",
    lastName: "W",
  }
) => {
  if (customersList.length === 0) return [];

  return customersList.filter((customer) => {
    const { first_name, last_name } = customer;
    return (
      first_name.substring(0, 1) === startsWith.firstName ||
      last_name.substring(0, 1) === startsWith.lastName
    );
  });
};

export default filteredCustomers;
