export type MyReadonly<T extends {[key: string]: any}> = {
    readonly [P in keyof T]: T[P]
}
