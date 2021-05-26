interface DictionaryInput {
  [keyword: string]: any;
}

export const loadDictionary = (input: DictionaryInput[]) => {
  return input.length;
};

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
