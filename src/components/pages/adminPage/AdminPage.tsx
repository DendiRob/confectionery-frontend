import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import {useEffect, useState} from 'react'
import AdminCard from '../../adminProductCard/AdminProductCard';

import './AdminPage.scss';
import './AdminPage-media.scss';
import { getProducts } from '../../../store/adminSlice';
import { IProduct, IVacancy } from '../../../modelTypes/reponses';


//нужно будет сделать миддлевейр,который проверяет является ли запрос от админа

const AdminPage: React.FC = () => {
    //настроить react helmet

    const [ correctedPage, setCorrectedPage ] = useState('')
    const [ renderArr, setRednderArr ] = useState<IProduct[] | IVacancy[]>([])

    const dispatch = useAppDispatch()
    const { products, vacancies } = useAppSelector(store => store.adminState);

    useEffect(() => {
    //   dispatch(getProducts())
    }, [])
    
    switch(correctedPage) {
        case 'catalogPage':
            setRednderArr(products)
            break;
        case 'vacancyPage':
            setRednderArr(vacancies)
            break
    }

    return(
        <div className="container">
            <h1 className="adminPage__title">Админ панель</h1>
            <div className="adminPage__selectPage">
                <div 
                className='adminPage__catalogPage' 
                style={{color: correctedPage === 'catalogPage'? '#41BFBF': '#292929'}}
                onClick={() => setCorrectedPage('catalogPage')}
                >Каталог товаров</div>
                <div 
                className='adminPage__vacancyPage' 
                style={{color: correctedPage === 'vacancyPage'? '#41BFBF': '#292929'}}
                onClick={() => setCorrectedPage('vacancyPage')}
                >Вакансии</div>
            </div>
            <div className="adminPage__items">
                {renderArr.map((product) => {
                    if('productID' in product){
                        return(
                            <AdminCard key={product.productID} dataProduct={product}/>
                           ) 
                    }
                })}
            </div>
        </div>
    )
}
export default AdminPage