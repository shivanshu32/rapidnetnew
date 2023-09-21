import Link from 'next/link';
import React from 'react';

const BlogWidgetSocial = () => {
    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Follow Us</h4>
            <ul className="sidebar-social">
                <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
                <li><Link href="https://www.behance.net/" target='_blank'><i className="fab fa-pinterest-p"></i></Link></li>
                <li><Link href="https://www.youtube.com/" target='_blank'><i className="fab fa-youtube"></i></Link></li>
            </ul>
        </div>
    );
};

export default BlogWidgetSocial;