import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <Card
          name="Aliyev Baxtiyor"
          description="A Software Engineer who has developed countless innovative solutions."
          image="/images/hero.JPG"
        />
      </section>
    </>
  );
}

export default App;
