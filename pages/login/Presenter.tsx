import React from "react";
import { IUseInput } from "./Container";

interface IProps {
    emailSignIn: any;
    formEmail: IUseInput;
    formPassword: IUseInput;
}

const Presenter: React.FC<IProps> = ({
    emailSignIn,
    formEmail,
    formPassword
}) => (
    <div>
        <h1>Login</h1>
        <form onSubmit={e => {
            e.preventDefault();
            const email = formEmail.value;
            const password = formPassword.value;

            console.log("EMAIL: ", email);
            console.log("PASSWORD: ", password);
            emailSignIn({
                variables: {
                    email,
                    password
                }
            });
        }}>
            <input type={"text"} { ...formEmail }/>
            <input type={"password"} { ...formPassword } />
            <input type={"submit"} value={"login"}/>
        </form>
        
    </div>
);

export default Presenter;