type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  type: "file",
  path: 'some/path/to/file.csv',
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
  type: "db",
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  // Open + read file OR reach out to database server
  // type guard
  if ("path" in source) { // 用 in operator 可以檢驗某個 property 是否存在於物件中
    console.log(`Loading data from file at path: ${source.path}`);
    // source.path; => use for file loading
  } else if ("connectionUrl" in source) {
    console.log(`Loading data from database at URL: ${source.connectionUrl}`);
    // source.connectionUrl; => use for database connection
  } else {
    throw new Error("Unknown data source");
  }
  
  // discriminate union
  // type 的 property 有可能在迭代中被改變，所以比較安全的方式是用 discriminate union
  if (source.type === "file") {
    console.log(`Loading data from file at path: ${source.path}`);
    // source.path; => use for file loading
  } else if (source.type === "db") {
    console.log(`Loading data from database at URL: ${source.connectionUrl}`);
    // source.connectionUrl; => use for database connection
  } else {
    throw new Error("Unknown data source");
  }
}

export {};