function DrugTwo({ fields }) {
  const handleSubmit = () => {};

  return (
    <div className="container mt-5 col-md-6 col-md-offset-4">
      <form onSubmit={handleSubmit}>
        {fields
          ? fields.map((field) => (
              <div className="form-group" key={field.key}>
                <label>{field.label}</label>
                {field.type === "dropdown" ? (
                  <select className="form-control">
                    <option>Select One</option>
                    {field.items.length > 0 &&
                      field.items.map((item, i) => (
                        <option value={item.value}>{item.text}</option>
                      ))}
                  </select>
                ) : (
                  <div
                    className={`${field.unit ? "input-group" : "form-group"}`}
                  >
                    {console.log(field.unit)}
                    <input
                      type={field.type}
                      required={field.isRequired}
                      readOnly={field.isReadonly}
                      className="form-control"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">
                        {field.unit}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))
          : null}

        <div className="form-group mt-5">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DrugTwo;
