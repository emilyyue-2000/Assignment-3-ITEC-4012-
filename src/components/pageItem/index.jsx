import './styles.css'
import { Button } from '../button'
import { Link } from 'react-router-dom';

export const PageItem = (props) => {
    const {Name, Section, Price, image} = props;

    return(
        <div className = "furniture">
            <img className = "furniture-photo" src = {image} alt={Name + Section + "photo"} />

            <Link to = {'/'}><h1 className = "furniture-name">{Name}</h1>
            </Link>
            
            <p className="furniture-price">{Price}</p>
            <p className="furniture-section">{Section}</p>
    
            <Button text="View Details" type="primary" isDisabled={false} action={() => alert("View Details")}/>
        </div>
    )
}
