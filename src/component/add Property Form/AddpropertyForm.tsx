import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as Yup from "yup";
import "./addform.css";
import { useMutation } from "react-query";
import { addPropertyApi } from "../../lib/Property.api";

const AddpropertyForm = () => {
  const mapdata = ["rent", "buy", "sell"];

  //!muatated
  const addProperty = useMutation({
    mutationKey: ["Add-Property"],
    mutationFn: (values) => addPropertyApi(values),
    onSuccess: (res) => {
      alert("Submitted");
    },
  });
  return (
    <Formik
      initialValues={{
        propertyIamge: "",
        propertyName: "",
        price: "",
        description: "",
        location: "",
        type: "",
      }}
      validationSchema={Yup.object({
        propertyImage: Yup.string(),
        propertyName: Yup.string().required("Property Name is required"),
        price: Yup.number()
          .required("Pirce is required")
          .min(1000)
          .max(1000000000),
        description: Yup.string().required("Description is required."),
        location: Yup.string().required("Please state the property location"),
        type: Yup.string().required().oneOf(["rent", "buy", "sell"]),
      })}
      onSubmit={(values: any) => {
        addProperty.mutate(values);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex justify-content-center align-items-center flex-column w-100  "
          style={{
            height: "500px",
            // border: "1px solid black",
            marginTop: "25vh",
          }}
        >
          <div className="addPropery-card">
            <h4 style={{ color: "#495E57" }}>Add Property</h4>
            {/* //!Property Name */}
            <div className="addProperty-form-child">
              <TextField
                id="filled-basic"
                label="Property Name"
                variant="outlined"
                className="addProperty-Form-input"
                {...formik.getFieldProps("propertyName")}
              />
              {formik.touched.propertyName && formik.errors.propertyName ? (
                <div>{formik.errors.propertyName}</div>
              ) : null}
            </div>

            {/* //!Price */}
            <div className="addProperty-form-child">
              <InputGroup className="mb-3 addProperty-Form-input ">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Price"
                  {...formik.getFieldProps("price")}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}
            </div>

            {/* //!Location */}
            <div className="addProperty-form-child">
              <TextField
                id="filled-basic"
                label="Location"
                variant="outlined"
                className="addProperty-Form-input"
                {...formik.getFieldProps("location")}
              />
              {formik.touched.location && formik.errors.location ? (
                <div>{formik.errors.location}</div>
              ) : null}
            </div>
            {/* //!TYPE */}

            <div className="addProperty-form-child">
              <Form.Select
                aria-label="Default select example"
                {...formik.getFieldProps("type")}
                className="addProperty-Form-input"
              >
                <option value={0}>Type</option>
                {mapdata.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </Form.Select>
              {formik.touched.type && formik.errors.type ? (
                <div>{formik.errors.type}</div>
              ) : null}
            </div>
            {/* //!Desciption */}
            <div className="addProperty-form-child">
              <InputGroup>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  {...formik.getFieldProps("description")}
                  placeholder="Description about the House"
                  style={{ minHeight: "100px" }}
                />
              </InputGroup>
              {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
              ) : null}
            </div>

            <div className="d-flex justify-content-between align-items-center addProperty-form-child">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <a href="/home">
                <h6>Go Back </h6>
              </a>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddpropertyForm;
