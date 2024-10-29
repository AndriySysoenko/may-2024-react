import React, {useEffect, useState} from 'react';
import {loadCarts, refresh} from "../services/api.service";
import {ICart} from "../models/ICart";

const CartsPage = () => {

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        loadCarts()
            .then(carts => setCarts(carts))
            .catch(reason => {
                refresh()
                    .then(response=> loadCarts())
                    .then(carts => setCarts(carts));
                alert("Authorization error. Try logging in again.");
            });
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