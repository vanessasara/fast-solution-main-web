import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#FDF7F2] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden lg:block">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-4">
            Welcome to <span className="text-[#4F46E5]">Fast Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your trusted multi-service partner for comprehensive business solutions.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#0F172A]">8 Professional Services</h3>
                <p className="text-gray-600">From IT to Real Estate, all in one place</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#0F172A]">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround on all projects</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#0F172A]">Trusted & Secure</h3>
                <p className="text-gray-600">Your data and projects are safe with us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Sign In Form */}
        <div className="flex justify-center">
          <SignIn
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-xl",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
