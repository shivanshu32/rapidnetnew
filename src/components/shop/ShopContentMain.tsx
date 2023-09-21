import React from 'react';
import ShopSortingSection from './ShopSortingSection';
import PaginationData from '../common/pagination';
import ShopSearchWidget from './ShopSearchWidget';
import ShopSidebarCategories from './ShopSidebarCategories';
import ShopSidebarTags from './ShopSidebarTags';
import ShopSection from './ShopSection';
import ShopSidebarRange from './ShopSidebarRange';

const ShopContentMain = () => {
    return (
        <section className="shop-area pt-120 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <ShopSortingSection />
                        <ShopSection />
                        <PaginationData />
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <aside className="shop-sidebar">
                            <ShopSearchWidget />
                            <ShopSidebarCategories />
                            <ShopSidebarRange />
                            <ShopSidebarTags />
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopContentMain;