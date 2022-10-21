export type MyPick<T, pickedKey extends keyof T> = {
    [key in pickedKey]: T[key]
}