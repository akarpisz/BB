import axios from "axios";

export default {
    addUser: function(user){
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