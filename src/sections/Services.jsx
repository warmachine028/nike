/** @format */

import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';
import './Services.scss';
const Services = () => {
  return (
    <section id="🔥Services">
      <div id="🔥Services__X">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
