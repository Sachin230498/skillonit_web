import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../components/common/BreadCrumbs";
import { GetCategoryBlogsApi } from "../components/Helper/Redux/ReduxThunk/Homepage";
import { useDispatch } from "react-redux";

const BlogCategory = () => {
    const [visibleCount, setVisibleCount] = useState(7);
    const [blogData, setBlogData] = useState([]);
    const [categoryData, setCategoryData] = useState([])
    const { categoryurl } = useParams();
    const dispatch = useDispatch();

    const handleSeeMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };


    const getCategoryBlogsData = async () => {
        let params = {
            blog_category_url: categoryurl,
        }
        await dispatch(GetCategoryBlogsApi(params, (resp) => {
            if (resp.status === true) {
                setBlogData(resp?.data)
                setCategoryData(resp?.cat)
            }
            else { }

        }))
    }

    useEffect(() => {
        getCategoryBlogsData();
    }, [categoryurl])



    const truncateText = (text, wordLimit, appendEllipsis = true) => {
        if (typeof text !== "string") {
            console.warn("Input text must be a string.");
            return "";
        }

        const plainText = text.replace(/<\/?[^>]+(>|$)/g, "");

        const words = plainText.trim().split(/\s+/);
        if (words.length > wordLimit) {
            return `${words.slice(0, wordLimit).join(" ")}${appendEllipsis ? "..." : ""
                }`;
        }

        return plainText;
    };

    const scrollToSection = () => {
        const section = document.getElementById("blog-section");
        if (section) {
            const offset = 100;
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
        }
    };

    return (
        <div className="blog ">
            <BreadCrumb pagename="Blog" nextpagename={categoryData[0]?.breadcrumb_title} />
            <section className="blog-banner">
                <p className="p-text-1">SKILLONIT</p>

                <h1 className="h-text-1 text-center">
                    {categoryData[0]?.categoryBannerTitle}
                </h1>

                <p
                    className="p-text-2"
                    dangerouslySetInnerHTML={{
                        __html: truncateText(categoryData[0]?.category_desc),
                    }}
                />
                <button className="btn-blog-explore" onClick={scrollToSection}>
                    Explore Blogs
                </button>

            </section>
            {blogData.length > 0 && (
                <>
                    <section className="blog-section-1" id="blog-section">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <Link to={`/${blogData[0]?.blog_url}`} className="blog-link" reloadDocument>
                                    <div className="card blog-card-big">
                                        <div className="row g-2">
                                            <div className="col-lg-6 col-md-6 col-12 order-lg-1 order-md-1 order-2">
                                                <div className="blog-card-left">
                                                    <h1 className="h-text-2">{blogData[0]?.blog_title}</h1>
                                                    <p
                                                        className="p-text-2"
                                                        dangerouslySetInnerHTML={{
                                                            __html: truncateText(blogData[0]?.blog_text, 30),
                                                        }}
                                                    />
                                                    <div className="blog-card-foot-left">
                                                        <Link to={`/${blogData[0]?.blog_url}`} className="btn-readmore">Read more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12 order-lg-2 order-md-2 order-1">
                                                <div className="blog-card-right">
                                                    <img
                                                        src={blogData[0]?.blog_image}
                                                        alt="blog"
                                                        className="blog-card-img-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className="blog-section-2">
                        <div className="row g-4">
                            {blogData.slice(1, visibleCount).map((blog) => (
                                <div key={blog._id} className="col-lg-4 col-md-6 col-12">
                                    <Link to={`/${blog?.blog_url}`} className="blog-link" reloadDocument>
                                        <div className="card blog-card-big">
                                            <div className="row g-2">
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="blog-card-right">
                                                        <img
                                                            src={blog.blog_image}
                                                            alt="blog"
                                                            className="blog-card-img-1"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="blog-card-left">
                                                        <h1 className="h-text-2">{blog.blog_title}</h1>
                                                        <p
                                                            className="p-text-2"
                                                            dangerouslySetInnerHTML={{
                                                                __html: truncateText(blog.blog_text, 30),
                                                            }}
                                                        />
                                                        <div className="blog-card-foot-left">
                                                            <Link to={`/${blog?.blog_url}`} className="btn-readmore">Read more</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}

                            {visibleCount < blogData.length && (
                                <div className="w-100 d-flex justify-content-end align-items-center">
                                    <button className="btn-see-more" onClick={handleSeeMore}>
                                        See More
                                    </button>
                                </div>
                            )}
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default BlogCategory;
