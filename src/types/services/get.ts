export interface Get<T> {
    get(options: Record<string, string>): Promise<T>;
}
