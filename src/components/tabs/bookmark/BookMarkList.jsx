import PropTypes from 'prop-types';
import React from 'react';

import classNames from 'classnames';
import { useFetchBookMarkShopList } from '../../../hooks/bookmark';
import '../../../styles/tabs/BookMarkList.css';

function BookMarkList() {
  const [bookMarkListItems, isLoading, error] = useFetchBookMarkShopList();

  if (isLoading) return <div>로딩중</div>;

  if (error) return <div>에러발생</div>;

  if (bookMarkListItems !== null)
    return (
      <div className="bookmark-list-container">
        {bookMarkListItems.map((item) => (
          <BookMarkListItem key={item.shopName} shop={item} />
        ))}
      </div>
    );
}

const BookMarkListItem = ({ shop }) => {
  const { shopName, description, distance, tag, reviewCount, open } = shop;
  return (
    <div className="item-container">
      <section className="info-container">
        <div className="title">
          <span id="name">{shopName}</span>
          <span id="open" className={classNames({ opened: open })}>
            영업중
          </span>
        </div>
        <span id="description">{description}</span>
        <div className="subinfo">
          <span id="distance">{distance}M</span>
          <span id="review">후기{reviewCount}</span>
        </div>
        <div className="tag-container">
          {tag.map((item) => (
            <span id="tag" key={item}>
              #{item}
            </span>
          ))}
        </div>
      </section>
      <div className="img"></div>
    </div>
  );
};

BookMarkListItem.propTypes = {
  shop: PropTypes.shape({
    shopName: PropTypes.string,
    description: PropTypes.string,
    distance: PropTypes.number,
    reviewCount: PropTypes.number,
    tag: PropTypes.arrayOf(PropTypes.string),
    open: PropTypes.bool,
  }),
};

export default BookMarkList;
