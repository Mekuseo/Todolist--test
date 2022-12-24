/** @jest-environment jsdom */
import { populateListItems } from '../src/index';

describe('Index tests', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = `
            <ul class="list-content">
              
            </ul>`;
  });

  test('Should populate list item', () => {
    const obj = {
      description: 'Practice Javascript',
      index: 1,
      completed: false,
    };

    populateListItems([obj]);

    const result = document.querySelector('.list-content');

    expect(result.children.length).toBe(1);
  });
});

