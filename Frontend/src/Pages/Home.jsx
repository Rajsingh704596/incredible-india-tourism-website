const Home = () => {
  return (
    <div className="home-page">
      <div className="grid-container">
        <div className="heading-section">
          <h1 className="main-heading">Explore the Wonders of India</h1>
        </div>
        <div className="details-section">
          <div className="detail-item">
            <h2>Rich Culture</h2>
            <p>
              India is known for its diverse cultures, traditions, and festivals.
              From Diwali to Holi, every festival is celebrated with great enthusiasm.
            </p>
          </div>
          <div className="detail-item">
            <h2>Breathtaking Landscapes</h2>
            <p>
              From the Himalayas in the north to the beaches of Goa in the south,
              India offers a variety of stunning landscapes.
            </p>
          </div>
          <div className="detail-item">
            <h2>Vibrant History</h2>
            <p>
              India&apos;s history is rich and vibrant, with ancient monuments like the
              Taj Mahal and Qutub Minar standing as testaments to its glorious past.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;