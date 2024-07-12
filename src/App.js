import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailList from "./EmailList";
import Mail from "./Mail";
import { login } from "./features/userSlice.js";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./Login.js";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    // onAuthStateChanged listens to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>
          {sendMessageIsOpen ? <SendMail /> : null}
        </div>
      )}
    </Router>
  );
}

export default App;
