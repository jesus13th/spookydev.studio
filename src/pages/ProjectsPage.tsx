import Project from "../components/Project"
import './css/projects.css'
import { IsAdmin } from "../Test/IsAdmin"

const projects = [
    {
        title: "Dungerous",        
        url:"projects/dungerous",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti!",
        images:[ "Dungerous/Bow.gif", "Dungerous/DekuBaba.gif", "Dungerous/Dungerous_01.png","Dungerous/Dungerous_02.png","Dungerous/Dungerous_03.png" ]
    },
    {
        title: "Life",        
        url:"projects/life",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti!",
        images:[ "Dungerous/Bow.gif", "Dungerous/DekuBaba.gif", "Dungerous/Dungerous_01.png","Dungerous/Dungerous_02.png","Dungerous/Dungerous_03.png" ]
    },
    {
        title: "Space cat",        
        url:"projects/space-cat",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti!",
        images:[ "Dungerous/Bow.gif", "Dungerous/DekuBaba.gif", "Dungerous/Dungerous_01.png","Dungerous/Dungerous_02.png","Dungerous/Dungerous_03.png" ]
    },
    {
        title: "Dungerous",        
        url:"projects/dungerous",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti!",
        images:[ "Dungerous/Bow.gif", "Dungerous/DekuBaba.gif", "Dungerous/Dungerous_01.png","Dungerous/Dungerous_02.png","Dungerous/Dungerous_03.png" ]
    },
    {
        title: "Life",        
        url:"projects/life",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti!",
        images:[ "Dungerous/Bow.gif", "Dungerous/DekuBaba.gif", "Dungerous/Dungerous_01.png","Dungerous/Dungerous_02.png","Dungerous/Dungerous_03.png" ]
    },
    {
        title: "Space cat",        
        url:"projects/space-cat",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti!",
        images:[ "Dungerous/Bow.gif", "Dungerous/DekuBaba.gif", "Dungerous/Dungerous_01.png","Dungerous/Dungerous_02.png","Dungerous/Dungerous_03.png" ]
    }
]

export default function Projects(){
    return (
        <main className="projects-page">
            <h1>Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt in a ipsum minus, laboriosam expedita consequuntur soluta recusandae labore maxime praesentium optio! Atque neque saepe, consectetur, a magni modi accusamus sed quae eum adipisci fuga nulla! Error repudiandae corporis soluta beatae alias cupiditate incidunt accusantium, eos porro quaerat quibusdam!</p>
            <div className="projects">
                
                {IsAdmin() && 
                    <a href="" style={{textDecoration:"none", color:"black"}}>
                        <div className="add-new">
                            <h1>Agregar nuevo</h1>
                            <img src={process.env.PUBLIC_URL + "add-new.png"} alt="" />
                        </div>
                    </a>
                }
                { 
                    projects.map(({title, url, description, images}) =>(
                        <Project title={title} url={url} description={description} images={images} />
                    ))
                }
            </div>
        </main>
    )
}