import { lazy, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { checkAuth } from '../../store/loginSlice';

import Dashboard from '../dashboard/Dashboard';
import ScrollToTop from '../../utils/ScrollToTop';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';


const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/mainPage/MainPage'));
const VacancyPage = lazy(() => import('../pages/vacancyPage/VacancyPage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/ContactsPage'));
const DeliveryAndPaymentPage = lazy(() => import('../pages/deliveryAndPaymentPage/DeliveryAndPaymentPage'));
const CatalogPage = lazy(() => import('../pages/catalogPage/CatalogPage'));
const SingleProductPage = lazy(() => import('../pages/singleProductPage/SingleProductPage'));
const BasketPage = lazy(() => import('../pages/basketPage/BasketPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacyPolicyPage/PrivacyPolicyPage'));
const VacancyInfoPage = lazy(() => import('../pages/vacancyInfoPage/VacancyInfoPage'));



const App = () => {
    
    const {isAuth} = useAppSelector(store => store.loginStates);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(localStorage.getItem('token')){
           dispatch(checkAuth())
        }
    }, [])

    console.log(isAuth)
    return(
        <Router>
            <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Dashboard />}>
                        <Route index element={<MainPage/>}/>
                        <Route path="deliveryAndPayment" element={<DeliveryAndPaymentPage />} />
                        <Route path="contacts" element={<ContactsPage />} />
                        <Route path="vacancy" element={<VacancyPage />} />
                        <Route path="vacancy/:id" element={<VacancyInfoPage />} />
                        <Route path="catalog" element={<CatalogPage />} />
                        <Route path="basket" element={<BasketPage />} />
                        <Route path="catalog/:productId" element={<SingleProductPage />} />
                        <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
                        <Route path="*" element={<Page404/>} /> 
                    </Route>
                </Routes>
        </Router>
    )
}
export default App;