"use client"
import PublicHeader from '../components/public-header/PublicHeader';
import LoginPage from './(auth)/login/page';


export default async function Index() {

  return (
    <>
      <PublicHeader/>
      <LoginPage />
    </>
  );
}