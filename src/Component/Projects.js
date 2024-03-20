import { ProjectsMade } from "./Data";
function Projects() {
    return (
        <section className="container">
            <div className="Projects">
                <h1 className="text-center" data-aos="flip-up">Projects </h1>

                <div className="row row-cols-1 row-cols-md-2 g-4">

                    {ProjectsMade.map((ProjectsMadendata, index) => {
                        return (

                            <div className="col Projects-Card" key={index} data-aos="fade-down" >
                                <div className="card h-100">
                                    <img src={ProjectsMadendata.IMG} className="card-img-top" alt={ProjectsMadendata.IMGAlt} />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>ProjectName:</strong>{ProjectsMadendata.ProjectName}</h5>
                                        <p className="card-text"><strong>ProjectDescription:</strong> {ProjectsMadendata.ProjectDescription}</p>
                                        <p className="card-text"><strong>ProjectTechnologies:</strong> {ProjectsMadendata.ProjectTechnologies}</p>
                                        <p className="card-text"><strong>Year:</strong>    {ProjectsMadendata.Year}</p>
                                        <p className="card-text"><strong>Project Link:</strong>  <a target="_blank" href={ProjectsMadendata.Link}>Click Here</a>  </p>
                                    </div>

                                </div>
                            </div>

                        )

                    })}




                </div>

            </div>
        </section>
    );
}

export default Projects;
