export class WorkspaceService {
    async createWorkspace(data) {
      return {
        ...data,
        createdAt: new Date()
      };
  }
}