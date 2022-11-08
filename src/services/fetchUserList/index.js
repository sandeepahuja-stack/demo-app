import apiClient from "services/apiClient";

const fetchUserList = async (pageNo = 1, { onSuccess, onFailure }) => {
  apiClient({ url: `${process.env.REACT_APP_USER_DATA_API}` })
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
