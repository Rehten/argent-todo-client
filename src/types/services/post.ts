export interface Post<R, T> {
    post(data: R): Promise<T>;
}
