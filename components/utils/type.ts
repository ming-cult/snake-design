// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead

export declare type OmitType<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export declare type SaveType<T, K extends keyof T> = Pick<T, Extract<keyof T, K>>
export declare type NoopType = (args?: any) => void
