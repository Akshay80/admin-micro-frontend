'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '../../../../../../src/aws-exports';

awsExports.oauth.domain = 'auth.worldtradex.com';
awsExports.oauth.redirectSignIn = process.env.NX_AUTH_SIGN_IN_REDIRECT || 'http://localhost:4200/sso';
awsExports.oauth.redirectSignOut = process.env.NX_AUTH_SIGN_OUT_REDIRECT || 'http://localhost:4200/logout';
Amplify.configure(awsExports);

export function ClientHeader() {
  return  <></>
}

export default ClientHeader;