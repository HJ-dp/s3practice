import { Link } from "react-router-dom";
import { PageURL } from "../../router/pageURL";

function mainPage() {
  return (
    <div>
      <div>main</div>
      <Link to={PageURL.Error404}>버튼</Link>
    </div>
  );
}

export default mainPage;
