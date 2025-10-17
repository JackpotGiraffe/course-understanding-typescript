- 一般來說，TypeScript 專案中都會包含 tsconfig.json 檔
    - 這個檔案可能會影響 TypeScript Compiler, IDE, code editor 的行為反應

- 在目錄底下使用 `tsc --init` 可以啟動一個 TypeScript 基礎專案，會自動產生一個 tsconfig.json 的基礎模板

- tsconfig.json 常用 properties:
    - "rootDir": 設定 source code 所在的目錄 (相對路徑)
    - "outDir": 設定 typescript 編譯後的 .js 檔要輸出的目錄 (相對路徑)
    - "noEmit": (true / false) 不輸出編譯後產生的任何檔案，純檢驗語法
    - "noEmitOnError": (true / false) 預設執行 `tsc *.ts` 時，無論是否檢驗出錯誤，都會編譯成 .js file
    - Typechecking related properties: control how "strict" TypeScript is
        - 建議最好都將 "strict" 設為 true
        - 其他只要不衝突都隨意
    - 其他
        ```
        {
            "noUnusedLocals": true, // helps you detect unused variable
            "noUnusedParameters": true, // helps you detect unused function parameters
            "noFallthroughCasesInSwitch": true // helps you detect switch cases without break or return
        }
        ```

- 一般來說，tsconfig.json 目前可用的 properties 已經發展地相當多且複雜，所以有輔助工具例如 [Vite](https://vite.dev/) 能夠協助開發者，直接套用適當的專案開發設定模板，如果真的有必要才閱讀 [TypeScript tsconfig Official Reference](https://www.typescriptlang.org/tsconfig/) 參考細部設定進行微調，如此一來便足夠應付大部分的專案開發情境。

- 直接在根目錄執行 `tsc` 的效果，與執行指令 `tsc [ts-file-path]` 指定編譯的檔案效果並不同，後者會忽略 tsconfig.json 中的設定，以預設模式編譯目標檔案，並且直接在相同目錄下輸出對應的 .js file，這樣一來 tsconfig.json 便沒有存在的意義了

- `tsc` 指令可以在根目錄下對所有目標目錄中的 .ts source code file 進行編譯，如果加上參數 `tsc --watch` 則可以啟動 watched mode (terminal occupied)，並且在變更 source code file 存檔時，即時更新編譯輸出檔案、偵測錯誤印在 terminal 上

- TypeScript 可用的 [(未內建)型別定義函式庫](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master)