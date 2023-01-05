import { Qualities, QualityEnum } from "../../data/Qualities.js";
import type { IQuality, ISubquality } from "../../data/Qualities.js";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";

export interface ISelectedQuality extends IQuality {
  costSelected?: number;
  ratingSelected?: number;
  subqualitySelected?: ISubquality;
}

interface IProps {
  karmaPoints: number;
  setKarmaPoints: (loadingKarma: number) => void;
  positiveQualitiesSelected: Array<ISelectedQuality>;
  setPositiveQualitiesSelected: (
    loadingPositiveQualities: Array<ISelectedQuality>
  ) => void;
  negativeQualitiesSelected: Array<ISelectedQuality>;
  setNegativeQualitiesSelected: (
    loadingNegativeQualities: Array<ISelectedQuality>
  ) => void;
}

export const QualitiesSelect = function (props: IProps) {
  function setKarma(removeKarma: boolean, difference: number) {
    props.setKarmaPoints(
      props.karmaPoints + (removeKarma ? -1 : 1) * difference
    );
  }

  // This is a SUPER hacky way to reset the selection on dropdowns...
  const [newQualityPlaceholder, setNewQualityPlaceholder] = useState({
    text: "Select Quality",
    extra: " ",
  });
  useEffect(() => {
    setNewQualityPlaceholder({
      text: newQualityPlaceholder.text,
      extra: newQualityPlaceholder.extra === " " ? "" : " ",
    });
  }, [props.positiveQualitiesSelected, props.negativeQualitiesSelected]);

  return (
    <React.Fragment>
      <div>
        <p>
          Karma Remaining: <span id="karma_points">{props.karmaPoints}</span>
        </p>
      </div>
      <div>
        <h1>Positive Qualities</h1>
        <QualitySelectionComponent
          positive={true}
          qualitiesList={props.positiveQualitiesSelected}
          setQualities={props.setPositiveQualitiesSelected}
          setKarma={setKarma}
          newQualityPlaceholder={newQualityPlaceholder}
        />
      </div>
      <div>
        <h1>Negative Qualities</h1>
        <QualitySelectionComponent
          positive={false}
          qualitiesList={props.negativeQualitiesSelected}
          setQualities={props.setNegativeQualitiesSelected}
          setKarma={setKarma}
          newQualityPlaceholder={newQualityPlaceholder}
        />
      </div>
    </React.Fragment>
  );
};

interface ISubqualityProps {
  quality: ISelectedQuality;
  qualitiesList: ISelectedQuality[];
  index: number;
  setKarma: (removeKarma: boolean, difference: number) => void;
  setQualities: (loadingQualities: Array<ISelectedQuality>) => void;
}

const SubqualitiesComponent = function ({
  quality,
  qualitiesList,
  index,
  setKarma,
  setQualities,
}: ISubqualityProps) {
  return (
    <div>
      <h4>Subquality:</h4>
      <Dropdown
        options={quality.subqualities!.map((subquality) => {
          if (subquality.cost)
            return {
              value: subquality.name,
              label: subquality.name + " - Cost: " + subquality.cost,
            };
          else return subquality.name;
        })}
        value={
          quality.subqualities!.find(
            (subquality) => subquality.id === quality.subqualitySelected?.id
          )?.name || "Select Subquality"
        }
        onChange={(arg) => {
          const currentCost = qualitiesList[index].costSelected;
          const newQualities = [...qualitiesList];
          const newSubquality = quality.subqualities?.find(
            (subquality) => subquality.name === arg.value
          );
          newQualities[index].subqualitySelected = newSubquality;
          const newCost = newSubquality?.cost as number;
          const difference = newCost - (currentCost || 0);
          if (newCost !== undefined) {
            newQualities[index].costSelected = newCost;
            setKarma(newQualities[index].positive, difference);
          }
          setQualities(newQualities);
        }}
        className={
          quality.subqualitySelected
            ? QualityEnum[quality.id] + quality.subqualitySelected.name
            : QualityEnum[quality.id] + "_newSubquality"
        }
      />
      {quality.subqualitySelected && (
        <p>{quality.subqualitySelected.description}</p>
      )}
    </div>
  );
};

interface IKarmaProps {
  quality: ISelectedQuality;
  qualitiesList: ISelectedQuality[];
  index: number;
  setKarma: (removeKarma: boolean, difference: number) => void;
  setQualities: (loadingQualities: Array<ISelectedQuality>) => void;
}

const KarmaComponent = function ({
  quality,
  qualitiesList,
  index,
  setKarma,
  setQualities,
}: IKarmaProps) {
  return (
    <div>
      <h4>Karma cost: </h4>
      {typeof quality.cost !== "number" &&
      quality.subqualities === undefined ? (
        <Dropdown
          options={quality.cost.map((cost) => cost.toString())}
          value={quality.costSelected?.toString() || "Select Karma value"}
          onChange={(arg) => {
            const currentCost = qualitiesList[index].costSelected;
            const newQualities = [...qualitiesList];
            const newCost = parseInt(arg.value);
            newQualities[index].costSelected = newCost;
            let difference = newCost;
            const selectedQuality = newQualities[index];
            if (currentCost !== undefined) {
              difference = newCost - currentCost;
            }
            if (
              selectedQuality.maxRating === undefined ||
              selectedQuality.ratingSelected !== undefined
            ) {
              difference *= selectedQuality.ratingSelected || 1;
              setKarma(selectedQuality.positive, difference);
            }
            setQualities(newQualities);
          }}
          className={
            quality.costSelected
              ? QualityEnum[quality.id] + quality.costSelected.toString()
              : QualityEnum[quality.id] + "_newCost"
          }
        />
      ) : (
        <span className="karmaCost">
          {quality.subqualities
            ? quality.costSelected || "Select Quality"
            : quality.cost.toString()}
        </span>
      )}
    </div>
  );
};

interface IRatingProps {
  quality: ISelectedQuality;
  qualitiesList: ISelectedQuality[];
  index: number;
  setKarma: (removeKarma: boolean, difference: number) => void;
  setQualities: (loadingQualities: Array<ISelectedQuality>) => void;
}

const RatingComponent = function ({
  quality,
  qualitiesList,
  index,
  setKarma,
  setQualities,
}: IRatingProps) {
  return (
    <p>
      <h4>Rating:</h4>
      <Dropdown
        options={[...Array(quality.maxRating).keys()].map((rating) =>
          (rating + 1).toString()
        )}
        value={quality.ratingSelected?.toString() || "Select Rating value"}
        onChange={(arg) => {
          const newQualities = [...qualitiesList];
          const currentRating = qualitiesList[index].ratingSelected || 0;
          const newRating = parseInt(arg.value);
          newQualities[index].ratingSelected = newRating;

          let currentCost = 0;
          const selectedQuality = newQualities[index];
          if (
            selectedQuality.costSelected ||
            typeof selectedQuality.cost === "number"
          ) {
            currentCost =
              selectedQuality.costSelected || (selectedQuality.cost as number);
            const difference = currentCost * (newRating - currentRating);
            setKarma(selectedQuality.positive, difference);
          }
          setQualities(newQualities);
        }}
        className={
          quality.ratingSelected
            ? QualityEnum[quality.id] + quality.ratingSelected.toString()
            : QualityEnum[quality.id] + "_newRating"
        }
      />
    </p>
  );
};

interface IQualityDropdownProps {
  positive: boolean;
  currentValue: string;
  qualitiesList: ISelectedQuality[];
  setQualities: (loadingQualities: Array<ISelectedQuality>) => void;
  setKarma: (removeKarma: boolean, difference: number) => void;
  index: number;
}

function QualityDropdownComponent({
  positive,
  currentValue,
  qualitiesList,
  setQualities,
  setKarma,
  index,
}: IQualityDropdownProps) {
  return (
    <Dropdown
      options={Qualities.filter((quality) => quality.positive === positive).map(
        (quality) => {
          return {
            label: quality.name,
            value: QualityEnum[quality.id],
          };
        }
      )}
      value={currentValue}
      onChange={(arg) => {
        const newQuality = JSON.parse(
          JSON.stringify(
            Qualities.find((quality) => {
              return QualityEnum[quality.id] === arg.value;
            })
          )
        );
        if (newQuality) {
          if (index === -1) {
            setQualities([...qualitiesList, newQuality]);
            if (
              typeof newQuality.cost === "number" &&
              newQuality.maxRating === undefined
            ) {
              setKarma(newQuality.positive, newQuality.cost);
            }
          } else {
            const oldQuality = qualitiesList[index];
            if (qualitiesList.length - 1 === index) {
              setQualities([...qualitiesList.slice(0, index), newQuality]);
            } else {
              setQualities([
                ...qualitiesList.slice(0, index),
                newQuality,
                ...qualitiesList.slice(index + 1),
              ]);
            }
            let newCost = 0;
            if (
              typeof newQuality.cost === "number" &&
              newQuality.maxRating === undefined
            ) {
              newCost = newQuality.cost;
            }
            let oldCost =
              oldQuality.subqualities || typeof oldQuality.cost !== "number"
                ? oldQuality.costSelected || 0
                : oldQuality.cost || 0;
            oldCost *= oldQuality.ratingSelected || 1;
            setKarma(newQuality.positive, newCost - oldCost);
          }
        } else {
          console.error("Quality: " + arg.label + " not found");
        }
      }}
      className={
        currentValue.startsWith("Select")
          ? positive
            ? "newPositiveQuality"
            : "newNegativeQuality"
          : currentValue
      }
    />
  );
}

interface IQualitySelectionProps {
  positive: boolean;
  qualitiesList: ISelectedQuality[];
  setQualities: (loadingQualities: Array<ISelectedQuality>) => void;
  setKarma: (removeKarma: boolean, difference: number) => void;
  newQualityPlaceholder: { text: string; extra: string };
}

const QualitySelectionComponent = function ({
  positive,
  qualitiesList,
  setQualities,
  setKarma,
  newQualityPlaceholder,
}: IQualitySelectionProps) {
  return (
    <div>
      {qualitiesList.map((quality, index) => {
        return (
          <div>
            <QualityDropdownComponent
              currentValue={QualityEnum[quality.id]}
              positive={positive}
              qualitiesList={qualitiesList}
              setQualities={setQualities}
              setKarma={setKarma}
              index={index}
            />
            <p>{quality.description}</p>
            {quality.subqualities && (
              <SubqualitiesComponent
                quality={quality}
                qualitiesList={qualitiesList}
                index={index}
                setKarma={setKarma}
                setQualities={setQualities}
              />
            )}
            <KarmaComponent
              quality={quality}
              qualitiesList={qualitiesList}
              index={index}
              setKarma={setKarma}
              setQualities={setQualities}
            />
            {quality.maxRating && (
              <RatingComponent
                quality={quality}
                qualitiesList={qualitiesList}
                index={index}
                setKarma={setKarma}
                setQualities={setQualities}
              />
            )}
            <button
              onClick={() => {
                let difference = 0;
                const removedQuality = qualitiesList[index];
                if (
                  removedQuality.costSelected ||
                  typeof removedQuality.cost === "number"
                ) {
                  difference =
                    removedQuality.costSelected ||
                    (removedQuality.cost as number);
                }
                difference *= removedQuality.ratingSelected || 1;
                setKarma(!removedQuality.positive, difference);
                if (qualitiesList.length - 1 === index) {
                  setQualities([...qualitiesList.slice(0, index)]);
                } else {
                  setQualities([
                    ...qualitiesList.slice(0, index),
                    ...qualitiesList.slice(index + 1),
                  ]);
                }
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <h3>Add Quality:</h3>
      {
        <QualityDropdownComponent
          currentValue={
            newQualityPlaceholder.text + newQualityPlaceholder.extra
          }
          positive={positive}
          qualitiesList={qualitiesList}
          setQualities={setQualities}
          setKarma={setKarma}
          index={-1}
        />
      }
    </div>
  );
};
