'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

export default function LoginControl() {
  const [spinner, showSpinner] = useState(true)

  useEffect(() => {
    Auth.signOut()
    Auth.currentAuthenticatedUser().then((user: any) => {
      window.location.href = '/sso';
    }).catch((error: any) => {
      showSpinner(false);
    });
  }, []);

  const components: any = {
    Header() {
      return (
        <div className='text-center'>
          <h1 className='display-6 text-dark mb-2'>Sign In</h1>
        </div>
      )
    },
    Footer() {
      <div className='text-muted text-center fs-6'>
        Don't have an account yet? <span onClick={() => window.location.href = '/register'} className='text-blue cursor-pointer fs-6' >Create Account</span>
      </div>
    }
  };

  return (
    <section className='row'>
      <div className='col-12 col-md-6 col-xl-4 my-5 offset-md-3 offset-xl-4'>
        <Spinner show={spinner}>
          <Authenticator initialState='signIn' className='login' components={components}>
            {
              ({ user }) => {
                if (user) window.location.href = '/sso';
                return <></>
              }
            }
          </Authenticator>
        </Spinner>
      </div>
    </section>
  );
}