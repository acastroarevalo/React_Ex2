import { useContext } from "react"
import UserProgressContext from "../store/UserProgressContext"
import Modal from "./UI/Modal";
import Button from './UI/Button';
import Input from "./UI/Input";
import LoginStateContext from "../store/LoginStateContext";

export default function Login(){
    const userProgressCtx =  useContext(UserProgressContext);
    const loginStateCtx = useContext(LoginStateContext);

    function handleLogin(){
        loginStateCtx.login();
        userProgressCtx.hide();
    }

    function handleClose(){
        userProgressCtx.hide();
    }
    return(
        <Modal open={userProgressCtx.progress === 'login'} onClose={handleClose}>
            <form >
                <h2>Login</h2>
                <Input label="Name" type="text" id="name" />
                <Input label="LastName" type="text" id="lastName" />
                <Input label="E-mail" type="email" id="email" />
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleLogin}>Login</Button>
                    <Button type="button" textOnly onClick={handleClose}>Close</Button>
                </p>
            </form>
        </Modal>
    )
}