import Axios from "axios";

import { API } from "../../helpers/ApiHelper";

export const initialMsg = data => dispatch => {
  Axios.get(`https://rocky-sierra-75836.herokuapp.com/user/${data}`)
    .then(res => {
      dispatch({
        type: "INITIAL_CHAT",
        payload: res.data.chat.map(rest => ({
          id: rest.id,
          no_detail_chat: rest.no_detail_chat,
          id_user1: rest.id_user1,
          id_user2: rest.id_user2,
          created_at: rest.created_at,
          updated_at: rest.updated_at,
          username: rest.username,
          bio: rest.bio,
          phone: rest.phone,
          lawan: rest.lawan,
          photo: rest.photo
        }))
      });
      console.log(
        "initial data",
        res.data.chat.map(rest => ({
          id: rest.id,
          no_detail_chat: rest.no_detail_chat,
          id_user1: rest.id_user1,
          id_user2: rest.id_user2,
          created_at: rest.created_at,
          updated_at: rest.updated_at,
          username: rest.username,
          bio: rest.bio,
          phone: rest.phone,
          lawan: rest.lawan
        }))
      );
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
