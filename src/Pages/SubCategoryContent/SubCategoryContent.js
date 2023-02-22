import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Shared/Loader/Loader.css";
import "./Content.css"

const SubCategoryContent = () => {
  const { slug } = useParams();
  const [content, seContent] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      await axios
        .get(`http://localhost:5000/sub-category/${slug}`)
        .then((res) => seContent(res.data));
      setLoading(false);
    };
    dataFetch();
  }, [slug]);
  if (loading) {
    return <div className="dots-3 top-0 bottom-0 left-0 right-0 m-auto"></div>;
  }
  const { subcategory, description } = content;
  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl mb-5">{subcategory}</h2>
      <div dangerouslySetInnerHTML={{__html: description}}></div>
    </div>
  );
};

export default SubCategoryContent;
