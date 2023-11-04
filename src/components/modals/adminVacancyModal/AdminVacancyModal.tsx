import { useAppSelector } from '../../../hooks/redux';
import closeModal from '../../../resources/icons/adminModals/closeIcon.svg'

import './AdminVacancyModal.scss';
import './AdminVacancyModal-media.scss';

const AdminVacancyModal = () => {

    const { isVacancyModalOpen } = useAppSelector(store => store.adminState)

    return (
        <div 
        className="adminVacancyModal"
        style={{display: isVacancyModalOpen? 'flex' : 'none'}}

        >
            <div className="adminVacancyModal__settings">
                <img src={closeModal} alt="close modal" className="adminVacancyModal__close" />
                <div className="adminVacancyModal__title">Настройки вакансий</div>
                <div className="adminVacancyModal__wrapper">
                    <label htmlFor="vacancy_input_title">Название</label>
                    <input
                        type="text"
                        className='settings__input settings__input_title'
                        id='vacancy_input_title'
                    />
                    <label htmlFor="vacancy_input_salary">Зарплата</label>
                    <input 
                        type="text"
                        className='settings__input settings__input_salary'
                        id='vacancy_input_salary'
                    />
                    <label htmlFor="vacancy_input_descr">Описание</label>
                    <textarea 
                        className='settings__input settings__input_descr'
                        id='vacancy_input_descr'
                    />
                    <label htmlFor="vacancy_input_conditions">Условия</label>
                    <textarea
                        className='settings__input settings__input_conditions' 
                        id='vacancy_input_conditions'
                    />
                    <label htmlFor="vacancy_input_requirements">Требования</label>
                    <textarea
                        className='settings__input settings__input_requirements'
                        id='vacancy_input_requirements'
                    />
                    <label htmlFor="vacancy_input_duties">Обязанности</label>
                    <textarea
                        className='settings__input settings__input_duties'
                        id='vacancy_input_duties'
                    />
                    <div className="settings__wrapper_checkbox">
                        <div className="settings__input_isActive-title">Вкл/Выкл вакансию</div>
                        <input
                            type="checkbox"
                            className='settings__input settings__input_isActive'
                            id='vacancy_input_isActive'
                        />
                        <label htmlFor="vacancy_input_isActive"></label>
                    </div>
                    <button>Commit</button>
                </div>
            </div>
        </div>
    )
}
export default AdminVacancyModal