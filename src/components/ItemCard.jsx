import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import DisLike from "assets/svg/DisLike";
import Like from "assets/svg/Like";
import Bookmark from "assets/svg/Bookmark";
import {
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  addBookmark,
  removeBookmark
} from "redux/actions/user";

// Title, description/article, image and tags
function ItemCard(props) {
  const { item, likes, dislikes, bookmarks, dispatch } = props;
  const history = useHistory();
  let {
    title = "",
    // description = "",
    url = "",
    urlToImage = "",
    publishedAt = "",
    content = "",
    isDetail = false,
    source: { name = "" }
  } = item;

  const isLiked = likes.includes(title),
    isDislikes = dislikes.includes(title),
    isBookmark = bookmarks.includes(title);
  const handleLike = () => {
    if (isLiked) {
      dispatch(removeLike(title));
    } else {
      dispatch(addLike(title));
    }
  };
  const handleDislike = () => {
    if (isDislikes) {
      dispatch(removeDislike(title));
    } else {
      dispatch(addDislike(title));
    }
  };
  const handleBookmark = () => {
    if (isBookmark) {
      dispatch(removeBookmark(title));
    } else {
      dispatch(addBookmark(title));
    }
  };
  // remove conent after ...
  let index = content && content.indexOf("…");
  if (index && index !== -1) {
    content = content.slice(0, index + 1);
  }

  const onClickTitle = () => {
    history.push({ pathname: "/detail", state: { ...item, isDetail: true } });
  };
  return (
    <div className="ItemCard center">
      <div className="ItemCard_detail">
        <h5 className="marginPadding ItemCard_title" onClick={onClickTitle}>
          {title}
        </h5>
        <div>
          <b>Short by </b>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
          {` at ${publishedAt}`}
        </div>
        <div className={`content ${isDetail ? "" : "desc_truncate"}`}>
          {content}
        </div>
        <div className="center ItemCard_actions">
          <div className="item">
            <Like className={isLiked ? "active" : ""} onClick={handleLike} />
          </div>
          <div className="item">
            <DisLike
              className={isDislikes ? "active" : ""}
              onClick={handleDislike}
            />
          </div>
          <div className="item">
            <Bookmark
              className={isBookmark ? "active" : ""}
              onClick={handleBookmark}
            />
          </div>
        </div>
      </div>
      {urlToImage ? (
        <div className="ItemCard_imageView">
          <img src={urlToImage} alt="img" />
        </div>
      ) : (
        void 0
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    likes: state.userReducer.likes,
    dislikes: state.userReducer.dislikes,
    bookmarks: state.userReducer.bookmarks
  };
};
export default connect(mapStateToProps)(ItemCard);
