import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import {useEffect } from 'react'
import AdminCatalogCard from '../../adminCatalogCard/AdminCatalogCard';

import './AdminCatalogPage.scss';
import './AdminCatalogPage-media.scss';
import { getProducts } from '../../../store/adminSlice';


//нужно будет сделать миддлевейр,который проверяет является ли запрос от админа

const AdminCatalogPage: React.FC = () => {
    //настроить react helmet


    const dispatch = useAppDispatch()
    const { products } = useAppSelector(store => store.adminState);

    useEffect(() => {
      if(products.length === 0){
        dispatch(getProducts())
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    

    return(
        <div className="container">
            <h1 className="adminCatalogPage__title">Настроика каталога товаров</h1>
            <div className="adminCatalogPage__items">
                {products.map((product) => {
                    return(
                        <AdminCatalogCard key={product.productID} dataProduct={product}/>
                    )     
                })}
            </div>
        </div>
    )
}
export default AdminCatalogPage