import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';
import OnboardingControl from './onboarding-control';

export const metadata: Metadata = {
    title: `Admin Onboarding - ${PAGE_TITLE}`,
    description: '',
};

const SellerOnboarding = () => {
    return (
        <>
            <OnboardingControl />
        </>
    );
}

export default SellerOnboarding;