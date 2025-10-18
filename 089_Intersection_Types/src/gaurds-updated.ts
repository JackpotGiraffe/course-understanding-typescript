type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string };
const dbSource: DBSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function isFile(source: Source): source is FileSource {
    // 這樣設計的 function 稱為 type predicate，他的回傳雖然是 boolean，但 TypeScript 會根據回傳值來縮小型別範圍 (source is FileSource)
    return source.type === 'file';
}

function loadData(source: Source) {
    // if ('path' in source) {
    // if (source.type === 'file') {
    if (isFile(source)) {
        // source.path
        // source.path; => use that to open the file
        return;
    }
    // source.connectionUrl; => to reach out to database
}

class User {
    constructor(public name: string) { }

    join() {
        // ...
    }
}

class Admin {
    constructor(permissions: string[]) { }

    scan() {
        // ...
    }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {

    // 用 instanceof 來做 type guard，這樣做的條件是 class 必須要有被實例化
    if (entity instanceof User) {
        entity.join();
        return;
    }
    // 如果不是 User 就是 Admin
    entity.scan();
}

export { };