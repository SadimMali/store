import { Icon } from "@iconify/react";

type Feature = { heading: string; desc: string; icon: string };

const features: Array<Feature> = [
  {
    heading: "Free Shipping",
    desc: "On orders over $100",
    icon: "ion:cart-outline",
  },
  {
    heading: "Secure Packaging",
    desc: "Safe & secure delivery",
    icon: "ph:package-light",
  },
  {
    heading: "30 Days return",
    desc: "Easy returns & refunds",
    icon: "solar:refresh-bold",
  },
  {
    heading: "24/7 Support",
    desc: "Customer service",
    icon: "svg-spinners:clock",
  },
];
const Features = () => {
  return (
    <div className="py-12 bg-muted">
      <div className="container px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ic">
        {features.map((feature: Feature, index) => (
          <div
            className="flex items-center md:justify-center space-x-4 pt-6 "
            key={index}
          >
            {/* icon */}
            <Icon icon={feature.icon} width="50" height="50" />
            <div>
              <h3 className="font-semibold">{feature.heading}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
