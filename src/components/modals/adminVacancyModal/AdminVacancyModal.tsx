import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import closeModal from '../../../resources/icons/adminModals/closeIcon.svg';
import { closeVacancyModal, onChangeVacancy } from '../../../store/adminSlice';  
import { useEffect, useState } from 'react';

import './AdminVacancyModal.scss';
import './AdminVacancyModal-media.scss';


const AdminVacancyModal = () => {

    const { isVacancyModalOpen, changingVacancy } = useAppSelector(store => store.adminState);
    const dispatch = useAppDispatch()

    const { title, salary, _id, description, isActive, conditions, duties, requirements} = changingVacancy;

    const [vacancyTitle, setVacancyTitle] = useState(title);//так не работает
    const [vacancySalary, setVacancySalary] = useState(salary);//так не работает
    const [vacancyDescription, setVacancyDescription] = useState(description);//так не работает
    const [isVacancyActive, setVacancyActive] = useState(isActive);//так не работает
    

    // const [vacancyConditions, setVacancyConditions] = useState(conditions.join('\n').toString());
    // const [vacancyDuties, setVacancyDuties] = useState(duties.join('\n'));
    // const [vacancyRequirements, setVacancyRequirements] = useState(requirements.join('\n'));

    // const onConditionsChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    //     const conditions = e.target.value;
    //     const newConditions = conditions.split('\n');
    //     setVacancyConditions(newConditions.join('\n').toString())
    // }

    // const onSubmitVacancy = () => {
    //     const newSettings = vacancyConditions.split('\n');
    //     console.log(newSettings)
    // }
    
    return (
        <div 
        className="adminVacancyModal"
        style={{display: isVacancyModalOpen? 'flex' : 'none'}}

        >
            <div className="adminVacancyModal__settings">
                <img src={closeModal} alt="close modal" onClick={() => dispatch(closeVacancyModal())} className="adminVacancyModal__close" />
                <div className="adminVacancyModal__title">Настройки вакансий</div>
                <div className="adminVacancyModal__wrapper">
                    <label htmlFor="vacancy_input_title">Название</label>
                    <input
                        type="text"
                        className='settings__input settings__input_title'
                        id='vacancy_input_title'
                        value={vacancyTitle}
                        onChange={(e) => setVacancyTitle(e.target.value)}
                    />
                    <label htmlFor="vacancy_input_salary">Зарплата</label>
                    <input 
                        type="text"
                        className='settings__input settings__input_salary'
                        id='vacancy_input_salary'
                        value={vacancySalary}
                        onChange={(e) => setVacancySalary(e.target.value)}
                    />
                    <label htmlFor="vacancy_input_descr">Описание</label>
                    <textarea 
                        className='settings__input settings__input_descr'
                        id='vacancy_input_descr'
                        value={vacancyDescription}
                        onChange={(e) => setVacancyDescription(e.target.value)}
                    />
                    {/* <label htmlFor="vacancy_input_conditions">Условия</label>
                    <textarea
                        className='settings__input settings__input_conditions' 
                        id='vacancy_input_conditions'
                        value={vacancyConditions}
                        onChange={onConditionsChange}
                    /> */}
                    {/* <label htmlFor="vacancy_input_requirements">Требования</label>
                    <textarea
                        className='settings__input settings__input_requirements'
                        id='vacancy_input_requirements'
                        value={vacancyRequirements}
                        onChange={(e) => setVacancyRequirements(e.target.value)}
                    />
                    <label htmlFor="vacancy_input_duties">Обязанности</label>
                    <textarea
                        className='settings__input settings__input_duties'
                        id='vacancy_input_duties'
                        value={vacancyDuties}
                        onChange={(e) => setVacancyDuties(e.target.value)}
                    /> */}
                    <div className="settings__wrapper_checkbox">
                        <div className="settings__input_isActive-title">Вкл/Выкл вакансию</div>
                        <input
                            type="checkbox"
                            className='settings__input settings__input_isActive'
                            id='vacancy_input_isActive'
                            checked={isVacancyActive}
                            onChange={(e) => setVacancyActive(!isVacancyActive)}
                        />
                        <label htmlFor="vacancy_input_isActive"></label>
                    </div>
                    {/* <button className='settings__btn' onClick={onSubmitVacancy}>Изменить</button> */}
                </div>
            </div>
        </div>
    )
}
export default AdminVacancyModal