import {  Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

type adminRouteTypes = {
    children: JSX.Element 
}

const AdminRoute = ({children}: adminRouteTypes) => {

    const role = useAppSelector(store => store.loginStates.role)

    if(role !== 'admin'){
        return <Navigate to='/' />
    }

    return children
}
export default AdminRoute