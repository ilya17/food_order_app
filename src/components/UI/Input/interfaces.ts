export interface InputProps {
    label?: string;
    htmlFor?: string;
    id?: string;
    type?: keyof typeof InputTypes;
    pattern?: string;
    value: string
    defaultValue?: string;
    onChange?: (value: string) => void
}

export enum InputTypes {
    button = 'button',
    checkbox = 'checkbox',
    file = 'file',
    hidden = 'hidden',
    image = 'image',
    password = 'password',
    radio = 'radio',
    reset = 'reset',
    submit = 'submit',
    text = 'text',
    number = 'number'
}