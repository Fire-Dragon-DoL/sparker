import { reduce } from '../../../Checklist.js';
import { example } from '../../../Controls/Checklist.js';
import { v4 as uuid } from 'uuid';
import assert from 'assert';

describe('Checklist', () => {
  describe('Rename', () => {
    let initialChecklist = example();
    let newTitle = uuid();

    let checklist = reduce(
      initialChecklist,
      { type: 'rename', title: newTitle }
    );

    test('Changes title', () => {
      assert(initialChecklist.title !== checklist.title);
    })

    test('Sets title to provided', () => {
      assert(checklist.title === newTitle);
    })
  });
});
