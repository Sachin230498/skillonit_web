import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";

const BreadCrumb = ({ pagename, nextpagename, cname, style, tname, tstyle }) => {
    return (
        <nav aria-label="breadcrumb" style={{ width: "90%" }}>
            <ol className={`breadcrumb ${cname}`} style={style}>
                <li className="breadcrumb-item">
                    <Link to="/" className={`breadcrumb-link`} style={tstyle}>
                        <IoHomeSharp /> Home
                    </Link>
                </li>
                {pagename && <FaChevronRight className={`breadcrumb-divider ${tname}`} />}

                {nextpagename && (
                    <div className="breadcrumb-inner">
                        <li className="breadcrumb-item">
                            <Link to={`/${pagename.toLowerCase()}`} className="breadcrumb-link">
                                {pagename}
                            </Link>
                        </li>
                        <FaChevronRight className="breadcrumb-divider" />
                        <li className="breadcrumb-item active" aria-current="page">
                            {nextpagename}
                        </li>
                    </div>
                )}

                {!nextpagename && (
                    <li className={`breadcrumb-item active ${tname}`} aria-current="page">
                        {pagename}
                    </li>
                )}
            </ol>
        </nav>
    );
};

export default BreadCrumb;
