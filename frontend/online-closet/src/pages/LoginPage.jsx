import { Container, Flex, Box, Input, Button, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
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
            height="600px"
            padding="4"
            color="white"
            flexDir={{
                base:"column"
            }}
            >
                {isLogin ? (
                    <Stack spacing={4}>
                        Email or username
                        <Input/>
                        Password
                        <Input type="password"/>
                        <Button>Login</Button>
                        <div>
                            Don't have an account?
                            <Button variant="link" onClick={toggleForm}>Register</Button>
                        </div>
                    </Stack>
                ) : (
                    <Stack spacing={4}>
                        First Name
                        <Input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"/>
                        Last Name
                        <Input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"/>
                        Email
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"/>
                        Username
                        <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="username"/>
                        Password
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"/>
                        <Button>Register</Button>
                        <div>
                            Already have an account?
                            <Button variant="link" onClick={toggleForm}>Login</Button>
                        </div>
                        
                    </Stack>
                )}
            </Box>
        </Flex>
    </Container>
  )
}

export default LoginPage