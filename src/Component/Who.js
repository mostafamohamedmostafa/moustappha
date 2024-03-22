
import Code from "../img/code.png"

function Who() {
    return (
        <section className="container">
            <div className="context container">
                <h1 className="text-center" data-aos="fade-down">Designer, Frontend Developer 👨‍💻</h1>

                <h3 className="text-center  " data-aos="fade-up">I design and code beautifully creative Websites</h3>            </div>


            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >



            <div className="Who">

                <img className="img-fluid" src={Code} />
                <div className="who-text container">
                    <h3 className="text-center"> Hi 👋, I’m Moustapha. Nice to meet you. 🤝</h3>
                    <h5 className="text-center  ">Create, Design Creative ,Modern Websites  🌐 & Develop Web Applications 👨‍💻 Using React Js & WordPress</h5>
                </div>

            </div></section>

    );
}

export default Who;
