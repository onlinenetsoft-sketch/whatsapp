import fs from 'fs';
  export class StorageService {
    async saveFile(path, content) {
      fs.writeFileSync(path, content);
      return true;
    }
}