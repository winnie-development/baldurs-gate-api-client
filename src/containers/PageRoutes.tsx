import { Landing } from 'pages/landing';
import { Route, Routes } from 'react-router-dom';

const PageRoutes = () => {
  return (
            <Routes>
                <Route path={'/'} element={<Landing />} />
            </Routes>
        );
    };
    

export default PageRoutes