import React from 'react';
import { Button, FormControl, FormLabel, Input, FormErrorMessage, Box, Flex, Select } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useCreateUser } from '../hooks/useCreateUser';
import { useToast } from '@chakra-ui/react';
import {formatarDinheiro} from '../../../../../utils/masks/formataMoeda'

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  primeiroNome: Yup.string().required('Required'),
  sobrenome: Yup.string().required('Required'),
  idade: Yup.number().positive('Must be a positive number').integer('Must be an integer').required('Required'),
  salario: Yup.number().positive('Must be a positive number').integer('Must be an integer').required('Required'),
  cargo: Yup.string().required('Required'),
});

const FormNovoFuncionario = ({ onClose }) => {
  const { UseRequestCreateUser, isLoading } = useCreateUser();
  const toast = useToast();

  return (
    <Box margin={'5% auto'} rounded={'2xl'} display={'flex'} justifyContent={'center'} flexDir={'column'}>
      <Formik
        initialValues={{ email: '', primeiroNome: '', sobrenome: '', idade: '', salario: '', cargo: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          try {
            await UseRequestCreateUser(values.primeiroNome, values.sobrenome, values.idade, values.email, values.salario, values.cargo);
            toast({
              title: 'Funcionario criado com sucesso!',
              description: '',
              duration: 5000,
              isClosable: true,
              status: 'success',
            });
          } catch (error) {
            toast({
              title: 'Erro ao criar funcionario',
              description: 'Já existe um funcionario cadastrado com esse email.',
              duration: 5000,
              isClosable: true,
              status: 'info',
            });
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {(props) => (
          <Form color='black'>
            {/* Email */}
            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel mb={-1} mt={4}>Email:</FormLabel>
                  <Input type='email' {...field} id="email" placeholder="Email" />
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
                    <Input {...field} id="primeiroNome" placeholder="Primeiro Nome" />
                    <FormErrorMessage>{form.errors.primeiroNome}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* sobrenome */}
              <Field name="sobrenome">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.sobrenome && form.touched.sobrenome}>
                    <FormLabel mb={-1} mt={4}>Sobrenome:</FormLabel>
                    <Input {...field} id="sobrenome" placeholder="Sobrenome" />
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
                  <Input type='number' {...field} id="idade" placeholder="Idade" maxLength={3} minLength={1} />
                  <FormErrorMessage>{form.errors.idade}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* salario */}
            <Field name="salario">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.salario && form.touched.salario}>
                  <FormLabel mb={-1} mt={4}>Salario:</FormLabel>
                  <Input type='number' value={formatarDinheiro(field.value)} {...field} id="salario" placeholder="Salario"  />
                  <FormErrorMessage>{form.errors.salario}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* salario */}
            <Field name="cargo">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.cargo && form.touched.cargo}>
                  <FormLabel mb={-1} mt={4}>Cargo:</FormLabel>
                  <Select {...field} placeholder='Selecione o Cargo'>
                    <option value='Custureira'>Custureira</option>
                    <option value='Ajudante Geral'>Ajudante Geral</option>
                    <option value='Gerente'>Gerente</option>
                    <option value='Ceo'>Ceo</option>
                  </Select>
                  <FormErrorMessage>{form.errors.cargo}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button onClick={onClose} margin={'10px auto'} w={'100%'} isLoading={props.isSubmitting || isLoading} mt={4} colorScheme="messenger" type="submit">
              Criar novo funcionario
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FormNovoFuncionario;
