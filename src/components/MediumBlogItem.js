import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";


export default function MediumBlogItem({ post, index }) {
  function formatDate(dateAdded) {
    return moment(dateAdded).format("MMM D, YYYY");
  }

  return (
    <div className="experience-card" key={index}>
      {/* <a href={`${post.link}`}>
        <Image src={post.thumbnail} height={300} width={"100%"} />
      </a> */}
      <div className="experience-container">
        <a href={`${post.link}`}
          style={{
            textDecoration: "none"
          }}
        >
          <h4 className="mt-4"><b>{post.title}</b></h4>
        </a>
        <p><FaCalendarAlt /> {formatDate(post.pubDate)}</p>
        <p>{ShortenText(ToText(post.content), 0, 300) + '...'}</p>
      </div>
    </div>
  )
}

export function ToText(node) {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

export function ShortenText(text, startingPoint, maxLength) {
  return text.length > maxLength
    ? text.slice(startingPoint, maxLength)
    : text;
}
