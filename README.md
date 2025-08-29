# 1. NestJS 공식 튜토리얼 정리

#### 1️⃣ NestJS 개요 📚

- Node.js 기반 서버사이드 프레임워크
- Typescript 사용
- Angular 스타일 구조(모듈화, 의존성 주입, 데코레이터)
- 특징
  - 모듈화(Module)
  - 의존성 주입(DI)
  - 유지보수 용이
  - 테스트 친화적

---

#### 2️⃣ 프로젝트 생성 📚

- Nest CLI 설치
- 새 프로젝트 생성
- 프로젝트 디렉토리 이동
- npm 또는 yarn 선택

---

#### 3️⃣ 프로젝트 구조 이해 📚

- `src/app.controller.ts` -> HTTP 요청처리
- `src/app.service.ts` -> 비즈니스 로직 담당
- `src/app.module.ts` -> 루트, 모듈, 앱 전체 구성
- `src/main.ts` -> 애플리케이션 진입점

---

#### 4️⃣ Hello World 구현 📚

- 서비스에서 간단한 문자열 반환 로직 작성
- 컨트롤러에서 GET 요청 처리
- 브라우저 또는 POSTMAN 테스트

---

### 5️⃣ 모듈(Module) 이해 📚

- NestJS 기능 단위 그룹
- Controller, Service, Provider 등을 묶음
- 루트 모듈(AppModule)에서 애플리케이션 전체 구성

---

### 6️⃣ 컨트롤러(Controller) 이해 📚

- HTTP 요청 처리
- GET,POST,PUT,DELETE 등 메서드 매핑
- 클라이언트와 서버 데이터 송수신 담당

---

### 7️⃣ 서비스(Service) 이해 📚

- 비즈니스 로직 담당
- Controller에 주입(DI)되어 사용됨
- 데이터 처리,저장,반환 등 핵심 기능 수행

---

### 8️⃣ 의존성 주입(DI) 📚

- Controller가 Service를 필요로 할 때 자동 주입
- 모듈 단위로 등록해야 다른 모듈에서도 사용 가능
- exports + imports를 통해 모듈 간 공유 기능

---

### 9️⃣ DTO & Validation

- 데이터 전송 객체(Data Transfer Object)로 요청 데이터 구조 정의
- 요청 데이터 검증 가능
- 데이터 타입 안정성 확보 및 코드 유지보수에 용이함

---

### 🔟 실행 및 테스트

- 개발 서버 실행 (`start:dev`)
- 브라우저 또는 Postman/curl로 테스트
- 서버 변경 시 Hot Reload로 즉시 반영

---

### 0️⃣ 핵심 개념 정리

| 개념       |         설명         |
| :--------- | :------------------: |
| Module     |   기능 단위 그룹화   |
| Controller | HTTP 요청/ 응답 처리 |
| Service    |  비즈니스 로직 담당  |
| Injectable | DI 가능 서비스 표시  |
