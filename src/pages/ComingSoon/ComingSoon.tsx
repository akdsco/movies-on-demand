import React from "react";
import { PageWrapper } from "../../components";

export const ComingSoon: React.FC<{ pageName: string }> = ({ pageName }) => {
  return <PageWrapper>{pageName} coming soon</PageWrapper>;
};
