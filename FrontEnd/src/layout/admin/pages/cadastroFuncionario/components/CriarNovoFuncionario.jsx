import React from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'
import { IoMdPersonAdd } from "react-icons/io";
import FormNovoFuncionario from './FormNovoFuncionario';

export default function CriarNovoFuncionario() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const cancelRef = React.useRef()

	return (
		<>
			<Button pos={'fixed'} bottom={2} right={2} rounded={'full'} w={14} h={14} colorScheme='messenger' onClick={onOpen}>
				<IoMdPersonAdd fontSize={20} />
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent w={'450px'} p={4}>
						<AlertDialogHeader fontSize='lg' fontWeight='bold' ml={-6}>
							Cadastrar novo funcionario
						</AlertDialogHeader>
						<FormNovoFuncionario onClose={onClose}/>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	)

}
