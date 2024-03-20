import { WorkExperience } from "./Data";
function WorkExperince() {
    return (
        <section>
            <section className="container">
                <div className="WorkExperience">
                    <h1 className="text-center"  data-aos="flip-up">WorkExperience </h1>
                    {WorkExperience.map((WorkExperiencendata, index) => {
                        return (

                            <div className="card mb-3 WorkExperience-Card" key={index} data-aos="fade-down" >
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <h3 className="card-title text-center  " > {WorkExperiencendata.year} </h3>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="card-title">{WorkExperiencendata.WorkExperiencefrom} </h3>
                                            <h4 className="card-title">{WorkExperiencendata.WorkExperience} </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )

                    })}
                </div>
            </section>




        </section>


    );
}

export default WorkExperince;
