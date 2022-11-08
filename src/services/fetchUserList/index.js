import { CUSTOMER_LIST_API } from "constants/customer.constant";
import apiClient from "services/apiClient";

const fetchUserList = async (pageNo = 1, { onSuccess, onFailure }) => {
  apiClient({ url: CUSTOMER_LIST_API })
    .get(`?page=${pageNo}`)
    .then(({ data }) => {
      if (onSuccess) {
        onSuccess(data);
      }
    })
    .catch((error) => {
      if (onFailure) {
        onFailure(error);
      }
      console.log("Whoops! Something went wrong:", error.message);
    });
};
export default fetchUserList;
