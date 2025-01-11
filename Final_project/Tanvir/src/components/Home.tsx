import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ContentSection from './ContentSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <ContentSection />
      <Footer />
    </div>
  );
};

export default HomePage;