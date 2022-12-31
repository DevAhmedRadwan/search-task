async function aggregateNumberOfOrders(match) {
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
        NumberOfOrders: {
          $size: "$Orders",
        },
      },
    },
    {
      $match: {
        NumberOfOrders: match,
      },
    },
    {
      $project: {
        Orders: 0,
        NumberOfOrders: 0,
      },
    },
  ]);

  return customers;
}

module.exports = aggregateNumberOfOrders;
