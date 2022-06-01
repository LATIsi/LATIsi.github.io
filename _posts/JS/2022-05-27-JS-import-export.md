---
title: "JS 모듈로 파일 나누기"
excerpt: "그리고 import , export에 대하여"
date: 2022-05-27
categories:
  - JS
tags:
  - JS
  - import
  - export
  - 모듈
last_modified_at: 2022-05-27
---

### 모듈

파일을 주고 받을 수 있는 코드 조각이나 코드 단위를 `모듈`이라고 한다.  
예를 들어, `함수, 클래스, 변수, 배열, 객체, 상수 등등...`

<br>

<Br>

## import

`가져오는 모듈`

<br>

`import ... from `

<br>

기본 문법

<Br>

```

모듈의 경로에서 여러개의 모듈을 가져올시

import {모듈1, 모듈2....} from '모듈의 경로';

를 하거나 아니면

import {모듈1 as 내가 지정한 모듈1 이름, 모듈2 as 내가 지정한 모듈2 이름} from '모듈의 경로';

로 지정할수 있다.


```

<br>

<br>

<Br>

## export

`내보내는 모듈`  
export는 내보낼 것 앞에 export를 붙인다. (그것이 변수이든 함수이든 아무튼간에!)  
여러 모듈을 내보낼 수 있지만, `export default`는 딱 하나만 내보낸다는 뜻이다.

<br>

`export as`

<br>

기본 문법

<Br>

```

export 모듈1 as 내가 정한 모듈 이름

또는 여러개를 내보내고 싶을시

export { 모듈1 as 내가 정한 모듈 이름1, 모듈2 as 내가 정한 모듈 이름2 }


```

<br>
