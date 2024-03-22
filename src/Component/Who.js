
import Code from "../img/code.png"

function Who() {
    return (
        <section className="container fluid">
            <div className="context  ">
                <h1 className="text-center who-text" data-aos="fade-down">Designer, Frontend Developer 👨‍💻</h1>

                <h1 className="text-center   who-text" data-aos="fade-up">I design and code beautifully creative Websites</h1>            </div>


            <div class="area container" >
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
