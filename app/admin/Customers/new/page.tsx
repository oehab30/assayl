import CustomerForm from "../CustomerForm";

export default function NewCustomerPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
          CRM
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
          Customers
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Register a new customer profile and account details.
        </p>
      </div>

      <CustomerForm />
    </div>
  );
}
