import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { productType } from '../modelTypes/catalogTypes';

const backendApi = "http://localhost:3004";

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
