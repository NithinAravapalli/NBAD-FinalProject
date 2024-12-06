import React from "react";

const Dashboard = () => {
  return (
    <div
      role="main"
      aria-labelledby="dashboard-title"
      aria-describedby="dashboard-description"
      className="min-h-screen p-6"
    >
      {/* Dashboard Header */}
      <h1
        id="dashboard-title"
        className="yuji-mai-regular text-3xl text-green-400 p-3 text-center"
      >
        Recent Innovations in Generative AI from the Last 6 Months
      </h1>

      {/* Dashboard Content */}
      <article
        id="dashboard-description"
        className="text-justify-center p-10 custom-box font-serif text-xl"
      >
        <p>
          In the past six months, significant innovations in generative AI have
          emerged, enhancing capabilities in various domains.
        </p>

        <section aria-labelledby="deepai-section">
          <h2 id="deepai-section" className="text-2xl font-bold mt-6">
            Key Highlights:
          </h2>
          <ul className="list-decimal pl-8">
            <li>
              <p>
                DeepAI released updates to ChatGPT, improving context retention
                and enabling multi-modal inputs that seamlessly integrate text,
                images, and sound. This broadens the scope for creative
                applications. Google introduced advancements in its Bard
                language model, emphasizing real-time data processing and
                interactive conversations.
              </p>
            </li>
            <li>
              <p>
                Stability AI launched Stable Diffusion, a powerful image
                generation tool that allows users to create high-quality
                artworks from textual prompts. Companies like Runway and NVIDIA
                unveiled generative AI tools for video editing, enabling users
                to manipulate scenes and create realistic animations
                effortlessly.
              </p>
            </li>
            <li>
              <p>
                In ethical AI, initiatives focusing on bias reduction and
                transparency in generated content gained traction, fostering a
                responsible AI ecosystem.
              </p>
            </li>
            <li>
              <p>
                These advancements push the boundaries of creativity while
                sparking conversations about generative AI's societal
                implications, such as misinformation, copyright concerns, and
                the future of work.
              </p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="links-section" className="mt-8">
          <h2 id="links-section" className="text-2xl font-bold">
            Learn More:
          </h2>
          <p>Follow the links below to explore these innovations further:</p>
          <ul className="list-none flex flex-wrap gap-4 mt-4">
            <li>
              <a
                href="https://techcrunch.com/"
                className="underline text-blue-500 focus:outline focus:ring focus:ring-blue-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit TechCrunch for more information"
              >
                TechCrunch
              </a>
            </li>
            <li>
              <a
                href="https://www.theverge.com/"
                className="underline text-blue-500 focus:outline focus:ring focus:ring-blue-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit The Verge for more information"
              >
                The Verge
              </a>
            </li>
            <li>
              <a
                href="https://www.wired.com/"
                className="underline text-blue-500 focus:outline focus:ring focus:ring-blue-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Wired for more information"
              >
                Wired
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="techstack-section" className="mt-8">
          <h2 id="techstack-section" className="text-2xl font-bold">
            Tech Stack:
          </h2>
          <p>
            The technologies used in this project include:
            <ul className="list-disc pl-8 mt-2">
              <li>Frontend: ReactJS, TailwindCSS, Chart.js</li>
              <li>Backend: Spring Boot, MongoDB, JWT, Node.js</li>
            </ul>
          </p>
        </section>
      </article>
    </div>
  );
};

export default Dashboard;
