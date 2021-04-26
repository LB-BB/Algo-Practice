class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }
  calculateHash(key) {
    return key.toString.length % this.size;
  }

  add(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.values[hash][key] = value;
  }

  search(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }
}

const spielbergMovies = ["E.T.", "Jaws", "Raiders", "Saving Private Ryan"];

const ht = new HashTable();

ht.add("Steven Spielberg", spielbergMovies);

console.log(ht.search("Steven Spielberg"));
