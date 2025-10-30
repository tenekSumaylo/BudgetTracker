import type { AxiosError } from "axios"

type ErrorModel = {
    name : AxiosError,
    message : string,
    status: string,
    code : string
};