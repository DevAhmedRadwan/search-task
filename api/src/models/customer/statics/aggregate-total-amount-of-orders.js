async function aggregateTotalAmountOfOrders(match) {
  const customers = this.aggregate([
    {
      $lookup: {
        from: "Order",
        localField: "_id",
        foreignField: "CustomerId",
        as: "Orders",
      },
    },
    {
      $addFields: {
        SumOfTotalAmount: {
          $sum: "$Orders.Total Amount",
        },
      },
    },
    {
      $match: {
        SumOfTotalAmount: match,
      },
    },
    {
      $project: {
        Orders: 0,
        SumOfTotalAmount: 0,
      },
    },
  ]);

  return customers;
}

module.exports = aggregateTotalAmountOfOrders;
