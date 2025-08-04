// 1. 自己紹介メッセージ

function introduce(callback) {
    const name = "大橋天翔";
    const age = 30;
    callback(name, age);
}

introduce((name, age) => {
    console.log('%c自己紹介メッセージ', 'color: skyblue; font-weight: bold;');
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
        shapeType = '横長の正方形です。'
    } else if (width < height) {
        shapeType = "縦長の長方形です。"
    } else {
        shapeType = "該当しない。"
    }
    callback(area, shapeType);
}


getSquareArea(width, height, (area, shapeType) => {
    console.log('%c長方形の面積計算', 'color: skyblue; font-weight: bold;');
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
    console.log('%c偶数と奇数の判定', 'color: skyblue; font-weight: bold;');

    if (isEven(num)) {
        console.log('偶数です。')
    } else if (isOdd(num)) {
        console.log('奇数です。')
    } else {
        console.log('該当しません。')
    }
}

checkEvenOrOdd(let = -11);

// 4. 未成年チョック
function isAdult(age) {
    console.log('%c未成年チョック', 'color: skyblue; font-weight: bold;');

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

// アレー関数で容器を用意、スプレッドで１０個の要素に展開し、マッピング関数で値とインデックスを取り出し、再代入
const nums = [...Array(10)].map((_, i) => i + 1)
function myReduce(arr, callback, start = 0) {
    console.log('%c1から１０までの整数を足し合わせる', 'color: skyblue; font-weight: bold;');

    let accumulate = start;
    for (let i = 0; i < arr.length; i++) {
        // first roop acc is 0, crr is 1, second roop acc is 1, curr is 2 , then return 3
        accumulate = callback(accumulate, arr[i]);
    }
    console.log(accumulate)
    return accumulate;
}

myReduce(nums, (accumulate, curr) => accumulate + curr, 0)


// 6. 成績判定

let score = 59;

function checkScore(score, cb) {
    cb(score);
}

checkScore(score, (score) => {
    console.log('%c成績判定', 'color: skyblue; font-weight: bold;');

    if (score > 100) {
        console.log("you are bug.");
        return
    }
    if (score >= 80) {
        console.log("You are fabulous!")
    } else if (score >= 60 && score < 80) {
        console.log("Not so bad.")
    } else {
        console.log("Damm it, Keep it up!")
    }
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
    console.log('%cFizzBuzzゲーム', 'color: skyblue; font-weight: bold;');

    for (let i = 1; i <= num; i++) {
        cb(i);
    }
}

FizzBuzz(n, cb);
