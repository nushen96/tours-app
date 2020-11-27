import { useState } from "react";
import Tour from "./components/Tour";

function App() {
  const tours = [
    {
      id: 1,
      title: "Tour 1",
      image:
        "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
      price: "32",
      description:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    },
    {
      id: 2,
      title: "Tour 2",
      image:
        "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
      price: "32",
      description:
        "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    },
    {
      id: 3,
      title: "Tour 3",
      image:
        "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
      price: "32",
      description:
        "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
    },
    {
      id: 4,
      title: "Tour 4",
      image:
        "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
      price: "32",
      description:
        "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
    },
  ];
  const [currentTours, setCurrentTours] = useState(tours)
  const [count, setCount] = useState(0)
  const removeFromTours = (e,id) => {
    e.preventDefault();
    setCurrentTours(currentTours.filter(tour => tour.id!==id));
    console.log(currentTours);
  }
  const increment = () => {
    setCount(count+1)
  }
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div className="tours-container">
        {currentTours.map((tour) => (
          <Tour removeFromTours={(event,id) => removeFromTours(event,id)} {...tour} />
        ))}
      </div>
    </div>
  );
}

export default App;
