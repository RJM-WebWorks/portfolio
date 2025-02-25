const projects = [
  {
    title: "Cat Clicker",
    description:
      "An interactive idling game created using React. Collect cat treats and recruit cats to gain more treats.",
    liveLink: "https://cat-clicker-xrs7.onrender.com/",
    githubLink: "https://github.com/RJM-WebWorks/cat-clicker",
    image: "cat-clicker.webp",
  },
  {
    title: "Quiz Quest",
    description:
      "A full-stack web app, using vanilla JavaScript, HTML, CSS, an Express server, and a database to create a trivia quiz game.",
    liveLink: "https://quiz-quest-game-client.onrender.com/",
    githubLink: "https://github.com/Angelica2310/quiz-quest-game",
    image: "quiz-quest.webp",
  },
  {
    title: "VillainHub",
    description:
      "A full-stack social network app using Next.js and Clerk for villains to share their evil deeds.",
    liveLink: "https://villainhub.vercel.app/",
    githubLink: "https://github.com/RJM-WebWorks/villianhub",
    image: "villainhub.webp",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex flex-col justify-center items-center snap-start bg-white"
    >
      <h2 className="text-3xl font-semibold text-purple-700 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-4/5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain group-hover:opacity-30 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 text-center">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="px-4 py-2 bg-green-600 rounded"
                >
                  Live Site
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="px-4 py-2 bg-purple-600 rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
