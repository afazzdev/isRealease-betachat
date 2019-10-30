import Axios from "axios";

import { API } from "../../helpers/ApiHelper";

export const initialMsg = data => dispatch => {
  // const idUser = JSON.parse(localStorage.getItem("reduxState")).loginData.data
  //   .id;
  Axios.get(`https://rocky-sierra-75836.herokuapp.com/user/${data}`)
    .then(res => {
      // const datares = {
      //   id: res.data.id,
      //   no_detail_chat: res.data.no_detail_chat,
      //   id_user1: res.data.id_user1,
      //   id_user2: res.data.id_user2,
      //   created_at: res.data.created_at,
      //   updated_at: res.data.updated_at,
      //   username: res.data.username,
      //   bio: res.data.bio,
      //   phone: res.data.phone,
      //   lawan: res.data.lawan
      // };
      dispatch({
        type: "INITIAL_CHAT",
        payload: res.data
      });
      console.log("initial data", res.data);
    })
    .catch(err => console.log(err));
};

export const sendMessage = data => dispatch => {
  const disData = {
    id_user1: data.id_user_from,
    id_user2: data.id_user_to,
    id_user_from: data.id_user_from,
    id_user_to: data.id_user_to,
    chat: data.messages
  };
  dispatch({
    type: "SEND_MESSAGE",
    receiver: "",
    payload: data.messages,
    sender: data.id_user_from,
    name: data.name
  });
  console.log("data yang akan dikirim :", data);
  Axios.post(`${API}/messages`, disData)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const createNewChat = data => dispatch => {
  dispatch({ type: "CREATE_NEW_CHAT", payload: data });
  dispatch({
    type: "ACTIVE_CHATS",
    id: data.id,
    username: data.username,
    phone: data.phone
  });
  console.log("createnewchat :", data);
};

export const newChat = data => dispatch => {
  dispatch({
    type: "ACTIVE_CHATS",
    id: data.id,
    username: data.username,
    phone: data.phone
  });

  Axios.get(
    `https://rocky-sierra-75836.herokuapp.com/api/chat/${data.no_detail_chat}`
  )
    .then(res => dispatch({ type: "DETAIL_MSG", payload: res.data }))
    .catch(err => console.log(err));
  console.log("newchat :", data);
};
