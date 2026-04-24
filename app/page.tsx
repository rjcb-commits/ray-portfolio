const publicApps = [
  {
    title: 'Stupid Small',
    description:
      'An Android app that defeats procrastination by using AI to break overwhelming tasks into stupidly small micro-steps, with a built-in focus timer, streak tracking, and celebration animations to keep users moving forward.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager', 'Groq', 'Cloudflare Workers'],
    image: '/stupid-small-icon.png',
  },
  {
    title: 'Niner',
    description:
      'A polished native Android Sudoku app with five difficulties, five game modes, a daily streak puzzle, and a teaching hint engine, all built end-to-end in Kotlin and Jetpack Compose.',
    tags: ['Kotlin', 'Jetpack Compose', 'StateFlow', 'Coroutines', 'Custom Canvas', 'On-device'],
    image: '/niner-icon.png',
  },
]

const dataScienceProjects = [
  {
    title: 'Customer Churn Prediction',
    description:
      'Planned portfolio project using public customer data to identify churn risk, compare baseline and tree-based models, and translate model output into retention recommendations.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Classification', 'Feature Importance'],
  },
  {
    title: 'Loan Default Risk Modeling',
    description:
      'Planned public risk-modeling case study focused on class imbalance, model interpretability, and decision-oriented evaluation for lending-style workflows.',
    tags: ['Python', 'Risk Analytics', 'ROC-AUC', 'Precision/Recall', 'Interpretability'],
  },
  {
    title: 'A/B Test Analysis',
    description:
      'Planned experimentation case study focused on conversion lift, confidence intervals, practical significance, and clear recommendation writing for stakeholders.',
    tags: ['Statistics', 'Experimentation', 'Hypothesis Testing', 'Business Analytics'],
  },
]

const experience = [
  {
    title: 'Data Scientist, AVP — PNC Financial Services',
    meta: '2025 – Present',
    bullets: [
      'Built predictive models and statistical frameworks to improve decision-making in regulated banking operations.',
      'Designed analytical workflows to improve QA coverage, audit defensibility, and operational visibility.',
      'Created executive-facing Tableau dashboards for monitoring trends, risk patterns, and team performance.',
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
  modeling: ['Scikit-learn', 'Classification', 'Sampling', 'Feature Engineering', 'A/B Testing'],
  storytelling: ['Tableau', 'Executive Dashboards', 'Data Storytelling', 'Operations Metrics'],
}

function Pill({ text }: { text: string }) {
  return <span className="pill">{text}</span>
}

function ProjectCard({
  title,
  description,
  tags,
  image,
}: {
  title: string
  description: string
  tags: string[]
  image?: string
}) {
  return (
    <article className="card tile">
      {image ? <img className="projectIcon" src={image} alt={`${title} icon`} /> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="pillRow">
        {tags.map((tag) => (
          <Pill key={tag} text={tag} />
        ))}
      </div>
    </article>
  )
}

export default function HomePage() {
  return (
    <main>
      <div className="nav">
        <div className="wrap navInner">
          <div className="brand">Raymond Jack</div>
          <div className="navLinks">
            <a href="#apps">Apps</a>
            <a href="#data-science">Data Science</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <header className="hero wrap">
        <div className="heroGrid">
          <section>
            <div className="eyebrow">Data Scientist • Banking Analytics • Tableau • Python • SQL</div>
            <h1>I turn data into practical decisions, and I build products too.</h1>
            <p className="lede">
              I&apos;m Raymond Jack, a data scientist with deep experience in banking, analytics, risk-focused decision support, and executive-facing dashboards. This portfolio combines public app work with data science projects built to show how I approach real business problems.
            </p>
            <div className="ctaRow">
              <a className="btn primary" href="#data-science">
                View projects
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
                <strong>2 apps</strong>
                <span>public product work already live in the portfolio</span>
              </div>
              <div className="stat">
                <strong>3 planned DS projects</strong>
                <span>public datasets focused on churn, risk, and experimentation</span>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <section id="apps" className="wrap sectionBlock">
        <div className="sectionHead">
          <h2>Public apps</h2>
          <p>Shipped projects that demonstrate product thinking, native app development, and execution.</p>
        </div>
        <div className="grid2">
          {publicApps.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="data-science" className="wrap sectionBlock">
        <div className="sectionHead">
          <h2>Data science projects</h2>
          <p>Public-facing analytics case studies built around business problems that match my professional background.</p>
        </div>
        <div className="grid3">
          {dataScienceProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="wrap sectionBlock">
        <div className="sectionHead">
          <h2>What&apos;s coming next</h2>
          <p>The fastest way to strengthen this portfolio is to replace planned project cards with real artifacts.</p>
        </div>
        <div className="grid2">
          <div className="card tile">
            <h3>Visual proof</h3>
            <p>Add screenshots for Stupid Small and Niner, plus one polished visual per data science project.</p>
            <div className="placeholder">Next up: app screenshots, charts, dashboard images, and short outcome summaries.</div>
          </div>
          <div className="card tile">
            <h3>Public data case studies</h3>
            <p>Each project should include the business problem, dataset, method, key findings, and a short recommendation.</p>
            <div className="placeholder">Next up: IBM Telco churn, loan default risk, and an A/B test analysis writeup.</div>
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

      <footer className="footer wrap">© Raymond Jack. Built with Next.js and shaped for data science and analytics roles.</footer>
    </main>
  )
}
