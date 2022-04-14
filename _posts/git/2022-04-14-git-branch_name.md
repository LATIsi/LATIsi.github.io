---
title: "git - branch name 기본 설정 바꾸기"
excerpt: "vscode에서 브랜치이름 master에서 main으로 바꾸는법"
date: 2022-04-14
categories: Git
last_modified_at: 2022-04-14
---

github에 글을 올릴때마다 add와 커밋을 하는도중 프로젝트의 내용만 올리고싶은데 node_modules의 많은 파일들이 같이 올라가는것이 마음에 걸렸다.  
그래서 혹시몰라 검색해보니 .gitignore라는 파일을 만들어 내용에 무시할 파일이나 폴더명을 적어두면 그 폴더들만 커밋되지않는다.

찾아보니 git 2.28 릴리스 부터 새 리포지토리 초기화시 생성되는 분기 이름을 구성할수있다!

git init시 초기 브랜치가 main으로 구성이 된다!

2.28 이전의 Git 버전에서는 하드코딩으로 구성되었기에 변경할수 있는 구성이 없다고 한다.

```
if (create_symref("HEAD", "refs/heads/master", NULL) < 0)
```

또는 ~/.gitconfig 파일에서

```
[init]
  defaultBranch = main
```

을 추가하는 방법도 있다.  
위의 git config --global init.defaultBranch main 와 유사!

[참고 사이트 - 슈퍼유저 ](https://superuser.com/questions/1419613/change-git-init-default-branch-name)
