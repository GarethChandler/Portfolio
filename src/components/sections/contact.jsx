function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[#353B3C] text-[#f3f4f6] flex h-[90vh] flex-col items-center justify-start w-[100%] p-3 rem"
      >
        <h1>Contact Me</h1>
        <div>
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
                  src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=353B3C&color=000000                    "
                  alt="LinkedIn logo"
                />
              </a>
            </li>
          </ul>
          <p className="mt-auto mb-10% text-center text-2xl">
            Made with React and VS Code
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
