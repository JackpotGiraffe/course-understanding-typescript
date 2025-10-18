// Intersection Types
type FileData = {
    path: string;
    content: string;
}

type Status = {
    isOpen: boolean;
    errMessage?: string;
}

// 如果需要同時具備 FileData 和 Status 的屬性，一般可以另外定義宣告一個新的 type
// 但在 TypeScript 中更好的做法是使用 Intersection Types
type AccessedFileData = FileData & Status;

type DatabaseData = {
    connectionUrl: string;
    credentials: string;
}

type AccessedDatabaseData = DatabaseData & Status;

// 當所有的 type 改為以 interface 宣告時，Intersection Types 仍然適用
// interface AccessedFileData = FileData & Status;
// interface AccessedDatabaseData = DatabaseData & Status;