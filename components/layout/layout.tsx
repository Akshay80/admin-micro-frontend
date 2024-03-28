/* eslint-disable */
import algoliasearch from 'algoliasearch';
import TopNav from '../top-nav/top-nav';

import 'react-toastify/dist/ReactToastify.css';
export interface LayoutProps {
  children: React.ReactNode;
}


export const client = algoliasearch(
  "9ZATEK0QI5",
"7ef7a613fec72eac5f7372242ff8c676");

export function Layout(props: LayoutProps) {
  const leftNavData = [
    {
      "pathname": "/categories",
      "text": "Categories",
      "icon": "bi bi-list-task"
    },
    {
      "pathname": "/products",
      "text": "Products",
      "icon": "bi bi-cart"
    },
    {
      "pathname": "/orders",
      "text": "Orders",
      "icon": "bi bi-bag"
    },
    {
      "pathname": "/return-refund",
      "text": "Return/Refund",
      "icon": "bi bi-bag"
    },
    {
      "pathname": "/transactions",
      "text": "Transaction",
      "icon": "bi bi-credit-card"
    },
    {
      "pathname": "/sellers",
      "text": "Sellers/Vendors",
      "icon": "bi bi-shop"
    },
    {
      "pathname": "/reviews",
      "text": "Reviews",
      "icon": "bi bi-star"
    },
    {
      "pathname": "/users",
      "text": "User Management",
      "icon": "bi bi-person-gear"
    },
    {
      "pathname": "/profile",
      "text": "Profile",
      "icon": "bi bi-person"
    },
   
  ]
  return (
    <>
      <TopNav />
      <div className="main-wrapper">
        {/* <LeftNav SideNav={leftNavData} /> */}
        <main className="main-content-wrapper">
          <section className="container">
            {props.children}</section>
        </main>
      </div>
    </>
  );
}

export default Layout;
