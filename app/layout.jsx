import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: 'PropertyPulse',
  description: 'Find The Perfect Rental Property',
  keywords: 'rental, property, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang='en'>
          <body className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow flex flex-col'>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;