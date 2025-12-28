import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Book Your Service
            </h1>
            <p className="text-slate-600 text-lg">
              Fill out the form below and we will get back to you shortly to confirm your appointment.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
