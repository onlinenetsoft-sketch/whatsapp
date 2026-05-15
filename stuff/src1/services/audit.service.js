import prisma from '../config/db.js';
  export class AuditService {
    async log(data) {
      return prisma.auditLog.create({
        data
});
 }
}