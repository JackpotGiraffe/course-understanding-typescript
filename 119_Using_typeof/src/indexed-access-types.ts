const appUser = {
    name: "Jane",
    age: 35,
    permissions: [
        { id: "p1", title: "Admin", description: "Administrator access" }
    ]
}

type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[];
}

type Perms = AppUser["permissions"];
type Perm = Perms[number]; // indexed access type

// another example
type Names = string[];
type name = Names[number]; // string