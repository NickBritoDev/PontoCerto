import React from 'react'
import CriarNovoFuncionario from './components/CriarNovoFuncionario'
import ToggleMode from '../../components/ToggleMode'
import Sidebar from '../../components/Sidebar'
import { Flex } from '@chakra-ui/react'
import TableFilterAllUser from './components/TableFilterAllUser'

export default function CadastroFuncionario() {
	return (
		<Flex justify={'center'} pos={'absolute'} right={2} top={2} gap={0.5} w={'100%'}>
			<Flex pos={'absolute'} top={2} right={2} gap={0.5}>
				<ToggleMode />
				<Sidebar />
			</Flex>
			<CriarNovoFuncionario />
			<TableFilterAllUser />
		</Flex>
	)
}
