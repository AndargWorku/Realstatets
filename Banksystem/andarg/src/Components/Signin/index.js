import React from 'react'
import { Container, Form, FormContent, FormWrap,Icon ,FormH1, FormLabel, FormInput, FormButton,Text} from './SigninElemenets'

const SignIn = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to='/'> Dollar</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign in your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>password</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type="submit">continue</FormButton>
                    <Text>Forget password</Text>

                </Form>
            </FormContent>
        </FormWrap>
      
    </Container>
  )
}

export default SignIn
