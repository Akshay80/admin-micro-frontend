import LogoutBtn from "../../components/logout/Logout";

export function AdminMenu({items}:any) {
  return (
    <div className='simplebar-content' style={{ padding: '0px' }}>
      <ul className='navbar-nav flex-column'>
        {
          items && items.map((item: any, index: number) => {
            return (
              <li className="nav-item" key={index}>
                <a className='nav-link' href={item.href}>
                  <div className='d-flex align-items-center'>
                    <span className='nav-link-icon'>
                      <i className={`bi bi-${item.icon}`} />
                    </span>
                    <span className='nav-link-text'>{item.name}</span>
                  </div>
                </a>
              </li>
            )
          })
        }
        <LogoutBtn/>
      </ul>
    </div >
  );
}

export default AdminMenu;