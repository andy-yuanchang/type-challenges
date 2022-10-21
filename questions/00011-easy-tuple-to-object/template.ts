export type TupleToObject<TArray extends readonly string[]> = {
    [K in TArray[number]]: K 
}
