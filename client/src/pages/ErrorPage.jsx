import { useRouteError } from "react-router-dom";
import "./css/ErrorPage.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. Please rerun the application using the link.</p>
      <h3>
        Reason for Error:
      </h3>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}