import { Footer } from "../../Nav/Footer/Footer";
import NavLinks from "../../Nav/NavLinks";

export default function Blogs() {
  return (
    <div className="container">
      <NavLinks />
      <div>
        <h1 style={{ fontWeight: "lighter" }}>Blogs.</h1>
      </div>
      <div className="Blogs-container">
        <h1 style={{ fontWeight: "lighter" }}>Nothing to see here...yet</h1>
      </div>
      <Footer />
    </div>
  );
}
