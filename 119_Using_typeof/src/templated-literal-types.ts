// template literal had been existed in vanilla JS
// const mainUserName = "Max";
// const greeting = `Hi there, ${mainUserName}`; // use template literal to inject variables into strings

// potential problem might occur
type ReadPermissions = "no-read" | "read";
type WritePermissions = "no-write" | "write";

// type FilePermissions = "no-read-write" | "read-no-write" | "no-read-no-write" | "read-write"; // manually created, error-prone
type FilePermissions = `${ReadPermissions}-${WritePermissions}`; // using template literal types to create new union types

type DataFile = {
    data: string;
    permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`; // "dataChanged" | "permissionsChanged"
type DataFileEvents = {
    [K in DataFileEventNames]: () => void;
}