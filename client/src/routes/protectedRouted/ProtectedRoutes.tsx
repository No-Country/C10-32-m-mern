import { Component } from "react";
import { Outlet } from "react-router-dom";

export const ProtectedRoute = (children:any) => {
  return children ? children : <Outlet />;
};  // end ProtectedRoute