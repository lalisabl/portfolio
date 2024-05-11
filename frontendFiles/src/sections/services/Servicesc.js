import './services.css';
import data from './data';
import Card from '../../components/Card';

const services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <p>
        I am committed to delivering the highest quality in all the services
        listed below
      </p>
      <div className="container services__container">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default services;
