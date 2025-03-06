import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {
  private cats = [];

  create(cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats[id];
  }

  delete(id: number): boolean {
    if (id < 0 || id >= this.cats.length) {
      return false; // 유효하지 않은 인덱스의 경우
    }
    this.cats.splice(id, 1); // 해당 인덱스의 고양이 삭제
    return true; // 삭제 성공
  }
}
