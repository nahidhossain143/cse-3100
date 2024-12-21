import './Donate.css'; // Ensure this is linked properly to your project

const Donate = () => {
  return (
    <div className="donate-container container mt-5">
      <h2 className="donate-header">Donate to Purrfect Adoption</h2>
      <p className="donate-description">
        Your support helps us provide food, shelter, and medical care for cats in need. Every contribution makes a difference!
      </p>
      <div className="donate-logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/68/BKash_logo.svg/225px-BKash_logo.svg.png" // Replace with your actual Bkash logo URL
          alt="Bkash Logo"
          className="bkash-logo"
        />
      </div>
      <a
        href="https://www.bkash.com" // Replace with the correct Bkash donation link
        className="btn btn-donate"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate via Bkash
      </a>
    </div>
  );
};

export default Donate;
