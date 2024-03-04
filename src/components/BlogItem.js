import moment from "moment";
import {HASH_NODE_BLOG_BASE_URL} from "../utils/StaticConstant";
import {FaCalendarAlt} from "react-icons/all";
import {Image} from "react-bootstrap";

function BlogItem({post, index}) {
  function formatDate(dateAdded) {
    return moment(dateAdded).format("MMM D, YYYY");
  }

  return (
    <div className="experience-card" key={index}>
      <Image src={post.coverImage} height={300} width={"100%"}/>
      <div className="experience-container">
        <h4 className="mt-4"><b>{post.title}</b></h4>
        <p><FaCalendarAlt/> {formatDate(post.dateAdded)}</p>
        <p>{post.brief}</p>
        <a href={`${HASH_NODE_BLOG_BASE_URL}/${post.slug}`}
           className="btn btn-sm btn-link btn-outline-info float-end">Read More....</a>
      </div>
    </div>
  )
}

export default BlogItem;
