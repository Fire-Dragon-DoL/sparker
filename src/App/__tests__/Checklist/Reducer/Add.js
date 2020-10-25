import { reduce } from '../../../Checklist.js';
import { example } from '../../../Controls/Checklist.js';
import { v4 as uuid } from 'uuid';
import assert from 'assert';
import _ from 'lodash';

describe('Checklist', () => {
  describe('Add', () => {
    let initialChecklist = example();
    let id = uuid();
    let content = uuid();

    let checklist = reduce(
      initialChecklist,
      { type: 'add', content, id }
    );

    let newItem = _.last(checklist.items);

    test('Adds new item', () => {
      assert(initialChecklist.items.length < checklist.items.length);
    })

    test('Sets new item content', () => {
      assert(newItem.content === content);
    })

    test('Sets new item id', () => {
      assert(newItem.id === id);
    })

    test('New item is unchecked', () => {
      assert(newItem.done === false);
    })
  });
});
