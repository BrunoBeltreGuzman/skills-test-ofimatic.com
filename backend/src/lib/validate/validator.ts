export default class Validator {
       constructor() {}

       isValidate(value: string): boolean {
              try {
                     if (typeof value !== "undefined" && value !== "") {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNotValidate(value: string): boolean {
              try {
                     if (typeof value === undefined && value === "") {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNumber(number: string): boolean {
              try {
                     const numberParse = parseInt(number);
                     if (numberParse) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNotNumber(number: string): boolean {
              try {
                     const numberParse = parseInt(number);
                     if (!numberParse) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isEmpty(value: string): boolean {
              try {
                     if (value === "") {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNotEmpty(value: string): boolean {
              try {
                     if (value !== "") {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isUndefined(value: string): boolean {
              try {
                     if (typeof value === undefined) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNotUndefined(value: string): boolean {
              try {
                     if (typeof value === undefined) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }
}
