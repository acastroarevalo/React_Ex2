import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function User(){
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseUser(){
        userProgressCtx.hide();
    }
    return(
        <Modal className="user" 
        open={userProgressCtx.progress === 'user'} 
        onClose={userProgressCtx.progress === 'user' ? handleCloseUser : null}>
        <h2>User</h2>
        <p>Name: </p>
        <p>Last Name:</p>
        <p>Email:</p>
        <p className="modal-actions">
                <Button textOnly onClick={handleCloseUser}>Close</Button>
            </p>
            
        </Modal>
    )
}