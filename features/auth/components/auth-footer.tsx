export function AuthFooter() {
  return (
    <div className="mt-8 text-sm text-gray-500">
      <p className="mb-4">
        By continuing, you agree to our{' '}
        <a href="#terms" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#privacy" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
          Privacy Policy
        </a>
      </p>
      <p>
        Don't have an account?{' '}
        <a href="/auth" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
          Sign up is automatic
        </a>
      </p>
    </div>
  );
}
