import Link from 'next/link';
import React from 'react';

const BlogWidgetTag = () => {
    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Popular Tags</h4>
            <ul className="sidebar-tag-list">
                <li><Link href="/blogs">Business</Link></li>
                <li><Link href="/blogs">Mobile</Link></li>
                <li><Link href="/blogs">Phone</Link></li>
                <li><Link href="/blogs">Financial</Link></li>
                <li><Link href="/blogs">Web Designs</Link></li>
                <li><Link href="/blogs">Repair</Link></li>
                <li><Link href="/blogs">UI/UX Research</Link></li>
                <li><Link href="/blogs">Branding</Link></li>
                <li><Link href="/blogs">Truck Repair</Link></li>
                <li><Link href="/blogs">Web Plans</Link></li>
            </ul>
        </div>
    );
};

export default BlogWidgetTag;