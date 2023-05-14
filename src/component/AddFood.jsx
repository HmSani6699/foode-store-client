

const AddFood = () => {

    const handlefromSubmit = event => {
        event.preventDefault();
        const from = event.target;

        const name = from.name.value;
        const quantity = from.quantity.value;
        const supplier = from.supplier.value;
        const teste = from.teste.value;
        const category = from.category.value;
        const details = from.details.value;
        const photo = from.photo.value;

        const newCoffee = { name, quantity, supplier, teste, category, details, photo }

        console.log(newCoffee);

        // Send to tada in server site

        fetch('http://localhost:5000/foods',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }
    return (
        <div className='bg-[#F4F3F0]'>
            <h2 className='text-3xl'>Add New Coffee</h2>
            <form onSubmit={handlefromSubmit}>
                <div className='w-5/6 mx-auto '>
                    {/**coffe row */}
                    <div className='md:flex gap-5 mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter coffee name" name='name' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter coffee quantity" name='quantity' className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/**coffe row */}
                    <div className='md:flex gap-5 mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter coffee supplier" name='supplier' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter coffee teste" name='teste' className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/**coffe row */}
                    <div className='md:flex gap-5 mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter coffee category" name='category' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter coffee details" name='details' className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/**coffe row */}
                    <div className='w-full mb-8'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter photo url" name='photo' className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Added Coffee" className="btn w-full bg-[#D2B48C]" />
                </div>
            </form>
        </div>
    );
};

export default AddFood;