import multer from "multer";
import { v4 as uuid } from "uuid";
import path from "path";

// Settings
const storage = multer.diskStorage({
       destination: "uploads",
       filename: function (request, file, next) {
              next(null, uuid() + path.extname(file.originalname));
       },
});
export default multer({ storage });
