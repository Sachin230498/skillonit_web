import React, { useEffect, useState } from "react";
import arrow from "../assets/images/btn-top.svg";
import keyfeatureimg from "../assets/images/key-feature-img.svg";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetSingleBlogApi } from "../components/Helper/Redux/ReduxThunk/Homepage";
import BreadCrumb from '../components/common/BreadCrumbs'
import BlogFaq from '../components/common/BlogFaq'


const BlogContents = () => {
  const [blogData, setBlogData] = useState([]);
  const { url } = useParams();
  const dispatch = useDispatch();

  const GetSingleBlogData = async () => {
    let params = {
      Url: url,
    };
    dispatch(
      GetSingleBlogApi(params, (resp) => {
        if (resp.status == true) {
          setBlogData(resp.data);
        }
      })
    );
  };

  useEffect(() => {
    GetSingleBlogData();
    window.scrollTo(0, 0);
  }, [url]);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="blog-inner-page">
      <BreadCrumb
        pagename="Blog"
        nextpagename={blogData?.breadcrumb_title}
        cname="single-blog-bread-top"
      />
      {showButton && (
        <button
          className="btn-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={arrow} alt="top" className="btn-top-img" />
        </button>
      )}

      <section className="blog-inner-section-2">
        <img
          src={blogData?.blog_image}
          alt="banner"
          className="inner-banner-blog-img"
        />
        <div className="blog-inner-content">
          <h1 className="h-text-1">{blogData?.blog_title}</h1>
          <div className="inner-content-head">
            <div className="inner-content-head-1">
              <p className="p-text-1">
                <div className="admin-img-div">
                  <img src={keyfeatureimg} alt="admin" className="admin-img" />
                </div>
                Admin
              </p>
            </div>
          </div>
          <div className="content-blog-inner-div" dangerouslySetInnerHTML={{ __html: blogData?.blog_text }} />
        </div>
      </section>

      <BlogFaq
        title="Find answer to common questions"
        blogFaqs={blogData.faqs}
        cname="single-blog-faq"
      />
    </div>
  );
};

export default BlogContents;
