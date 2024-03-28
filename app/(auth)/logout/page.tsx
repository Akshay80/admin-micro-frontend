import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';
import LogoutControl from './logout-control';

export const metadata: Metadata = {
  title: `Logout - ${PAGE_TITLE}`,
  description: '',
};

const LogoutPage = () => {
  return (
    <LogoutControl />
  );
}

export default LogoutPage;