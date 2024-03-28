'use client';

import { GraphQLQuery } from '@aws-amplify/api';
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';
import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const SsoControl = () => {
    const [spinner, showSpinner] = useState<boolean>(true)

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(async (user: any) => {
            const userData: any = await API.graphql<GraphQLQuery<any>>({
                query: getUser,
                variables: {
                    id: user.attributes.sub
                }
            })

            if(userData.data?.getUser === null){
              window.location.href = "/onboarding"
            }
            else if (!userData.data?.getUser?.role) {
                return window.location.href = "/not-authorized"
            } else if (userData.data?.getUser?.role) {
                localStorage.setItem('user', JSON.stringify(userData.data?.getUser))
                window.location.href = "/app/dashboard"
            } else {
                Auth.signOut()
                window.location.href = "/"
              toast.error("Not authorized !")
            }
            showSpinner(false)
        }).catch((error: any) => {
            console.error('error', error)
            window.location.href = "/"
        })
    }, [])

    return (
        <div className='col-12 col-md-6 col-xl-4 my-5 offset-md-3 offset-xl-4'>
            <Spinner show={spinner}>
                <div className='text-center my-5'>
                    Please wait
                </div>
            </Spinner>
        </div>
    )
}

export default SsoControl;

 const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    photo
    phone
    email
    role
  }
}
`;