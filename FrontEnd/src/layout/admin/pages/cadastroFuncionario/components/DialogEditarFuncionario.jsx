import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { FaEdit } from "react-icons/fa"
import FormEditarFuncionario from "./FormEditarFuncionario"

export default function DialogEditarFuncionario({funcionario}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <>
      <Button colorScheme='messenger' onClick={onOpen}>
        <FaEdit />
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Atualize os dados do seu funcionario
            </AlertDialogHeader>

            <AlertDialogBody>
              <FormEditarFuncionario funcionario={funcionario} ref={cancelRef} onClose={onClose} />
            </AlertDialogBody>
            <AlertDialogFooter>

            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}