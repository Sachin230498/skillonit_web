const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require("axios");

const buildPath = path.join(__dirname, "build/index.html");
let rawData = fs.readFileSync(buildPath, "utf-8");

const setCacheControl = (req, res, next) => {
  if (req.url.match(/\.(css|js)$/)) {
    res.setHeader("Cache-Control", "public, max-age=31536000"); // 1 year
  } else if (
    req.url.match(/\.(jpg|jpeg|png|gif|svg|webp|woff|woff2|ttf|otf|eot)$/)
  ) {
    res.setHeader("Cache-Control", "public, max-age=31536000"); // 1 week
  } else {
    res.setHeader("Cache-Control", "no-cache");
  }
  next();
};

// Serve static files with caching headers
app.use(setCacheControl);

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

const replaceMeta = (html, title, description, url, ogImage) => {
  return html
    .replace(/<title>.*<\/title>/i, `<title>${title}</title>`)
    .replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="description" content="${description}"/>`
    )
    .replace(
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:title" content="${title}">`
    )
    .replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="twitter:title" content="${title}">`
    )
    .replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
      `<link rel="canonical" href="${url}">`
    )
    .replace(
      /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:url" content="${url}">`
    )
    .replace(
      /<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:image" content="${ogImage}">`
    )
    .replace(
      /<meta\s+name=["']twitter:image["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="twitter:image" content="${ogImage}">`
    )
    .replace(
      /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:description" content="${description}">`
    )
    .replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="twitter:description" content="${description}">`
    );
};




// app.get("/sitemap.xml", async (req, res) => {
//   try {
//     // Fetch URLs from API
//     const BASE_URL = "https://www.skillonit.com/"; // Change this to your domain
//     // const API_URL = "https://api.skillonit.com/api/v1/course/sitemaps";

//     const { data } = await axios.get(API_URL);

//     if (!data || !data.status || (!data.blog && !data.page)) {
//       return res.status(500).send("Error generating sitemap");
//     }

//     const urls = [...(data.blog || []), ...(data.page || [])];

//     // const urls = [
//     //   { "slug": "blog-post-1" },
//     //   { "slug": "blog-post-2" },
//     //   { "slug": "about-us" },
//     //   { "slug": "contact" }
//     // ]; // Assuming this is an array of objects with URLs

//     // Generate Sitemap XML
//     let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
//     xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

//     // Home Page
//     // xml += `  <url>\n    <loc>${BASE_URL.replace(/\/$/, "")}</loc>\n    <priority>1.0</priority>\n  </url>\n`;


//     // Loop through API data to add pages
//     // urls.forEach((item) => {
//     //   xml += `  <url>\n    <loc>${BASE_URL}/${item.slug}</loc>\n    <priority>0.8</priority>\n  </url>\n`;
//     // });

//     urls.forEach((item) => {
//       if (item.url) {
//         let formattedUrl =
//           item.url === "/" ? BASE_URL.replace(/\/$/, "") : `${BASE_URL.replace(/\/$/, "")}/${item.url.replace(/^\//, "")}`;

//         xml += `  <url>\n`;
//         xml += `    <loc>${formattedUrl}</loc>\n`; // Ensure correct URL format
//         xml += `    <priority>${item.priority || "0.8"}</priority>\n`;
//         xml += `    <changefreq>${item.changefreq || "weekly"}</changefreq>\n`;
//         xml += `  </url>\n`;
//       }
//     });


//     xml += `</urlset>`;

//     // Set content type as XML and send response
//     res.header("Content-Type", "application/xml");
//     res.send(xml);
//   } catch (error) {
//     console.error("Error generating sitemap:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.get("/sitemap.xml", async (req, res) => {
  try {
    // Fetch URLs from API
    const BASE_URL = "https://www.skillonit.com/"; // Change this to your domain
    const API_URL = "https://api.skillonit.com/api/v1/course/sitemaps";

    const { data } = await axios.get(API_URL);

    if (!data || !data.status || (!data.blog && !data.page && !data.eventSitemap)) {
      return res.status(500).send("Error generating sitemap");
    }

    const urls = [...(data.blog || []), ...(data.page || []), ...(data.eventSitemap || [])];

    // Generate Sitemap XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Loop through API data to add pages
    urls.forEach((item) => {
      if (item.url) {
        let formattedUrl;
        // Check if the item belongs to eventSitemap
        if (data.eventSitemap && data.eventSitemap.includes(item)) {
          formattedUrl = item.url === "/"
            ? BASE_URL.replace(/\/$/, "")
            : `${BASE_URL.replace(/\/$/, "")}/workshops/${item.url.replace(/^\//, "")}`;
        } else {
          formattedUrl = item.url === "/"
            ? BASE_URL.replace(/\/$/, "")
            : `${BASE_URL.replace(/\/$/, "")}/${item.url.replace(/^\//, "")}`;
        }

        xml += `  <url>\n`;
        xml += `    <loc>${formattedUrl}</loc>\n`; // Ensure correct URL format
        xml += `    <priority>${item.priority || "0.8"}</priority>\n`;
        xml += `    <changefreq>${item.changefreq || "weekly"}</changefreq>\n`;
        xml += `  </url>\n`;
      }
    });

    xml += `</urlset>`;

    // Set content type as XML and send response
    res.header("Content-Type", "application/xml");
    res.send(xml);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.get("/:url", async (req, res) => {
  try {
    const slug = req.params.url;
    const apiUrl = "https://api.skillonit.com/api/v1/course/getSingleBlogs";
    const apiUrl2 = "https://api.skillonit.com/api/v1/course/getPage";

    const { data } = await axios.post(apiUrl, { Url: slug });

    if (!data || !data.status || !data.data) {
      const { data } = await axios.post(apiUrl2, { pageUrl: `/${slug}` });


      if (data && data.status == true) {
        const MetaDetails = data?.data
        const metaTitle = MetaDetails?.meta_title;
        const metaDescription = MetaDetails?.meta_description;
        const canonicalUrl = `https://${req.get("host")}/${slug}`;
        const ogImage = MetaDetails?.og_image;

        const modifiedData = replaceMeta(
          rawData,
          metaTitle,
          metaDescription,
          canonicalUrl,
          ogImage
        );
        return res.send(modifiedData);
      }
      else {
        console.warn("Invalid blog data received, serving fallback.");

        const buildPath = path.join(__dirname, "build/404.html");
        let noData = fs.readFileSync(buildPath, "utf-8");
        return res.status(404).send(noData);
      }
    }
    else {
      const MetaDetails = data?.data
      const metaTitle = MetaDetails?.blog_meta_title;
      const metaDescription = MetaDetails?.blog_meta_desc;
      const canonicalUrl = `https://${req.get("host")}/${slug}`;
      const ogImage = MetaDetails?.blog_image;

      const modifiedData = replaceMeta(
        rawData,
        metaTitle,
        metaDescription,
        canonicalUrl,
        ogImage
      );


      return res.send(modifiedData);
    }


  } catch (error) {
    console.error("Error fetching blog details:", error);
    const buildPath = path.join(__dirname, "build/404.html");
    let noData = fs.readFileSync(buildPath, "utf-8");
    return res.status(404).send(noData);
  }
});

app.get("/blog/:categoryurl", async (req, res) => {
  try {
    const slug = req.params.categoryurl;
    const apiUrl3 = "https://api.skillonit.com/api/v1/course/getBlogCatMeta";

    const { data } = await axios.post(apiUrl3, { Url: slug });

    if (!data || !data.status || !data.data) {
      console.warn("Invalid blog data received.");

      const buildPath = path.join(__dirname, "build/404.html");
      let noData = fs.readFileSync(buildPath, "utf-8");
      return res.status(404).send(noData);
    }

    const MetaDetails = data?.data;
    const metaTitle = MetaDetails?.category_metatitle;
    const metaDescription = MetaDetails?.category_metadescription;
    const canonicalUrl = `https://${req.get("host")}/${slug}`;
    const ogImage = MetaDetails?.category_ogimage;


    const modifiedData = replaceMeta(
      rawData,
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogImage
    );
    return res.send(modifiedData);

  } catch (error) {
    console.error("Error fetching blog details:", error);
    const buildPath = path.join(__dirname, "build/404.html");
    let noData = fs.readFileSync(buildPath, "utf-8");
    return res.status(404).send(noData);
  }
});

app.get("/courses/:url", async (req, res) => {
  try {
    const slug = req.params.url;
    const apiUrl4 = "https://api.skillonit.com/api/v1/course/getCourseMeta";

    const { data } = await axios.post(apiUrl4, { Url: slug });

    if (!data || !data.status || !data.data) {
      console.warn("Invalid blog data received.");

      const buildPath = path.join(__dirname, "build/404.html");
      let noData = fs.readFileSync(buildPath, "utf-8");
      return res.status(404).send(noData);
    }

    const MetaDetails = data?.data;
    const metaTitle = MetaDetails?.course_meta_title;
    const metaDescription = MetaDetails?.course_meta_desc;
    const canonicalUrl = `https://${req.get("host")}/${slug}`;
    const ogImage = MetaDetails?.course_og;


    const modifiedData = replaceMeta(
      rawData,
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogImage
    );
    return res.send(modifiedData);

  } catch (error) {
    console.error("Error fetching blog details:", error);
    const buildPath = path.join(__dirname, "build/404.html");
    let noData = fs.readFileSync(buildPath, "utf-8");
    return res.status(404).send(noData);
  }
});

app.get("/profile/:profileid", async (req, res) => {
  try {
    const profileId = req.params.profileid;
    const apiUrl5 = "https://api.skillonit.com/api/v1/user/usermetaUNProfile";

    const { data } = await axios.post(apiUrl5, { id: profileId });

    if (!data || !data.status || !data.data) {
      console.warn("Invalid blog data received.");

      const buildPath = path.join(__dirname, "build/404.html");
      let noData = fs.readFileSync(buildPath, "utf-8");
      return res.status(404).send(noData);
    }

    const MetaDetails = data?.data;
    const metaTitle = "Your SkillonIT Profile | Manage Your Account & Courses";
    const metaDescription = "Access and manage your SkillonIT profile. Track your enrolled courses, update your details, and stay connected with your learning progress.";
    const canonicalUrl = `https://${req.get("host")}/profile/${profileId}`;
    const ogImage = "https://skillimage.s3.ap-south-1.amazonaws.com/profile-og.png";

    const modifiedData = replaceMeta(
      rawData,
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogImage
    );

    return res.send(modifiedData);
  } catch (error) {
    console.error("Error fetching blog details:", error);
    const buildPath = path.join(__dirname, "build/404.html");
    let noData = fs.readFileSync(buildPath, "utf-8");
    return res.status(404).send(noData);
  }
});

app.get("/workshops/:url", async (req, res) => {
  try {
    const slug = req.params.url;
    const apiUrl6 = "https://api.skillonit.com/api/v1/course/getEventMeta";

    const { data } = await axios.post(apiUrl6, { Url: `/${slug}` });

    if (!data || !data.status || !data.data) {
      console.warn("Invalid blog data received.");

      const buildPath = path.join(__dirname, "build/404.html");
      let noData = fs.readFileSync(buildPath, "utf-8");
      return res.status(404).send(noData);
    }

    const MetaDetails = data?.data;
    const metaTitle = MetaDetails?.event_meta_title;
    const metaDescription = MetaDetails?.event_meta_desc;
    const canonicalUrl = `https://${req.get("host")}/workshops/${slug}`;
    const ogImage = MetaDetails?.event_og_image;


    const modifiedData = replaceMeta(
      rawData,
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogImage
    );
    return res.send(modifiedData);

  } catch (error) {
    console.error("Error fetching blog details:", error);
    const buildPath = path.join(__dirname, "build/404.html");
    let noData = fs.readFileSync(buildPath, "utf-8");
    return res.status(404).send(noData);
  }
});



// Route for homepage
app.get("/", async (req, res) => {
  try {
    const metaTitle =
      "No.1 IT Academy in Buldhana | Software Training Institute in Maharashtra";
    const metaDescription =
      "SkillonIT is a top IT academy in Buldhana, Maharashtra, providing in-demand IT software training courses to advance your career.";
    const canonicalUrl = `https://${req.get("host")}`;
    const ogImage =
      "https://skillimage.s3.ap-south-1.amazonaws.com/home-og.png";

    const modifiedData = replaceMeta(
      rawData,
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogImage
    );

    res.send(modifiedData);
  } catch (error) {
    console.error("Error reading index.html file:", error);
    res.status(500).send("Internal Server Error");
  }
});






app.get("*", (req, res) => {
  let metaTitle = "No.1 IT Academy in Buldhana | Software Training Institute in Maharashtra";
  let metaDescription =
    "SkillonIT is a top IT academy in Buldhana, Maharashtra, providing in-demand IT software training courses to advance your career.";
  let canonicalUrl = `https://${req.get("host")}${req.originalUrl}`;
  let modifiedData = replaceMeta(
    rawData,
    metaTitle,
    metaDescription,
    canonicalUrl
  );
  res.send(modifiedData);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
