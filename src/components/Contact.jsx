import { useState } from 'react'

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    // استخدمي هنا الـ Access Key الصحيح
    formData.append("access_key", "acf3c1ae-2691-485a-9a86-a2e02964dd04");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then(res => res.json());

      if (res.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setResult("❌ Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div 
      id="contact" 
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

        <input type="hidden" name="subject" value="Doha Emad - New Portfolio Message" />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            required
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
          />
        </div>

        <textarea 
          rows="6" 
          name="message" 
          placeholder="Enter your message" 
          required
          className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
        ></textarea>

        <button 
          type="submit"
          disabled={loading}
          className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
        >
          {loading ? "Sending..." : "Submit now"}
          <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
        </button>

        {result && <p className='mt-4 text-center'>{result}</p>}
      </form>
    </div>
  );
}
