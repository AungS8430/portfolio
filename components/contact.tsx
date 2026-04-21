import Link from "next/link";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    if (email.length > 255) {
      alert("Email must be 255 characters or fewer");
      return;
    }
    if (!name || name.trim().length === 0) {
      alert("Please enter your name");
      return;
    }
    if (name.length > 255) {
      alert("Name must be 255 characters or fewer");
      return;
    }
    if (!message || message.trim().length === 0) {
      alert("Please enter a message");
      return;
    }
    if (message.length > 1000) {
      alert("Message must be 1000 characters or fewer");
      return;
    }

    fetch("/api/v1/sendMessage", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    })
    .then((res) => {
      if (res.ok) {
          form.reset();
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    })
    .catch((err) => {
      alert(err);
    });
  }


  return (
    <div className="relative flex flex-col gap-4 py-24 px-4 md:px-24">
      <h3 className="font-sans text-xl">Contact</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="email" name="email" maxLength={255} placeholder="Email Address" className="bg-foreground/90 text-background p-2 font-sans focus:outline-none focus:ring-0" />
        <input type="text" name="name" maxLength={255} placeholder="Name" className="bg-foreground/90 text-background p-2 font-sans focus:outline-none focus:ring-0" />
        <textarea name="message" maxLength={1000} placeholder="Message" className="bg-foreground/90 text-background p-2 font-sans h-24 focus:outline-none focus:ring-0" />
        <button type="submit" className="bg-foreground/70 hover:bg-foreground/60 transition-colors text-background p-2 font-sans">Send</button>
      </form>
      <p className="font-sans">Or alternatively, send an email to <Link className="text-foreground/80 hover:text-foreground/60 transition-colors font-semibold" href="mailto:contact@aungs.dev">contact@aungs.dev</Link>.</p>
    </div>
  )
}