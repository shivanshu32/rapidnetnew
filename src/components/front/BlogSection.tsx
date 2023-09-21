import blogs_data from '@/data/blogs-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogSection = () => {
    return (
        <section className="blog-area pt-110">
            <div className="container">
                <div className="row align-items-end justify-content-between mb-60">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="section-title">
                            <h2 className="title">Read Our Recent Blog Posts</h2>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4">
                        <div className="section-title-btn text-start text-md-end">
                            <Link href="/blogs" className="btn transparent-btn">Read all posts</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs_data && blogs_data.slice(0, 3).map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-9" key={item.id}>
                            <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="blog-post-thumb">
                                    <Link href={`/blog-details/${item.id}`}><Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" /></Link>
                                </div>
                                <div className="blog-post-content">
                                    <ul className="blog-post-meta">
                                        <li><i className="far fa-folder-open"></i> {item.network}</li>
                                        <li><i className="flaticon-businessman"></i> <Link href="/blogs">{item.user}</Link></li>
                                        <li><i className="flaticon-calendar"></i> {item.date}</li>
                                    </ul>
                                    <h3 className="title"><Link href={`/blog-details/${item.id}`}>{item.title?.substring(0, 55)} {item.title && item.title.length > 55 ? `...` : ''}</Link></h3>
                                    <Link href={`/blog-details/${item.id}`} className="btn transparent-btn">{item.btn}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;