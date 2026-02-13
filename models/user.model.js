import { db } from "../config/db.config.js";
export function userModel() {
  const Schema = db.Schema;
  const UserSchema = new Schema({
    correo: {
      required: true,
      unique: true,
      type: String,
    },
    nombre: String,
    direccion: String,
  });

  const UserModel =
    db.models.UserModel || db.model("UserModel", UserSchema, "UserModel");
  return UserModel;
}
