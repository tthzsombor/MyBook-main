import { Admin } from "./Admin"

interface Props{
    admin: Admin
}

export function AdminProfile({admin}: Props){
    return <>
    <div>
        <h1>Admin name: {admin.adminname}</h1>
        <p>Admin password: {admin.adminpassword}</p>
    </div>
    </>
}