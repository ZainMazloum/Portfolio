
import { BsEnvelopeAt } from "react-icons/bs";
import { FaWhatsapp , FaTelegram } from "react-icons/fa";

type ContactItem = {
  id: number;
  icon: React.ReactNode;
  title: string;
  info: string;
  href?: string;
  dataAos?: string;
  delay?: string;
};

const ContactData: ContactItem[] = [
  {
    id: 1,
    icon: <BsEnvelopeAt />,
    title: "Email",
    info: "zanemazlom@gmail.com",
    href: "mailto:zanemazlom@gmail.com",
    dataAos: "fade-up",
    delay: "100",
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    info: "+963994042386",
    // use wa.me link for direct chat; ensure phone is in international format without plus when used in wa.me
    href: "https://wa.me/963994042386",
    dataAos: "fade-up",
    delay: "300",
  },
   {
    id: 3,
    icon: <FaTelegram />,
    title: "Telegram",
    info: "+963994042386",
    href: "https://t.me/963994042386",
    dataAos: "fade-up",
    delay: "500",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
    <div className="text-center mb-12">
    <h5
      className="text-indigo-400 uppercase tracking-wide text-sm mb-2"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Get In Touch
    </h5>
    <h2
      className="text-3xl md:text-4xl font-bold"
      data-aos="fade-up"
      data-aos-delay="200"
    >
     Contact Me
    </h2>
  </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: contact methods */}
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            {ContactData.map((c) => (
              <article
                key={c.id}
                data-aos={c.dataAos}
                data-aos-delay={c.delay}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/80 shadow-md"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-md bg-indigo-600 text-white text-2xl">
                  {c.icon}
                </div>

                <div className="flex-1">
                  <h3 id={`contact-${c.id}-title`} className="font-semibold">
                    {c.title}
                  </h3>
                  <p className="text-gray-300">{c.info}</p>
                </div>

                <div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      aria-label={`${c.title} (opens in a new tab)`}
                      className="flex items-center px-3 py-2 rounded-md bg-white/6 hover:bg-white/12 transition text-sm"
                    >
                      Send
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>


        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-gray-800/80 rounded-lg p-6 shadow-md"
        >

          <form
            action="https://formsubmit.co/zanemazlom@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/" />

            <label className="flex flex-col text-sm">
              <span className="mb-1 text-gray-300">Your Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Your name"
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="mb-1 text-gray-300">Your Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="JohnDoe@example.com"
                className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Your email"
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="mb-1 text-gray-300">Message</span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                aria-label="Your message"
              />
            </label>
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-3 w-fit cursor-pointer rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;