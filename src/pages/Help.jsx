

const Help = () => {
  return (
    <div className="bg-blue-50 text-gray-800 px-4 py-10 sm:px-6 lg:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          How to Help
        </h1>
        
        {/* Why Your Help Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Why Your Help Matters
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Each winter, thousands of people across Bangladesh struggle to stay warm without adequate clothing. 
            By donating winter clothes, you’re not only providing warmth but also spreading hope and care to those 
            who need it the most. Together, we can make a meaningful impact.
          </p>
        </section>

        {/*  Ways to Contribute */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Ways You Can Contribute
          </h2>
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-blue-600">Donate Clothes</h3>
              <p className="text-gray-700 mt-2">
                Gather unused but good-condition winter clothes like jackets, blankets, and sweaters, 
                and donate them through our platform. Select a campaign and fill out the donation form.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-blue-600">Volunteer</h3>
              <p className="text-gray-700 mt-2">
                Join as a volunteer to help collect, sort, and distribute donations in your local area. 
                Your time and effort can bring smiles to many faces.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-blue-600">Spread the Word</h3>
              <p className="text-gray-700 mt-2">
                Share our mission with your friends and family through social media and word of mouth. 
                Help us reach more donors and volunteers across Bangladesh.
              </p>
            </div>
          </div>
        </section>

        {/*  Supported Divisions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Supported Divisions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We currently support donation campaigns in all major divisions across Bangladesh, including:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-2xl font-bold">
            <li>Dhaka</li>
            <li>Chittagong</li>
            <li>Rajshahi</li>
            <li>Khulna</li>
            <li>Barisal</li>
            <li>Sylhet</li>
          </ul>
        </section>

        {/* Section 4: How It Works */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            How It Works
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>Select a campaign from the "Donation Campaigns" page.</li>
            <li>Click on the "Donate Now" button to view the details.</li>
            <li>Fill out the donation form with item details and pickup location.</li>
            <li>Our volunteers will contact you to collect the items.</li>
            <li>Celebrate the joy of helping others!</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Help;
