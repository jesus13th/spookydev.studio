import Blog from '../components/Blog'
import Project from '../components/Project'
import './css/home.css'

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
    }
]
const blogs = [
    {
        title: "Dungerous",        
        url:"blogs/dungerous",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti!",
        images:"Dungerous/Bow.gif"
    },
    {
        title: "Life",        
        url:"blogs/life",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti!",
        images:"Dungerous/Bow.gif"
    },
    {
        title: "Space cat",        
        url:"blogs/space-cat",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti!",
        images:"Dungerous/Bow.gif"
    },
]

export default function Home(){
    return <main className="home">
        <p className="intruduction">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit dolore ex deserunt quasi neque dicta, molestiae aliquam nihil voluptatibus unde itaque in commodi nobis consequatur quod facere nam deleniti! Commodi sequi praesentium libero hic velit. Voluptatem ipsum repudiandae ex. Blanditiis expedita voluptas odit enim reprehenderit, tempora aliquid nulla vitae tempore earum reiciendis, necessitatibus et. Culpa iusto laboriosam quasi tempora similique praesentium, exercitationem neque ut, fugit dolores iure. Laudantium enim suscipit laborum, quod repudiandae dolore totam eos. Quo, cum adipisci.</p>
        <a href="projects"><h1>Proyectos</h1></a>
        <div className="projects">
            {projects.map(({title, url, description, images}) =>(
                <Project title={title} url={url} description={description} images={images} />
            ))}
        </div>
        <a href="blogs"><h1>Blogs</h1></a>
        <div className="blogs">
            {blogs.map(({title, url, description, images}) =>(
                <Blog title={title} url={url} description={description} images={images} />
            ))}
        </div>
        <h1>Lorem, ipsum.</h1>
        <p className='additional'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam magni, maiores nostrum nisi ad voluptatem ex quisquam optio hic.</p>
    </main>
}