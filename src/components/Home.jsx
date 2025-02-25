export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center snap-start"
    >
      <h1 className="text-4xl font-bold text-green-700">
        Hi, I'm Reece Matthews
      </h1>
      <p className="text-lg mt-4">
        A Passionate Software Developer with a Background in Engineering &
        Design.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-2 bg-purple-600 text-white rounded-lg"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-2 bg-green-600 text-white rounded-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
