import React from "react";
import styled from "styled-components";
import {useFormik} from "formik";
import * as Yup from 'yup';
import axiosClient from "../../services/Axios";
import {useAuth} from "../../hooks/useAuth";

const Wrapper = styled.section`
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  border: 1px solid darkgray;
  box-shadow: lightblue 0 10px 10px;
  border-radius: 1rem;
  width: 100%;
  max-width: 15vw;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: 1rem;
  padding-bottom: .2rem;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 0.8rem 1rem;
  background: #f9f9fa;
  color: #000;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 0.8rem;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  max-width: 100%;
  padding: 0.8rem;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background: orangered;
  border: none;
  border-radius: 8px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`;

const Image = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  & > img {
    margin-bottom: 1.5rem;
    width: 3rem;
    height: 3rem;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8rem;
    margin: 0 0 1rem 0;
`;

//Login Form Schema
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 6 characters')
        .required('Required'),
});

//Config call API login
const url = process.env.REACT_APP_API_URL + '/login';

 async function getLoginAccount(data: any) {
    return await axiosClient.post(url, data)
}

const Login: React.FC = () => {
    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            //Handle action form submit
            console.log(values)
            const data = getLoginAccount(values);
            data.then((res) => {
                console.log(res)
            })
        },
        validationSchema: LoginSchema
    });

    const {isAuthenticated, isInitialized, user} = useAuth();
    console.log(isAuthenticated, isInitialized, user)


    return (
        <Wrapper>
            <Form onSubmit={loginForm.handleSubmit}>
                <Image>
                    <img src="https://beetech.beeid.vn/images/logo.ico" alt="Logo"/>
                    <h1>BeeChat</h1>
                </Image>
                <FormWrapper>
                    <Title>Sign in to your account</Title>
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder='thang.pt@beetechsoft.vn'
                        value={loginForm.values.email}
                        onChange={loginForm.handleChange}
                    />
                    {loginForm.touched.email && loginForm.errors.email && (
                        <ErrorMessage>{loginForm.errors.email}</ErrorMessage>
                    )}
                    <Label htmlFor="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={loginForm.values.password}
                        onChange={loginForm.handleChange}
                        autoComplete='false'
                    />
                    {loginForm.touched.password && loginForm.errors.password && (
                        <ErrorMessage>{loginForm.errors.password}</ErrorMessage>
                    )}
                    <Button type='submit'>Submit</Button>
                </FormWrapper>
            </Form>
        </Wrapper>
    );
}

export default Login;