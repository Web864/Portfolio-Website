import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  return (
    <div>
      <SectionTitle title="Contact" subtitle="Let’s work together" />
      <form
        className="max-w-xl space-y-4"
        method="POST"
        action="https://formspree.io/f/your-id" // replace with your Formspree endpoint
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2"
          />
        </div>
        <button className="rounded-2xl border px-5 py-2.5 font-medium hover:shadow border-neutral-300 dark:border-neutral-700">
          Send
        </button>
      </form>
    </div>
  );
}
