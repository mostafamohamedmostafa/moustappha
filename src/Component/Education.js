import { education, Skills } from "./Data";


function Education() {
    return (
        <section>
            <section className="container">
                <div className="Education">
                    <h1 className="text-center">Education </h1>
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
                    <h1 className="text-center">Skills </h1>

                    <div className="row  row-cols-md-5 g-4 ">



                        {Skills.map((Skillsdata, index) => {
                            return (

                                <div className="col  EducationSkills" data-aos="fade-down" key={index}>
                                    <div className="card h-100 ">

                                        <img src={Skillsdata.IMG} className="img-fluid rounded-start " alt={Skillsdata.IMGALT} />
                                        <div className="card-body">
                                            <h3 className="card-title text-center">{Skillsdata.Description}</h3>

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
