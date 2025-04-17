function Projects() {
  const projects = [
    {
      courseName: "Backend Development",
      imageUrl:
        "../src/assets/database-computer-system-digital-storage-concept_53876-123742.jpg",
      description:
        "This course will cover the fundamentals of backend development and the MERN stack.",
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
              className="bg-[#0a0a0a] text-[#f3f4f6] p-4 rounded-4xl shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.courseName}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold mt-2">{project.courseName}</h2>
              <p className="mt-2">{project.description}</p>
              <p className="mt-2">Time to complete: {project.timeToComplete}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
