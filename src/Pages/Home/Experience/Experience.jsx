import "./Experience.css";

function Experience({data}) {
  return (
    <div>
        <div className="computerCard experienceCard">
            {data.map((item, i)=><article key={i}>
               <p className="workstation">🛠️ {item.name}</p>
               <p className="workdate">🗓️ {item.date}</p>
               <p className="job">💻 {item.where}</p>
               <p className="workDescription">🫱🏼‍🫲🏼 {item.description}</p>

            </article>)}
        </div>
    </div>
  )
}

export default Experience;
