---
title: "일반 css와 sass"
excerpt: "특히 react에서 쓰이는 css들"
date: 2022-01-15
categories: Css
last_modified_at: 2022-01-30
---

## 일반 css

일반 Css를 작성할때, 클래스를 중복되지 않게 만드는것이 중요하다.  
그 방법으로는 **BEM네이밍, 즉 이름을 지을 때 규칙을 넣어 짓는것**과, **Css Selector를 활용하는 방법**이 있다.

Css Selector 같은 경우, 특정 클래스안에 css 클래스가 있는 경우만 활용가능.

```
.Components .logo {
    -> Components 클래스안에 logo라는 css 클래스가 있다는것. 태그 전체에 적용하고싶을시 . 생략가능.
}
```

---

## Sass

문법적으로 매우 멋진 스타일시트!

일반 css보다 스타일코드의 재활용성 높음.  
코드의 가독성을 높여줌.

.sass와 .scss 확자자를 지원해주며, 둘의 코드는 조금씩 다르다.

또한 여러 파일에서 사용되는 Sass 변수는 다른파일로 분리하여 필요시 불러와 사용 가능하다.  
**(scss 파일을 불러올시, @import문을 사용하기.)**

..그런데 이렇게 import해서 불러올시 상대경로로 작성하는것이 대다수이므로, 구조가 깊어졌더라면 sass-loader를 **커스터마이징**하자.

흠, 프로젝트 디렉터리에서 `yarn eject`로 **_프로젝트의 숨겨진 세부설정을 밖으로 뺄수 있다!!_**  
yarn을 안쓴다면 npm run eject 으로 해도 괜찮다.

https://velog.io/@eye3570/cra%EC%97%90%EC%84%9C-sass-loader-%EC%84%A4%EC%A0%95-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95%ED%95%98%EA%B8%B0  
참고하기.

또한 Sass는 라이브러리를 쉽게 불러서 사용할 수 있다!
node-modules에서, 라이브러리를 불러올 때 상대경로로 가져오는것도 좋지만 물결문자(~)를 사용하여 불러올수 있다.

물결문자는 node-modules를 탐지하는 셈이다

```
import '~library/styles';
```

# .sass

중괄호와 세미콜론을 사용하지 않음!!!

```
body
  font : 100% Helcetica, sans-serif
  color : #333
```

# .scss

기존 css작성과 크게 다르지않다!

```
body {
  font : 100% Helcetica, sans-serif ;
  color : #333 ;
}
```

@mixin (함수같은 css) 을 만들어서, 재사용되는 블록을 함수처럼 만들 수 있다.

```
@maxin a1 ($px){
  $width : 10px* $px;
  width : $width;
  height: $width * 2;
}

이런식으로 만들면

...

.square {
  background: red;
  @include a1(5);
}

이런식으로 쓸수있다.

```

또는, @mixin이나 다른 파일에서 사용될수있는 Sass변수를 scss 학장자를 가진 다른 파일명로 분류하여 필요한곳에서 import로 불러와 사용할 수 있다.
