import { Button, Divider, VStack, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function ConfirmEmail() {
    return (
        <VStack border={'1px solid #ccc'} rounded={'2xl'} boxShadow={'lg'} margin={'5% auto'} py={10} w={'450px'} textAlign={'center'}>
            <Heading fontSize={18} color={'gray.600'}>Boas vindas ao Ponto Certo!</Heading>
            <Text>Uma nova forma de gerir seus <br></br> cortes, oficinas, fornecedores e costureiras!</Text>
            <Divider w={'90%'} />
            <Text>Os dados de login da sua conta se encontram <br /> no email cadastrado!</Text>
            <Link href='https://mail.google.com/mail/u/0/?ogbl#inbox'>
                <Button colorScheme='messenger' mb={-4}>Confirmar Email!</Button>
            </Link>
        </VStack>
    )
}
