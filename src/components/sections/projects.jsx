import javaImg from "../../assets/Java/Screenshot 2023-05-03 163616.png";
import businessAnal from "../../assets/BA/Screenshot 2023-05-03 165949.png";
import webDev from "../../assets/webDev.png";

function Projects() {
  const projects = [
    {
      courseName: "Java Tax Application",
      imageUrl: javaImg,
      description:
        "This Java application takes users inputs and calculates tax on crypto investments. \nMark: 97% HD.",
    },
    {
      courseName: "Business Analysis",
      imageUrl: businessAnal,
      description:
        "Case Study Assignment.\nProcess Analysis and Problem Solving.\nBusiness Analysis. Mark: 99% HD",
    },
    {
      courseName: "Web Development (Backend)",
      imageUrl: webDev,
      description: "React, Express and MongoDB web app. Mark 100%",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="flex flex-col items-center justify-start p-10 rem mt-10 mb-1"
      >
        <h1>Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#846A6A] text-[#f3f4f6] rounded-4xl shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.courseName}
                className="w-full h-88 object-cover rounded-t-4xl"
              />
              <div className="group-hover:scale-110 transition-transform duration-300">
                <h2 className="text-xl font-bold m-5">{project.courseName}</h2>
                <p className="m-5">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
