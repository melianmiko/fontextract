export type ColorInputFieldProps = {
    color: string,
    onChange: (v: string) => any,
}

export function ColorInputField(props: ColorInputFieldProps) {
    return (
        <input type="text"
               className="fontextract__color-picker__user-input"
               value={props.color}
               onBlur={(e) => props.onChange((e.target as HTMLInputElement).value)} />
    )
}