// 1. 문자열 합치기
// const year = 2022;
// const month = 11;
// const day = 3;

// var a = year.toString().padStart(2, '0');
// var b = month.toString().padStart(2, '0');
// var c = day.toString().padStart(2, '0');
// var dateString = [a, b, c].join('-');
// console.log(dateString);


// 2. 문자열 분리
// const dateString = "2022-12-12";

// var arr = dateString.split('-').map(str => parseInt(str, 10))
// console.log(arr);


// 3. 문자열 변경
// const text = "나는 XX를 좋아해";
// const item = "JS";

// console.log(text.replace('XX', item));


// 4. 문자열 검색
// const text = "안녕하세요. 나는 사람입니다.";
// const searchText = "사람";

// var pos = text.search(searchText);
// console.log(pos !=- 1);


// 5. 모든 배열값 더하기
// const point1 = [12, 34, 80, 72];
// const point2 = [1, 80, 94];

// function sum(array) {
//   return array.reduce((a, b) => a + b, 0);
// }

// console.log(sum(point1) + sum(point2));


// 6. 소수점 이하를 버리고 정수 구하기
// const a = 1.2;
// const b = 3.4;

// console.log(Math.floor(a+b));


// 7. 랜덤 수 구하기
// const min = 1;
// const max = 10;

// console.log(Math.floor(Math.random() * (max - min) + min));


// 8. 배수 확인
// const target = 10;
// const num = 3;

// console.log(target % num ==0);


// 9. 대문자로 변경
// const nick = "kakao";

// console.log(nick.toUpperCase());


// 10. 원시타입 요소만 배열로 만들기
// const items = [1, "a", true, ["a"], { n: 1 }];

// const arr = items.filter(
//     (item) =>  typeof item !== 'object' && typeof item !== 'function' && typeof item !== 'array'
//   );
// console.log(arr);


// 11. 배열 값 나누기
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

var result = '';
items.forEach((item , index) => {
    result += item;
    const isPagePad = (index + 1) % pageSize == 0;
    if (isPagePad){
        result += '---';;
    }
});
console.log(result);

// 12.배열 값 나눠서 다시 배열로
// const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// const pageSize = 3;

// const arr = [];
// for (let i = 0; i < items.length; i += pageSize) {
//   const pageItems = items.slice(i, i + pageSize);
//   arr.push(pageItems);
// }
// console.log(arr);