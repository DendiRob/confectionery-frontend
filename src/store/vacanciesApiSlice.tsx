import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { vacancyCardType, vacancyInfoType } from '../modelTypes/vacancyTypes';

const backendApi = "http://localhost:3004";

const vacanciesApiSlice = createApi({
    reducerPath: 'vacanciesApi',
    baseQuery: fetchBaseQuery({baseUrl: `${backendApi}/`}),
    endpoints: (builder) => ({
        getAllVacancies: builder.query<vacancyCardType[], void>({
            query: () => 'vacancies'
        }),
        getSingleVacancy: builder.query<vacancyInfoType[], string>({
            query: (id) => `vacancies/${id}`
        })
    })
});
export { vacanciesApiSlice }
export const {useGetAllVacanciesQuery,useGetSingleVacancyQuery} = vacanciesApiSlice;