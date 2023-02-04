declare let a: number;
declare let first_name: string;
declare let last_name: string;
declare let full_name: string;
declare let checked: boolean;
declare let value: null;
declare let value2: undefined;
declare let arr: number[];
declare let arrOfStr: string[];
declare let arrofNum: Array<number>;
declare let obj: object;
declare let person: {
    id: number;
    name: string;
    address: string;
    email?: string;
};
declare const address: Record<string, string>;
type Data = {
    id: number;
    name: string;
    address: string;
    email?: string;
};
declare let p: Data;
declare let student: Data;
declare let b: number | string;
type data = {
    id: number;
    store: string;
    products: {
        id: number;
        name: string;
        sold: boolean;
    }[];
};
declare let cart: data[];
type DataPerson = {
    id: number;
    name: string;
    address: string;
};
type DataStudent = {
    id: number;
    skill: string;
};
declare let person2: DataPerson & DataStudent;
declare function sum(a: number, b: number): number;
declare const printSome: ({ name, address }: DataPerson) => void;
