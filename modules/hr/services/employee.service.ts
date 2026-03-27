import { getEmployeesApi } from '../api/employee.api';

export async function getEmployees() {
  return getEmployeesApi();
}
