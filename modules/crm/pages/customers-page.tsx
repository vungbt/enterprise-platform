const customers = [
  { id: 'C-100', name: 'Acme Corp', owner: 'Nina Pham', status: 'Active' },
  { id: 'C-101', name: 'Globex Ltd', owner: 'Thanh Le', status: 'Prospect' },
  { id: 'C-102', name: 'Innotech', owner: 'Minh Nguyen', status: 'Active' },
];

export function CustomersPage() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Customers</h2>
        <p className="text-sm text-slate-500">CRM customer overview</p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-surface p-4 shadow-sm">
        <ul className="space-y-2">
          {customers.map((customer) => (
            <li
              key={customer.id}
              className="flex items-center justify-between rounded-md border border-slate-100 px-3 py-2"
            >
              <span className="font-medium text-slate-800">{customer.name}</span>
              <span className="text-sm text-slate-500">
                {customer.owner} · {customer.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
