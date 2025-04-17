function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[#0a0a0a] text-[#f3f4f6] flex h-[90vh] flex-col items-center justify-start w-[100%] p-3 rem"
      >
        <h1>Contact Me</h1>
        <div class="social">
          <ul>
            <li>
              <h5>Email: gchand05@me.com</h5>
            </li>
            <li>
              <a href="https://github.com/GarethChandler">
                <img
                  src="https://img.shields.io/badge/-0077B5?logo=Github&logoColor=ffffff&color=000000"
                  alt="Github logo"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gchand05">
                <img
                  src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=ffffff&color=000000                    "
                  alt="LinkedIn logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Contact;
