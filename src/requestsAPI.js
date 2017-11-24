export const REQUESTS = [
    {id: 1, name: "Request 1", status: "Production", completed: false},
    {id: 2, name: "Request 2", status: "Finance", completed: false},
    {id: 3, name: "Request 3", status: "Planning", completed: false},
    {id: 4, name: "Request 4", status: "Approved", completed: true}
];

export const REQUEST_FIELDS = [
    {id: 1, group: "requestor", fields: ["product_name", "brand"]},
    {id: 2, group: "production", fields: ["liquid", "alcohol_level"]}
];
