---
title: "MongoDB와 mongoose에 대하여 "
excerpt: " toy 프로젝트 온라인 메모장을 만들며 배웠던것과 nosql "
date: 2022-03-13
categories:
  - node.js
tags:
  - node.js
last_modified_at: 2022-04-07
---

# NoSql (not only sql)

sql질의문에 의해 DB를 update, select, 저장 하도록 구성된 관계형 데이터를 사용하지 않고 sql을 사용하지 않는 그외의 모든 데이터베이스 시스템 / 데이터 스토어.

## 장점

- 유연성 / 스키마 선언x, 필드 추가 삭제 자유로운 스키마구조
- 확장성 / 스케일 아웃의 서버확장
- 기용성 / 대용량 데이터 처리 뛰어남
- 높은성능 / 장애발생시 무중단 서비스 가능
- 다양한 데이터 형태 수용.

## 단점

- 데이터 일관성에 약함.
- key값에 대한 입출력만 지원
- 스키마가 자유로워 데이터 규격이 되어있지않음
- update시.... 모든 컬렉션에 수행하는 형식이라 느림
- 데이터 중복!!!!

## 특징

- 관계형 DB의 트래픽 감당이 어려워 탄생
- 단순히 키와 값의 쌍으로 이루어져 있다.
- 분산형 구조
- 예시로, HBase, Redis, CouchDB, MongoDB...등이 있다.

# 그중에서 MongoDB란

문서지향 저장소를 제공하는 NoSql DB 시스템.

- 데이터가 document로 불린다!
- 데이터의 집합 - 원래는 관계형 DB(RDMS)에서의 table은 collection이라고 부른다.
- BSON으로 각 문서 저장.(2진법으로 인코딩된 JSON - 이진표현이라 빠르고 탐색에 좋으며 json보다 더욱 다양한 표현방법도 가능하지만 추가 필드를 생성하기 위해 약간의 오버헤드가 필요하기에 메모리 효율성과 관련해 약간 단점이 있음. )

  [BSON 참고페이지](https://iq.opengenus.org/binary-json/)
