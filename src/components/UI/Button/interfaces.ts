export interface ButtonProps {
    name: string;
    type?: keyof typeof ButtonType;
    disabled?: boolean;
    onClick?: () => void;
}

export const enum ButtonType {
    button = 'button',
    submit = 'submit',
    reset = 'reset',
}