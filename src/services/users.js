import User from "../models/User";

export function getAll(customer_id) {
  return User.find({ "customer_id": customer_id });
}