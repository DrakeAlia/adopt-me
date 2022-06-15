// Now we want to make it so you can modify what 
// your search parameters are. Let's make a new 
// route called SearchParams.js and have it accept 
// these search parameters.

import { useState } from "react"

const SearchParams = () => {
    const location = "Seattle, WA";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location}
                        placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;