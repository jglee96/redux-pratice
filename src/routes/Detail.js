import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const params = useParams();
  const detail = toDos.find((toDo) => toDo.id === parseInt(params.id));
  return (
    <>
      <h1>{detail.text}</h1>
      <h5>Created at: {detail.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
