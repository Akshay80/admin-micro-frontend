'use client';

import { Spinner } from '@wtx/shared/ui';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';

export default function LogoutControl() {
  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user: any) => {
      Auth.signOut();
    }).finally(() => {
      window.localStorage.clear();
      window.location.href = '/';
    })
  }, [])

  return (
    <section className='row'>
      <div className='col-12 col-md-6 col-xl-4 my-5 offset-md-3 offset-xl-4'>
        <Spinner show={true}>
          Please Wait
        </Spinner>
      </div>
    </section>
  );
}