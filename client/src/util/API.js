import axios from "axios";

export default {
    addUser: function(user){
      console.log("API ROUTE FRONT END");
        const config = {
            method: "POST",
            url: "/api/signup",
            data: {
              firstName: user.firstName ,
              lastName: user.lastName,
              email: user.email,
              password: user.password
            },
          };
          return axios(config);
    },
    login: function(){

    },

};