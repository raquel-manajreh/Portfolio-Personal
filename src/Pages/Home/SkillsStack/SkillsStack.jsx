import "./SkillsStack.css";

function SkillsStack({data}) {
  return (
  <div className="computerCard">

    <section className="skillsStacks">
      <article>
        <h3 className="skillsStackName">SOFT SKILLS</h3>
        <ul className="ulSkillsStack">
          {data.map((skill, i) =>(
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </article>
      <article>
        <h3 className="skillsStackName">STACK</h3>
        <ul className="ulSkillsStack">
          {data.map((stack, i) =>(
            <li key={i}>{stack}</li>
          ))}
        </ul>
      </article>
    </section>
  </div>
  )
}

export default SkillsStack;
