/** @format */

import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';
const Services = () => {
  return (
    <section className="padding-x py-10">
      <div className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
