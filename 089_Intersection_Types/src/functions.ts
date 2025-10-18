// function overloads
// 根據參數類型不同，回傳值類型也不同，可以分別定義多個函式簽名
function getLength(val: any[]): number;
function getLength(val: string): string;

function getLength(val: string | any[]) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    } 
    return val.length;
}


const numOfWords = getLength('Hello world, this is TypeScript');
numOfWords.length; // 這麼做會報錯，因為回傳值有可能是 string 也有可能是 number，但如果有多個 overload 簽名，TypeScript 會根據傳入的參數類型來決定回傳值類型
const numItems = getLength(['apple', 'banana', 'orange']);