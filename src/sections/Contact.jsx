import { useState } from "react";
import GlassButton from "../components/GlassButton";

const Contact = () => {
const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    const data = await res.json();
    console.log("API RESPONSE:", data);

    if (data.success) {
      setStatus("success");
      setMessage("Message sent successfully!");
      
      // Optional: reset form
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } else {
      setStatus("error");
      setMessage(data.error || "Something went wrong");
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
    setMessage("Server error. Please try again later.");
  }
};



  return (
    <section id="contact" className="py-section">
      <div className="max-w-layout mx-auto px-6">
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            bg-gradient-to-br from-[#0b2230] via-[#07151e] to-[#040b10]
            border border-[#13b4fd]/30
            p-10 md:p-14
          "
        >
          <div
            className="
              absolute top-0 left-0
              w-[150px] h-[150px]
              bg-[#13b4fd]
              opacity-100
              blur-[100px]
              pointer-events-none
            "
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Get Ready To <br /> Create Great
              </h2>

              <div className="mt-10 space-y-6 text-gray-300 text-sm">
                <div>
                  <p className="font-semibold text-white">E-mail:</p>
                  <p>nafi2125@gmail.com</p>
                </div>

                <div>
                  <p className="font-semibold text-white">Location:</p>
                  <p>3891 Ranchview Dr. Richardson</p>
                </div>

                <div>
                  <p className="font-semibold text-white">Contact:</p>
                  <p>01245789321</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-primary uppercase text-xl font-bold tracking-widest mb-6">
                Get in Touch
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="contact-input"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="contact-input"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="contact-input"
                />

                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="contact-input md:col-span-2 resize-none"
                />

                <div className="md:col-span-2 mt-4">
                  <GlassButton>Submit</GlassButton>
                </div>
                {status === "loading" && (
  <p className="mt-4 text-blue-400">Sending message...</p>
)}

{status === "success" && (
  <p className="mt-4 text-green-400">{message}</p>
)}

{status === "error" && (
  <p className="mt-4 text-red-400">{message}</p>
)}

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;