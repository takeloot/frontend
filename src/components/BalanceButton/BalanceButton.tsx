import { FC } from 'react';
import {
    Button, Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Portal
} from "@chakra-ui/react";

interface BalanceButtonProps {
    setOverlay: () => void;
}

export const BalanceButton: FC<BalanceButtonProps> = (props) => {
    const { setOverlay } = props;

    return (
        <Popover>
            <PopoverTrigger>
                <Button colorScheme="blackAlpha" mr="8px" >Баланс</Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent width="212px" bg='blackAlpha.900' border="none" shadow="3px 2px 3px rgba(0,0,0,0.4)" >
                    <PopoverArrow bg='blackAlpha.900' />
                    <PopoverBody>
                        <Button color="white" width="100%" variant="link" onClick={setOverlay} >Попольнить баланс</Button>
                        <Button color="white" width="100%" variant="link" onClick={setOverlay} >Вывести баланс</Button>
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}
