import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <SmoothScrollProvider>
                <div className="flex-grow pt-16">
                    {children}
                </div>
            </SmoothScrollProvider>
            <Footer />
        </>
    );
}
