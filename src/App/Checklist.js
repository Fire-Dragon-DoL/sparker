import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';

export function reduce(state, action) {
  switch (action.type) {
    case 'rename': {
      let { title } = action;

      return { ...state, title };
    }
    case 'add': {
      let { id, content } = action;
      let position = action.position || state.items.length;
      let { items } = state;
      let item = { id, content, done: false };

      let newItems = [...items];
      newItems.splice(position, 0, item);

      return { ...state, items: newItems };
    }
    case 'change content': {
      let { content, position } = action;
      let { items } = state;
      let item = items[position];

      let newItem = {...item, content};
      let newItems = [...items];
      newItems[position] = newItem;

      return { ...state, items: newItems };
    }
    default:
      throw new TypeError('Unknown action');
  }
}

export function build(initial) {
  return {
    title: initial.title || '',
    items: initial.items || []
  }
}

export function useChecklist(initial = {}) {
  let initialChecklist = build(initial);

  const [checklist, dispatch] = useReducer(reduce, initialChecklist);

  const rename = (title) => { dispatch({ type: 'rename', title }) };
  const add = (position, content, id) => {
    id = id || uuid();
    content = content || '';
    dispatch({ type: 'add', id, content, position })
  };
  const changeContent = (position, content) => {
    dispatch({ type: 'change content', content, position })
  }

  return { checklist, rename, add, changeContent };
}
