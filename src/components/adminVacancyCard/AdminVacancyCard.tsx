import {useState} from 'react';
import { IVacancy } from '../../modelTypes/reponses';


import './AdminVacancyCard.scss';
import './AdminVacancyCard-media.scss';
import { useAppDispatch } from '../../hooks/redux';

type dataVacancy = {
    dataVacancy: IVacancy
}

const AdminVacancyCard: React.FC<dataVacancy> = ({dataVacancy}) => {

    const {isActive, salary, title, _id} = dataVacancy;
    const dispatch = useAppDispatch();


    const [switchBox, setSwitchBox] = useState(isActive)
    const [productPrice, setProductPrice] = useState(salary)
    const [productTitle, setProductTitle] = useState(title)


    
    const onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setProductTitle(e.target.value)
    }
    const onChangePrice: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setProductPrice(e.target.value)
    }
    const onSwitchBoxChange: React.ChangeEventHandler<HTMLInputElement> = () => {
        setSwitchBox(!switchBox)
    }
    const commitChanges: React.MouseEventHandler<HTMLButtonElement> = () => {
        const newVacancyDto = {
            _id: _id,
            newProductData: {
                isActive: switchBox,
                price: productPrice,
                title: productTitle
            }
        }
        // dispatch(updateProduct(newVacancyDto))
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
                    value={productTitle}
                    onChange={onChangeTitle}
                    />
                </div>
                <div>
                    <label htmlFor="itemPrice">Зарплата</label>
                    <input 
                    type="text" 
                    className="adminVacancyCard__price" 
                    id='itemPrice'
                    value={productPrice}
                    onChange={onChangePrice}
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
        </div>
    )
}
export default AdminVacancyCard