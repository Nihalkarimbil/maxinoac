export const metadata = {
  title: "Request Service • Maxino AC Services",
};

import RequestServiceForm from "./RequestServiceForm";

export default function RequestServicePage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold tracking-tight">Request Service</h1>
      <p className="mt-2 text-zinc-600">Tell us what you need and your preferred schedule.</p>
      <RequestServiceForm />
    </div>
  );
}


