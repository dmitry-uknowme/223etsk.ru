import React from "react";

export { Page };

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <>
        <h4>404 Page Not Found</h4>
        <p>This page could not be found.</p>
      </>
    );
  } else {
    return (
      <>
        <h4>500 Internal Server Error</h4>
        <p>Something went wrong.</p>
      </>
    );
  }
}
