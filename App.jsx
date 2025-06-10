import React, { useState } from "react";

const summaryMetrics = [
  { id: 1, label: "Total Sheets", value: 128 },
  { id: 2, label: "Total Rows", value: "3.5M" },
  { id: 3, label: "Insights Generated", value: 2450 },
  { id: 4, label: "Users Active", value: 150 },
];

const recentFiles = [
  { id: 1, name: "Q1 Financials.xlsx", lastModified: "2025-06-10", rows: "24500" },
  { id: 2, name: "Marketing Data.xlsx", lastModified: "2025-06-08", rows: "18732" },
  { id: 3, name: "Sales Pipeline.xlsx", lastModified: "2025-06-05", rows: "30210" },
  { id: 4, name: "Customer Feedback.xlsx", lastModified: "2025-06-04", rows: "15400" },
];

const recentCreatedFiles = [
  { id: 1, name: "New Product Launch.xlsx", createdDate: "2025-06-09", rows: "15000" },
  { id: 2, name: "Market Research.xlsx", createdDate: "2025-06-08", rows: "12000" },
  { id: 3, name: "Sales Forecast.xlsx", createdDate: "2025-06-07", rows: "18000" },
];

const initialBlogPosts = [
  { id: 1, title: "Understanding Excel Formulas", date: "2025-06-01", excerpt: "Learn how to use formulas effectively in Excel." },
  { id: 2, title: "Data Visualization Techniques", date: "2025-06-05", excerpt: "Explore various techniques for visualizing data." },
  { id: 3, title: "Tips for Data Analysis", date: "2025-06-08", excerpt: "Get tips on how to analyze data efficiently." },
];

function LineChart() {
  return (
    <svg
      className="w-full h-24"
      viewBox="0 0 100 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Analytics trend line chart"
      role="img"
    >
      <polyline
        fill="none"
        stroke="#374151"
        strokeWidth="2"
        points="0,20 15,14 30,18 45,11 60,14 75,10 90,13 100,7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BarChart() {
  const data = [60, 85, 45, 70, 50, 90, 30];
  return (
    <div className="flex items-end space-x-2 h-24 w-full" aria-label="Bar chart showing weekly data" role="img">
      {data.map((value, idx) => (
        <div
          key={idx}
          style={{ height: `${value}%` }}
          className="w-4 bg-gray-700 rounded hover:bg-gray-900 transition-colors duration-300"
          title={`${value}%`}
        />
      ))}
    </div>
  );
}

export default function ExcelAnalyticsDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogExcerpt, setNewBlogExcerpt] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    const newBlogPost = {
      id: blogPosts.length + 1,
      title: newBlogTitle,
      date: new Date().toISOString().split("T")[0],
      excerpt: newBlogExcerpt,
    };
    setBlogPosts([...blogPosts, newBlogPost]);
    setNewBlogTitle("");
    setNewBlogExcerpt("");
  };

  const filteredBlogPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans">
      <header className="sticky top-0 bg-white shadow-sm z-30">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-tight text-gray-900 select-none cursor-default">Excel Analytics</div>
          <button className="sm:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className={`flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-gray-600 ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
            <li>
              <button
                onClick={() => setActiveNav("dashboard")}
                className={`font-semibold text-lg ${activeNav === "dashboard" ? "text-gray-900 border-b-2 border-gray-900" : "hover:text-gray-900 transition-colors duration-300"}`}
                aria-current={activeNav === "dashboard" ? "page" : undefined}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveNav("reports")}
                className={`font-semibold text-lg ${activeNav === "reports" ? "text-gray-900 border-b-2 border-gray-900" : "hover:text-gray-900 transition-colors duration-300"}`}
                aria-current={activeNav === "reports" ? "page" : undefined}
              >
                Reports
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveNav("blog")}
                className={`font-semibold text-lg ${activeNav === "blog" ? "text-gray-900 border-b-2 border-gray-900" : "hover:text-gray-900 transition-colors duration-300"}`}
                aria-current={activeNav === "blog" ? "page" : undefined}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveNav("settings")}
                className={`font-semibold text-lg ${activeNav === "settings" ? "text-gray-900 border-b-2 border-gray-900" : "hover:text-gray-900 transition-colors duration-300"}`}
                aria-current={activeNav === "settings" ? "page" : undefined}
              >
                Settings
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {activeNav === "dashboard" && (
          <>
            <section className="max-w-4xl mb-16">
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-4 text-gray-900">
                Unlock Insights from Your Excel Data
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Analyze, visualize, and generate powerful reports from your spreadsheets with a modern analytics dashboard.
              </p>
              <button
                type="button"
                className="mt-8 px-8 py-4 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition-colors duration-300"
              >
                Get Started
              </button>
            </section>

            <section aria-label="Summary Metrics" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {summaryMetrics.map(({ id, label, value }) => (
                <div
                  key={id}
                  className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default"
                  role="region"
                  aria-labelledby={`summary-label-${id}`}
                  tabIndex={0}
                >
                  <p id={`summary-label-${id}`} className="text-gray-500 font-medium uppercase tracking-wide text-xs mb-2">
                    {label}
                  </p>
                  <p className="text-3xl font-extrabold text-gray-900">{value}</p>
                </div>
              ))}
            </section>

            <section aria-label="Analytics Charts" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <article className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 select-none">Trend Over Time</h2>
                <LineChart />
              </article>
              <article className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 select-none">Weekly Activity</h2>
                <BarChart />
              </article>
            </section>

            <section aria-label="Recent Excel Files" className="mb-20">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent Files</h2>
              <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
                <table className="w-full text-left text-gray-700">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-semibold text-sm uppercase tracking-wide">File Name</th>
                      <th scope="col" className="px-6 py-3 font-semibold text-sm uppercase tracking-wide">Last Modified</th>
                      <th scope="col" className="px-6 py-3 font-semibold text-sm uppercase tracking-wide">Rows</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentFiles.map(({ id, name, lastModified, rows }) => (
                      <tr key={id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors duration-200 cursor-default">
                        <td className="px-6 py-4">{name}</td>
                        <td className="px-6 py-4">{lastModified}</td>
                        <td className="px-6 py-4">{rows}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-label="Recently Created Files" className="mb-20">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Recently Created Files</h2>
              <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
                <table className="w-full text-left text-gray-700">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-semibold text-sm uppercase tracking-wide">File Name</th>
                      <th scope="col" className="px-6 py-3 font-semibold text-sm uppercase tracking-wide">Created Date</th>
                      <th scope="col" className="px-6 py-3 font-semibold text-sm uppercase tracking-wide">Rows</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCreatedFiles.map(({ id, name, createdDate, rows }) => (
                      <tr key={id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors duration-200 cursor-default">
                        <td className="px-6 py-4">{name}</td>
                        <td className="px-6 py-4">{createdDate}</td>
                        <td className="px-6 py-4">{rows}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {activeNav === "blog" && (
          <section aria-label="Blog Posts" className="mb-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Blog Posts</h2>

            <form onSubmit={handleBlogSubmit} className="mb-6">
              <input
                type="text"
                placeholder="Blog Title"
                value={newBlogTitle}
                onChange={(e) => setNewBlogTitle(e.target.value)}
                className="border p-2 rounded w-full mb-2"
                required
              />
              <textarea
                placeholder="Blog Excerpt"
                value={newBlogExcerpt}
                onChange={(e) => setNewBlogExcerpt(e.target.value)}
                className="border p-2 rounded w-full mb-2"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
              >
                Publish Blog
              </button>
            </form>

            <input
              type="text"
              placeholder="Search Blogs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />

            <div className="space-y-4">
              {filteredBlogPosts.map(({ id, title, date, excerpt }) => (
                <div key={id} className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-500">{date}</p>
                  <p className="text-gray-700">{excerpt}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="text-center py-8 text-gray-500 text-sm select-none">
        &copy; 2025 Excel Analytics Platform. All rights reserved.
      </footer>
    </div>
  );
}
