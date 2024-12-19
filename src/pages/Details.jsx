import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {  toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const campaign = data.find((item) => item.id === parseInt(id));

  const { title, image, description, status, contactInfo, division } = campaign;

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    toast.success("Thank you! We will reach your destination soon.");
    formRef.current.reset(); // Reset the form fields
  };

  return (
    <>
      <header>
        <Header></Header>
      </header>
      <ToastContainer position="top-center"></ToastContainer>
      <main
        className="w-11/12 mx-auto md:grid md:grid-cols-12 p-3 my-10 justify-center items-start gap-4 border rounded-md"
      >
        <section className="col-span-8">
          <div className="card bg-base-100 border rounded-md">
            <figure>
              <img className="w-full h-2/4" src={image} alt={title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold">{title}</h2>
              <p>{description}</p>
              <h4 className="text-2xl font-semibold">Division: {division}</h4>
              <h5 className="text-xl font-semibold my-4">
                Status:
                <span
                  className="bg-green-50 text-green-900 rounded-full border border-green-600 px-4 py-2 ml-4"
                >
                  {status}
                </span>
              </h5>
              <h4 className="text-xl font-bold">Contact : {contactInfo}</h4>
              
            </div>
          </div>
        </section>
        <aside className="col-span-4">
          <div>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Donation Form
              </h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Quantity Field */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">
                    Quantity of Items
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="e.g., 2"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>

                {/* Item Type Field */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">
                    Item Type
                  </label>
                  <select
                    name="itemType"
                    className="w-full px-3 py-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select item type
                    </option>
                    <option value="blanket">Blanket</option>
                    <option value="jacket">Jacket</option>
                    <option value="sweater">Sweater</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Pickup Location Field */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">
                    Pickup Location
                  </label>
                  <textarea
                    name="pickupLocation"
                    placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                    className="w-full px-3 py-2 border rounded"
                    rows="3"
                    required
                  ></textarea>
                </div>

                {/* Additional Notes Field */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    placeholder="e.g., Please call before arriving."
                    className="w-full px-3 py-2 border rounded"
                    rows="2"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary w-full">
                    Submit Donation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </aside>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Details;
