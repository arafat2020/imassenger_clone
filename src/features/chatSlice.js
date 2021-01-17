import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
      chatId: null,
      chatName: null
  },
  reducers: {
    
      setChat: (state, actions) => {
          state.chatId = actions.payload.chatId;
          state.chatName = actions.payload.chatName;
    }
  },
});

export const { setChat } = chatSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selecChatId = state => state.chat.chatId;
export const selecChatName = state => state.chat.chatName;


export default chatSlice.reducer;
