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
          const filteredTempData = filteredCustomers(users.data);
          const prevCustomers = customerList?.filteredData || [];
          dispatch(
            customerListSuccess({
              filteredData: [
                ...new Set([...prevCustomers, ...filteredTempData]),
              ],
              data: [...new Set([...customerList.data, ...users.data])],
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
