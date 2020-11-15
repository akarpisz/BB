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
    login: function(user){
      const config = {
        method: "POST",
        url:"/api/signin",
        data: {
          email: user.email,
          password: user.password,
          remember: user.rememberme
        }
      }

      return axios(config)
    },
    getPosts: function(){
      const config = {
        method: "GET",
        url:"/api/posts",
      }

      return axios(config)
    },
};