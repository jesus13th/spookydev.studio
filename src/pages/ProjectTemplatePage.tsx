import { useParams } from "react-router-dom"
export function ProjectTemplate(){
    const { id } = useParams();
    return (<main>
            <h1>Dungerous</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae quia libero itaque architecto sapiente quidem earum porro, aliquid voluptatibus nam totam, id debitis quis dolores temporibus suscipit sit iusto ipsa eveniet! Aspernatur esse ratione quas veritatis ex ipsam suscipit perspiciatis quasi a, deserunt magnam est, eveniet totam, atque voluptatem? Ipsum ipsa architecto eos officia quod aliquam reiciendis cum beatae?</p>
        </main>
    )
}