
import { useState } from "react";
import { ArrowRight, MessageSquare, Moon, Search, ShieldAlert, ShieldCheck, ShoppingBag, Star, Store, Sun } from "lucide-react";
import "./App.css";
const reviews = [
  {
    name: "Wireless Headphones",
    seller: "SoundHouse",
    rating: 5,
    label: "Positive experience",
    color: "positive",
    text: "The product matched the description and arrived on time.",
    date: "2 hours ago",
  },
  {
    name: "Everyday Backpack",
    seller: "UrbanTrail",
    rating: 3,
    label: "Mixed experience",
    color: "mixed",
    text: "Good quality, but delivery took longer than expected.",
    date: "5 hours ago",
  },
  {
    name: "Smart Watch",
    seller: "TechCorner",
    rating: 1,
    label: "Concern reported",
    color: "concern",
    text: "My experience did not match what I expected from the listing.",
    date: "Yesterday",
  },
];

function App() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [showResearchInfo, setShowResearchInfo] = useState(false);
  const visibleReviews = reviews.filter((review) => {
    const matchesQuery =
      `${review.name} ${review.seller}`
        .toLowerCase()
        .includes(query.toLowerCase());

    return matchesQuery && (filter === "All" || filter === "Products");
  });

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="navbar">
        <a className="brand" href="#" aria-label="ScamShield home">
          <span className="brand-icon">
            <ShieldCheck size={25} />
          </span>
          <span>Scam<span className="brand-accent">Shield</span></span>
        </a>

        <nav className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#reviews">Reviews</a>
          <a href="#reviews">About</a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <a className="sign-in" href="#account">Sign in</a>
          <a className="button button-small" href="#reviews">
            Join ScamShield
          </a>
        </div>
      </header>

      <main>
       <section className="hero" id="home">
  <div className="hero-content">
    <h1>
      <span>SHOP WITH MORE CONFIDENCE</span>
    </h1>
    <p className="hero-description">
      Real shopping experiences from a community that
      helps you make more informed decisions online.
    </p>

    <form
      className="search-bar"
      onSubmit={(event) => {
        event.preventDefault();
        document.getElementById("explore")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <Search size={21} />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search products or sellers..."
        aria-label="Search products or sellers"
      />
      <button className="button search-button" type="submit">
        Search
      </button>
    </form>

    <div className="hero-note">
      <ShieldCheck size={16} />
      Community experiences, transparent information.
    </div>
  </div>

  <div className="hero-visual" aria-hidden="true">
    <div className="visual-circle circle-one" />
    <div className="visual-circle circle-two" />
    <div className="orbit" />
    <div className="shield-illustration">
      <ShieldCheck size={105} strokeWidth={1.35} />
    </div>
  </div>
</section>

        <section className="feature-strip" aria-label="How ScamShield helps">
          <div className="feature">
            <span className="feature-icon"><ShoppingBag size={21} /></span>
            <div>
              <strong>Explore products</strong>
              <p>Find shared shopping experiences.</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon"><Store size={21} /></span>
            <div>
              <strong>Research sellers</strong>
              <p>Learn what others have reported.</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon"><MessageSquare size={21} /></span>
            <div>
              <strong>Share your experience</strong>
              <p>Help other shoppers make decisions.</p>
            </div>
          </div>
        </section>

        <section className="reviews-section" id="explore">
          <div className="section-heading">
            <div>
              <span className="section-kicker">COMMUNITY VOICES</span>
              <h2>Explore reviews</h2>
              <p>Learn from experiences shared by other shoppers.</p>
            </div>
            <a className="text-link" href="#reviews">
              Browse reviews <ArrowRight size={17} />
            </a>
          </div>

          <div className="filter-row">
            {["All", "Products", "Sellers"].map((item) => (
              <button
                key={item}
                className={`filter-chip ${filter === item ? "selected" : ""}`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
            <span className="result-count">
              {visibleReviews.length} reviews shown
            </span>
          </div>

          <div className="review-grid" id="reviews">
            {visibleReviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-card-top">
                  <div className="product-icon">
                    <ShoppingBag size={24} />
                  </div>
                  <span className={`status-label ${review.color}`}>
                    {review.label}
                  </span>
                </div>

                <h3>{review.name}</h3>
                <p className="seller-name">Sold by {review.seller}</p>

                <div
                  className="stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={index < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                  <span>{review.rating}.0</span>
                </div>

                <p className="review-text">{review.text}</p>

                <div className="review-card-bottom">
                  <span>{review.date}</span>
                  <span className="community-note">
                    Community report
                  </span>
                </div>
              </article>
            ))}
          </div>

          {visibleReviews.length === 0 && (
            <div className="empty-state">
              <Search size={30} />
              <h3>No matching reviews yet</h3>
              <p>Try another search. A missing review does not prove a product or seller is safe.</p>
            </div>
          )}
        </section>

        <section className="research-banner">
          <div className="research-icon">
            <ShieldAlert size={29} />
          </div>
          <div className="research-copy">
            <h2>Want to look a little deeper?</h2>
            <p>
              ScamShield's planned research feature will help organize
              public sources and community reports so you can investigate further.
            </p>
          </div>
          <button
            className="button research-button"
            onClick={() => setShowResearchInfo(true)
            }
          >
            Research a seller <ArrowRight size={17} />
          </button>
        </section>

        {showResearchInfo && (
          <section className="research-panel">
            <div className="research-panel-header">
              <h2>AI-powered research</h2>
              <button
                className="close-button"
                onClick={() => setShowResearchInfo(false)}
                aria-label="Close research panel"
              >
                ✕
              </button>
            </div>

            <p>
              Want to learn more about this product or seller?
              ScamShield's AI research feature will help you examine
              public sources and identify potential warning signs.
            </p>

            <ul>
              <li>Summaries of information found online</li>
              <li>Links to sources so you can check the information</li>
              <li>Potential concerns and information that is missing</li>
            </ul>

            <p className="research-disclaimer">
              AI research is optional and will only start when you request it.
              Results may be incomplete and do not prove that a seller is
              safe or fraudulent.
            </p>

            <p className="research-coming-soon">
              The live AI research service is not connected yet.
            </p>
          </section>
        )}

        <section className="bottom-cta" id="account">
          <h2>Your experience can help someone shop smarter.</h2>
          <p>Share honest experiences and help build a more informed community.</p>
          <a href="#reviews" className="button">Explore the community</a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <ShieldCheck size={22} />
          <span>Scam<span className="brand-accent">Shield</span></span>
        </a>
        <p>Community experiences. Better-informed shopping.</p>
        <span>© {new Date().getFullYear()} ScamShield</span>
      </footer>
    </div>
  );
}

export default App;
