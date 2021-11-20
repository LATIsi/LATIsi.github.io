---
title: "git 명령어 정리"
excerpt: " 개발하다 헷갈릴때 보려고 정리한 git 명령어들 "
date: 2021-11-19
categories: Git
last_modified_at : 2021-11-20
---
* 추후 추가되는 글입니다.

내가 만들던 프로젝트나 공부용 파일들을 백업하는김에 이것저것 뒤져보다  
최근에서야 실무에서도 많이쓰이는 git을 알고 사용하기로 결정!

그런데... 팀 프로젝트를 했을적에는 git의 정체도 몰랐었다!(!!!!!)  
서로 카톡으로 프로젝트의 파일을 수정하며 결합했다가 그럼에도 오류났을때 비명을 질렀던 기억이 난다..  
지금이라도 익숙해지자 싶어 공부를 시작하고야 말았는데!  

나 자신을 위한 git 명령어를 노션에 정리해두었지만  
이제 블로그에 차근차근 업데이트를 할 생각이다.

# 처음의 git


깃 배쉬에서 맨 처음 해줘야하는것

**git config --global user.name "유저 이름"  
git config --global user.email "가입할 때 사용한 메일 주소"  
git status**  
저장소의 상태확인  
현재 브랜치의 이름과 추가, 변경된 파일과 디렉토리 목록 표시  

--- 

**git init**

프로젝트에 git 추가하는것. (현재 디렉토리를 git저장소로 변환)

---

**git add  파일이름**

파일 원격 저장소 추가 ( 깃 저장소 스냅샷)

git add . 로 전부 저장가능

---

**git commit  -m 커밋시 남길 메시지**

디렉토리의 변경/추가를 git 웹 저장소에 기록

git commit -am 설명      /        add와 커밋까지 같이 해줌

---

**git push 로컬저장소링크 브랜치이름 (git push origin master)**

프로젝트에 git 추가하는것. (현재 디렉토리를 git저장소로 변환)

---

**git clone 저장소 주소**

현재 위치하고있지 않은 저장소로 갈아끼우는느낌 (체크아웃) 
저장소의 내용을 다운로드받고 자동으로 init도 됨

---

**git checkout 브랜치 이름**

로컬 저장소의 브랜치를 전환  (체크아웃) 

---

**git merge**

브랜치에서 하던 작업을 끝내고 동료가 볼수있는 master 브랜치로 합치는 과정.

---

**git pull**

로컬저장소 작업시 저장소의 최신버전을 받아옴
**git pull origin master** 하면 origin의 내용이 master로 복사됨.

---

**git remote**

원격 저장소를 관리할수있는 명령어

**git remote add origin https://github.com/링크**
origin이라는 이름으로 원격저장소 주소 등록

**git remote remove origin**
origin이라는 이름의 ****원격저장소 지우기

**git remote -v**

현재 링크가 어디로 되있는지 확인 (fetch와 push)



