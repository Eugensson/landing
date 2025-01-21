import { PricingCard, PricingTier } from "@/components/pricing-card";

import { pricingTiers } from "@/constants";

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-5xl">
        <div className="section-heading mb-10">
          <h2 className="section-title mb-5">Pricing</h2>
          <p className="section-description">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <ul className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-center gap-6">
          {pricingTiers.map((tier: PricingTier) => (
            <li key={tier.title}>
              <PricingCard tier={tier} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
