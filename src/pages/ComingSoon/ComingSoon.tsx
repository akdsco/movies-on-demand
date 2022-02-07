import React from "react";
import { MobilePageTitle, PageWrapper } from "../../components";

export const ComingSoon: React.FC<{
  pageName: string;
  setNavMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ pageName, setNavMenuOpen }) => {
  return (
    <PageWrapper>
      <MobilePageTitle title={pageName} setNavMenuOpen={setNavMenuOpen} />
      Coming soon
    </PageWrapper>
  );
};
