import React from "react";
import { RadioGroup, useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Icon, useColorMode, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from '@chakra-ui/react'
import { MdMenuOpen } from "react-icons/md";
import { IoIosPulse } from "react-icons/io";

export default function Sidebar() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const { colorMode } = useColorMode()

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button onClick={onOpen} height={'48px'} >
        <Icon as={MdMenuOpen} fontSize={24} color={colorMode === 'light' ? '#000' : '#fff'} />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display={"flex"} alignItems={"center"} justifyContent={"center"} borderBottomWidth='1px'>
            <IoIosPulse color="red" />Ponto Certo<IoIosPulse color="red" />
          </DrawerHeader>
          <DrawerBody ml={-5} w={'111%'}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Controle de Cortes
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel display={"flex"} flexDir={"column"} pb={4} gap={2}>
                  <Button>Histórico de Cortes</Button>
                  <Button>Fornecedores de Cortes</Button>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Gestão Financeira
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel display={"flex"} flexDir={"column"} pb={4} gap={2}>
                  <Button>Histórico Financeiro</Button>
                  <Button>Controle de Contas</Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}