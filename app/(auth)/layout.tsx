import PublicHeader from '../../components/public-header/PublicHeader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PublicHeader />
            {children}
        </>
    );
}