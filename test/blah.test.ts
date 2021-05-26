import { sum, loadDictionary } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('load dictionary values', () => {
  it('loads array of size n', () => {
    const sampleArray = [{ key1: 'value1' }, { key2: 'value2' }];
    expect(loadDictionary(sampleArray)).toEqual(2);
  });
});
