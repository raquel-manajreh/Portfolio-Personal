import "./AboutMe.css";

function AboutMe({data}) {
  return (
    <div>
      <div className="tablet1">
        {data.map((item, i)=>
        <p className="aboutMeInfo" key={i}>{item.info}</p>)
        }
      </div>
    </div>
  );
};

export default AboutMe;
