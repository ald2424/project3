import axios from "axios";
import menuItems from "./MainMenuItems"

const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
    {
      //Add Dashboard to the menu options when user is logged in
      menuItems.push({ 
      "path": "/dashboard",
        "href": "index.js",
         "title": "Dashboard"
      })
      //Removes Log in from the menu options when user is logged in 
      for(var i = 0; i < menuItems.length; i++){
        if(menuItems[i].title === "Log In"){
          menuItems.splice(i, 1);
        }
      }

  }} else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;