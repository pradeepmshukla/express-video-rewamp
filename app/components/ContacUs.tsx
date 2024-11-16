"use client";

const ContactUs = () => {
  return (
    <div className="wrapper contact-us">
      <div className="contac-section">
        <div className="inner-section">
          <h2 className="title">ENQUIRY FORM</h2>
          <p>
            Do you wanna create and see,how ananimation video can help you stand
            out from your competitors
          </p>
          <h3 className="sub-title">DON’T HESITATE TO CONTACT US!</h3>
        </div>
        <div className="form-section">
          <form action="#" className="contFrm" method="POST">
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  className="inptFld"
                  required
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Last Name"
                  className="inptFld"
                  required
                />
              </div>

              <div className="col-sm-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="inptFld"
                  required
                />
              </div>

              <div className="col-sm-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact"
                  className="inptFld"
                  required
                />
              </div>

              <div className="col-sm-6">
                <input
                  type="text"
                  name="sub"
                  placeholder="Service Requirement*"
                  className="inptFld"
                  required
                />
                </div>
                <div className="col-sm-6">
                <input
                  type="text"
                  name="sub"
                  placeholder="Reference Video*"
                  className="inptFld"
                  required
                />
              </div>

              <div className="col-12">
                <textarea
                  className="inptFld"
                  placeholder="Your Message..."
                  required
                ></textarea>
              </div>

              <div className="col-12 text-center">
                <input
                  type="submit"
                  name="submit"
                  value="SUBMIT"
                  className="schedule-btn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
