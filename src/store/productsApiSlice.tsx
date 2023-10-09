import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
<<<<<<< HEAD:src/store/productsApiSlice.js
const backendApi = "http://localhost:3004";
=======
import { productType } from '../modelTypes/catalogTypes';

const backendApi = "http://localhost:3004";

>>>>>>> ts-version:src/store/productsApiSlice.tsx

const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: `${backendApi}/`}),
    endpoints: (builder) => ({
            getOneProduct: builder.query<productType[], string>({
                query: (id) => `products/${id}`
            }),
    })
});

export { productsApiSlice }
export const { useGetOneProductQuery } = productsApiSlice;
