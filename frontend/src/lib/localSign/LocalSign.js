class LocalSign {
       saveCredencials(userId, userName, token, role) {
              localStorage.setItem("userId", userId);
              localStorage.setItem("userName", userName);
              localStorage.setItem("token", token);
              localStorage.setItem("role", role);
       }

       deleteCredencials() {
              localStorage.clear();
       }

       getUserId() {
              return localStorage.getItem("userId");
       }

       getUserName() {
              return localStorage.getItem("userName");
       }

       getToken() {
              return localStorage.getItem("token");
       }

       getRole() {
              return localStorage.getItem("role");
       }

       /*
              Image
       */
       setPathImage(path) {
              localStorage.setItem("pathImage", path);
       }

       getPathImage() {
              if (localStorage.getItem("pathImage")) {
                     return (
                            "http://localhost:2000/" +
                            localStorage.getItem("pathImage")
                     );
              } else {
                     return "./img/avatar.png";
              }
       }

       deletePathImage() {
              localStorage.removeItem("pathImage");
       }
}

export default new LocalSign();
