import React from 'react';
import {useSearchParams} from  'react-router-dom'
// import { getAllUsers } from '../../services/api.service';

const PaginationComponent = () => {
   const [query, setQuery] = useSearchParams ({page:'1'})

    // useEffect(() => {
    //     const page = query.get('page')
    //     if(page){
    //         getAllUsers(+page)
    //     }
    // }, [query]);

   const getPreviousList = () =>{
       const page = query.get('page')
       if(page && +page>0) {
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
            <button onClick={getNextList}>Next</button>
        </div>
    );
};

export default PaginationComponent;