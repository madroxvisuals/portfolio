export async function tryCatch<T>(
    fn: () => T | Promise<T>,
    onError?: (error: Error) => void
): Promise<[T | null, Error | null]> {
    try {
        const result = await fn()
        return [result, null]
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error))
        onError?.(err)
        return [null, err]
    }
}