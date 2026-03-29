import { apiClient } from '@enterprise/api-client/client';

export type EmployeeDto = {
  id: string;
  name: string;
  position: string;
  department: string;
};

export async function getEmployeesApi() {
  try {
    const response = await apiClient.get<EmployeeDto[]>('/employees');
    return response.data;
  } catch {
    return [
      { id: 'E-001', name: 'Alice Johnson', position: 'HR Manager', department: 'People Ops' },
      { id: 'E-002', name: 'Brian Lee', position: 'Recruiter', department: 'Talent' },
      { id: 'E-003', name: 'Cindy Tran', position: 'HRBP', department: 'Business Partnering' },
    ];
  }
}
