"use client";

import ErrorMain from "@/components/error-404/ErrorMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <html>
        <body>
          <Wrapper>
            <main>
              <ErrorMain />
            </main>
          </Wrapper>
        </body>
      </html>
    </>
  );
};

export default ErrorPage;
