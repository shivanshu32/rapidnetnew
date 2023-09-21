import Link from 'next/link';
import React from 'react';

const BlogWidgetCategory = () => {
    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Browse Category</h4>
            <ul className="sidebar-cat-list">
                <li><Link href="/blogs">All Categories <span>(252)</span></Link></li>
                <li><Link href="/blogs">Mouse <span>(58)</span></Link></li>
                <li><Link href="/blogs">Gear Box <span>(10)</span></Link></li>
                <li><Link href="/blogs">Hard Disk <span>(96)</span></Link></li>
                <li><Link href="/blogs">Looking Glass <span>(82)</span></Link></li>
                <li><Link href="/blogs">Monitor <span>(30)</span></Link></li>
                <li><Link href="/blogs">SSD <span>(10)</span></Link></li>
                <li><Link href="/blogs">Processor <span>(42)</span></Link></li>
            </ul>
        </div>
    );
};

export default BlogWidgetCategory;