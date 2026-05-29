function pipe(...fns) {
    return (initialValue) => fns.reduce((value, fn) => fn(value), initialValue);
}

// Test bài 1
const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);
console.log("--- Test Pipe ---");
console.log(process(5)); 

function memoize(fn) {
    const cache = {}; 

    return function (...args) {
        const key = JSON.stringify(args); 
        if (key in cache) {
            return cache[key]; 
        }
        cache[key] = fn(...args);
        return cache[key];
    };
}

// Test bài 2
const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});
console.log("\n--- Test Memoize ---");
console.log(expensiveCalc(1000000)); 
console.log(expensiveCalc(1000000)); 

function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId); 
        timeoutId = setTimeout(() => {
            fn(...args); 
        }, delay);
    };
}

// Test bài 3
const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

console.log("\n--- Test Debounce (Chờ 500ms để xem kết quả) ---");
search("a");
search("ab");
search("abc"); 



async function retry(fn, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) throw error;
            console.log(`Lần thử ${attempt} thất bại, đang thử lại...`);
        }
    }
}


setTimeout(async () => {
    console.log("\n--- Test Retry ---");
    let count = 0;
    
    const fetchApi = () => new Promise((resolve, reject) => {
        count++;
        if (count < 3) reject(new Error("Mạng yếu"));
        else resolve("Lấy dữ liệu thành công!");
    });

    try {
        const res = await retry(fetchApi, 3);
        console.log("Kết quả:", res);
    } catch (err) {
        console.log("Thất bại hoàn toàn:", err.message);
    }
}, 600);