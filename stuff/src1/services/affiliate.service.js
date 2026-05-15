import prisma from '../config/db.js';
    return prisma.affiliate.create({
      data: {
        userId,
        referralCode,
        commissionRate: 10,
        totalEarnings: 0,
        totalReferrals: 0,
        status: 'ACTIVE'
      }
    });
  }

  async trackReferral(referralCode, referredUserId) {
    const affiliate = await prisma.affiliate.findUnique({
      where: {
        referralCode
      }
    });

    if (!affiliate) {
      throw new Error('Invalid referral code');
    }

    await prisma.referral.create({
      data: {
        affiliateId: affiliate.id,
        referredUserId,
        status: 'REGISTERED'
      }
    });

    return prisma.affiliate.update({
      where: {
        id: affiliate.id
      },
      data: {
        totalReferrals: {
          increment: 1
        }
      }
    });
  }

  async addCommission(affiliateId, amount) {
    return prisma.affiliate.update({
      where: {
        id: affiliateId
      },
      data: {
        totalEarnings: {
          increment: amount
        }
      }
    });
  }

  async getAffiliateDashboard(userId) {
    return prisma.affiliate.findFirst({
      where: {
        userId
      },
      include: {
        referrals: true
      }
    });
  }

  async payoutAffiliate(affiliateId, amount) {
    return prisma.affiliatePayout.create({
      data: {
        affiliateId,
        amount,
        status: 'PAID'
      }
    });
  }
}