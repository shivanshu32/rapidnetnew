import Link from 'next/link';
import React from 'react';

const ShopSidebarTags = () => {
    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Product Tags</h4>
            <ul className="sidebar-tag-list">
                <li><Link href="/shop">#media</Link></li>
                <li><Link href="/shop">#internet</Link></li>
                <li><Link href="/shop">#Wi-Fi</Link></li>
                <li><Link href="/shop">#network</Link></li>
                <li><Link href="/shop">#package</Link></li>
                <li><Link href="/shop">#mbps</Link></li>
                <li><Link href="/shop">#visual reality</Link></li>
                <li><Link href="/shop">#bundle</Link></li>
            </ul>
        </div>
    );
};

export default ShopSidebarTags;