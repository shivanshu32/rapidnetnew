import React from "react";
import Link from "next/link";
import RegisterForm from "@/form/register-form";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

const RegisterArea = () => {
  return (
    <>
      <Breadcrumb title="Sign Up" subTitle="Sign Up" />
      <section className="login__area pt-110 pb-110">
        <div className="container">
          <div className="login__inner p-relative z-index-1">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="login__wrapper">
                  <div className="login__top mb-30 text-center">
                    <h3 className="login__title">Register Now!</h3>
                    <p>You can signup here</p>
                  </div>
                  <div className="login__form">
                    <RegisterForm />
                    <div className="login__register-now">
                      <p>
                        Already have an account?{" "}
                        <Link href="/signin">Sign In</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;
