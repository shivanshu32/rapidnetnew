import blogs_data from '@/data/blogs-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogStandard = () => {
    return (
        <>
            {blogs_data && blogs_data.slice(0, 5).map((item) => (
                <div className="standard-blog-item mb-40" key={item.id}>
                    <div className="standard-post-thumb">
                        <Link href={`/blog-details/${item.id}`}><Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" /></Link>
                    </div>
                    <ul className="blog-post-meta">
                        <li><i className="far fa-folder-open"></i> {item.network}</li>
                        <li><i className="flaticon-businessman"></i> <Link href="/blogs">{item.user}</Link></li>
                        <li><i className="flaticon-calendar"></i> {item.date}</li>
                    </ul>
                    <div className="standard-blog-content">
                        <h2 className="title"><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h2>
                        <Link href={`/blog-details/${item.id}`} className="btn transparent-btn">{item.btn}</Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BlogStandard;