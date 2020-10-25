import { v4 as uuid } from 'uuid';

export function example() {
  return {
    title: 'A bolt **title**',
    items: [
      { id: uuid(), content: 'some _content_', done: true },
      { id: uuid(), content: 'some nested', done: false },
    ]
  };
}
