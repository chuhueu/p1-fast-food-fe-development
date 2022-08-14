import React from 'react';

interface Props {
    border: string;
    bgcolor: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string;
    width: string;
    color: string;
}

const PrimaryButton: React.FC<Props> = ({ border, bgcolor, color, children, height, onClick, radius, width }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: bgcolor,
                border,
                borderRadius: radius,
                height,
                width,
                color: color
            }}
            className="!text-lg !font-semibold flex justify-center items-center gap-2"
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
