import React, {useEffect, useState} from 'react';
import {loadCarts} from "../services/api.service";
import {ICart} from "../models/ICart";

const CartsPage = () => {

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        loadCarts()
            .then(carts => setCarts(carts))
    }, []);

    return (
        <div>
            {
                JSON.stringify(carts)
            }
        </div>
    );
};

export default CartsPage;