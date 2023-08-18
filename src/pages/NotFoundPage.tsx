import './css/not-found.css'
export default function NotFound(){
    return <main className="not-found">
        <img src={process.env.PUBLIC_URL + "page-not-found.png"} alt="" />
    </main>
}