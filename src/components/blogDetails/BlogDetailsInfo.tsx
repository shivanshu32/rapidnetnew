import Link from 'next/link';
import React from 'react';

const BlogDetailsInfo = () => {
    return (
        <div>
            <div className="blog-details-bottom">
                <ul>
                    <li className="tags">
                        <span>Tags :</span>
                        <Link href="/blogs">Router,</Link>
                        <Link href="/blogs">Computer,</Link>
                        <Link href="/blogs">Mobile</Link>
                    </li>
                    <li className="blog-like-dislike">
                        <Link href="#"><i className="fal fa-thumbs-up"></i> Like</Link>
                        <Link href="#"><i className="fal fa-thumbs-down"></i> Dislike</Link>
                    </li>
                    <li className="blog-share">
                        <span>Share :</span>
                        <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                        <Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                        <Link href="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                        <Link href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                    </li>
                </ul>
            </div>
            <div className="next-prev-post-wrap">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="next-prev-post-item">
                            <span>Previous Article</span>
                            <h5 className="title">
                                <Link href="/blog-details">What Do I Need to Make It in the World of Business?</Link>
                            </h5>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="next-prev-post-item text-end ms-auto">
                            <span>Next Article</span>
                            <h5 className="title">
                                <Link href="/blog-details">If You Only Knew How Much Your Outfit Choices Actually Matter</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsInfo;