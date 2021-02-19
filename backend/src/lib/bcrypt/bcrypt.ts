const bcrypt = require("bcryptjs");

class Bcrypt {
       constructor() {}

       async encryptPassword(password: string) {
              try {
                     const salt = await bcrypt.genSalt(10);
                     const hash = await bcrypt.hash(password, salt);
                     return hash;
              } catch (error) {
                     throw error;
              }
       }

       async matchPassword(password: string, savedPassword: string) {
              try {
                     return await bcrypt.compare(password, savedPassword);
              } catch (error) {
                     throw error;
              }
       }
}

module.exports = new Bcrypt();
