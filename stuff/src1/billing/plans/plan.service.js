const Plan = require('./plan.model');

class PlanService {
  async createPlan(data) {
    return await Plan.create(data);
  }

  async getPlans() {
    return await Plan.find({
      active: true,
    });
  }

  async getPlanById(id) {
    return await Plan.findById(id);
  }
}

module.exports = new PlanService();