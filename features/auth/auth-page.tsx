import { BackgroundGradients } from "./components/background-gradients";
import { AuthCard } from "./components/auth-card";
import { AuthHeader } from "./components/auth-header";
import { OAuthButtons } from "./components/oauth-buttons";
import { AuthFooter } from "./components/auth-footer";
import { AuthBenefits } from "./components/auth-benefits";

export function AuthPage() {
  return (
    <div className="min-h-screen flex items-center bg-white relative overflow-hidden font-sans">
      <BackgroundGradients />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Information */}
          <div className="max-w-xl">
            <AuthHeader
              title="Welcome back"
              subtitle="Sign in to continue creating beautiful documentation that developers love."
            />
            <AuthBenefits />
          </div>

          {/* Right Side - Auth Card */}
          <div className="flex justify-center lg:justify-end">
            <AuthCard>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Sign in
                </h2>
                <p className="text-gray-600">Choose your preferred method</p>
              </div>

              <OAuthButtons />

              <AuthFooter />
            </AuthCard>
          </div>
        </div>
      </div>
    </div>
  );
}
