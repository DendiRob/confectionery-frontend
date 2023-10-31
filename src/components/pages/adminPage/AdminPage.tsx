import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import {useEffect} from 'react'
import AdminCard from '../../adminCard/AdminCard';

import './AdminPage.scss';
import './AdminPage-media.scss';
import { getProducts } from '../../../store/adminSlice';


//нужно будет сделать миддлевейр,который проверяет является ли запрос от админа

const AdminPage: React.FC = () => {
    //настроить react helmet

    const dispatch = useAppDispatch()
    const { products } = useAppSelector(store => store.adminState);

    useEffect(() => {
      dispatch(getProducts())
    }, [])
    
    

    return(
        <div className="container">
            <h1 className="adminPage__title">Админ панель</h1>
            <div className="adminPage__items">
                {products.map((product) => {
                   return(
                    <AdminCard key={product.productID} dataProduct={product}/>
                   ) 
                })}
            </div>
        </div>
    )
}
export default AdminPage