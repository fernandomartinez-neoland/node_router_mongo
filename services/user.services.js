import { userModel } from "../models/user.model.js";

export function FindUserService(correo) {
  return userModel().find({"correo": correo});
}
