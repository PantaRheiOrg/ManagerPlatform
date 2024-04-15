import React from 'react';
import Button from 'react-bootstrap/Button';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: string;
    size?: 'sm' | 'lg';
}

const CButton: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled = false,
    variant,
    size,
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            variant={variant}
            size={size}
        >
            {label}
        </Button>
    );
};

export default CButton;
