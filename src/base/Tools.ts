
export function readFileToDataURL(file: File): Promise<string> {
    return new Promise<string>((res, rej) => {
        const reader = new FileReader();
        reader.onload = () => res(reader.result as string);
        reader.onerror = (e) => rej(e);
        reader.readAsDataURL(file);
    });
}
