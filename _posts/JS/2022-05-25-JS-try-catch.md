---
title: "JS try/catch 예외처리"
excerpt: "finally와 error 종류"
date: 2022-05-26
categories:
  - JS
tags:
  - JS
  - Try/catch
  - Error
last_modified_at: 2022-05-27
---

### try / catch

에러의 예외처리시 사용하는 구문  
try 부분에서 오류가 생기면, catch부분으로 넘어간다.

<br>

<br>

| error 종류         |                                                     설명                                                     |
| ------------------ | :----------------------------------------------------------------------------------------------------------: |
| `SyntaxError`      |                                             문법이나 JS파싱 에러                                             |
| `TypeError`        |                                        사용할 수 없는 변수를 섰을 때                                         |
| `ReferenceError`   |                                           허용할수 없는 참조 오류                                            |
| `RangeError`       |                                             허용 숫자 범위 초과                                              |
| `EvalError`        | 인자로 받은, 문자로된 JS의 코드를 클라이언트 권한으로 `그대로` 실행하는 `eval()`의 잘못된 활용시 생기는 오류 |
| `URLError`         |                                  encodeURL() 또는 decodeURL()의 잘못된 활용                                  |
| `사용자 정의 에러` |                                          사용자가 직접 정의한 에러                                           |

  <br>

<br>

<br>

| error 내용 |                   설명                   |
| ---------- | :--------------------------------------: |
| `e`        |       에러에 대한 정보를 가진 객체       |
| `e.name`   |               에러의 이름                |
| `e.mesage` |                오휴메시지                |
| `e.stack`  | 에러가 구체적으로 어디서 났는지를 알려줌 |

<br>

<Br>

#### finally

try에서 return, continue, break가 있어도 무조건 실행되는 코드!  
그러므로 try의 제일 맨 마지막에 배치해야 한다.

에러 발생시 `- try - catch - finally`

<br>

<Br>

## Throw

`던지기`  
코드 작성시 직접 에러를 일으킬 때 사용한다.

<br>

<Br>

```
에러를 만들수 있다.
throw new Error(" ");

또한 자체 에러 클래스를 만들경우, extends - 상속을 사용하여 Error 클래스를 상속할수도 있다.

이경우, JS의 상속은 extends를 사용하며,
constructor에서 부모클래스의 super() - 즉 생성자가 먼저 호출되어야 부모를 자식의 인스턴스로 쓰기위해 초기화를 할수있고, this를 사용할 수 있다.

class toError extends Error {
  constructor(name, ...params) {
    super(...params);
    this.name = 'toError';
  }
}

```

<Br>

[참고한 홈페이지 - https://chiabi.github.io/2018/06/11/try-catch/ ](https://chiabi.github.io/2018/06/11/try-catch/)
