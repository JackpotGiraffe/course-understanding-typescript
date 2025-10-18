// interfaces, not exist in JavaScript
// 跟 type alias 很像，但更側重於定義物件的結構
// interface 可以被 implements (類別實作)
// interface 也可以被 extends (介面繼承)
interface Authenticatable {
    // only the structure, no implementation
    email: string;
    password: string;

    login(): void;
    logout(): void;
}
// 在 TypeScript 中，甚至可以用重複定義 interface 來達到「合併」的效果
interface Authenticatable {
    rememberMe: boolean; // optional property
}
// interface 也能夠被繼承
// 此時舊有的介面不會被改寫或覆寫
interface AuthenticatableAdmin extends Authenticatable {
    adminLevel: number;
    role: "admin" | "superadmin";
}

class AuthenticatableUser implements Authenticatable {
    constructor(
        public username: string, // 實作 interface 時，可以有 class 自定義的額外屬性
        public email: string,
        public password: string,
        public rememberMe: boolean = false
    ) {}

    login(): void {
        // reach out to server, check credentials, create session
    }

    logout(): void {
        // destroy session
    }
}

// Use (implement) interface as a contract
let user: Authenticatable;
user = { // 因為用 interface 重複定義的特性，這邊必須要有 rememberMe

    email: "yaha@example.com",
    password: "demo",
    rememberMe: true,
    login() {
        // reach out to server, check credentials, create session
    },
    logout() {
        // destroy session
    }
};