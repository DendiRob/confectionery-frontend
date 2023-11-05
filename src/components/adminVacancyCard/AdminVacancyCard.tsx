import {useState} from 'react';
import { IVacancy } from '../../modelTypes/reponses';

import { useAppDispatch } from '../../hooks/redux';
import { onChangeVacancy, updateVacancy } from '../../store/adminSlice';
import { openVacancyModal } from '../../store/adminSlice';
import Settings from '../../resources/icons/admin/settings.svg';


import './AdminVacancyCard.scss';
import './AdminVacancyCard-media.scss';

interface dataVacancy {
    dataVacancy: IVacancy;
}

const AdminVacancyCard: React.FC<dataVacancy> = ({dataVacancy}) => {

    const {isActive, salary, title, _id} = dataVacancy;
    const dispatch = useAppDispatch();


    const [switchBox, setSwitchBox] = useState(isActive)
    const [vacancySalary, setVacancyPrice] = useState(salary)
    const [vacancyTitle, setVacancyTitle] = useState(title)


    
    const onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setVacancyTitle(e.target.value)
    }
    const onChangeSalary: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setVacancyPrice(e.target.value)
    }
    const onSwitchBoxChange: React.ChangeEventHandler<HTMLInputElement> = () => {
        setSwitchBox(!switchBox)
    }
    const commitChanges: React.MouseEventHandler<HTMLButtonElement> = () => {
        const newVacancyDto = {
            _id: _id,
            newVacancyData: {
                isActive: switchBox,
                price: vacancySalary,
                title: vacancyTitle
            }
        }
        dispatch(updateVacancy(newVacancyDto))
    }


    return(
        <div className="adminVacancyCard">
            <div className="adminVacancyCard__infoWrapper" >
                <div>
                    <label htmlFor="itemName">Название</label>
                    <input 
                    type="text" 
                    className="adminVacancyCard__name" 
                    id='itemName'
                    value={vacancyTitle}
                    onChange={onChangeTitle}
                    />
                </div>
                <div>
                    <label htmlFor="itemPrice">Зарплата</label>
                    <input 
                    type="text" 
                    className="adminVacancyCard__price" 
                    id='itemPrice'
                    value={vacancySalary}
                    onChange={onChangeSalary}
                    />
                </div>
            </div>
            <div className='adminVacancyCard__commit'>
                <button onClick={commitChanges} className='adminVacancyCard__changeBtn'>Изменить</button>
                <div className="adminVacancyCard__switcher">
                    <input 
                    checked={switchBox}
                    onChange={onSwitchBoxChange}
                    type="checkbox" 
                    id={`turnSwitcher-${_id}`}
                    />
                    <label htmlFor={`turnSwitcher-${_id}`}></label>
                </div>
            </div>
            <img className='adminVacancyCard__iconSetting' onClick={() => {
                dispatch(onChangeVacancy(dataVacancy))
                dispatch(openVacancyModal())
                }} src={Settings} alt="item settings" />
        </div>
    )
}
export default AdminVacancyCard