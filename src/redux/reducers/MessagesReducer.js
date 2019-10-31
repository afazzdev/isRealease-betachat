const initialState = {
  activeChat: {},
  detailChat: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_CHAT":
      return { chat: action.payload };

    case "CREATE_NEW_CHAT":
      return {
        ...state,
        chat: [...state.chat, action.payload]
      };

    case "ACTIVE_CHATS":
      return {
        ...state,
        activeChat: {
          id: action.id,
          username: action.username,
          phone: action.phone
        }
      };

    case "DETAIL_MSG":
      return {
        ...state,
        detailChat: action.payload
      };

    case "SEND_MESSAGE":
      if (state.detailChat === []) {
        return {
          ...state,
          detailChat: [
            {
              chat: action.payload,
              sender: action.sender
            }
          ]
        };
      } else {
        return {
          ...state,
          detailChat: [
            ...state.detailChat,
            {
              sender: action.sender,
              chat: action.payload
            }
          ]
        };
      }

    default:
      return state;
  }
};
