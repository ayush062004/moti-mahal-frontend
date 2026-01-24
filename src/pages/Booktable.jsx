import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./BookTable.css";

const BookTable = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9tgw82q",
        "template_41rfntp",
        form.current,
        "1pIbfonnl_GJgtPYB"
      )
      .then(
        () => {
          alert("✅ Table booked successfully. Email sent!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Booking failed. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-11">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="text-center fw-bold mb-4">🍽 Book a Table</h2>

              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <input name="name" className="form-control" placeholder="Full Name" required />
                  </div>

                  <div className="col-md-6">
                    <input name="email" type="email" className="form-control" placeholder="Email" required />
                  </div>

                  <div className="col-md-6">
                    <input name="phone" className="form-control" placeholder="Phone" required />
                  </div>

                  <div className="col-md-6">
                    <input name="guests" type="number" className="form-control" placeholder="Guests" required />
                  </div>

                  <div className="col-md-6">
                    <input name="date" type="date" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <input name="time" type="time" className="form-control" required />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="3"
                      placeholder="Special Request"
                    ></textarea>
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button className="btn btn-dark px-5 py-2 rounded-pill">
                      Book Now
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
