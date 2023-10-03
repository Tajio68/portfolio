import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthenticateProps {
    children: React.ReactNode;
}
 
const Authenticate: React.FunctionComponent<AuthenticateProps> = ({ children }) => {
    
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false);
        } else {
            navigate('/login');
        }
      });
    
      return () => AuthCheck();
    }, [auth])
    
    if (loading) return <p>Loading</p>

    return (
        <div id="auth">
            {children}
        </div>
    );
}
 
export default Authenticate;