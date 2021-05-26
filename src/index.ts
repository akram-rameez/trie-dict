import {Trie} from './trie'

interface DictionaryInput {
  key: string;
  value: any;
  completeWord: boolean;
}

export class Dictionary {
  dict: { [key: string]: DictionaryInput };
  trie: Trie;

  constructor(dict: DictionaryInput[]) {
    this.trie = new Trie();
    this.dict = dict.reduce((acc, cur) => ({ ...acc, [cur.key]: cur }), {})
  }

  find(str: string) {
    const finalSet: Set<string> = new Set();
    for(let i = 0; i < str.length; i += 1) {
      const results = this.trie.find(str.slice(i, str.length - 1));
      results.forEach(x => finalSet.add(x));
    }

    const finalArray = [...finalSet].filter(key => !!this.dict[key] && this.dict[key].completeWord).sort();
    return this.dict[finalArray[0]];
  }
}
