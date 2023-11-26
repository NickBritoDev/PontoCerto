import React from 'react';
import { Button, FormControl, FormLabel, Input, FormErrorMessage, Box, Divider, AbsoluteCenter, Flex } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../auth/authService';
import { useCreateUser } from '../hooks/useCreateUser';
import { useToast } from '@chakra-ui/react';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  primeiroNome: Yup.string().required('Required'),
  sobrenome: Yup.string().required('Required'),
  idade: Yup.number().positive('Must be a positive number').integer('Must be an integer').required('Required'),
});

const FormRegister = () => {
  const { UseRequestCreateUser, isLoading } = useCreateUser();

  const navigate = useNavigate();
  const toast = useToast();

  return (
    <Box w={'450px'} border={'1px solid #ccc'} boxShadow={'lg'} p={5} margin={'5% auto'} rounded={'2xl'} display={'flex'} justifyContent={'center'} flexDir={'column'}>
      <Formik
        initialValues={{ email: '', primeiroNome: '', sobrenome: '', idade: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          try {
            await UseRequestCreateUser(values.primeiroNome, values.sobrenome, values.idade, values.email);

            const token = 'token_gerado_pelo_servidor';
            login(token);

            navigate('/ponto-certo/home');
          } catch (error) {
            toast({
              title: 'Erro ao criar usuário',
              description: 'Já existe um usuário cadastrado com esse email.',
              duration: 5000,
              isClosable: true,
            });
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {(props) => (
          <Form>
            {/* Email */}
            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel mb={-1} mt={4}>Email:</FormLabel>
                  <Input type='email' {...field} id="email" placeholder="Entre com seu email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex gap={1}>
              {/* primeiroNome */}
              <Field name="primeiroNome">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.primeiroNome && form.touched.primeiroNome}>
                    <FormLabel mb={-1} mt={4}>Nome:</FormLabel>
                    <Input {...field} id="primeiroNome" placeholder="Seu primeiro nome" />
                    <FormErrorMessage>{form.errors.primeiroNome}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* sobrenome */}
              <Field name="sobrenome">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.sobrenome && form.touched.sobrenome}>
                    <FormLabel mb={-1} mt={4}>Sobrenome:</FormLabel>
                    <Input {...field} id="sobrenome" placeholder="Seu sobrenome" />
                    <FormErrorMessage>{form.errors.sobrenome}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Flex>

            {/* idade */}
            <Field name="idade">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.idade && form.touched.idade}>
                  <FormLabel mb={-1} mt={4}>Idade:</FormLabel>
                  <Input type='number' {...field} id="idade" placeholder="Sua idade" maxLength={3} minLength={1} />
                  <FormErrorMessage>{form.errors.idade}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button margin={'10px auto'} w={'100%'} isLoading={props.isSubmitting || isLoading} mt={4} colorScheme="messenger" type="submit">
              Registre-se
            </Button>
            <Box position='relative' padding='4'>
              <Divider />
              <AbsoluteCenter px='4'>
                Já possui uma conta ?
              </AbsoluteCenter>
            </Box>
            <Button margin={'10px auto'} w={'100%'} isLoading={props.isSubmitting || isLoading} mt={4} color={'black'} border={'1px solid #ccc'} _hover={{ color: 'blue.400', bg: 'transparent', border: '1px solid #ccc' }} bg={'white'} >
              Entrar
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FormRegister;
