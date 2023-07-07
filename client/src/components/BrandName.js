import React, {useContext} from 'react';
import {Context} from "../index";

const BrandName = (brandId) => {
    const {device} = useContext(Context)
    const brandName = device.brands.filter(brand => brandId.brandId === brand.id)

    return (
        <div>
            {brandName[0].name}
        </div>
    );
};

export default BrandName;