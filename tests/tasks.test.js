/** @jest-environment jsdom */

import Tasks from '../src/tasks';

describe('Test Add and Delete task', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
  });

  describe('Add task (Item)', () => {
    test('Should add 1 task', () => {
      const obj = {
        description: 'Practice Javascript',
        index: 1,
        completed: false,
      };

      const tasks = new Tasks();
      tasks.addNewTask(obj);

      const result = localStorage.getItem('tasks');

      expect(JSON.parse(result)).toHaveLength(1);
    });

    test('Should add 2 tasks', () => {
      const obj1 = {
        description: 'Practice Javascript',
        index: 1,
        completed: false,
      };
      const obj2 = {
        description: 'Practice HTML',
        index: 2,
        completed: true,
      };

      const tasks = new Tasks();
      tasks.addNewTask(obj1);
      tasks.addNewTask(obj2);

      const result = localStorage.getItem('tasks');

      expect(JSON.parse(result)).toHaveLength(2);
    });
  });
  describe('Delete task (Item)', () => {
    test('Should delete 1 task', () => {
      const obj = {
        description: 'Practice Javascript',
        index: 1,
        completed: false,
      };

      const tasks = new Tasks();
      tasks.addNewTask(obj);

      //Delete task which has index of 1
      tasks.deleteTask(0);

      const result = localStorage.getItem('tasks');

      expect(JSON.parse(result)).toHaveLength(0);
    });

    test('Should delete 2 tasks', () => {
      const obj1 = {
        description: 'Practice Javascript',
        index: 1,
        completed: false,
      };
      const obj2 = {
        description: 'Practice HTML',
        index: 2,
        completed: true,
      };
      const obj3 = {
        description: 'Practice CSS',
        index: 3,
        completed: false,
      };

      const tasks = new Tasks();
      tasks.addNewTask(obj1);
      tasks.addNewTask(obj2);
      tasks.addNewTask(obj3);

      //Delete task 1 and 2
      tasks.deleteTask(0);
      tasks.deleteTask(1);

      const result = localStorage.getItem('tasks');

      expect(JSON.parse(result)).toHaveLength(1);
      expect(JSON.parse(result)).toEqual([{
        description: 'Practice HTML',
        index: 1,
        completed: true,
      }]);
    });
  });
});