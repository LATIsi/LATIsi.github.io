---
title: "React enum"
excerpt: "enum에 관해서"
date: 2021-12-15
categories: React
last_modified_at: 2021-12-15
---

enum는 간단히 말하면 상태값에 따라 어떤 화면을 보여줄지 객체 자료형으로 지정해주는것이다.

if문으로 다 처리를 해줄수도 있지만, 객체 자료형안에 JSX의 자료를 전부 지정해주어 편리하게 작성할수도 있다.

예시:
function aaaa() {
var state_a = 'A';
return (

  <div>
    {
      {
        A : a의 구역,
        B : b의 구역,
        C : c의 구역
      }[state_a]
    }
  </div>
)
   
}
