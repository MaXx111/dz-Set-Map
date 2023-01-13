import Character from '../Character.js';

test.each([
  ['someting', { name: 'Воин', type: 'Daemon' }, {
    health: 100, level: 1, name: 'Воин', type: 'Daemon',
  }],
  ['someting', { name: 'н', type: 'Daemon' }, 'error'],
  ['someting', { name: 'Чернокнижник', type: 'emon' }, 'error'],
  ['someting', { name: 'Чижник', type: 'emon' }, 'error'],
])(
  ('Should get right characteristic for hero '),
  (something, amount, expected) => {
    const result = new Character(amount.name, amount.type);
    expect(result).toEqual(expected);
  },
);
