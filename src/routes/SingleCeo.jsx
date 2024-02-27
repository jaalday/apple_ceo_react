import { useLoaderData, Link } from 'react-router-dom';

export {useLoaderData} from 'react-router-dom';

export function loader({params}) {
    const {slug} = params;
    return {slug};
}


const SingleCeo = () =>{
    
    const{ slug } = useLoaderData();


    return <p>Single Ceo Page {slug}</p>;
}

export default SingleCeo;