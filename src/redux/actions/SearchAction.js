import Axios from "axios";

export const searchContact = data => dispatch => {
  Axios.post("http://rocky-sierra-75836.herokuapp.com/api/search/user", {
    username: data
  })
    .then(res => {
      dispatch({ type: "SEARCH_CONTACT", payload: res.data });
      console.log("search rest data", res.data);
    })
    .catch(err => console.log(err));
};
