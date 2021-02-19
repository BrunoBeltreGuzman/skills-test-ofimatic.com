const bcrypt = require("bcrypt");

export default class Bcrypt {
       constructor() {}

       static async encryptPassword(password: string) {
              try {
                     const salt = await bcrypt.genSalt(10);
                     const hash = await bcrypt.hash(password, salt);
                     return hash;
              } catch (error) {
                     throw error;
              }
       }

       static async matchPassword(password: string, savedPassword: string) {
              try {
                     return await bcrypt.compare(password, savedPassword);
              } catch (error) {
                     throw error;
              }
       }
}
