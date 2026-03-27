import { EmployeeTable } from '../components/employee-table';
import { getEmployees } from '../services/employee.service';

export async function EmployeesPage() {
  const employees = await getEmployees();

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Employees</h2>
        <p className="text-sm text-slate-500">Human resources employee directory</p>
      </div>
      <EmployeeTable employees={employees} />
    </section>
  );
}
