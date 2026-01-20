'use client';

import { OAuthButton } from '@/components/ui/oauth-button';
import { GoogleIcon } from './google-icon';
import { GithubIcon } from './github-icon';

export function OAuthButtons() {
  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
  };

  const handleGithubSignIn = () => {
    console.log('GitHub sign-in clicked');
  };

  return (
    <div className="space-y-4">
      <OAuthButton provider="google" onClick={handleGoogleSignIn}>
        <GoogleIcon />
        <span>Continue with Google</span>
      </OAuthButton>

      <OAuthButton provider="github" onClick={handleGithubSignIn}>
        <GithubIcon />
        <span>Continue with GitHub</span>
      </OAuthButton>
    </div>
  );
}
