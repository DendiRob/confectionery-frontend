import { useAppSelector } from '../../../hooks/redux';


import './AdminPage.scss';
import './AdminPage-media.scss';

const AdminPage: React.FC = () => {

    const role = useAppSelector(store => store.loginStates.role);
    
    return(
        <h1>This is AdminPage</h1>
    )
}
export default AdminPage