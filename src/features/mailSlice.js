import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.mail.value)`
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
