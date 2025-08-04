function debugColor(msg = null, bgc = 'darkblue', color = 'skyblue') {
    console.log(`%c${msg}`, `background-color:${bgc}; color:${color}`);
}
// 1. 自己紹介メッセージ

function introduce(callback) {
    const name = "大橋天翔";
    const age = 30;
    callback(name, age);
}

introduce((name, age) => {
    debugColor('自己紹介メッセージ');
    console.log(`私の名前は${name}です。年齢は${age}です。`)
    // document.body.innerHTML += `<p>私の名前は${name}です。年齢は${age}です。</p>`;
});


// 2. 長方形の面積計算
let width = 5;
let height = 7;

function getSquareArea(width, height, callback) {
    let area = width * height;
    let shapeType = "";
    if (isNaN(area) || area <= 0) {
        console.log("無効な入力です。");
        return
    }
    if (width === height) {
        shapeType = '正方形です。'
    } else if (width > height) {
        // 修正：長方形に変更
        shapeType = '横長の長方形です。'
    } else if (width < height) {
        shapeType = "縦長の長方形です。"
    } else {
        shapeType = "該当しない。"
    }
    callback(area, shapeType);
}


getSquareArea(width, height, (area, shapeType) => {
    debugColor('長方形の面積計算')
    console.log(`形は${shapeType}\n面積は${area}です。`)
})


// 3. 偶数と奇数の判定

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 === 1 || num % 2 === -1;
}

function checkEvenOrOdd(num) {
    debugColor('偶数と奇数の判定')

    if (isEven(num)) {
        console.log('偶数です。')
    } else if (isOdd(num)) {
        console.log('奇数です。')
    } else {
        console.log('該当しません。')
    }
}

// 修正：変数に格納
let num = -11;
checkEvenOrOdd(let = -11);

// 4. 未成年チェック
function isAdult(age) {
    // 修正：スペルミス
    debugColor('未成年チェック')

    if (age >= 18) {
        console.log('成人です。')
    } else if (age < 18 && age >= 0) {
        console.log('未成年です。')
    } else {
        console.log('宇宙人ですか。')
    }
}

isAdult(0);

// 5. 1から１０までの整数を足し合わせる

// let result = 0;
// for (let i = 1; i <= 10; i++) {
//     result += i;
// }
// console.log(result)

// アレイー関数で容器を用意、スプレッドで１０個の要素に展開し、マッピング関数で値とインデックスを取り出し、再代入
const nums = [...Array(10)].map((_, i) => i + 1)
function myReduce(arr, callback, start = 0) {
    debugColor('1から１０までの整数を足し合わせる')

    let accumulate = start;
    for (let i = 0; i < arr.length; i++) {
        // first: acc, crr = 0, 1, second: acc, curr = 1, 2 -> accumulate 3
        accumulate = callback(accumulate, arr[i]);
    }
    return accumulate;
}

const result = myReduce(nums, (accumulate, curr) => accumulate + curr, 0)
console.log(result);


// 6. 成績判定
let score = 101;

function checkScore(score, cb) {
    let result = cb(score);
    console.log(result);

}


checkScore(score, (score) => {
    debugColor('成績判定')
    let result = ''

    if (score > 100) {
        return "もしかして、叡智を司る存在……宇宙人ですか";
    }
    // 修正：以下仕様通りの、出力結果に変更
    if (score >= 80) {
        result += '成績はAです。';
    } else if (score >= 60 && score < 80) {
        result += '成績はBです。'
    } else {
        result += '成績はCです。'
    }
    return result;
})

// 7. FizzBuzzゲーム
const n = 20;

const cb = function cb(i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }

}
function FizzBuzz(num, cb) {
    debugColor('FizzBuzzゲーム');


    for (let i = 1; i <= num; i++) {
        cb(i);
    }
}

FizzBuzz(n, cb);
