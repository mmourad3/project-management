import React from 'react'
import Feature from './Feature'
import TimeSlot from "../assets/images/features/time-slots.png";
import Tasks from "../assets/images/features/tasks.png";
import Onboarding from "../assets/images/features/onboarding.png";
import Collaboration from "../assets/images/features/collaboration.png";

const Features = () => {
  return (
    <>
      <div className="flex p-20 gap-30 bg-gray-50">
        <section className="flex flex-col w-1/2 feature-text-animate">
          <p className="text-blue-400 mb-3">Learn about Features</p>
          <h3 className="text-3xl font-bold mb-2">Our Top Features</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            praesentium facilis eligendi accusamus labore nobis unde sunt ab
            maiores ratione ex fuga dolore recusandae, enim nam! Laboriosam quia
            enim modi!
          </p>
        </section>
        <div className="grid grid-cols-2 flex gap-10 feature-animate">
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
