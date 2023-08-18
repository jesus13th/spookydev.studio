import { IsAdmin } from "../Test/IsAdmin"
import Blog from "../components/Blog"
import './css/blogs.css'

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
    }
]

export default function Blogs(){
    return (<main className="blogs-page">
    <h1>Projects</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt in a ipsum minus, laboriosam expedita consequuntur soluta recusandae labore maxime praesentium optio! Atque neque saepe, consectetur, a magni modi accusamus sed quae eum adipisci fuga nulla! Error repudiandae corporis soluta beatae alias cupiditate incidunt accusantium, eos porro quaerat quibusdam!</p>
    <div className="blogs">
        { IsAdmin() &&<div className="add-new" onClick={()=>{console.log("Create new blog")}}>
                <img src="add-new.png" alt="" />
                <h2>Agregar nuevo</h2>
            </div>
        }
        {blogs.map(({title, url, description, images}) =>(
            <Blog title={title} url={url} description={description} images={images} />
        ))}
    </div>
</main>)
}