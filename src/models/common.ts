export interface Response<T> {
    code: bigint,
    message: string,
    data: T
}

export interface Pagination<T> {
    data: T[],
    code: bigint,
    message: string,
    current_page: bigint
    total_page: bigint
    per_page: bigint
    total: bigint
}