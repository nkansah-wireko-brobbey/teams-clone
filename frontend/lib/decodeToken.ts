import {jwtDecode} from "jwt-decode"
export const decodeToken = (jwt: string) =>{
    if(!jwt) return null

    const decoded = jwtDecode(jwt)

    return decoded;
}