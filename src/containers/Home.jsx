import React from "react";
import { connect } from "react-redux";

import ItemCard from "components/ItemCard";
import SkeltonCard from "components/SkeltonCard";
import SearchMinus from "assets/svg/SearchMinus";

const Home = props => {
  let { items, itemsApiInProgress } = props;

  return (
    <div className="Home">
      {items.length ? (
        <div className="center Home_body_container">
          {itemsApiInProgress ? (
            <div
              className="MatchesList"
              style={{ paddingBottom: 10 }}
              key={new Date()}
            >
              <SkeltonCard />
            </div>
          ) : (
            items.map((item, index) => <ItemCard item={item} key={index} />)
          )}
        </div>
      ) : (
        <div className="Home_noResult">
          <SearchMinus />
          <h4 className="title">No result found</h4>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loadState,
    items: state.itemsReducer.items,
    itemsApiInProgress: state.itemsReducer.itemsApiInProgress
  };
};
export default connect(mapStateToProps)(Home);
