import { useState } from "react" 
import { FaStar } from "react-icons/fa";

function Rating() {

    const [rate, setRate] = useState(0)

    return (
        <div className="rating-container">
            {[...Array(5)].map((item, index) => {
                const raiting = index+1
                return (
                    <label className="rating-container__star" key={index}>
                        <input
                            type="radio"
                            value={raiting}
                            onClick={() => {
                                setRate(raiting);
                            }}
                        />
                        <FaStar
                            color={
                                raiting < rate || raiting === rate
                                ? "#000"
                                : "rgb(192,192,192)"
                            }
                        />
                    </label>
                )
            })}
        </div>
    )
}

export default Rating