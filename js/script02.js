function debugColor(msg = null, bgc = 'darkblue', color = 'skyblue') {
    console.log(`%c${msg}`, `background-color:${bgc}; color:${color}`);
}
// 1. xからyまでの合計


let sums = {
    x: 5,
    y: 4
}

function sumRange(sums, cb) {
    if (sums.x >= sums.y) {
        return cb(sums.y, sums.x);
    }
    else {
        return cb(sums.x, sums.y);

    }
}

let result = sumRange(sums, (sm, bg) => {
    let result = 0;
    for (i = sm; i <= bg; i++) {
        result += i;
    }
    console.log(result);
    return result;
});

console.log(result);

