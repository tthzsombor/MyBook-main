import { User } from "./User";
import bg from "../../../public/img/user.png";
import { ProfileNav } from "./Nav/ProfileNav";
import { useContext } from "react";
import { ApiContext } from "../../api";



interface Props {
  user: User;
}


export function UserProfile({ user }: Props) {
  const api = useContext(ApiContext)
  if (!api.currentUser) return null;
  //const { user } = props;
  return <>
    <h1>Sikeres bejelentkezés</h1>
    <h2 style={{ textAlign: 'center' }}>Üdvözöljük</h2>
    <h2 style={{textAlign: 'center'}}>{user.email}</h2>
    <br />
    <img src={bg} style={{ width: 200, height: 200, marginLeft: 170 }} />
    <ProfileNav user={api.currentUser!} />

  </>
}



