import './css/contact.css';

export default function Contact(){
    return <main className="contact">
        <h1>Contactanos</h1>
        <div className="social-media">
            <h2>Contactanos atraves de nuestras redes sociales</h2>
            <div className="socials">
                <a href=""><img src={process.env.PUBLIC_URL + "fb_logo.png"} alt="" /></a>
                <a href=""><img src={process.env.PUBLIC_URL + "twitter_logo.png"} alt="" /></a>
                <a href=""><img src={process.env.PUBLIC_URL + "instagram_logo.png"} alt="" /></a>
            </div>
        </div>
        <div className="contactUs">
            <h2>Envianos un correo</h2>
            <form action="">
                <input type="text" name="" placeholder="Name" id="" />
                <input type="text" name="" placeholder="Email" id="" />
                <textarea name="" placeholder="Your Message" id="" />
                <input type="button" value="Enviar" />
            </form>
        </div>
    </main>
}