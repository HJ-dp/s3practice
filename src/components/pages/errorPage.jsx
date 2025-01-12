import { Link } from "react-router-dom";
import { PageURL } from "../../router/pageURL";

function ErrorPage() {
  return (
    <div>
      <div>그런 페이지는 존재하지 않아요</div>
      <Link to={PageURL.Main}>돌아가기</Link>
    </div>
  );
}

export default ErrorPage;
