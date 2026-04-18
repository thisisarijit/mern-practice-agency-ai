import React from "react";
import assets from "../assets/assets";
import Ttitle from "./Ttitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Contetnt marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Ttitle
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index)=>(
            <ServiceCard service={service} index={index} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
