import { education, Skills } from "./Data";


function Education() {
    return (
        <section  >
            <section className="container header finisher-header" id="EducationSection">


                <div className="Education">
                    <h1 className="text-center" data-aos="flip-up">📚 Education Highlightes</h1>
                    {education.map((educationdata, index) => {
                        return (

                            <div className="card mb-3 Education-Card" key={index} data-aos="fade-down">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <h3 className="card-title text-center  " > {educationdata.year} </h3>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="card-title">{educationdata.Educationfrom} </h3>
                                            <h4 className="card-title">{educationdata.Educationname} </h4>
                                            <p className="card-text">{educationdata.Educationdescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )

                    })}
                </div>
            </section>


            <section className="container">
                <div className="Skills">
                    <h5 className="text-muted text-center">My Skills</h5>
                    <h1 className="text-center" data-aos="flip-up">Let’s Explore ✍️<span>Skills</span>   </h1>

                    <div className="row  row-cols-md-5 g-4 ">



                        {Skills.map((Skillsdata, index) => {
                            return (

                                <div className="col  EducationSkills" data-aos="zoom-in-up" key={index}>
                                    <div className="card h-100 ">

                                        <img src={Skillsdata.IMG} className="img-fluid rounded-start " alt={Skillsdata.IMGALT} />
                                        <div className="card-body">
                                            <h4 className="card-title text-center">{Skillsdata.Description}</h4>

                                        </div>
                                    </div>
                                </div>



                            )
                        })}






                    </div>

                </div>
            </section>



        </section>

    );

    
}

export default Education;


