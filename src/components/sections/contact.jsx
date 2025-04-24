function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[#353B3C] text-[#f3f4f6] h-[90vh] w-[100%] px-20 flex flex-col justify-between"
        // className="bg-[#353B3C] text-[#f3f4f6] flex h-[90vh] flex-col items-start justify-start w-[100%] p-3 rem"
      >
        <div>
          <h1 className="text-left">Gareth Chandler</h1>
          <ul>
            <li>
              <h5 className="text-left">Email: gchand05@me.com</h5>
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
        </div>
        <p className="text-left text-xl mb-10">Made with React and VS Code</p>
      </section>
    </>
  );
}

export default Contact;
