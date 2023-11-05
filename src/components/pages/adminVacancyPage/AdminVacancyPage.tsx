import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import {lazy, useEffect, useState } from 'react'

import './AdminVacancyPage.scss';
import './AdminVacancyPage-media.scss';

import { getVacancies } from '../../../store/adminSlice';
import AdminVacancyCard from '../../adminVacancyCard/AdminVacancyCard';
import AdminVacancyModal from '../../modals/adminVacancyModal/AdminVacancyModal';



//нужно будет сделать миддлевейр,который проверяет является ли запрос от админа

const AdminVacancyPage: React.FC = () => {
    //настроить react helmet
    const dispatch = useAppDispatch()
    const { vacancies, isVacancyModalOpen } = useAppSelector(store => store.adminState);


    useEffect(() => {
      if(vacancies.length === 0){
        dispatch(getVacancies())
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])


    return(
        <div className="container">
            {isVacancyModalOpen? <AdminVacancyModal /> : ''}
            <h1 className="adminVacancyPage__title">Настроика вакансии</h1>
            <div className="adminVacancyPage__items">
                {vacancies.map((vacancy) => {
                    return(
                        <AdminVacancyCard key={vacancy._id} dataVacancy={vacancy}/>
                    )     
                })}
            </div>
        </div>
    )
}
export default AdminVacancyPage