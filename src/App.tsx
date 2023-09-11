
import Header from './components/Header';
import { ReactNode } from 'react';
import Footer from './components/Footer';

interface AppProps {
  children: ReactNode
}
 
const App: React.FunctionComponent<AppProps> = ({ children }) => {
  return ( 
    <div id='app'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
 
export default App;
