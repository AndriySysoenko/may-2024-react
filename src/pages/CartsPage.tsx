import React, {useEffect, useState} from 'react';
import {loadCarts} from "../services/api.service";
import {ICart} from "../models/ICart";

const CartsPage = () => {

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        loadCarts()
            .then(response => setCarts(response))
    }, []);

    return (
        <div>
            This is must be all information about carts after login
            {
                JSON.stringify(carts)
            }
        </div>
    );
};

export default CartsPage;