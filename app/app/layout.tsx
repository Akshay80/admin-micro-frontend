
import { AdminMenu } from '../../libs/shared/ui/src/lib/admin-menu/admin-menu';
import AdminHeader from '../../components/admin-header/AdminHeader'
const items = require("../../data/menu.json")
import './assets/styles/custom.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                <nav className='navbar navbar-expand-lg navbar-glass'>
                    <div className='container-fluid'>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <div className='d-flex align-items-center'>
                                <a className='text-inherit d-block d-xl-none me-4' data-bs-toggle='offcanvas' href='#offcanvasExample' role='button' aria-controls='offcanvasExample'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' className='bi bi-text-indent-right' viewBox='0 0 16 16'>
                                        <path d='M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'></path>
                                    </svg>
                                </a>
                            </div>
                            <AdminHeader />
                        </div>
                    </div>
                </nav>

                <div className='main-wrapper'>
                    <nav className='navbar-vertical-nav d-none d-xl-block '>
                        <div className='navbar-vertical'>
                            <div className='px-4 py-5'>
                                <a href='/' className='navbar-brand'>
                                    <img src='https://wtx-cdn.s3.amazonaws.com/img/wtx-logo.png' width={200} alt='' />
                                </a>
                            </div>
                            <div className='simplebar-wrapper' style={{ margin: '0px' }}>
                                <div className='simplebar-height-auto-observer-wrapper'>
                                    <div className='simplebar-height-auto-observer'></div>
                                </div>
                                <div className='simplebar-mask'>
                                    <div className='simplebar-offset' style={{ right: '0px', bottom: '0px' }}>
                                        <div className='simplebar-content-wrapper' tabIndex={0} role='region' aria-label='scrollable content'>
                                            <AdminMenu items={items}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='simplebar-placeholder' style={{ width: '279px', height: '1066px' }}>
                                </div>
                            </div>
                            <div className='simplebar-track simplebar-horizontal' style={{ visibility: 'hidden' }}>
                                <div className='simplebar-scrollbar' style={{ width: '0px', display: 'none' }}>
                                </div>
                            </div>
                            <div className='simplebar-track simplebar-vertical' style={{ visibility: 'visible' }}>
                                <div className='simplebar-scrollbar' style={{ height: '744px', transform: 'translate3d(0px, 0px, 0px)', display: 'block' }}>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <nav className='navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac' tabIndex={-1} id='offcanvasExample'>
                        <div className='navbar-vertical'>
                            <div className='px-4 py-5 d-flex justify-content-between align-items-center'>
                                <a href='/' className='navbar-brand'>
                                    <img src='../assets/images/logo/freshcart-logo.svg' alt='' />
                                </a>
                                <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                            </div>
                            <div className='navbar-vertical-content flex-grow-1 simplebar-scrollable-y' data-simplebar='init'>
                                <div className='simplebar-wrapper' style={{ margin: '0px' }}>
                                    <div className='simplebar-height-auto-observer-wrapper'>
                                        <div className='simplebar-height-auto-observer'></div>
                                    </div>
                                    <div className='simplebar-mask'>
                                        <div className='simplebar-offset' style={{ right: '0px', bottom: '0px' }}>
                                            <div className='simplebar-content-wrapper' tabIndex={0} role='region' aria-label='scrollable content' style={{ height: '100%', overflow: 'hidden scroll' }}>
                                                <AdminMenu items={items}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='simplebar-placeholder' style={{ width: '279px', height: '1014px' }}></div>
                                </div>
                                <div className='simplebar-track simplebar-horizontal' style={{ visibility: 'hidden' }}>
                                    <div className='simplebar-scrollbar' style={{ width: '0px', display: 'none' }}></div>
                                </div>
                                <div className='simplebar-track simplebar-vertical' style={{ visibility: 'visible' }}>
                                    <div className='simplebar-scrollbar' style={{ height: '782px', transform: 'translate3d(0px, 0px, 0px)', display: 'block' }}></div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <main className='main-content-wrapper mt-14'>
                        <section className='container-fluid'>
                            {children}
                        </section>
                    </main>
                </div>
            </div>

        </>
    );
}
