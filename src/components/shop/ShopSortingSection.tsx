import React from 'react';

const ShopSortingSection = () => {
    return (
        <div className="shop-meta">
            <p className="shop-showing-result">Showing 1–6 of 10 results</p>
            <div className="shop-short-by">
                <form action="#">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue="1">Sort by latest</option>
                        <option defaultValue="2">Low to high</option>
                        <option defaultValue="3">High to low</option>
                        <option defaultValue="4">Popularity</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default ShopSortingSection;