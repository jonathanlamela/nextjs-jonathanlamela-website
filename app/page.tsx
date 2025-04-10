import Link from "next/link";

export default function Home() {

  const webapps = [
    { title: "www.tonerfast24.it", link: "https://www.tonerfast24.it" },
    { title: "www.ldc.it", link: "https://www.ldc.it" },
    { title: "www.4deco.it", link: "https://www.4deco.it" },
    { title: "www.imusicfun.it", link: "https://www.imusicfun.it" },
    { title: "www.radioflash.fm", link: "https://www.radioflash.fm" },
  ];

  const skills = [
    "Python",
    "C#",
    "Go",
    "Java",
    "C++",
    "Rust",
    "Visual Basic",
    "Ruby",
    "Laravel",
    "Spring Boot",
    "Tailwind",
    "Flutter",
    "Docker",
    "Kubernetes",
    "VueJs",
    "Angular",
    "TypeScript",
    "JavaScript",
    "SQL",
    "Wordpress",
    "Prestashop",
    "Node.JS"
  ];

  return (
    <main className="flex flex-col flex-grow md:justify-center items-center p-4 md:p-16 space-y-8">
      <div className="w-full flex flex-col space-y-4">
        <h1 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
          Jonathan La Mela
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
            FullStack Developer
          </span>
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 md:text-lg">
          Benvenuto sul mio sito web, qui potrai trovare informazioni su cosa faccio e alcuni link ai miei progetti.
        </p>
        <div className="w-full text-center space-x-2">
          <Link
            className="inline-flex items-center px-5 py-3 text-sm font-medium btn btn-outline btn-info"
            aria-label="learn more"
            rel="noreferrer"
            target="_blank" href={"https://github.com/jonathanlamela"}
          >
            GitHub
          </Link>
          <Link
            className="inline-flex items-center px-5 py-3 text-sm font-medium btn btn-outline btn-secondary"
            aria-label="learn more"
            rel="noreferrer"
            target="_blank" href={"https://www.linkedin.com/in/jonathan-la-mela-29119645"}
          >
            Linkedin
          </Link>
          <br className="sm:hidden" />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold text-center">Skills</h2>
        <div className="flex flex-row justify-center">
          <div className="flex-wrap w-100 space-x-2 space-y-2 text-center">
            {skills.map((skill: string) => <div key={skill} className="badge badge-ghost hover:bg-gray-600 hover:text-white">{skill}</div>)}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold text-center">Applicazioni mobili</h2>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="card w-96 bg-base-100 card-md shadow-sm  h-50">
            <div className="card-body">
              <h2 className="card-title">CrittoUtil</h2>
              <p>App a scopo didattico che si comporta come una calcolatrice per operazioni crittografiche come conversioni e simili.</p>
              <div className="justify-end card-actions">
                <Link className="btn btn-primary" href={"https://play.google.com/store/apps/details?id=com.jonathanlamela.crittoutil&hl=it"}>Google Playstore</Link>
                <Link className="btn btn-secondary" href={"./privacy-policy/crittoutil"}>Privacy Policy App</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold text-center">Applicazioni web e siti</h2>
        <div className="flex flex-col flex-wrap space-y-4 md:flex-row md:items-center md:justify-center md:space-x-4">
          {webapps.map((site, index) => (
            <div key={index} className="w-full md:w-1/4">
              <div className="card bg-base-200 card-md shadow-sm md:h-30">
                <div className="card-body">
                  <h2 className="card-title justify-center">{site.title}</h2>
                  <div className="justify-center card-actions">
                    <Link className="btn btn-primary" href={site.link}>Link</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col space-y-4">
        <h2 className="text-sm font-semibold text-center">Questo sito</h2>
        <div className="flex flex-col justify-center items-center">
          <Link href={"/privacy-policy/web"}>Privacy policy</Link>
        </div>

      </div>
    </main>
  );
}


