import {useState} from 'react';
import { IProduct } from '../../modelTypes/reponses';


import './AdminCard.scss';
import './AdminCard-media.scss';
import { useAppDispatch } from '../../hooks/redux';
import { updateProduct } from '../../store/adminSlice';

type dataProduct = {
    dataProduct: IProduct
}

const AdminCard: React.FC<dataProduct> = ({dataProduct}) => {

    const {photoPath, productID, title, price, isActive} = dataProduct;
    const dispatch = useAppDispatch();


    const [switchBox, setSwitchBox] = useState(isActive)
    const [productPrice, setProductPrice] = useState(price)
    const [productTitle, setProductTitle] = useState(title)


    
    const onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setProductTitle(e.target.value)
    }
    const onChangePrice: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setProductPrice(+e.target.value)
    }
    const onSwitchBoxChange: React.ChangeEventHandler<HTMLInputElement> = () => {
        setSwitchBox(!switchBox)
    }
    const commitChanges: React.MouseEventHandler<HTMLButtonElement> = () => {
        const newProductDto = {
            productID: productID,
            newProductData: {
                isActive: switchBox,
                price: productPrice,
                title: productTitle
            }
        }
        dispatch(updateProduct(newProductDto))
    }

    return(
        <div className="adminCard">
            <img src={photoPath} alt={`img number-${productID}`} className="adminCard__photo" />
            <div className="adminCard__infoWrapper" >
                <div>
                    <label htmlFor="itemName">Название</label>
                    <input 
                    type="text" 
                    className="adminCard__name" 
                    id='itemName'
                    value={productTitle}
                    onChange={onChangeTitle}
                    />
                </div>
                <div>
                    <label htmlFor="itemPrice">Цена</label>
                    <input 
                    type="text" 
                    className="adminCard__price" 
                    id='itemPrice'
                    value={productPrice}
                    onChange={onChangePrice}
                    />
                </div>
            </div>
            <div className='adminCard__commit'>
                <button onClick={commitChanges} className='adminCard__changeBtn'>Изменить</button>
                <div className="adminCard__switcher">
                    <input 
                    checked={switchBox}
                    onChange={onSwitchBoxChange}
                    type="checkbox" 
                    id={`turnSwitcher-${productID}`}
                    />
                    <label htmlFor={`turnSwitcher-${productID}`}></label>
                </div>
            </div>
        </div>
    )
}
export default AdminCard