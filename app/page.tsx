const featuredProjects = [
  {
    title: 'Stupid Small',
    description:
      'An Android app that defeats procrastination by using AI to break overwhelming tasks into stupidly small micro-steps, with a built-in focus timer, streak tracking, and celebration animations to keep users moving forward.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager', 'Groq', 'Cloudflare Workers'],
  },
  {
    title: 'QA Error Detection Model',
    description:
      'Sanitized case study placeholder for a predictive model used to identify compliance and procedural errors in dispute workflows before they became larger operational problems.',
    tags: ['Python', 'XGBoost', 'Compliance', 'Model Risk Management'],
  },
  {
    title: 'Niner',
    description:
      'A polished native Android Sudoku app with five difficulties, five game modes, a daily streak puzzle, and a teaching hint engine, all built end-to-end in Kotlin and Jetpack Compose.',
    tags: ['Kotlin', 'Jetpack Compose', 'StateFlow', 'Coroutines', 'Custom Canvas', 'On-device App'],
  },
]

const experience = [
  {
    title: 'Data Scientist, AVP — PNC Financial Services',
    meta: '2025 – Present',
    bullets: [
      'Built predictive models for compliance and procedural error detection in Reg E disputes.',
      'Designed statistical sampling frameworks to improve QA coverage and audit defensibility.',
      'Created executive-facing Tableau dashboards for dispute monitoring, compliance trends, and performance visibility.',
    ],
  },
  {
    title: 'Sr. Business Analytics Consultant, AVP — PNC Financial Services',
    meta: '2022 – 2025',
    bullets: [
      'Led analytics initiatives supporting operational strategy across relationship operations.',
      'Built complex SQL, Spark, and Hive pipelines in Cloudera environments.',
      'Finished top 3 in enterprise-wide data science competitions in consecutive years.',
    ],
  },
  {
    title: 'Business Analytics Consultant and earlier roles — PNC Financial Services',
    meta: '2017 – 2022 and prior',
    bullets: [
      'Moved from reporting and collections into full analytics ownership.',
      'Automated manual Excel/VBA reporting into maintainable data workflows.',
      'Built the analytics muscle from scratch in teams that previously did not have it.',
    ],
  },
]

const stacks = {
  platforms: ['Python', 'SQL', 'PySpark', 'Hive', 'Teradata', 'Oracle'],
  modeling: ['XGBoost', 'Scikit-learn', 'Classification', 'Sampling', 'Feature Engineering'],
  storytelling: ['Tableau', 'Executive Dashboards', 'Data Storytelling', 'Operations Metrics'],
}

function Pill({ text }: { text: string }) {
  return <span className="pill">{text}</span>
}

export default function HomePage() {
  return (
    <main>
      <div className="nav">
        <div className="wrap navInner">
          <div className="brand">Raymond Jack</div>
          <div className="navLinks">
            <a href="#projects">Projects</a>
            <a href="#dashboards">Dashboards</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <header className="hero wrap">
        <div className="heroGrid">
          <section>
            <div className="eyebrow">Data Scientist • Banking Analytics • Tableau • Python • SQL</div>
            <h1>I build models, dashboards, and analytics that help teams make better decisions.</h1>
            <p className="lede">
              I&apos;m Raymond Jack, a data scientist with deep experience in banking, compliance, disputes,
              consumer lending, and executive-facing analytics. My work spans predictive modeling,
              production-grade data pipelines, and dashboards that turn messy operations into clear decisions.
            </p>
            <div className="ctaRow">
              <a className="btn primary" href="#projects">
                View portfolio
              </a>
              <a className="btn secondary" href="mailto:rayjackcb@gmail.com">
                Contact me
              </a>
              <a className="btn secondary" href="https://github.com/rjcb-commits/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </section>

          <aside className="card heroCard">
            <h3>Quick snapshot</h3>
            <div className="statGrid">
              <div className="stat">
                <strong>19</strong>
                <span>years in banking and analytics</span>
              </div>
              <div className="stat">
                <strong>Top 3</strong>
                <span>enterprise modeling competition, 2 years in a row</span>
              </div>
              <div className="stat">
                <strong>SQL / Python / Tableau</strong>
                <span>core toolkit</span>
              </div>
              <div className="stat">
                <strong>Remote-ready</strong>
                <span>open to full-time or contract roles</span>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <section id="projects" className="wrap sectionBlock">
        <div className="sectionHead">
          <h2>Featured work</h2>
          <p>A mix of public product work and professional analytics case studies.</p>
        </div>
        <div className="grid3">
          {featuredProjects.map((project) => (
            <article className="card tile" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="pillRow">
                {project.tags.map((tag) => (
                  <Pill key={tag} text={tag} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="dashboards" className="wrap sectionBlock">
        <div className="sectionHead">
          <h2>Dashboards and analyses</h2>
          <p>This section is built for the shareable work you want recruiters and hiring managers to see.</p>
        </div>
        <div className="grid2">
          <div className="card tile">
            <h3>Tableau dashboard showcase</h3>
            <p>
              Add screenshots, public Tableau links, or short case-study writeups here. This is one of your strongest differentiators, so it should be front and center.
            </p>
            <div className="placeholder">
              Add: public Tableau dashboard link, screenshot gallery, short business problem + outcome.
            </div>
          </div>
          <div className="card tile">
            <h3>Apps and side projects</h3>
            <p>
              Current public-facing projects include <strong>Stupid Small</strong>, an Android productivity app that uses AI to turn overwhelming tasks into manageable next steps, and <strong>Niner</strong>, a polished native Sudoku app with multiple game modes, a daily streak puzzle, and a teaching hint engine.
            </p>
            <div className="placeholder">
              Add next: live demos, screenshots, short writeups, and any public repos you want visible for Stupid Small and Niner.
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="wrap sectionBlock">
        <div className="sectionHead">
          <h2>Experience highlights</h2>
          <p>The short version of the story behind the resume.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <div className="card timelineItem" key={item.title}>
              <h3>{item.title}</h3>
              <div className="meta">{item.meta}</div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sectionBlock">
        <div className="sectionHead">
          <h2>Core stack</h2>
          <p>Tools and methods I use to move from raw data to business decisions.</p>
        </div>
        <div className="grid3">
          <div className="card tile">
            <h3>Languages and platforms</h3>
            <div className="pillRow">{stacks.platforms.map((item) => <Pill key={item} text={item} />)}</div>
          </div>
          <div className="card tile">
            <h3>Modeling and analytics</h3>
            <div className="pillRow">{stacks.modeling.map((item) => <Pill key={item} text={item} />)}</div>
          </div>
          <div className="card tile">
            <h3>Visualization and storytelling</h3>
            <div className="pillRow">{stacks.storytelling.map((item) => <Pill key={item} text={item} />)}</div>
          </div>
        </div>
      </section>

      <section id="contact" className="wrap sectionBlock contactBlock">
        <div className="card tile">
          <h2>Let&apos;s connect</h2>
          <p>
            If you&apos;re hiring for data science, analytics, decision science, risk, fraud, compliance, or business intelligence roles, I&apos;d love to talk.
          </p>
          <div className="ctaRow">
            <a className="btn primary" href="mailto:rayjackcb@gmail.com">
              rayjackcb@gmail.com
            </a>
            <a className="btn secondary" href="https://github.com/rjcb-commits/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer wrap">© Raymond Jack. Built as a portfolio site for resume and job search use.</footer>
    </main>
  )
}
