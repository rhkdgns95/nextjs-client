import React, { useState } from 'react';
import Presenter from './Presenter';
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';
import { NextPage } from 'next';

const EMAIL_SIGN_IN = gql`
    query emailSignIn($email: String! $password: String!) {
        EmailSignIn(email: $email password: $password) {
            ok
            error
            token
        }
    }
`;
export interface IUseInput {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const useInput = (): IUseInput => {
    const [value, setValue] = useState<string>("");
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value: newValue }} = event;
        setValue(newValue);
    }

    return {
        value,
        onChange
    };
}

const Login: NextPage = () => {
    const formEmail = useInput();
    const formPassword = useInput();

    const [ emailSignIn ] = useLazyQuery(EMAIL_SIGN_IN, {
        fetchPolicy: "cache-and-network",
        onCompleted: data => {
            console.log("EmailSignIn onCompleted: ", data);
        },
        onError: data => {
            console.log("EmailSignIn onError: ", data);
        }
    });
    

    return (
        <Presenter 
            formEmail={formEmail}
            formPassword={formPassword}
            emailSignIn={emailSignIn}
        /> 
    );
}

Login.getInitialProps = async () => {

}

export default Login;