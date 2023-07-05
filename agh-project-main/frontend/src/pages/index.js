export { CustomersPage } from "./CustomersPage";
export { DashboardPage } from "./DashboardPage";

export const fetchData = () =>
  fetch("http://127.0.0.1:8000/customers").then((res) => res.json());

export const postData = (name, surname, email, phone_number) =>
  fetch("http://127.0.0.1:8000/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      surname: surname,
      email: email,
      phone_number: phone_number,
    }),
  }).then((res) => res.json());