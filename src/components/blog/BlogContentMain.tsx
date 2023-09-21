import React from 'react';
import BlogStandard from './BlogStandard';
import PaginationData from '../common/pagination';
import BlogSearchWidget from './BlogSearchWidget';
import BlogWidgetSocial from './BlogWidgetSocial';
import BlogWidgetCategory from './BlogWidgetCategory';
import BlogWidgetTag from './BlogWidgetTag';
import BlogWidgetPost from './BlogWidgetPost';

const BlogContentMain = () => {
    return (
        <section className="standard-blog-area pt-120 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <BlogStandard />
                        <PaginationData />
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

export default BlogContentMain;