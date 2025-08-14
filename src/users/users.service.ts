import { Injectable } from "@nestjs/common";

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private nextId = 1;

  getAll(): User[] {
    return this.users;
  }

  getOne(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  create(name: string, email: string): User {
    const newUser = { id: this.nextId++, name, email };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, name?: string, email?: string): User | null {
    const user = this.getOne(id);
    if (!user) return null;
    if (name) user.name = name;
    if (email) user.email = email;
    return user;
  }

  delete(id: number): boolean {
    const before = this.users.length;
    this.users = this.users.filter((u) => u.id !== id);
    return this.users.length < before;
  }
}
