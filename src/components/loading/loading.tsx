import React, { FC } from "react";
import { loadingWrapper } from "./loading.styled";

interface loadingProps {}

const Loading: FC<loadingProps> = () => {
  return <div className="loader"></div>;
};

export default Loading;
