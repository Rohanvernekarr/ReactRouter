import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Augmented Reality development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      These developers work on creating innovative AR solutions across various industries such as
                       gaming, education, healthcare, and retail, enhancing the way we perceive and interact with 
                       our real-world environment by overlaying digital content in meaningful ways. From mobile apps 
                       to wearable devices, AR developers continuously push the boundaries of what's possible by 
                       leveraging advanced technologies like ARKit, ARCore, and machine learning.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Augmented Reality offers immersive experiences, enabling users to interact with digital content 
                      overlaid in the real world. Developers push the boundaries of technology to create seamless, dynamic, 
                      and interactive experiences, transforming industries from gaming to healthcare.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}