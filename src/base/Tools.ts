/**
 * Will read File object to DataURL string
 * @param file File to read
 */
export async function readFileToDataURL (file: File): Promise<string> {
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => { resolve(reader.result as string); };
    reader.onerror = (e) => { reject(e); };
    reader.readAsDataURL(file);
  });
}
