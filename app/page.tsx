export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="text-center py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-black">Ordentra ERP</h1>

          <p className="text-lg text-gray-600 mt-4">
            Manage operations, expenses and approvals in one powerful ERP
            platform.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-violet-600 cursor-pointer transition ease-in-out text-white px-6 py-3 rounded-lg">
            request a demo
          </button>
        </div>
      </section>

      {/* feature section below */}

      <section className="py-20 text-center bg-white">
        <h2 className=" text-3xl font-bold text-black">
          Powerful ERP Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl  transition text-left">
            <h3 className="text-xl font-semibold text-black">
              Budget Planning & Control
            </h3>

            <p className="text-gray-600 mt-2">
              Create budgets by department, site and cost center with
              configurable limits and overspend alerts.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md  transition hover:shadow-xl  hover:-translate-y-1 text-left">
            <h3 className="text-xl font-semibold text-black">
              Budget Lifecycle Management
            </h3>
            <p className="text-gray-600 mt-2">
              Full approval workflow from draft to active budgets with revision
              and rejection cycles.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md  transition hover:shadow-xl  hover:-translate-y-1 text-left">
            <h3 className="text-xl font-semibold text-black">
              Item Classification Engine
            </h3>
            <p className="text-gray-600 mt-2">
              Categorize operational items like consumables, MRO, raw materials
              and services.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md  transition hover:shadow-xl  hover:-translate-y-1 text-left">
            <h3 className="text-xl font-semibold text-black">
              Cost Allocation
            </h3>
            <p className="text-gray-600 mt-2">
              Allocate operational costs across departments, projects and cost
              centers.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md  transition hover:shadow-xl  hover:-translate-y-1 text-left">
            <h3 className="text-xl font-semibold text-black">
              OpEx Reports & Analytics
            </h3>
            <p className="text-gray-600 mt-2">
              Monitor consumption, stock valuation, material movement and
              reorder alerts.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md  transition hover:shadow-xl  hover:-translate-y-1 text-left">
            <h3 className="text-xl font-semibold text-black">
              Vendor Performance Tracking
            </h3>
            <p className="text-gray-600 mt-2">
              Evaluate vendor performance trends and procurement efficiency over
              time.
            </p>
          </div>
        </div>
      </section>

      {/* how it works section */}

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-black">How Ordentra Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto px-6">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-black">Connect</h3>
            <p className="text-gray-600 pt-2">
              Integrate your departments, sites and cost centers into one
              centralized ERP platform.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-black">Track</h3>
            <p className="text-gray-600 mt-2">
              Monitor budgets, expenses, materials and vendor activity in real
              time.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-black">Optimize</h3>
            <p className="text-gray-600 mt-2">
              Use analytics and reporting tools to improve operational
              efficiency and cost control.
            </p>
          </div>
        </div>
      </section>

      {/* pricing section  */}

      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-black">
          Simple Pricing Plan
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">

          {/* pricing cont 1 */}

          <div className="p-8 border rounded-xl shadow-md text-left transition hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-black">
              Starter
            </h3>
            <p className="text-gray-500 mt-2">
              Ideal for small teams
            </p>
            <p className="text-4xl text-black font-bold mt-6">
              $5 <span className="text-lg text-gray-500">/mo</span>
            </p>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 rounded-lg transition ease-in-out">
              Get Started
            </button>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ Budget management</li>
              <li>✔ Expense tracking</li>
              <li>✔ Basic reports</li>
              <li>✔ Vendor tracking</li>
            </ul>

          </div>

          {/* pricing cont 2 */}


          <div className="p-8 border rounded-xl bg-blue-600 text-white   shadow-2xl scale-105 text-left transition hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold">
              Pro
            </h3>
            <p className="text-blue-100 mt-2">
              Ideal for growing teams
            </p>
            <p className="text-4xl font-bold mt-6">
              $9 <span className="text-lg text-blue-200">/mo</span>
            </p>
            <button className="mt-6 w-full bg-white text-blue-600   py-2 rounded-lg font-medium hover:bg-gray-100 cursor-pointer transition ease-in-out">
              Get Started
            </button>

            <ul className="mt-6 space-y-2 text-blue-100">
              <li>✔ All starter features</li>
              <li>✔ Advanced analytics</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
            </ul>

          </div>

          {/* piricing cont 3 */}

          <div className="p-8 border rounded-xl shadow-md text-left transition hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-black">
              Enterprise
            </h3>
            <p className="text-gray-500 mt-2">
              Best for large organizations
            </p>
            <p className="text-4xl text-black font-bold mt-6">
              $12 <span className="text-lg text-gray-500">/mo</span>
            </p>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 rounded-lg transition ease-in-out">
              Get Started
            </button>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ All Pro features</li>
              <li>✔ Dedicated support</li>
              <li>✔ Advanced reporting</li>
              <li>✔ Unlimited users</li>
            </ul>

          </div>

        </div>
      </section>

      {/* testimonials section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-black">
          What Our Customers Say
        </h2>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">



          {/* testimonial 1 */}

          <div className="p-6 bg-white border rounded-lg shadow-md  transition hover:shadow-xl  hover:-translate-y-1 text-left">
            <p className="text-gray-600">
              "Ordentra helped us streamline our operational budgets and track expenses across departments efficiently."
            </p>
            <p className="mt-4 font-semibold text-black">
              Rahul Sharma
            </p>
            <p className="text-gray-500 text-sm">
              Operations Manager
            </p>
            <p className="text-gray-500 text-sm">
              ~Tata Steel
            </p>
          </div>

          {/* testimonial 2 */}

          <div className="p-6 bg-white border rounded-lg shadow-md  transition hover:shadow-xl  hover:-translate-y-1 text-left">
            <p className="text-gray-600">
              "The reporting and analytics tools have made cost optimization much easier for our team."
            </p>

            <p className="mt-4 font-semibold text-black">
              Priya Mehta
            </p>

            <p className="text-gray-500 text-sm">
              Finance Lead
            </p>

            <p className="text-gray-500 text-sm">
              ~Infosys
            </p>
          </div>

          {/* testimonial 3 */}

          <div className="p-6 bg-white border rounded-lg shadow-md  transition hover:shadow-xl  hover:-translate-y-1 text-left">
            <p className="text-gray-600">
              "Vendor tracking and budget approvals are now faster and more transparent with Ordentra."
            </p>

            <p className="mt-4 font-semibold text-black">
              Arjun Patel
            </p>

            <p className="text-gray-500 text-sm">
              Procurement Head
            </p>

            <p className="text-gray-500 text-sm">
              ~Larsen & Toubro
            </p>
          </div>
        </div>
        <p className="text-gray-500 m-10">
          Trusted by 100+ teams managing operations with Ordentra
        </p>
      </section>

      {/* footer section  */}

      <footer className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* company */}

          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Ordentra
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Ordentra is a modern ERP platform designed to help organizations
              manage operational expenses, procurement, approvals and analytics in one unified system.
            </p>
          </div>

          {/* modules */}
          <div>
            <h4 className="font-semibold text-black mb-4">
              Modules
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Budget Management</li>
              <li className="hover:text-blue-600 cursor-pointer">Expense Tracking</li>
              <li className="hover:text-blue-600 cursor-pointer">Vendor Management</li>
              <li className="hover:text-blue-600 cursor-pointer">Operational Analytics</li>
              <li className="hover:text-blue-600 cursor-pointer">Approval Workflows</li>
              <li className="hover:text-blue-600 cursor-pointer">Inventory Tracking</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-black mb-4">
              Solutions
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Manufacturing</li>
              <li className="hover:text-blue-600 cursor-pointer">Enterprise Operations</li>
              <li className="hover:text-blue-600 cursor-pointer">Finance Teams</li>
              <li className="hover:text-blue-600 cursor-pointer">Procurement</li>
              <li className="hover:text-blue-600 cursor-pointer">Compliance & Reporting</li>
              <li className="hover:text-blue-600 cursor-pointer">Operational Intelligence</li>
            </ul>
          </div>

          {/* contact */}

          <div>
            <h4 className="font-semibold text-black mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li>A 66/1, Mayapuri</li>
              <li>Phase II, 110064</li>
              <li>Delhi, New Delhi</li>
              <li className="hover:text-blue-600 cursor-pointer">+91 98 21 25 25 21</li>
              <li className="hover:text-blue-600 cursor-pointer">contact@ordentra.com</li>
            </ul>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-600 text-sm">

          © 2026 Ordentra Technologies Pvt. Ltd. All rights reserved.

          <div className="mt-3 flex justify-center gap-6">
            <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
            <span className="hover:text-blue-600 cursor-pointer">Terms</span>
            <span className="hover:text-blue-600 cursor-pointer">Cookie Preferences</span>
          </div>

        </div>

      </footer>
    </main>
  );
}
