export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      { name: "customerName", title: "Customer Name", type: "string" },
      { name: "customerEmail", title: "Customer Email", type: "string" },
      { name: "items", title: "Items", type: "array", of: [{ type: "object", fields: [
        { name: "name", title: "Item Name", type: "string" },
        { name: "price", title: "Price", type: "number" },
        { name: "quantity", title: "Quantity", type: "number" }
      ] }]},
      { name: "totalPrice", title: "Total Price", type: "number" },
      { name: "status", title: "Status", type: "string", options: { list: ["Pending", "Paid", "Processing", "Delivered"] } },
      { name: "createdAt", title: "Created At", type: "datetime", options: { default: new Date().toISOString() } }
    ]
  };
  