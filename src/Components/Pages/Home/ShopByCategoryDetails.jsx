import React, { useEffect } from 'react';

const ShopByCategoryDetails = ({subcatagoryData}) => {
    const {subcatname}=subcatagoryData
    console.log(subcatname);
    useEffect(()=>{
        fetch(`http://localhost:5000/subToy?sub_category=${subcatname}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    },[subcatname])
    return (
        <div>
            
        </div>
    );
};

export default ShopByCategoryDetails;