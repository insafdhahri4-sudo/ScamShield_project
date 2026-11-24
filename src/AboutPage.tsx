// top of the file: add Link to imports
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// remove the AboutPageProps type, and change the signature to:
function AboutPage() {

// replace the final <button> with:
<Link className="button" to="/#explore">
  Explore reviews <ArrowRight size={17} />
</Link>
}