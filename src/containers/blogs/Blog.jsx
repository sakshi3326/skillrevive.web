import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Mar 10, 2024"
          text="Riva128's groundbreaking contribution to NVIDIA's evolution as an industry leader."
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Mar 10, 2024"
          text="From humble beginnings to billionaire status: Google's remarkable story."
        />
        <Article
          imgUrl={blog03}
          date="Mar 10, 2024"
          text="The journey of Porter, a business model inspired by Ola, as it surged to a $500 million valuation."
        />
        <Article
          imgUrl={blog04}
          date="Mar 10, 2024"
          text="The rationale for backing startups in this forward-thinking nation."
        />
        <Article
          imgUrl={blog05}
          date="Mar 10, 2024"
          text="Prioritizing skills over degrees: Which holds more importance?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
