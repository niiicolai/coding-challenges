import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-12">
        <div
          className="mx-auto flex flex-col gap-6"
          style={{ maxWidth: "60em" }}
        >
          <div>
            <h1 className="text-3xl font-bold mb-6">
              Learn to optimize your code
            </h1>
            <p className="mb-3">
              This is a site where I explore fun ideas for thinking about
              algorithms, not just how to solve problems, but how to think
              better while solving them.
            </p>
            <p className="mb-3">
              Each challenge here starts with a logic puzzle that’s meant to
              engage your brain in a different way. You’ll solve problems
              visually and interactively before moving on to the actual code.
            </p>
            <p>
              These aren’t just for practice, they're for developing intuition.
              Try not to rush. Write down your steps, notice your thought
              process, and when you’re ready, test your approach in code.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Problems:</h2>

            <Link
              to="/challenge/two-sum"
              className="border border-white px-3 py-1 w-full rounded-md cursor-pointer hover:bg-white hover:text-black"
            >
              Two Sum
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Author:</h2>

            <p className="mb-3">
              Hi! My name is Nicolai, a software developer from Denmark. I love
              building things that challenge how we think, especially when it
              comes to code, logic, and interactive design.
            </p>

            <p className="mb-3">
              This site is a small side project meant to make algorithm practice
              feel a bit more fun and intuitive. I'm not making any money from
              it, it's just something I made for fellow curious minds.
            </p>

            <p className="mb-3">
              If you're interested in more of my work or just want to poke
              around a weird little 3D space, check out my interactive website
              at{" "}
              <a
                href="https://www.bergandersen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
              >
                https://www.bergandersen.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
