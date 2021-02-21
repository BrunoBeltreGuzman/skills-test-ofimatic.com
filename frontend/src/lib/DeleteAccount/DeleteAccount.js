import usersFetch from "../fetch/users/users-fetch";
import infoFetch from "../fetch/info_users/info-fetch";

export default async function deleteAccount(user) {
       try {
              const info = await infoFetch.deleteInfo(user);
              if (info) {
                     await usersFetch.delete(user);
              }
              return true;
       } catch (error) {
              console.log(error);
              return false;
       }
}
