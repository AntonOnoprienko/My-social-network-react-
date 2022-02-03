import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForNavigator = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthNavigator = (Component) => {
  class NavigateComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate replace to="/login" />;
      return <Component {...this.props} />;
    }
  }
  let ConnectedNavigateWrapperComponent = connect(mapStateToPropsForNavigator)(
    NavigateComponent
  );
  return ConnectedNavigateWrapperComponent;
};
