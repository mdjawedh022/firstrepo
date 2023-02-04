type Data = {
    name: string;
};
declare let student: Data;
type Data1 = {
    age: number;
};
declare let person: Data1;
type Data2 = {
    isFetching: boolean;
};
declare let person2: Data2;
declare let arr: number[];
declare let arr2: Array<number>;
declare let arr3: string[];
declare let arr4: Array<string>;
declare let eomployee: [string, boolean];
declare enum Card {
    User = "Ram",
    SuperUser = "Shyam",
    Admin = "Aniket",
    SuperAdmin = "Raghav"
}
declare function product(x: number, y: number): number;
declare const product2: (x: number, y: number) => number;
declare function divide(x: number, y: number): number;
declare const divide2: (x: number, y: number) => number;
declare const printSome: ({ name, prints }: {
    name: any;
    prints: any;
}) => void;
