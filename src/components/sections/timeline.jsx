function Timeline() {
  const milestones = [
    {
      title: "New Role, IT Business & System Analyst",
      date: "2024",
      description: "Moved into the warehouse team as an analyst",
    },
    {
      title: "Big yellow trucks 🚀",
      date: "2023",
      description: "Started work at WesTrac CAT as an analyst",
    },
    {
      title: "IT",
      date: "2022",
      description: "Went back to uni to study a Post Grad in IT",
    },
    {
      title: "My daughter was born",
      date: "2014",
      description: "Dad for a second time",
    },
    {
      title: "per effectus",
      date: "2014",
      description:
        "Joined NSW Amulance Special Operations Unit as a Rescue Operator. Got to work with some of my favourite humans I have ever met.",
    },
    {
      title: "My son was born",
      date: "2011",
      description: "Dad for the first time",
    },
    {
      title: "Moved to Newy",
      date: "2009",
      description: "Wife went back to Uni. I got a job at Hamilton",
    },
    {
      title: "Moved to the chilblains ❄️",
      date: "2008",
      description:
        "Moved to Blayney as a Paramedic, out past Bathurst. Snowed the first week we were there. Got to live with my wife again.",
    },
    {
      title: "Joined the Ambulance Service of NSW",
      date: "2006",
      description:
        "Got a real job! Was sent to Sydney for 12 months, away from my wife. ",
    },
    {
      title: "Got Married!",
      date: "2005",
      description:
        "Married my beautiful wife. Second best decision of my life.",
    },
    {
      title: "Went to University",
      date: "2002",
      description:
        "Moved to Bathurst, NSW, and studied Paramedicine with my best mate.",
    },
    {
      title: "Quit the Army",
      date: "2002",
      description:
        "I was a pretty good soldier, but I wanted to help people, not shoot them.",
    },
    {
      title: "Became a choco",
      date: "2001",
      description:
        "Join the Army Reserve. Served at Taree Barracks for the 41st Battalion, Royal New South Wales Regiment.",
    },
    {
      title: "Became a christian",
      date: "1999",
      description: "Best decision of my life!",
    },
    {
      title: "High School",
      date: "1995",
      description: "Wingham High School, Wingham, NSW, Australia",
    },
    {
      title: "Primary School",
      date: "1988",
      description: "Wingham Public School, Wingham, NSW, Australia",
    },
    {
      title: "Born",
      date: "1983",
      description: "Taree, NSW, Australia",
    },
  ];

  return (
    <div id="timeline" className="flex justify-center">
      <div className="w-2/5">
        <h1 className="text-center text-2xl font-bold mt-10 mb-8">Timeline</h1>
        <div className="relative">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center mb-12 relative">
              {/* Dot */}
              <div className="w-4 h-4 bg-[#8093F1] rounded-full absolute left-2 top-1/2 transform -translate-y-1/2"></div>

              {/* Connecting Line */}
              {index !== milestones.length - 1 && (
                <div className="absolute left-3 top-full h-11 w-1 bg-[#8093F1]"></div>
              )}

              {/* Text Content */}
              <div className="ml-8 text-left">
                <h3 className="text-lg font-semibold">{milestone.title}</h3>
                <p className="text-sm text-gray-500">{milestone.date}</p>
                <p className="text-gray-700">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Timeline;
