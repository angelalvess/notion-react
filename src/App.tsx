import './App.css';

function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 ">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400"></button>
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w-[700px] mx-auto pt-16 prose">
            <h1>
              Harnessing the Power of Tailwind CSS: Advantages and Benefits
            </h1>

            <p>
              In the ever-evolving landscape of web development, efficiency and
              flexibility are key. Developers constantly seek tools and
              frameworks that streamline their workflow while offering robust
              customization options. One such tool that has gained significant
              traction in recent years is Tailwind CSS. Tailwind CSS is a
              utility-first CSS framework that empowers developers to build
              modern, responsive web interfaces with unparalleled speed and
              flexibility. In this blog post, we'll explore the advantages and
              benefits of using Tailwind CSS in your web development projects.
            </p>

            <h2>What is Tailwind CSS?</h2>

            <p>
              Before diving into its advantages, let's briefly understand what
              Tailwind CSS is all about. Unlike traditional CSS frameworks like
              Bootstrap or Foundation, which come with pre-designed components
              and styles, Tailwind CSS takes a different approach. It provides a
              set of low-level utility classes that you can use to style your
              HTML elements directly.
            </p>

            <h2>Advantages of Tailwind CSS</h2>

            <ol>
              <li>
                <strong>Rapid Development:</strong> One of the most significant
                advantages of Tailwind CSS is its ability to speed up the
                development process...
              </li>
              <li>
                <strong>Highly Customizable:</strong> Tailwind CSS offers
                unparalleled customization options...
              </li>
              <li>
                <strong>Maintainability:</strong> With traditional CSS
                frameworks, managing CSS specificity and overriding default
                styles can often lead to spaghetti code...
              </li>
              <li>
                <strong>Responsive by Default:</strong> Building responsive web
                interfaces is a breeze with Tailwind CSS...
              </li>
              <li>
                <strong>Developer Experience:</strong> Tailwind CSS prioritizes
                developer experience...
              </li>
            </ol>

            <h2>Conclusion</h2>

            <p>
              Tailwind CSS has revolutionized the way developers approach
              styling in web development. By embracing a utility-first
              philosophy, Tailwind CSS offers unparalleled speed, flexibility,
              and maintainability, making it an indispensable tool for modern
              web development projects. Whether you're a seasoned developer or
              just getting started, integrating Tailwind CSS into your workflow
              can help you build beautiful, responsive web interfaces with ease.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
