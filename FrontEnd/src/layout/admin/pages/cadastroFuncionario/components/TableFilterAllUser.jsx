import React from 'react'
import { useFilterAllUser } from '../hooks/useFilterAllUser'
import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { formatarDinheiro } from '../../../../../utils/masks/formataMoeda'
import DialogApagarFuncionario from './DialogApagarFuncionario';
import DialogEditarFuncionario from './DialogEditarFuncionario';

export default function TableFilterAllUser() {
	const filterAllUser = useFilterAllUser()
	const funcionarios = filterAllUser.data || []

	return (
		<TableContainer mt={36} w={'100%'} p={4} boxShadow={'lg'}>
			<Text fontSize={20} ml={2}>Gerenciamento de Funcionarios</Text>
			<Text ml={2}>Cadastre, edite, exclua e tenha o controle de dados de seus funcionarios</Text>
			<Table size='sm' mt={10}>
				<Thead>
					<Tr>
						<Th>Nome</Th>
						<Th>Sobrenome</Th>
						<Th>Idade</Th>
						<Th>Email</Th>
						<Th isNumeric>Salário</Th>
						<Th>Cargo</Th>
						<Th>Editar</Th>
						<Th>Apagar</Th>
					</Tr>
				</Thead>
				<Tbody>
					{funcionarios.map(funcionario => (
						<Tr key={funcionario.id}>
							<Td>{funcionario.primeiroNome}</Td>
							<Td>{funcionario.sobrenome}</Td>
							<Td mr={-8}>{funcionario.idade}</Td>
							<Td>{funcionario.email}</Td>
							<Td isNumeric>{formatarDinheiro(funcionario.salario)}</Td>
							<Td>{funcionario.cargo}</Td>
							<Td> <DialogEditarFuncionario /></Td>
							<Td><DialogApagarFuncionario /></Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	)
}
