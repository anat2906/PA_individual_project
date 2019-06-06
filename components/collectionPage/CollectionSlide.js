import React, { Component } from "react";
import CollectionCard from "../collectionCard/CollectionCard";

export default class CollectionSlide extends Component {
  render() {
    return (
      <div className="px-1">
        <CollectionCard {...this.prop} />
      </div>
    );
  }
}
