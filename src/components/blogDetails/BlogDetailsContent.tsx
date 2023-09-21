import blogs_data from '@/data/blogs-data';
import { idType } from '@/interFace/interFace';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blogThumb from "../../../public/assets/img/blog/blog_details02.jpg";
import BlogDetailsInfo from './BlogDetailsInfo';
import BlogDetailsComments from './BlogDetailsComments';
import BlogCommentForm from './BlogCommentForm';
import BlogSearchWidget from '../blog/BlogSearchWidget';
import BlogWidgetSocial from '../blog/BlogWidgetSocial';
import BlogWidgetCategory from '../blog/BlogWidgetCategory';
import BlogWidgetPost from '../blog/BlogWidgetPost';
import BlogWidgetTag from '../blog/BlogWidgetTag';

const BlogDetailsContent = ({id}:idType) => {

    const blog = blogs_data.find(item=> item.id == id)
    
    return (
        <section className="blog-details-area pt-120 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="blog-details-thumb">
                            <Image src={blog?.img} style={{ width: "100%", height: "auto" }} alt="blog image" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details-wrap">
                            <ul className="blog-post-meta">
                                <li><i className="far fa-folder-open"></i> {blog?.network}</li>
                                <li><i className="flaticon-user"></i> <Link href="/blog-details">{blog?.user}</Link></li>
                                <li><i className="flaticon-calendar"></i> {blog?.date}</li>
                            </ul>
                            <div className="standard-blog-content blog-details-content">
                                <h2 className="title">{blog?.title}</h2>
                                <p>We pride ourselves on our breaking news stories, in-depth analysis and thoughtful opinion pieces. But {`it's`} not just the news desk that works round the clock. Across the world, our sports writers, arts critics, interviewers and science reporters are dedicated to bringing you the quality coverage.</p>
                                <p>Our journalism is editorially independent, meaning we set our own agenda. No one edits our editor and no one steers our opinion. We are free from commercial bias and are not influenced by billionaire owners, politicians or shareholders. This independence matters because it enables us to challenge the powerful.</p>
                                <blockquote>
                                    Your time is limited, so {`don't`} waste it living someone {`else's`} life. {`Don't`} be trapped by dogma which is living with the results of other {`people's`} thinking -Steve Jobs
                                </blockquote>
                                <figure>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-12 col-md-7">
                                            <div className="blog-details-img">
                                                <Image src={blogThumb} style={{ width: "100%", height: "auto" }} alt="blog image" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-md-5">
                                            <p>All kinds of laptop, desktop computer servicing center forIt is a long established fact.</p>
                                            <ul className="blog-details-list">
                                                <li>Free Internet Connection</li>
                                                <li>Serviced Properly</li>
                                                <li>Highly Experienced Courtesy</li>
                                                <li>Full-service for Broadband</li>
                                            </ul>
                                        </div>
                                    </div>
                                </figure>
                                <p>We pride ourselves on our breaking news stories, in-depth analysis and thoughtful opinion pieces. But {`it's`} not just the news desk that works round the clock. Across the world, our sports writers, arts critics, interviewers and science reporters are dedicated to bringing you the quality coverage.</p>
                                <p>Our journalism is editorially independent, meaning we set our own agenda. No one edits our editor and no one steers our opinion. We are free from commercial bias and are not influenced by billionaire owners, politicians or shareholders. This independence matters because it enables us to challenge the powerful.</p>
                            </div>
                            <BlogDetailsInfo />
                            <BlogDetailsComments />
                            <BlogCommentForm />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <aside className="blog-sidebar">
                            <BlogSearchWidget />
                            <BlogWidgetSocial />
                            <BlogWidgetCategory />
                            <BlogWidgetPost />
                            <BlogWidgetTag />
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsContent;