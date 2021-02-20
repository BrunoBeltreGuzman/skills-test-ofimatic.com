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

       getToken() {
              return localStorage.getItem("userName");
       }

       getToken() {
              return localStorage.getItem("token");
       }

       getToken() {
              return localStorage.getItem("role");
       }
}

export default new LocalSign();
