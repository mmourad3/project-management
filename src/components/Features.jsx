import React from 'react'
import Feature from './Feature'
import TimeSlot from "../assets/images/features/time-slots.png";
import Tasks from "../assets/images/features/tasks.png";
import Onboarding from "../assets/images/features/onboarding.png";
import Collaboration from "../assets/images/features/collaboration.png";
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const {ref, inView}= useInView({
    threshold: 0.27,
    triggerOnce: true,
  });

  return (
    <>
      <div className="flex flex-col md:flex-row p-20 md:justify-around bg-gray-50 dark:bg-gray-800 gap-4">
        <section ref={ref} className={`flex flex-col justify-center text-center md:text-start md:items-start pl-5 w-full md:w-1/2 mb-10 md:mb-0 ${inView ? "feature-text-animate":""}`}>
          <p className="text-blue-400 mb-3">Learn about Features</p>
          <h3 className="dark:text-white text-5xl font-bold mb-2">Our Top Features</h3>
          <p className= 'dark:text-white mt-4 text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            praesentium facilis eligendi accusamus labore nobis unde sunt ab
            maiores ratione ex fuga dolore recusandae, enim nam! Laboriosam quia
            enim modi!
          </p>
        </section>
        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center md:mr-8 dark:text-black ${inView ? "feature-animate":""}`}>
          <Feature position={"up"} image={Tasks} title={"Tasks"} />
          <Feature image={TimeSlot} title={"Time Slots"} />
          <Feature position={"up"} image={Onboarding} title={"Onboarding"} />
          <Feature image={Collaboration} title={"Collaboration"} />
        </div>
      </div>
    </>
  );
}

export default Features
