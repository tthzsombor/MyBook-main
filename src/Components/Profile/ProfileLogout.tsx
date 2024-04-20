import { useContext } from "react"
import { ApiContext } from "../../api"

export function ProfileLogout(){
    const api = useContext(ApiContext)

    return<>
     <button onClick={api.logout}>Log out</button>
    </>
}