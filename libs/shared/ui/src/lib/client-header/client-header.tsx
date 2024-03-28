'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '../../../../../../src/aws-exports';

awsExports.oauth.domain = 'auth.worldtradex.com';
awsExports.oauth.redirectSignIn = process.env.NX_AUTH_SIGN_IN_REDIRECT || 'https://admin-micro-frontend.vercel.app/sso';
awsExports.oauth.redirectSignOut = process.env.NX_AUTH_SIGN_OUT_REDIRECT || 'https://admin-micro-frontend.vercel.app/logout';
Amplify.configure(awsExports);

export function ClientHeader() {
  return  <></>
}

export default ClientHeader;