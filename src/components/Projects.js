const Projects = () => (
  <section className="p-6 text-center">
    <h2 className="text-3xl font-semibold mb-4">Projects</h2>
    <div className="grid gap-4 md:grid-cols-2">
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-bold">Weather App</h3>
        <p>React-based app that shows real-time weather using OpenWeather API.</p>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-bold">Portfolio Website</h3>
        <p>This personal site you're on, made with React and Tailwind!</p>
      </div>
    </div>
  </section>
);

export default Projects;
