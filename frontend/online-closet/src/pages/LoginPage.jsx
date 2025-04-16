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
    <div>Hello</div>
  )
}

export default LoginPage