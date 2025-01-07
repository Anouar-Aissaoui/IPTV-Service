import { IPTVDefinition } from "@/components/seo/IPTVDefinition";
import { IPTVExplanation } from "@/components/seo/IPTVExplanation";
import { IPTVBenefits } from "@/components/seo/IPTVBenefits";

export const HomeInfo = () => {
  return (
    <>
      <IPTVDefinition />
      <IPTVExplanation />
      <IPTVBenefits />
    </>
  );
};