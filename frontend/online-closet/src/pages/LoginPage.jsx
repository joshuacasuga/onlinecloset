import { Container, Flex, Box, Input, Button, Stack } from '@chakra-ui/react'
//import { PasswordInput } from "@components/ui/password-input"
import React, { useState } from 'react'

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    
    const toggleForm = () => setIsLogin(!isLogin);

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
            base:"column"
        }}
        >
            <Box
            background="#4c7d7d"
            width="500px"
            height="500px"
            padding="4"
            color="white"
            flexDir={{
                base:"column"
            }}
            >
                {isLogin ? (
                    <Stack spacing={4}>
                        Email or username
                        <Input placeholder="Enter your email or username"/>
                        Password
                        <Input placeholder="Enter password" type="password"/>
                        <Button>Login</Button>
                        Don't have an account?
                        <Button variant="link" onClick={toggleForm}>Register</Button>
                    </Stack>
                ) : (
                    <Stack spacing={4}>
                        First Name
                        <Input placeholder="Enter your first name"/>
                        Last Name
                        <Input placeholder="Enter your last name"/>
                        Email
                        <Input placeholder="Enter your email"/>
                        Username
                        <Input placeholder="Enter your username"/>
                        Password
                        <Input placeholder="Enter password" type="password"/>
                        Already have an account?
                        <Button variant="link" onClick={toggleForm}>Login</Button>
                    </Stack>
                )}
            </Box>
        </Flex>
    </Container>
  )
}

export default LoginPage