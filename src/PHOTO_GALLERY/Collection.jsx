import { useRef } from "react";

export function Collection({ name, images }) {

    const image_ref = useRef(null);

    const current  = target => {
        const currentImage = image_ref.current.src;
        image_ref.current.src = target.src;
        target.src = currentImage;
    }

    return (
        <div className="collection">
            <img ref={image_ref} className="collection__big" src={images[0]} alt="Item" />
            <div className="collection__bottom">
                {
                    images.slice(1).map((item, i)=> 
                        <img 
                            key={i} 
                            className="collection__mini" 
                            src={item} alt="Item" 
                            onClick={(e) => current(e.target)}/>
                    )
                }
            </div>
            <h4>{name}</h4>
        </div>
    );
}