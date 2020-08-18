import React, { CSSProperties } from 'react'
import Nav from '../../components/nav'
import hero from '../../assets/images/Hero-Image.jpg'
import pic from '../../assets/images/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg'
import pic1 from '../../assets/images/ian-dooley-_-JR5TxKNSo-unsplash.jpg'
import pic2 from '../../assets/images/aaron-huber-s95oB2n9jng-unsplash.jpg'
import hero2 from '../../assets/images/bence-balla-schottner-vFwjD8JLP4M-unsplash.jpg'

const myStyles: CSSProperties = {
  backgroundImage: "url('../../assets/images/Hero-Image.jpg')",
}
export const Home: React.FC = () => {
  return (
    // Hero Image
    <div
      className="bg-cover mt-0 pt-0"
      style={{
        backgroundImage: `url(${hero})`,
        maxHeight: 767,
        maxWidth: 'auto',
        height: 767,
        zIndex: 1,
      }}
    >
      {/* Search Bar */}
      <div className="container mx-auto px-10">
        {/* Nav Bar Component */}
        <Nav />

        <div className="flex justify-center">
          <h1 className="flex-1 text-white text-5xl w-64 p-32 mt-8 mb-4 text-center">
            Explore What's Missing
          </h1>
        </div>

        <form className="flex justify-center">
          <div
            className="flex w-3/4 bg-white text-xl font-medium focus:outline-none focus:shadow-outline border border-gray-300 max-w-4xl py-3 pl-10 pr-0 appearance-none leading-normal shadow-sm "
            style={{ borderRadius: 35 }}
          >
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none overflow-hidden"
              type="text"
              placeholder="Search City or Enter Zip Code..."
              aria-label="Full name"
            />
            <button
              className="flex-shrink-0 text-center bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-sm border-4 ml-3 mr-3 text-white py-1 px-2 rounded-full"
              type="button"
            >
              <span className="text-xl">Search</span>
            </button>
          </div>
        </form>
      </div>
      {/*  Search Bar Ends */}
      {/* Search Districts Component */}

      <div
        className="content-center m-4 pb-6 py-2 ml-auto mr-auto mt-48 bg-white shadow-lg"
        style={{ borderRadius: 5, width: '70%' }}
      >
        <p
          className="p-2 ml-4 text-gray-900 opacity-75 font-bold"
          style={{ fontSize: '1.75rem' }}
        >
          Search Districts
        </p>

        <div className="flex flex-no-wrap justify-center">
          <button className="w-1/6 flex-none p-3">
            <div
              className="text-center p-3 rounded-full"
              style={{ backgroundColor: '#805ad5' }}
            >
              <p className="flex justify-center text-white font-medium">
                Downtown
              </p>
            </div>
          </button>
          <button className="w-1/6 flex-none p-3">
            <div
              className="text-center p-3 rounded-full"
              style={{ backgroundColor: '#f15c5c' }}
            >
              <p className="flex justify-center text-white font-medium">
                Richmond
              </p>
            </div>
          </button>
          <button className="w-1/6 flex-none p-3">
            <div
              className="text-center  p-3 rounded-full text-white font-medium opacity-75"
              style={{ backgroundColor: '#263959' }}
            >
              <p className="flex justify-center text-white font-medium">
                Sunset
              </p>
            </div>
          </button>
          <button className="w-1/6 flex-none p-3">
            <div
              className="text-center p-3 rounded-full"
              style={{ backgroundColor: '#548687' }}
            >
              <p className="flex justify-center text-white font-medium">
                Upper Market
              </p>
            </div>
          </button>
          <button className="w-1/6 flex-none p-3">
            <div
              className="text-center p-3 rounded-full"
              style={{ backgroundColor: '#2a4365' }}
            >
              <p className="flex justify-center text-white font-medium">
                Bernal Heights
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* District Component Ends */}
      {/* Featured Listing Section */}
      <section
        className="flex justify-center"
        style={{
          maxHeight: 885,
          maxWidth: 'auto',
          height: 885,
        }}
      >
        <span className="absolute text-center p-10 text-4xl text-gray-900 opacity-75 font-bold mt-20 mb-20 ml-auto mr-auto pt-auto inline-block">
          Featured New Places for Rent in San Francisco
        </span>

        <div className="flex  mb-20 mt-64" style={{ maxWidth: 1325 }}>
          <div
            className="rounded overflow-hidden shadow-lg mb-auto mt-auto m-8 relative"
            style={{ width: 400 }}
          >
            <img src={pic} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="mb-2 ml-4 mt-4 pt-0 pb-1">
                <p
                  style={{
                    fontSize: '1.75rem',
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                  }}
                >
                  $3,500
                  <div
                    className="ml-4 inline-block rounded-full align-middle content-center"
                    style={{
                      width: 15,
                      height: 14,
                      backgroundColor: '#805ad5',
                    }}
                  />
                </p>
              </div>
              <span
                className="mb-2 ml-4 mr-4 mt-8 text-gray-700 text-sm"
                style={{ color: '545156', fontWeight: 'bold' }}
              >
                1234 Faker St, Sanfrancisco , CA 94611
              </span>
            </div>
            <div className="mb-2 mx-8 pl-0 pr-1 pb-4 pt-0">
              <span className="inline-flex  items-center  px-3 py-1 mr-2">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1562 8.5H2.8125V3.03571C2.8125 2.36615 3.31717 1.82143 3.9375 1.82143C4.33656 1.82143 4.68745 2.04702 4.88725 2.38607C4.30745 3.34259 4.37091 4.64677 5.12764 5.53695C4.98083 5.71579 4.98628 5.98912 5.14491 6.16034L5.54266 6.58966C5.70741 6.76748 5.97452 6.76748 6.1393 6.58966L9.4802 2.98365C9.64494 2.80583 9.64494 2.51752 9.4802 2.33966L9.08244 1.91034C8.92382 1.73912 8.67059 1.73328 8.50489 1.89171C7.87388 1.26677 7.018 1.07855 6.24864 1.30866C5.74035 0.518614 4.89417 0 3.9375 0C2.38669 0 1.125 1.36182 1.125 3.03571V8.5H0.84375C0.377754 8.5 0 8.90773 0 9.41071V10.0179C0 10.5208 0.377754 10.9286 0.84375 10.9286H1.125V12.1429C1.125 13.2217 1.5596 14.1908 2.25 14.8578V16.0893C2.25 16.5923 2.62775 17 3.09375 17H3.65625C4.12225 17 4.5 16.5923 4.5 16.0893V15.7857H13.5V16.0893C13.5 16.5923 13.8778 17 14.3438 17H14.9062C15.3722 17 15.75 16.5923 15.75 16.0893V14.8578C16.4404 14.1908 16.875 13.2217 16.875 12.1429V10.9286H17.1562C17.6222 10.9286 18 10.5208 18 10.0179V9.41071C18 8.90773 17.6222 8.5 17.1562 8.5Z"
                    fill="#545156"
                  />
                </svg>
                <p
                  className="px-2 ml-2 text-sm"
                  style={{ color: '545156', fontWeight: 'bold' }}
                >
                  3
                </p>
              </span>
              <span className="inline-flex  items-center justify-center px-3 py-1 mr-2 mt-1">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.95 7C6.19059 7 7.2 5.69151 7.2 4.08333C7.2 2.47516 6.19059 1.16667 4.95 1.16667C3.70941 1.16667 2.7 2.47516 2.7 4.08333C2.7 5.69151 3.70941 7 4.95 7ZM14.85 2.33333H8.55C8.30137 2.33333 8.1 2.59438 8.1 2.91667V8.16667H1.8V0.583333C1.8 0.261042 1.59863 0 1.35 0H0.45C0.201375 0 0 0.261042 0 0.583333V13.4167C0 13.739 0.201375 14 0.45 14H1.35C1.59863 14 1.8 13.739 1.8 13.4167V11.6667H16.2V13.4167C16.2 13.739 16.4014 14 16.65 14H17.55C17.7986 14 18 13.739 18 13.4167V6.41667C18 4.16135 16.5898 2.33333 14.85 2.33333Z"
                    fill="#545156"
                  />
                </svg>
                <p
                  className="px-2 ml-2 text-sm"
                  style={{ color: '545156', fontWeight: 'bold' }}
                >
                  3
                </p>
              </span>
              <span className="inline-flex items-center  px-2 ml-8 mb-1 text-base font-bold ">
                <p style={{ color: '#805ad5' }}>1,500 sqft</p>
              </span>
            </div>
          </div>
          <div
            className="rounded overflow-hidden shadow-lg mb-auto mt-auto m-8 relative"
            style={{ width: 400 }}
          >
            <img src={pic1} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="mb-2 ml-4 mt-4 pt-0 pb-1">
                <p
                  style={{
                    fontSize: '1.75rem',
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                  }}
                >
                  $3,500
                  <div
                    className="ml-4 inline-block rounded-full align-middle content-center"
                    style={{
                      width: 15,
                      height: 14,
                      backgroundColor: '#f15c5c',
                    }}
                  />
                </p>
              </div>
              <span
                className="mb-2 ml-4 mr-4 mt-8 text-gray-700 text-sm"
                style={{ color: '545156', fontWeight: 'bold' }}
              >
                1234 Faker St, Sanfrancisco , CA 94611
              </span>
            </div>
            <div className="mb-2 mx-8 pl-0 pr-1 pb-4 pt-0">
              <span className="inline-flex  items-center  px-3 py-1 mr-2">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1562 8.5H2.8125V3.03571C2.8125 2.36615 3.31717 1.82143 3.9375 1.82143C4.33656 1.82143 4.68745 2.04702 4.88725 2.38607C4.30745 3.34259 4.37091 4.64677 5.12764 5.53695C4.98083 5.71579 4.98628 5.98912 5.14491 6.16034L5.54266 6.58966C5.70741 6.76748 5.97452 6.76748 6.1393 6.58966L9.4802 2.98365C9.64494 2.80583 9.64494 2.51752 9.4802 2.33966L9.08244 1.91034C8.92382 1.73912 8.67059 1.73328 8.50489 1.89171C7.87388 1.26677 7.018 1.07855 6.24864 1.30866C5.74035 0.518614 4.89417 0 3.9375 0C2.38669 0 1.125 1.36182 1.125 3.03571V8.5H0.84375C0.377754 8.5 0 8.90773 0 9.41071V10.0179C0 10.5208 0.377754 10.9286 0.84375 10.9286H1.125V12.1429C1.125 13.2217 1.5596 14.1908 2.25 14.8578V16.0893C2.25 16.5923 2.62775 17 3.09375 17H3.65625C4.12225 17 4.5 16.5923 4.5 16.0893V15.7857H13.5V16.0893C13.5 16.5923 13.8778 17 14.3438 17H14.9062C15.3722 17 15.75 16.5923 15.75 16.0893V14.8578C16.4404 14.1908 16.875 13.2217 16.875 12.1429V10.9286H17.1562C17.6222 10.9286 18 10.5208 18 10.0179V9.41071C18 8.90773 17.6222 8.5 17.1562 8.5Z"
                    fill="#545156"
                  />
                </svg>
                <p
                  className="px-2 ml-2 text-sm"
                  style={{ color: '545156', fontWeight: 'bold' }}
                >
                  3
                </p>
              </span>
              <span className="inline-flex  items-center justify-center px-3 py-1 mr-2 mt-1">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.95 7C6.19059 7 7.2 5.69151 7.2 4.08333C7.2 2.47516 6.19059 1.16667 4.95 1.16667C3.70941 1.16667 2.7 2.47516 2.7 4.08333C2.7 5.69151 3.70941 7 4.95 7ZM14.85 2.33333H8.55C8.30137 2.33333 8.1 2.59438 8.1 2.91667V8.16667H1.8V0.583333C1.8 0.261042 1.59863 0 1.35 0H0.45C0.201375 0 0 0.261042 0 0.583333V13.4167C0 13.739 0.201375 14 0.45 14H1.35C1.59863 14 1.8 13.739 1.8 13.4167V11.6667H16.2V13.4167C16.2 13.739 16.4014 14 16.65 14H17.55C17.7986 14 18 13.739 18 13.4167V6.41667C18 4.16135 16.5898 2.33333 14.85 2.33333Z"
                    fill="#545156"
                  />
                </svg>
                <p
                  className="px-2 ml-2 text-sm"
                  style={{ color: '545156', fontWeight: 'bold' }}
                >
                  3
                </p>
              </span>
              <span className="inline-flex items-center  px-2 ml-8 mb-1 text-base font-bold ">
                <p style={{ color: '#f15c5c' }}>1,500 sqft</p>
              </span>
            </div>
          </div>
          <div
            className="rounded overflow-hidden shadow-lg mb-auto mt-auto m-8 relative"
            style={{ width: 400 }}
          >
            <img src={pic2} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="mb-2 ml-4 mt-4 pt-0 pb-1">
                <p
                  style={{
                    fontSize: '1.75rem',
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                  }}
                >
                  $3,500
                  <div
                    className="ml-4 inline-block rounded-full align-middle content-center"
                    style={{
                      width: 15,
                      height: 14,
                      backgroundColor: '#2a4365',
                    }}
                  />
                </p>
              </div>
              <span
                className="mb-2 ml-4 mr-4 mt-8 text-gray-700 text-sm"
                style={{ color: '545156', fontWeight: 'bold' }}
              >
                1234 Faker St, Sanfrancisco , CA 94611
              </span>
            </div>
            <div className="mb-2 mx-8 pl-0 pr-1 pb-4 pt-0">
              <span className="inline-flex  items-center  px-3 py-1 mr-2">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1562 8.5H2.8125V3.03571C2.8125 2.36615 3.31717 1.82143 3.9375 1.82143C4.33656 1.82143 4.68745 2.04702 4.88725 2.38607C4.30745 3.34259 4.37091 4.64677 5.12764 5.53695C4.98083 5.71579 4.98628 5.98912 5.14491 6.16034L5.54266 6.58966C5.70741 6.76748 5.97452 6.76748 6.1393 6.58966L9.4802 2.98365C9.64494 2.80583 9.64494 2.51752 9.4802 2.33966L9.08244 1.91034C8.92382 1.73912 8.67059 1.73328 8.50489 1.89171C7.87388 1.26677 7.018 1.07855 6.24864 1.30866C5.74035 0.518614 4.89417 0 3.9375 0C2.38669 0 1.125 1.36182 1.125 3.03571V8.5H0.84375C0.377754 8.5 0 8.90773 0 9.41071V10.0179C0 10.5208 0.377754 10.9286 0.84375 10.9286H1.125V12.1429C1.125 13.2217 1.5596 14.1908 2.25 14.8578V16.0893C2.25 16.5923 2.62775 17 3.09375 17H3.65625C4.12225 17 4.5 16.5923 4.5 16.0893V15.7857H13.5V16.0893C13.5 16.5923 13.8778 17 14.3438 17H14.9062C15.3722 17 15.75 16.5923 15.75 16.0893V14.8578C16.4404 14.1908 16.875 13.2217 16.875 12.1429V10.9286H17.1562C17.6222 10.9286 18 10.5208 18 10.0179V9.41071C18 8.90773 17.6222 8.5 17.1562 8.5Z"
                    fill="#545156"
                  />
                </svg>
                <p
                  className="px-2 ml-2 text-sm"
                  style={{ color: '545156', fontWeight: 'bold' }}
                >
                  3
                </p>
              </span>
              <span className="inline-flex  items-center justify-center px-3 py-1 mr-2 mt-1">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.95 7C6.19059 7 7.2 5.69151 7.2 4.08333C7.2 2.47516 6.19059 1.16667 4.95 1.16667C3.70941 1.16667 2.7 2.47516 2.7 4.08333C2.7 5.69151 3.70941 7 4.95 7ZM14.85 2.33333H8.55C8.30137 2.33333 8.1 2.59438 8.1 2.91667V8.16667H1.8V0.583333C1.8 0.261042 1.59863 0 1.35 0H0.45C0.201375 0 0 0.261042 0 0.583333V13.4167C0 13.739 0.201375 14 0.45 14H1.35C1.59863 14 1.8 13.739 1.8 13.4167V11.6667H16.2V13.4167C16.2 13.739 16.4014 14 16.65 14H17.55C17.7986 14 18 13.739 18 13.4167V6.41667C18 4.16135 16.5898 2.33333 14.85 2.33333Z"
                    fill="#545156"
                  />
                </svg>
                <p
                  className="px-2 ml-2 text-sm"
                  style={{ color: '545156', fontWeight: 'bold' }}
                >
                  3
                </p>
              </span>
              <span className="inline-flex items-center  px-2 ml-8 mb-1 text-base font-bold ">
                <p style={{ color: '#2a4365' }}>1,500 sqft</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* End of Feature Listing Section */}
      {/* Life Outside the Door Section */}
      <div
        className="bg-cover mt-1 pt-1"
        style={{
          backgroundImage: `url(${hero2})`,
          height: 950,
          maxWidth: 'auto',
        }}
      >
        <div className="flex items-center h-full">
          <h1
            className="flex-1 text-white text-5xl w-64 p-4 text-center font-bold"
            style={{
              marginTop: '20rem',
              fontFamily: 'Open Sans',
              marginBottom: '20rem',
            }}
          >
            Ready for Life Outside the Dorm?
          </h1>
        </div>
      </div>
    </div>
  )
}
