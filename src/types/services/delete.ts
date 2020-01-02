export interface Delete<T> {
    delete(options: Record<string, string>): Promise<T>;
}
