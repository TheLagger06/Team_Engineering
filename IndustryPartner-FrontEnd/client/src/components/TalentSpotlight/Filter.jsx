function FilterComponent({filterDropdown})
{
    return (
        <>
            <select onChange={(e)=>filterDropdown(e.target.value)} className="form-select" aria-label="Default select example" style={{ width: '30%' }}>
                <option value="">All Engineers</option>
                <option value="SE">Software Engineering</option>
                <option value="DS">Data Science</option>
                <option value="CE">Cloud Engineering</option>
            </select>

        </>

    );
}

export default FilterComponent;