import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import store from "./store";
import Home from "./Home";
import UsersDataList from "./UsersList";
import UserDetail from "./UserDetail";

function App() {
  return (
    <Provider store={store}>
    <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Users">Users</Link>
        </nav>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<UsersDataList />} path="/Users"></Route>
          <Route element={<UserDetail />} path="/Users/:userId"> </Route>
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
