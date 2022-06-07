---
title: "node.js - package.json에 대하여 "
excerpt: "공부하던 기본지식"
date: 2022-06-05
categories:
  - node
tags:
  - node
  - package.json
last_modified_at: 2022-06-05
---

### package.json

기본적으로 commonJS의 명세를 따르는 `배포 모듈 정보와 의존성 관리를 해주는` json파일.  
쉽게 말하자면 패키지의 이름, 버전같은게 담겨있는 `상세 설명서`같은 느낌.

<br>

`루트 디렉토리`에 위치한다!

<br>

package.json파일은 반드시 `이름`과 `버전 항목`이 꼭 필요하다!
이름 같은경우, 새 패키지일시 이름에 대문자가 없어야 한다.
버전은 npm에서 번들로 제공되는 시멘틱 버전 체크를 위한 `node-semver` 모듈에서 구문을 분석할 수 있어야 한다!
<br>

## 작성되는 정보

<Br>

- 이름과 버전 항목이 적힌 `프로젝트의 정보`
- 응용 프로그램에 필요한 패키지 `dependencies`와 로컬개발, 테스트에 필요한 `devDependencies`이 적힌 `패키지 버전 정보

가 작성이 된다. 이로써 프로젝트의 설명과 키워드를 볼수 있다!

<br>

<br>

특히 패키지의 버전에는 `^ - 캐럿`와 `~ - 틸드`이 적혀있거나 하는데.  
`패키지의 변경을 허용`하겠다는 의미지만, 살짝 다르다.

<br>

이걸 알려면 `Semantic Versioning`, 시멘팅 버저닝을 알아야한다.  
[https://semver.org/lang/ko/](https://semver.org/lang/ko/) 참고하기.  
버전은 `.`을 기준으로 `Major.minor.patch` 라고 말한다.

<br>

| 시멘틱 버저닝 |                                       설명                                       |
| ------------- | :------------------------------------------------------------------------------: |
| `Major`       |   이전 버전과 `호환이 되지 않음`. 첫번째 숫자 <Br> ex) `3.5.1`일시 `3`이 Major   |
| `minor`       | 이전 버전과 `호환되는 새로운 기능`. 두번째 숫자 <Br> ex) `3.5.1`일시 `5`이 minor |
| `patch`       |  이전 버전과 `호환되는 버그 수정`. 세번째 숫자 <Br> ex) `3.5.1`일시 `1`이 patch  |

<br>

그중 `틸드는 3번째 숫자인 패치의 레벨만은 변경 허락`한다.  
예시로 `~2.3.1`은 2.3.1~ 2.3.9까지의 패치 ( 버그수정 ) 만 허용한다는 뜻.

<br>

캐럿(^)은 틸드와는 다르게 두번째 숫자인 `마이너와 패치까지` 변경을 허용함!  
예시로 `^4.2.1`은 4.2.1이상, `5.0.0` 미만까지 변경을 가능하다는 뜻.

<br>

<br>

---

<Br>

또한, 특허와 관련된 내용도 적을수 있다.

<Br>

---

<Br>

## package.json 생성 하는 방법

<br>

`npm init` 로 자동생성하기 또는 `직접 만들기`.

<br>

---

<br>

## 참고한 홈페이지

<br>

#### [https://velog.io/@skyepodium/package.json -package.json 알아보기](https://velog.io/@skyepodium/package.json)

#### [https://oneroomtable.tistory.com/entry/packagejson - package.json 파일이란 무엇이며 어떤역할을 할까요? ](https://oneroomtable.tistory.com/entry/packagejson-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EB%A9%B0-%EC%96%B4%EB%96%A4-%EC%97%AD%ED%95%A0%EC%9D%84-%ED%95%A0%EA%B9%8C%EC%9A%94)

#### [npm Docs - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
