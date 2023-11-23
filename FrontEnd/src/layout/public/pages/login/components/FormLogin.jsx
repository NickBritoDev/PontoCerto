import React from 'react';
import { Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../auth/authService';
import { useCreateUser } from '../hooks/useCreateUser';
import { useToast } from '@chakra-ui/react';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  age: Yup.number().positive('Must be a positive number').integer('Must be an integer').required('Required'),
});

const FormLogin = () => {
  const { UseRequestCreateUser, isLoading, isError } = useCreateUser();

  const navigate = useNavigate();
  const toast = useToast();

  return (
    <Formik
      initialValues={{ email: '', firstName: '', lastName: '', age: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        try {
          await UseRequestCreateUser(values.firstName, values.lastName, values.age, values.email);

          const token = 'token_gerado_pelo_servidor';
          login(token);

          navigate('/ponto-certo/home');
        } catch (error) {
          toast({
            title: 'Erro ao criar usuário',
            description: isError, 
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
                <FormLabel>Email:</FormLabel>
                <Input {...field} id="email" placeholder="Enter your email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* firstName */}
          <Field name="firstName">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                <FormLabel>Primeiro Nome</FormLabel>
                <Input {...field} id="firstName" placeholder="Enter your name" />
                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* lastName */}
          <Field name="lastName">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                <FormLabel>Último Nome</FormLabel>
                <Input {...field} id="lastName" placeholder="Enter your last name" />
                <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* age */}
          <Field name="age">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.age && form.touched.age}>
                <FormLabel>Idade</FormLabel>
                <Input {...field} id="age" placeholder="Enter your age" />
                <FormErrorMessage>{form.errors.age}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button isLoading={props.isSubmitting || isLoading} mt={4} colorScheme="teal"  type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
