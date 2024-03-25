function Contact() {
  return (
    <section className="container">
      <div className="Contact" id="ContactSection">
        <h5 className="text-muted text-center">Get In Touch</h5>
        <h1 className="text-center" data-aos="flip-up">
          {" "}
          Let’s Talk For your 📱 <span>Next Projects</span>{" "}
        </h1>

        <div class="bg  "></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
      </div>
      <div className=" Contact-Card">
        <div className="card" data-aos="fade-down">
          <div className="card-body">
            <h5 className="card-title">Moustafa Mohamed </h5>
            <p className="card-text"> </p>
          </div>
          <ul className=" ">
            <h3>
              <li className="list-group-item">
                📞 Phone Number <a href="tel:+201110457203">01110457203</a>{" "}
              </li>
            </h3>
            <h3>
              {" "}
              <li className="list-group-item">
                📧 Email{" "}
                <a href="mailto: dev.moustapha@gmail.com">Send Email</a>{" "}
              </li>
            </h3>
            <h3>
              {" "}
              <li className="list-group-item">
                🌐 GitHub{" "}
                <a
                  target="_blank"
                  href="https://github.com/mostafamohamedmostafa"
                >
                  Click Here
                </a>{" "}
              </li>
            </h3>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
