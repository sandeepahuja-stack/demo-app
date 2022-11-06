import {
  customerListLoadError,
  customerListStart,
  customerListSuccess,
} from "../../actions/customerList.actions";

import fetchUserList from "services/fetchUserList";
import filteredCustomers from "utils/userlist";
import store from "redux/config/configureStore";

export const fetchCustomerListAsync =
  ({ pageNumber }) =>
  (dispatch) => {
    dispatch(customerListStart());

    async function fetchData() {
      await fetchUserList(pageNumber, {
        onSuccess: (users) => {
          const { customerList } = store.getState();

          const { data, ...rest } = users;
          const filteredData = filteredCustomers(users.data);
          const prevCustomers = customerList?.data || [];
          dispatch(
            customerListSuccess({
              data: [...new Set([...prevCustomers, ...filteredData])],
              hasMore: users.total_pages > pageNumber,
              ...rest,
            })
          );
        },
        onFailure: (e) => {
          dispatch(customerListLoadError(true));
        },
      });
    }
    fetchData();
  };
