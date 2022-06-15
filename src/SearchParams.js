// Now we want to make it so you can modify what 
// your search parameters are. Let's make a new 
// route called SearchParams.js and have it accept 
// these search parameters.

// A hook called such (in my head) because it's a 
// hook that gets caught every time the render function gets called. 
// Because the hooks get called in the same order every 
// single time, they'll always point to the same piece of state. Because of that they can be 
// stateful: you can keep pieces of mutable state using hooks and then modify them later using 
// their provided updater functions.

// An absolutely key concept for you to grasp is hooks 
// rely on this strict ordering.As such, do not put hooks 
// inside if statements or loops.If you do, you'll have 
// insane bugs that involve useState returning the wrong state. 
// If you see useState returning the wrong piece of state, 
// this is likely what you did.
import { useState } from "react"

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;