import prisma from '../config/db.js';
  export class BillingRepository {
    async createInvoice(data) {
      return prisma.invoice.create({ data });
    }
    async getInvoices(workspaceId) {
      return prisma.invoice.findMany({
        where: { workspaceId },
        orderBy: {
          createdAt: 'desc'
        }
}); }
    async createTransaction(data) {
      return prisma.transaction.create({ data });
} }