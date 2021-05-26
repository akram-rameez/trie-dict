export class TrieNode {
  key: string;
  value: any;
  end: boolean;
  parent: TrieNode | null;
  children: {
    [char: string]: TrieNode;
  };

  constructor(key: string, value?: undefined) {
    this.key = key;
    this.value = value;
    this.end = false;
    this.parent = null;
    this.children = {};
  }

  getWord() {
    let output = [];
    let node: TrieNode = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent!;
    }

    return output.join('');
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode('');
  }

  insert(word: string) {
    let node = this.root;

    // for every character in the word
    for (let i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if (!node.children[word[i]]) {
        // if it doesn't exist, we then create it.
        node.children[word[i]] = new TrieNode(word[i]);

        // we also assign the parent to the child node.
        node.children[word[i]].parent = node;
      }

      // proceed to the next depth in the trie.
      node = node.children[word[i]];

      // finally, we check to see if it's the last word.
      if (i == word.length - 1) {
        // if it is, we set the end flag to true.
        node.end = true;
      }
    }
  }

  contains(word: string) {
    let node = this.root;

    // for every character in the word
    for (let i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if (node.children[word[i]]) {
        // if it exists, proceed to the next depth of the trie.
        node = node.children[word[i]];
      } else {
        // doesn't exist, return false since it's not a valid word.
        return false;
      }
    }

    // we finished going through all the words, but is it a whole word?
    return true;
  }

  find(prefix: string) {
    let node = this.root;
    let output: string[] = [];

    // for every character in the prefix
    for (let i = 0; i < prefix.length; i++) {
      // make sure prefix actually has words
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        // there's none. just return it.
        return output;
      }
    }

    const findAllWords = (node: TrieNode, arr: string[]) => {
      // base case, if node is at a word, push to output
      if (node.end) {
        arr.unshift(node.getWord());
      }

      // iterate through each children, call recursive findAllWords
      for (let child in node.children) {
        findAllWords(node.children[child], arr);
      }
    };

    // recursively find all words in the node
    findAllWords(node, output);

    return output;
  }
}
