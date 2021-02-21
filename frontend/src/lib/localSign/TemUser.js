class TemUser {
       saveTemUser(userId, userName, role) {
              localStorage.setItem("temUserId", userId);
              localStorage.setItem("temUserName", userName);
              localStorage.setItem("temRole", role);
       }

       temDeleteCredencials() {
              localStorage.removeItem("temUserId");
       }

       temGetUserId() {
              return localStorage.getItem("temUserId");
       }

       temGetToken() {
              return localStorage.getItem("temUserName");
       }

       temGetRole() {
              return localStorage.getItem("temRole");
       }
}

export default new TemUser();
