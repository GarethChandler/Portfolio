import javaImg from "../../assets/Java/Screenshot 2023-05-03 163616.png";

function Projects() {
  const projects = [
    {
      courseName: "Java Crypto Tax Application",
      imageUrl: javaImg,
      description:
        "This program has three classes, takes in user input and calculates crypto capital gains tax. \nIt uses arrays, can add, show, delete user details or investments. Prints to file. \nMark: 97% HD.",
      timeToComplete: "50 hrs",
    },
    {
      courseName: "Frontend Development",
      imageUrl:
        "../src/assets/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg",
      description:
        "This course will cover the fundamentals of frontend development using the React.",
      timeToComplete: "65 hrs",
    },
    {
      courseName: "Worm Farm Management",
      imageUrl:
        "../src/assets/gardening-youtube-template-design_23-2149547764.jpg",
      description: "Learn how to build, care and feed your hobby worm farm.",
      timeToComplete: "10 hrs",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="flex flex-col items-center justify-start p-10 rem mt-25 mb-84"
      >
        <h1>Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#846A6A] text-[#f3f4f6] rounded-4xl shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.courseName}
                className="w-full h-48 object-cover rounded-t-4xl"
              />
              <h2 className="text-xl font-bold m-5 group-hover:scale-105 transition-transform duration-300">
                {project.courseName}
              </h2>
              <p className="m-10 group-hover:scale-105 transition-transform duration-300">
                {project.description}
              </p>
              <p className="m-10 mb-5 group-hover:scale-105 transition-transform duration-300">
                Time to complete: {project.timeToComplete}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
