import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';
import SsoControl from './sso-control';

export const metadata: Metadata = {
    title: `Single Sign On - ${PAGE_TITLE}`,
    description: '',
};

const SsoPage = () => {
    return (
        <SsoControl />
    )
}

export default SsoPage;