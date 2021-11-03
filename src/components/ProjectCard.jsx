import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectCard = (props) => {
  const { image, title, tech } = props;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const skewSetter = gsap.quickSetter(".card", "skewY", "deg");
    const proxy = { skew: 0 };

    ScrollTrigger.create({
      onUpdate: (self) => {
        const skew = self.getVelocity() / -3000;

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 1,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    gsap.set(".card", { transformOrigin: "left center", force3D: true });
  }, []);
  return (
    <div
      className={`card w-full h-1/3 mb-20 bg-project-${image} bg-cover bg-center`}
    >
      <div className="flex h-full w-full px-10 backdrop-filter backdrop-brightness-50">
        <div className="self-end w-full mb-14">
          <h1 className="font-header text-3xl text-white">{title}</h1>
          <hr className="text-primary border-t-4" />
          <span className="text-white text-xl font-body float-right">
            {tech.join([" | "])}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
