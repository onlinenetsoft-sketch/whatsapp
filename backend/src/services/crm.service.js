import prisma from '../config/db.js';

export class CRMService {
  async createLead(data) {
    return prisma.lead.create({
      data
    });
  }

  async getLeads(workspaceId) {
    return prisma.lead.findMany({
      where: {
        workspaceId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async updateLeadStatus(id, status) {
    return prisma.lead.update({
      where: {
        id
      },
      data: {
        status
      }
    });
  }

  async assignLead(id, assignedTo) {
    return prisma.lead.update({
      where: {
        id
      },
      data: {
        assignedTo
      }
    });
  }

  async deleteLead(id) {
    return prisma.lead.delete({
      where: {
        id
      }
    });
  }
}