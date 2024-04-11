import { DemosProjects } from "./Data";
function Demos() {
    return (
        <section className="container">
            <div className="Demos" id="DemoProjectsSection">
            <h5 className="text-muted text-center">Latest Demo  Projects</h5>
                <h1 className="text-center" data-aos="flip-up"> Explore My Popular 💭 <span> Demo Projects</span> </h1>

       

                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {DemosProjects.map((DemosProjectsdata, index) => {
                        return (

                            <div className="col Demos-Card" key={index} data-aos="fade-down" >
                                <div className="card h-100">
                                    <img src={DemosProjectsdata.IMG} className="card-img-top img-fluid"  data-aos="zoom-in"  alt={DemosProjectsdata.IMGAlt} />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Project Name:</strong>{DemosProjectsdata.ProjectName}</h5>
                                        <p className="card-text"><strong>Project Description:</strong> {DemosProjectsdata.ProjectDemosDescription}</p>
                                        <p className="card-text"><strong>Project Technologies:</strong> {DemosProjectsdata.ProjectDemosTechnologies}</p>
                                        <p className="card-text"><strong>Year:</strong>    {DemosProjectsdata.Year}</p>
                                        <p className="card-text"><strong>Project Link:</strong>  <a target="_blank" href={DemosProjectsdata.Link}>Click Here</a>  </p>
                                        <p className="card-text"><strong>Project Ref Link:</strong>  <a target="_blank" href={DemosProjectsdata.LinkRef}>{DemosProjectsdata.LinkText}</a>  </p>
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

export default Demos;
