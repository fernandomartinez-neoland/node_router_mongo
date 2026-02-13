import { FindUserService } from "../services/user.services.js"
export function userController(correo){
    return FindUserService(correo)
}