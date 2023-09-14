
import Header from './components/Header';
import { ReactNode, useEffect } from 'react';
import Footer from './components/Footer';

interface AppProps {
  children: ReactNode
}
 
const App: React.FunctionComponent<AppProps> = ({ children }) => {

  return ( 
    <div id='app'>
      <Header />
      <div id='children'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
 
export default App;
