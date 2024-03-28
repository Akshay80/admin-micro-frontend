import { PAGE_TITLE } from '@wtx/helper';
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