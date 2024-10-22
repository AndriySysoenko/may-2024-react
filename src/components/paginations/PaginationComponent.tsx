import React, { FC } from 'react';
import {useSearchParams} from  'react-router-dom'

type IPaginationProps = {marker:boolean}
const PaginationComponent:FC<IPaginationProps> = ({marker}) => {
   const [query, setQuery] = useSearchParams ({page:'1'})

   const getPreviousList = () =>{
       const page = query.get('page')
       if(page && +page > 1) {
           let actualPage = +page;
           actualPage--;
           setQuery({page: actualPage.toString()})
       }
   }

    const getNextList = () =>{
        const page = query.get('page')
        if(page) {
            let actualPage = +page;
            actualPage++;
            setQuery({page: actualPage.toString()})
        }
    }

    return (
        <div>
            <button onClick={getPreviousList}>Prev</button>
            <button onClick={getNextList} disabled = {marker}>Next</button>
        </div>
    );
};

export default PaginationComponent;