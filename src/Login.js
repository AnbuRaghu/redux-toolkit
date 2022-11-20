import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { login, logOut } from "./features/user";
//useDispatch is used to update a globala state value
//useselector is used to fetch the state value

export default function Login() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    return (
        // dispatch takes action as params in this case in login action we have to passs the payload and we have to double check payload structiúre in initial state
        <div>
          <input value={name} onChange={ (e) =>setName(e.target.value)}/>
          <br></br>
          <input value={age} onChange={ (e) =>setAge(e.target.value)}/>
          <br></br>
          <input value={email} onChange={ (e) =>setEmail(e.target.value)}/>
          <br></br>
            <button
                onClick={() =>
                    dispatch(
                        login({
                            name: name,
                            age: age,
                            email: email,
                        })
                    )
                }
            >
                Login
            </button>

            <button
                onClick={() =>
                    dispatch(
                        logOut({
                            name: "",
                            age: '',
                            email: "",
                        })
                    )
                }
            >
                Logout
            </button>
        </div>
    );
}
