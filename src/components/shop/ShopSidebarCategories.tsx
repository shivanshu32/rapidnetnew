import Link from 'next/link';
import React from 'react';

const ShopSidebarCategories = () => {
    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Categories</h4>
            <ul className="sidebar-cat-list">
                <li><Link href="/shop">Broadband</Link></li>
                <li><Link href="/shop">Gaming Materials</Link></li>
                <li><Link href="/shop">Connections</Link></li>
                <li><Link href="/shop">High-speed Wi-Fi</Link></li>
                <li><Link href="/shop">Satellite TV</Link></li>
                <li><Link href="/shop">Streaming</Link></li>
                <li><Link href="/shop">Un categorized</Link></li>
            </ul>
        </div>
    );
};

export default ShopSidebarCategories;