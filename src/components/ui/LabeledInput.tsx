import {useId} from "react";

export type LabeledInputProps = {
    label: string,
    type: string,
    value: string,
    onChange?: (v: string) => any,
    onBlur?: (v: string) => any,
}

export function LabeledInput(props: LabeledInputProps) {
    const id = useId();

    return (
        <>
            <label for={id}>
                {props.label}
            </label>
            <input type={props.type}
                   id={id}
                   value={props.value}
                   onChange={(e) => props.onChange && props.onChange((e.target as HTMLInputElement).value)}
                   onBlur={(e) => props.onBlur && props.onBlur((e.target as HTMLInputElement).value)} />
        </>
    )
}