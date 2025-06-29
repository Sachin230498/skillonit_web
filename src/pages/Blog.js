import React, { useEffect, useRef, useState } from "react";
import strike from "../assets/images/blog/strike.svg";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/common/BreadCrumbs";
import { GetAllBlogsApi, GetAllBlogsCategoryApi } from "../components/Helper/Redux/ReduxThunk/Homepage";
import { useDispatch } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Blog = () => {
    const [visibleCount, setVisibleCount] = useState(7);
    const [blogData, setBlogData] = useState([]);
    const [blogCategoryData, setBlogCategoryData] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();
    const scrollContainerRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);


    const checkOverflow = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const isOverflow = container.scrollWidth > container.clientWidth;
            setIsOverflowing(isOverflow);
            checkButtonStatus();
        }
    };

    const checkButtonStatus = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setIsAtStart(container.scrollLeft === 0);
            setIsAtEnd(
                Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth
            );
        }
    };

    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = 150;

        if (container) {
            const newScrollPosition =
                direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;
            container.scrollTo({
                left: newScrollPosition,
                behavior: "smooth",
            });

            setTimeout(checkButtonStatus, 300);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setTimeout(checkOverflow, 100);
        };

        checkOverflow();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [blogCategoryData]);

    const handleSeeMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    const getAllBlogsData = async () => {
        await dispatch(
            GetAllBlogsApi((resp) => {
                if (resp.status === true) {
                    setBlogData(resp?.data);
                } else {
                }
            })
        );
    };

    const getAllBlogsCategoryData = async () => {
        await dispatch(
            GetAllBlogsCategoryApi((resp) => {
                if (resp.status === true) {
                    setBlogCategoryData(resp?.data);
                } else {
                }
            })
        );
    };

    useEffect(() => {
        getAllBlogsData();
        getAllBlogsCategoryData();
    }, []);


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
            <BreadCrumb pagename="Blog" />
            <section className="blog-banner">
                <p className="p-text-1">SKILLONIT</p>

                <h1 className="h-text-1">
                    Our{" "}
                    <span className="s-text-1">
                        {" "}
                        Latest
                        <img src={strike} alt="strike" className="strike-img" />
                    </span>{" "}
                    Insights
                </h1>

                <p className="p-text-2">
                    Explore SkillonIT’s latest blog insights, where we share expert analysis, emerging technology trends, and actionable strategies to help you navigate the dynamic world of IT. Whether you're looking to enhance your skills or stay informed about industry advancements, our insightful content is designed to keep you ahead of the curve.
                </p>
                {blogData.length > 0 && (
                    <button className="btn-blog-explore" onClick={scrollToSection}>
                        Explore Blogs
                    </button>
                )}
            </section>
            {blogData.length > 0 && (
                <>
                    <section className="blog-section-1" id="blog-section" >
                        {/* {isOverflowing && ( */}
                        <div className="blog-tabs-btn">
                            <button
                                className={`scroll-btn prev-btn ${isAtStart ? "disabled" : ""}`}
                                onClick={() => handleScroll("left")}
                                disabled={isAtStart}
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                className={`scroll-btn next-btn ${isAtEnd ? "disabled" : ""}`}
                                onClick={() => handleScroll("right")}
                                disabled={isAtEnd}
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                        {/* )} */}
                        <div className="blog-tabs" ref={scrollContainerRef} onScroll={checkButtonStatus}>
                            <Link
                                to="/blog"
                                className={`blog-category-btn ${location.pathname === "/blog" ? "active" : ""
                                    } `}
                            >
                                All
                            </Link>
                            {blogCategoryData.map((category, index) => (
                                <Link
                                    key={index}
                                    to={`/blog/${category.categoryURL}`}
                                    className={`blog-category-btn ${location.pathname === `/blog/${category.categoryURL}` ? "active" : ""}`}
                                    reloadDocument
                                >
                                    {category.categoryTitle}
                                </Link>
                            ))}
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <Link
                                    to={`/${blogData[0]?.blog_url}`}
                                    className="blog-link"
                                    reloadDocument
                                >
                                    <div className="card blog-card-big">
                                        <div className="row g-2">
                                            <div className="col-xxl-6 col-lg-7 col-md-6 col-12 order-lg-1 order-md-1 order-2">
                                                <div className="blog-card-left">
                                                    <h1 className="h-text-2">{blogData[0]?.blog_title}</h1>
                                                    <p
                                                        className="p-text-2"
                                                        dangerouslySetInnerHTML={{
                                                            __html: truncateText(blogData[0]?.blog_text, 30),
                                                        }}
                                                    />
                                                    <div className="blog-card-foot-left">

                                                        <Link
                                                            to={`/${blogData[0]?.blog_url}`}
                                                            className="btn-readmore"
                                                        >
                                                            Read more
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-lg-5 col-md-6 col-12 order-lg-2 order-md-2 order-1">
                                                <div className="blog-card-right">
                                                    <img
                                                        src={blogData[0]?.blog_image}
                                                        alt="blog"
                                                        className="blog-card-img-1 img-fluid"
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
                                    <Link
                                        to={`/${blog?.blog_url}`}
                                        className="blog-link"
                                        reloadDocument
                                    >
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

                                                            <Link
                                                                to={`/${blog?.blog_url}`}
                                                                className="btn-readmore"
                                                            >
                                                                Read more
                                                            </Link>
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

export default Blog;
