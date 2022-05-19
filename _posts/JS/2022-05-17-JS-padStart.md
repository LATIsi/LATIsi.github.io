---
title: "JS padStart()와 padEnd()"
excerpt: "공백을 앞에 추가하느냐, 뒤로 추가하느냐의 함수에 대하여. "
date: 2022-05-17
categories:
  - JS
tags:
  - JS
  - padStart
last_modified_at: 2022-05-17
---

....주로 `날짜나 시간체크`를 할 때, 0,1,2를 00, 01, 02같이 앞에 0을 붙여주고 싶을 때...

padding을 앞에 추가해주는 string에 쓸수있는 함수.

```
"string".padStart(자릿수,"앞에 넣을 문자");
```

<br>

자릿수가 `이미 지정한 자릿수만큼 채워졌다면, " " 안에있는 문자로 채워지지 않는다.`

<Br>

반대로 뒤에 붙이고싶다면....

<br>

```
"string".padEnd(자릿수,"앞에 넣을 문자");
```

<br>

```
ex) "hi!".padStart(10,"p");

-> ppppppphi!


ex) "hi!".padEnd(10,"lala");

-> hi!lalalal

```

<img width="300" alt="padStart와 padEnd의 사용예시 이미지" src="https://user-images.githubusercontent.com/91597005/169027642-1d1b0c56-a3a1-4e4b-ad0b-51a9d523539f.png">
