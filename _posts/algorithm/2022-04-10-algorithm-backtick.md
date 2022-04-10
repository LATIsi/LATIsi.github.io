---
title: "백준 알고리즘	10171번, 10172번, 10926번 문제"
excerpt: "백틱(`) 출력관련 문제 node.js (JS) 로 풀기"
date: 2022-04-10
categories:
  - algorithm
tags:
  - algorithm
  - backtick
last_modified_at: 2022-04-10
---

천천히 단계별로 풀어가는중.

공통적으로는 console.log로 특수문자까지 표현하는 문제이다.  
백틱(`)을 사용하여 <u> \n을 사용하지 않고도 쉽게 개행을 표현할수 있으며  
변수도 ${ }을 사용하여</u> 표현이 가능하다.

</br>

# 10171번 문제

특수문자로 만들어진 고양이를 출력하는 문제이다.

![image](https://user-images.githubusercontent.com/91597005/162614116-0916177b-cc68-4bd2-9326-ee6bd289d0af.png)

```
\    /\
 )  ( ')
(  /  )
 \ (__)|
```

을 출력하는 문제인데. 문제는 console.log에서 백틱으로 역슬래시 \ 를 표현할때 생략하기에 한번 더 입력해주면 된다.

즉

```
console.log(`\\    /\\
 )  ( ')
(  /  )
 \\ (__)|`);
```

... 로 입력하면 된다!

</br>

# 10172번 문제

특수문자로 만들어진 개를 출력하는 문제이다.

![image](https://user-images.githubusercontent.com/91597005/162614173-915aff94-4390-4935-8133-c5a0697d411a.png)

```
|\_/|
|q p|   /}
( 0 )"""\
|"^"`    |
||_/=\\__|
```

10171번 문제와 같이 \가 나온다. 쉽게 풀수있을줄 알았으나 4번째줄의 백틱이 문제였던것.

이런경우엔 나는 중간에 ${"`"} 으로 감싸주어 표시해주었다.

다른경우가 있을까 싶어 찾아보니, 중간에 백틱에 \\` 을 붙여주어 표현을 할수도 있음을 알수있었다.  
즉... 백틱으로 표현하기 애매한 기호는 \를 넣어 코드를 작성하게 해주면 해결!

<br>

# 10926 trim()

입력한 문장 뒤에 곧장 ???! 라는 추가 텍스트가 붙어야함.

```
joonas -> joonas???!
```

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(`${input}???!`);

다른 입력과는 다르게 뒤에 양쪽 끝의 공백을 제거하는 trim();을 붙이는 이유는  
곧장 ???!를 붙이기 위해 사용되었기 때문이다.

```
require("fs").readFileSync(0, "utf8").trim() + "??!"으로 곧장 출력 가능.
```

로도 표현이 가능하다.
특히, readFileSync(0, "utf8") 같은건 동기식 IO작업 구현때 사용한다.  
(비동기는 readFile)

`fs.readFileSync(경로, 옵션(인코딩, 플래그포함, 기본값 - buffer객체, "utf-8"을 넣어주면 toString을 안해줘도 된다. ))`
