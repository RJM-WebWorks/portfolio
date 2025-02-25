export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center snap-start bg-white"
    >
      <h2 className="text-3xl font-semibold text-purple-700">Contact</h2>
      <p className="mt-4">Feel free to reach out via email or LinkedIn.</p>
      <div className="mt-4">
        <a href="mailto:rjmatthews97@hotmail.com" className="text-green-600">
          Email Me
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/reece-matthews-835560207"
          className="text-purple-600"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
