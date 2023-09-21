import blogs_data from '@/data/blogs-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogWidgetPost = () => {
    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Recent Posts</h4>
            <ul className="rc-post-list">
                {blogs_data && blogs_data.slice(0, 5).map((item) => (
                    <li key={item.id}>
                        <div className="rc-post-thumb">
                            <Link href={`/blog-details/${item.id}`}><Image src={item.img} style={{ width: "100%", height: "100%", minHeight: "70px" }} alt="img not found" /></Link>
                        </div>
                        <div className="rc-post-content">
                            <h6 className="title"><Link href={`/blog-details/${item.id}`}>{item.title?.substring(0, 40)} {item.title && item.title.length > 40 ? `...` : ''}</Link></h6>
                            <span className="date">{item.date}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogWidgetPost;