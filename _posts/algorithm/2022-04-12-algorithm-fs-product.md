---
title: "백준 2588번 문제"
excerpt: "곱셈 관련 위치값구하는 문제"
date: 2022-04-12
categories:
  - algorithm
tags:
  - algorithm
last_modified_at: 2022-04-12
---

# 2588 번 문제

node.js로 두개의 숫자를 입력받아 두 곱하는 도중 필요한것을 출력하는 문제이다.

![image](https://user-images.githubusercontent.com/91597005/162893728-c7c911a6-abbf-4816-811c-ad81412e36c3.png)

즉, 곱셈을 하려면

1. 첫번째 숫자와 두번째 숫자를 먼저 받고
2. 두번째 숫자의 일의 자리, 십의 자리, 백의 자리를 구하고

- 일의 자리는 두번째 숫자를 10으로 나누어 남은 나머지를 구하고(%)
- 십의 자리는 두번째 숫자를 100으로 나누어 남은 나머지를 구하고(%)  
  그 남은 나머지를 10으로 다시 나누어 몫을 얻는다 (/)
- 백의 자리는 두번째 숫자를 100으로 나누어 나온 몫 (/)

3. 각각 곱해서 출력하면 ok.

<br>
<br>

```
const fs = require('fs');
const number = fs.readFileSync(0,'utf-8').split('\n');

const a = parseInt(number[0]);
const b = parseInt(number[1]);

// b의 일의 자리를 얻기위해 b를 10으로 나누어 남은 나머지를 first에
let first = b % 10;
// b의 십의 자리를 얻기위해 b를 100으로 나누어 남은 나머지를 10으로 나누어 나온 몫을 second에
let secont = Math.floor((b%100)/10);
// b를 100으로 나누어 나온 몫(백의 자리)을 third에
let third = Math.floor(b/100);

//첫번째줄은 a * b의 1의자리, 두번째 줄은 a*b의 십의 자리, 세번째 줄은 a*b의 백의자리, 네번째 줄은 a*b의 곲을 출력

console.log(a*first);
console.log(a*secont);
console.log(a*third);
console.log(a*b);
```
