import { Injectable, Type, signal } from '@angular/core';

const pageRegistry = {
  home: import('../home/home.page').then((m) => m.HomePage),
  builder: import('../builder/builder.page').then((m) => m.UiBuilderPage),
  render: import('../vg-builder/vg-builder.page').then((m) => m.VgBuilderPage),
  embedded: import('../builder/embedded/embedded.page').then((m) => m.EmbeddedPage),
  login: import('../pages/login/login.component').then((m) => m.LoginComponent),
}
@Injectable({
  providedIn: 'root'
})
export class RoutersService {
  constructor() {
    console.log('init routers');
  }
  stack = new StackNavigation<Type<any>>();
  current = signal<Type<any> | null>(null);
  push(key : keyof typeof pageRegistry) {
    pageRegistry[key].then( m => {
      this.stack.push(m);
      this.current.set(m);
    })
  }
  pop() {
   const cp = this.stack.pop();
   if(cp) {
    this.current.set(cp);
   }
  }
  peek() {
    return this.stack.peek();
  }
}
class StackNavigation<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}
