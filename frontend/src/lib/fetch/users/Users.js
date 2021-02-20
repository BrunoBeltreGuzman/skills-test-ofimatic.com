export default class Users {
       constructor() {
              this.user = [];
              this.socials = [];
       }

       setUser(user) {
              this.user = user;
       }

       getUser() {
              return this.user;
       }

       setSocials(socials) {
              this.socials = socials;
       }

       getSocials() {
              return this.socials;
       }
}
