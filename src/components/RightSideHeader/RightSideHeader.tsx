import { FC, useState } from 'react';
import {
    Flex,
    Text,
    Select,
    Button,
    ModalOverlay,
    useDisclosure,
    Modal,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";

import { BalanceButton } from "../BalanceButton";
import { BalanceModal } from "../BalanceModal"

const mockPaymentCountry = ['USD', 'RUB'];
const mockCountryLang = ['ENG', 'РУС'];

export const RightSideHeader: FC = () => {
  const BalanceOverlay = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  const [auth, setIsAuth] = useState<boolean>(false);
  const authorize = () => setIsAuth(prev => !prev);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<BalanceOverlay />)
  const btn = () => {
        setOverlay(<BalanceOverlay />)
        onOpen()
    }


  return (
    <Flex>
      <BalanceButton setOverlay={btn} />
      <Select width="90px" mr="8px" variant="ghost" >
        { mockPaymentCountry.map(el => <option key={el} value={el}>{el}</option>) }
      </Select>
      <Select width="90px" mr="8px" variant="ghost" >
          { mockCountryLang.map(el => <option key={el} value={el}>{el}</option>) }
      </Select>
      <Button colorScheme="teal" onClick={authorize} >
          {!auth ? 'Войти через Steam' : 'Выйти' }
      </Button>
      <BalanceModal isOpen={isOpen} onClose={onClose} overlay={overlay} />
    </Flex>
  )
}
