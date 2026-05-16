export class VectorStore {
  constructor() {
    this.vectors = [];
  }

  add(vector, metadata) {
    this.vectors.push({ vector, metadata });
  }

  search() {
    return this.vectors.slice(0, 5);
  }
}