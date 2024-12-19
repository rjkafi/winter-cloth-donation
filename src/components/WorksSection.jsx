

const WorksSection = () => {
    return (
        <section className="how-it-works-section py-12 bg-gray-100 mb-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-4  border">
              <img 
              className="w-32 h-28"
              src="https://img.icons8.com/?size=96&id=xz9FgM6BSfU3&format=png" alt="" />
              <h3 className="text-xl font-semibold mb-2">Donate Clothes</h3>
              <p className="text-center">
                Choose from our listed donation campaigns and donate winter clothes to support those in need.
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="flex flex-col items-center p-4  border">
              <img 
              className="w-24 h-28"
              src="https://img.icons8.com/?size=160&id=Xbf3Nvffq0pG&format=png" alt="" />
              <h3 className="text-xl font-semibold mb-2">Find Collection Points</h3>
              <p className="text-center">
                Locate our collection points across various divisions and drop off your donations.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="flex flex-col items-center p-4 border">
              <img 
              className="w-24 h-28"
              src="https://img.icons8.com/?size=160&id=xECCrLrOdr6A&format=png" alt="" />
              <h3 className="text-xl font-semibold mb-2">Support the Campaign</h3>
              <p className="text-center">
                Your contributions help us deliver warm clothes to those in need, making a big difference this winter.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WorksSection;