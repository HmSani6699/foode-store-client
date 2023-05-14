import { Link } from "react-router-dom";


const FoodCard = ({ food, foods, setFoods }) => {
    const { _id, name, quantity, supplier, teste, category, details, photo } = food;

    const handleDelete = id => {
        fetch(`http://localhost:5000/foods/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Delete Success !!')
                    const newfood = foods.filter(food => food._id !== id);
                    setFoods(newfood)
                }
            })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl mt-10 border">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{teste}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn  ">Veiw</button>
                        <Link to={`/updateFood/${_id}`}>
                            <button className="btn bg-lime-500">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;