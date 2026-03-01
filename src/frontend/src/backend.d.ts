import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    getSubmissionById(id: bigint): Promise<Submission>;
    submitContact(name: string, email: string, phone: string, message: string): Promise<void>;
}
