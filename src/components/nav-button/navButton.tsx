import React from 'react';
import { Button } from '@chakra-ui/react';


interface IButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const NavButton: React.FC<IButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <Button colorScheme='green' onClick={onClick} disabled={disabled} size='sm' rounded='sm' >
      { text }
    </Button>
  );
};

export default NavButton;