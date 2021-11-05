export interface ISuccess{
    (response: unknown): void
}

export interface IError{
    (code: number, msg?: string) : void
}