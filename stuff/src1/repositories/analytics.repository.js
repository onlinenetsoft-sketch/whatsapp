import prisma from '../config/db.js';
  export class AnalyticsRepository {
    async createEvent(data) {
  
        return prisma.analytics.create({ data });
    }
    async getDashbo