export interface Put<R, T> {
    put(data: R): Promise<T>;
}
