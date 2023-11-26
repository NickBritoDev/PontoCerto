import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { BsTrash } from "react-icons/bs"
import { useDeleteUser } from "../hooks/useDeleteUser"
import { useToast } from '@chakra-ui/react'

export default function DialogApagarFuncionario({ id, nome, sobrenome }) {
  const toast = useToast()
  const { deleteUser } = useDeleteUser();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const apagarFuncionario = async () => {
    await deleteUser(id);
    onClose();
    toast({
      title: 'Funcionario apagado com sucesso!',
      position: "top-right",
      description: '',
      duration: 5000,
      isClosable: true,
      status: 'success',
    });
  };


  return (
    <>
      <Button colorScheme='red' onClick={onOpen} ml={1}>
        <BsTrash />
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Excluir Funcionario
            </AlertDialogHeader>
            
            <AlertDialogBody>
              Você tem certeza que deseja apagar {nome} {sobrenome} do registro de funcionarios ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={apagarFuncionario} ml={3}>
                Excluir
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>id
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}