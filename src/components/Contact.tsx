const Contact = () => {
  return (
    <section id="contact" className="bg-milk scroll-mt-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">Contact Me</h2>

          <div className="flex flex-col mb-6 items-center text-lg">
            <p className="font-medium">
              Interested in working together or just saying hello?
            </p>
            <p className="font-light">
              Feel free to reach out — I'll get back to you as soon as I can!
            </p>
          </div>

          <form
            className="flex flex-col gap-4 w-full max-w-[300px] sm:max-w-[400px]"
            action="https://formspree.io/f/xnjqjbpo"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="bg-white border border-gray-300 px-4 py-2 rounded-md"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="bg-white border border-gray-300 px-4 py-2 rounded-md"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              required
              className="bg-white border border-gray-300 px-4 py-2 rounded-md"
            />

            <button
              type="submit"
              className="bg-gray-blue text-milk py-2 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-orange-500 hover:scale-[1.02]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
