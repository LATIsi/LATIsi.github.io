---
title: "css모듈, classNames, 스타일 컴포넌트 "
excerpt: "특히 react에서 쓰이는 css들2"
date: 2022-01-15
categories:
  - CSS
tags:
  - CSS
  - Style-components
last_modified_at: 2022-01-18
---

## Css Module

컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해주는 기술.  
클래스 이름을 지을때 고유성에 대해 고민하지 않아됨. => 직접 불러온 컴포넌트 내부에서만 작동하기 때문.

` 파일이름_클래스이름_해시값`
형태로 이름을 자동으로 만들어 줌.

`파일명.module.css` 파일을 저장하면 적용된다.  
전역적으로 사용되는 경우에는 :global을 적용.

// 일반 .css나 .scss에서도 :local을 사용하여 Css Module 사용가능.

JSX에서 엘리먼트에 고유한 클래스이름을 사용하고싶다면, import로 `파일명.module.css` 를 불러와 `classname={styles.[클래스이름]}`로 지정해주면 된다.

아니면 여러개의 클래스 이름을 적용할 시,

```
className={[style.css지정이름 , style.css지정이름].join('')}
```

\*또는, 화살표함수를 사용할시,

```
className={`${style.css지정이름} ${style.css지정이름}`}
```

로 지정해줄 수 있다.

---

## className

라이브러리 설치뒤 사용하는데, `클래스를 여러 개 설정하거나 조건부로 클래스 설정시` css-Module과 함께 사용시 편하다.

```
import classNames from 'classnames';

className('one', 'two') ;
 => one two

className('one', { two: true });
 => one two

className('one', { two: false });
 => one

className('one', [ 'two' , 'three' ]);
 => one two three

const myClass = 'hi';
className('one', myClass, {myClassto : true});
 => one hi myClassto

```

className에는 .bind를 사용할수 있다.

```
import classNames from 'classNames/bind'

const ca = classNames.bind(styles);
=> bind로 styles에서 클래스를 미리 받아온뒤

....

<div className={ca('a1','a2')}>
</div>

classnames={styles.[클래스이름]} 으로 안해도 된다.

```

---

## Style-components

외부파일을 만들지 않고, JS안에 스타일을 선언하는 방식.  
라이브러리를 install 해야하며 import를 해주어야한다.

```
import styled from 'styled-components';

const a1 =sytled.적용할 태그`
    background:red;
`;
```

이런식으로 사용할 수 있다.

또한 styled-components은 `JSX파일의 props를 사용해` 스타일을 변형시킬수도 있다.

예시로,

```
const a2 =sytled.div`
    background:${props => props.color};
`;
```

이런식으로 props를 받아와 스타일을 적용하거나

```
const a2 =sytled.div`
    background:${props => props.color};

    ${props =>
    props.inverted &&
    css'
        background: none;

        &: hover {
            background:white;
        }
    '};

`;
```

이런식으로 props의 값에 따라 조건부 스타일링을 할 수도 있다.  
중간처럼 css가 들어가는 경우, `import에 styled말고도 {css} 를 넣어주어야 한다.`  
또한 리엑트로 css를 처리하기 귀찮은 hover같은 기능도 손쉽게 처리할수있어서 활용도가 좋다.

## 중요한 점.

@media (max-width: 필요한 px){
바뀌는 css
}

의 조절도 할 수 있다.

media를 한번 선언한뒤 함수처럼 사용해주면 더 편하다.

ex)

```
import styled, {css} from 'styled-compoents';

const sizes ={
    desktop : 1024,
    tablet : 768
};

const media = Object.keys(sizes).reduce((acc,label)=>{
    acc[label] =(...args) => css`
        @media (max-width : ${sizes[label]/16}em){
            ${css(...args)};
        }
    `;

    return acc;
},{});

const box = styled.div`
    ${media.desktop`width:768px;`};
    ${media.tablet`width:100%;`};
`;

```

이런식으로 활용할수 있다.
