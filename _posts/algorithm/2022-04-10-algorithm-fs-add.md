---
title: "백준 알고리즘	사칙연산 문제"
excerpt: "입출력관련 간단한 계산 문제(1000,1001, 10998, 1008,	10869) node.js (JS) 로 풀기"
date: 2022-04-10
categories:
  - algorithm
tags:
  - algorithm
last_modified_at: 2022-04-10
---

천천히 단계별로 풀어가는중..

# 1000 번 문제

node.js로 두개의 숫자를 입력받아 두 수를 더하여 출력하는 문제이다.

예제 소스를 활용하여 만들어보았다.  
[백준 예제 소스](https://help.acmicpc.net/language/info)

```
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
```

require로 fs, 즉 `파일 시스템` 모듈을 가져온다. (입출력관련)  
찾아보니 예제 소스 파일 - 백준사이트 '/dev/stdin'경로는 테스트 케이스 파일이 있어서 그 경로를 사용하는것 같았다!  
readFileSync의 옵션 utf-8 설정을 안하는 이상, `toString()`을 주어 문자열 변환을 해야한다.  
`fs.readFileSync(0, 'utf8').split(' ');` 시 toString()은 필요없다.  
split로 받은 문자를 잘라 배열에 넣는다. (받는 숫자가 두개이니 띄어쓰기로 구분.)

## readline

인풋 아웃풋을 할수있고 line이 입력값으로 할당이 된다.

```
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.on('line', (line) => {
// line을 가공하여 변수에 저장

}).on('close', () => {
// 저장된 변수를 이용하여 계산 후 출력
});
```

...같이 스트림이 \n을 받으면 입력을 받는게 readline.

---

<br>
<br>
<br>

JS에서 특히 계산에서는 parseInt 나 Number로 문자를 <u>숫자로 형변환을 꼭!! </u> 해주어야한다.

1000는 덧셈(+), 1001는 뺄셈(-), 10998는 곱하기(\*), 1008는 나누기(/). 10869는 사칙연산이다.

특히 10869같은경우...

```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a =parseInt(input[0]);
const b = parseInt(input[1]);
console.log(`${a+b}
${a-b}
${a*b}
${Math.floor(a/b)} <-여기!
${a%b}`);
```

에서, 정수로 표현하는것이니 Math.floor로 소수점의 나머지부분을 버려야한다.
