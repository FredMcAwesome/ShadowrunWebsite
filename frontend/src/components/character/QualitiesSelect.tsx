import { Qualities, QualityEnum } from "../../data/Qualities.js";
import type { IQuality } from "../../data/Qualities.js";
import React, { useState } from "react";
import Dropdown from "react-dropdown";

export const QualitiesSelect = function () {
  const [positiveQualitiesSelected, setPositiveQualitiesSelected] = useState<
    Array<IQuality>
  >([]);
  const [negativeQualitiesSelected, setNegativeQualitiesSelected] = useState<
    Array<IQuality>
  >([]);
  return (
    <React.Fragment>
      <div>
        <h1>Positive Qualities</h1>
        {QualitySelection(
          true,
          positiveQualitiesSelected,
          setPositiveQualitiesSelected
        )}
      </div>
      <div>
        <h1>Negative Qualities</h1>
        {QualitySelection(
          false,
          negativeQualitiesSelected,
          setNegativeQualitiesSelected
        )}
      </div>
    </React.Fragment>
  );

  function QualitySelection(
    positive: boolean,
    qualitiesList: Array<IQuality>,
    setQualities: React.Dispatch<React.SetStateAction<IQuality[]>>
  ) {
    return (
      <div>
        {qualitiesList.map((quality, index) => {
          return (
            <div>
              {qualityDropdown(
                QualityEnum[quality.id],
                positive,
                qualitiesList,
                setQualities
              )}
              <p>{quality.description}</p>
              <button
                onClick={() => {
                  if (qualitiesList.length - 1 === index) {
                    setQualities([...qualitiesList.slice(0, index)]);
                  } else {
                    setQualities([
                      ...qualitiesList.slice(0, index),
                      ...qualitiesList.slice(index),
                    ]);
                  }
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
        {qualityDropdown(
          "Select a Quality",
          positive,
          qualitiesList,
          setQualities
        )}
      </div>
    );
  }

  function qualityDropdown(
    currentValue: string,
    positive: boolean,
    qualitiesList: Array<IQuality>,
    setQualities: React.Dispatch<React.SetStateAction<IQuality[]>>
  ) {
    return (
      <Dropdown
        options={Qualities.filter(
          (quality) => quality.positive === positive
        ).map((quality) => {
          return { label: quality.name, value: QualityEnum[quality.id] };
        })}
        value={currentValue}
        onChange={(arg) => {
          const newQuality = Qualities.find((quality) => {
            return QualityEnum[quality.id] === arg.value;
          });
          if (newQuality) setQualities([...qualitiesList, newQuality]);
        }}
        placeholder={"Select an option"}
        className={positive ? "positiveQualities" : "negativeQualities"}
      />
    );
  }
};
