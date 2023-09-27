import React, { useState, useEffect } from "react";
import "../style.scss";
import { motion } from "framer-motion";

function BlogPost({ post }) {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const topicName = post._embedded["wp:term"][2][0];
    if (topicName) {
      setTopic(topicName.name);
    } else {
      setTopic("Miscellaneous");
    }
    const blogDate = new Date(post.date);
    const formattedDate = blogDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setDate(formattedDate);
  }, []);

  return (
    <motion.div
      className="blog-p-card--post"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 8,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <div className="p-card--highlighted">
        <h5 className="blog-p-card__header p-muted-heading">{topic}</h5>

        <hr />

        <div className="blog-p-card__content">
          <a href={post.link} target="_blank">
            <img
              className="p-card__image"
              alt=""
              height="185"
              width="330"
              src={post.featured_media}
            />
          </a>

          <div className="p-card__inner u-no-margin-bottom">
            <h3>
              <a href={post.link} target="_blank">
                {post.title.rendered}
              </a>
            </h3>
            <em>
              By{" "}
              <a href={post._embedded.author[0].link} target="_blank">
                {post._embedded.author[0].name}
              </a>{" "}
              on {date}
            </em>
          </div>
        </div>
        <hr />
        <p className="blog-p-card__footer">Article</p>
      </div>
    </motion.div>
  );
}

export default BlogPost;
