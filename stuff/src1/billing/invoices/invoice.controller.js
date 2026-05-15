const invoiceService = require('./invoice.service');

exports.createInvoice =
  async (req, res, next) => {
    try {
      const invoice =
        await invoiceService.generateInvoice(
          req.body
        );

      res.status(201).json({
        success: true,
        invoice,
      });
    } catch (error) {
      next(error);
    }
  };