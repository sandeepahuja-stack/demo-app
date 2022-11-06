import apiClient from "services/apiClient";
const USER_DATA_API = "https://reqres.in/api/users";

const fetchUserList = async (pageNo = 1, { onSuccess, onFailure }) => {
  apiClient({ url: `${USER_DATA_API}` })
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
