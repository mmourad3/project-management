import React from 'react'
const Feature = ({position, image, title, description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita  enim nam! Laboriosam quia enim modi!"}) => {
  const positionClass=position === "up" ? "md:-mt-4" : "";
  return (
    <div className={positionClass}>
      <div className="flex flex-col gap-4 justify-center p-6 border bg-white rounded-3xl w-full max-w-[275px] h-[233px] overflow-wrap featureScaleUp">
        <img className="w-15 h-15" src={image} alt={title} />
        <h4 className="text-3xl font-bold leading-snug">{title}</h4>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

export default Feature
